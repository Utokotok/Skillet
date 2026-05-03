import { useState, useEffect } from 'react';
import { Zap, AlertCircle, CheckCircle, Loader2, Save, X } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import styles from './SkillsFactoryPage.module.css';

const API_BASE = 'http://localhost:3001/api/factory';

export default function SkillsFactoryPage() {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [sessionContent, setSessionContent] = useState('');
  const [nluResults, setNluResults] = useState(null);
  const [skillDraft, setSkillDraft] = useState('');
  const [loading, setLoading] = useState(false);
  const [mining, setMining] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  // Load sessions on mount
  useEffect(() => {
    loadSessions();
    checkStatus();
  }, []);

  const loadSessions = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/sessions`);
      const json = await res.json();
      
      if (json.success) {
        setSessions(json.data);
      } else {
        setError(json.error);
      }
    } catch (err) {
      setError('Failed to load sessions: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const checkStatus = async () => {
    try {
      const res = await fetch(`${API_BASE}/status`);
      const json = await res.json();
      
      if (json.success) {
        setStatus(json.data);
      } else {
        setStatus({ ready: false, message: json.error });
      }
    } catch (err) {
      setStatus({ ready: false, message: 'Failed to check status' });
    }
  };

  const handleSessionSelect = async (session) => {
    setSelectedSession(session);
    setNluResults(null);
    setSkillDraft('');
    setError(null);

    // Load session content - we'll get it during mining
    // For now, just mark the session as selected
    setSessionContent(''); // Will be loaded during mining
  };

  const handleMine = async () => {
    if (!selectedSession) return;

    setMining(true);
    setError(null);

    try {
      // First, load the session content
      const contentRes = await fetch(`http://localhost:3001/api/skill/${selectedSession.path}`);
      const contentJson = await contentRes.json();
      
      if (!contentJson.success) {
        setError('Failed to load session content');
        setMining(false);
        return;
      }
      
      const content = contentJson.data;
      setSessionContent(content);

      // Now mine the session
      const res = await fetch(`${API_BASE}/mine`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionPath: selectedSession.path }),
      });

      const json = await res.json();

      if (!json.success) {
        setError(json.error || 'Mining failed');
        return;
      }

      if (json.data.skipped) {
        setError(`Session skipped: ${json.data.reason}`);
        return;
      }

      setNluResults(json.data.analysis);
      
      // Auto-generate skill after mining
      await handleGenerate(json.data.analysis, content);
    } catch (err) {
      setError('Mining failed: ' + err.message);
    } finally {
      setMining(false);
    }
  };

  const handleGenerate = async (results = nluResults, content = sessionContent) => {
    if (!results || !content) return;

    setGenerating(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nluResults: results,
          sessionContent: content,
        }),
      });

      const json = await res.json();

      if (json.success) {
        setSkillDraft(json.data.markdown);
      } else {
        setError(json.error || 'Generation failed');
      }
    } catch (err) {
      setError('Generation failed: ' + err.message);
    } finally {
      setGenerating(false);
    }
  };

  const handleSave = async () => {
    if (!skillDraft || !nluResults) return;

    setSaving(true);
    setError(null);

    // Generate filename from category and first keyword
    const keyword = nluResults.keywords?.[0]?.text || 'skill';
    const filename = `${nluResults.category}-${keyword.toLowerCase().replace(/\s+/g, '-')}.md`;

    try {
      const res = await fetch(`${API_BASE}/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename,
          content: skillDraft,
          approved: true,
        }),
      });

      const json = await res.json();

      if (json.success) {
        alert(`✅ Draft skill saved: ${json.data.filename}\n📁 Location: ${json.data.path}`);
        
        // Reset state
        setSelectedSession(null);
        setSessionContent('');
        setNluResults(null);
        setSkillDraft('');
      } else {
        setError(json.error || 'Save failed');
      }
    } catch (err) {
      setError('Save failed: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDiscard = () => {
    if (confirm('Are you sure you want to discard this skill draft?')) {
      setNluResults(null);
      setSkillDraft('');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerTitle}>
            <Zap size={28} />
            <h1>Skills Factory</h1>
          </div>
          <p className={styles.headerSubtitle}>
            Mine Bob sessions and generate reusable skills automatically
          </p>
        </div>

        {status && (
          <div className={`${styles.statusBadge} ${status.ready ? styles.statusReady : styles.statusError}`}>
            {status.ready ? (
              <>
                <CheckCircle size={16} />
                {status.message}
              </>
            ) : (
              <>
                <AlertCircle size={16} />
                {status.message}
              </>
            )}
          </div>
        )}
      </header>

      {error && (
        <div className={styles.errorBanner}>
          <AlertCircle size={20} />
          <span>{error}</span>
          <button onClick={() => setError(null)} className={styles.errorClose}>
            <X size={16} />
          </button>
        </div>
      )}

      <div className={styles.panels}>
        {/* Left Panel: Session Browser */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2>Bob Sessions</h2>
            <span className={styles.badge}>{sessions.length}</span>
          </div>

          <div className={styles.panelContent}>
            {loading ? (
              <div className={styles.loading}>
                <Loader2 className={styles.spinner} size={24} />
                <p>Loading sessions...</p>
              </div>
            ) : sessions.length === 0 ? (
              <div className={styles.empty}>
                <p>No session files found in bob_sessions/</p>
              </div>
            ) : (
              <div className={styles.sessionList}>
                {sessions.map((session) => (
                  <button
                    key={session.filename}
                    className={`${styles.sessionItem} ${
                      selectedSession?.filename === session.filename ? styles.sessionItemActive : ''
                    }`}
                    onClick={() => handleSessionSelect(session)}
                  >
                    <div className={styles.sessionName}>{session.filename}</div>
                    <div className={styles.sessionMeta}>
                      {new Date(session.modified).toLocaleDateString()}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center Panel: NLU Analysis */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2>Analysis</h2>
            {selectedSession && (
              <button
                onClick={handleMine}
                disabled={mining || !status?.ready}
                className={styles.mineButton}
              >
                {mining ? (
                  <>
                    <Loader2 className={styles.spinner} size={16} />
                    Mining...
                  </>
                ) : (
                  <>
                    <Zap size={16} />
                    Mine Session
                  </>
                )}
              </button>
            )}
          </div>

          <div className={styles.panelContent}>
            {!selectedSession ? (
              <div className={styles.empty}>
                <p>Select a session to analyze</p>
              </div>
            ) : !nluResults ? (
              <div className={styles.empty}>
                <p>Click "Mine Session" to analyze with local text processing</p>
              </div>
            ) : (
              <div className={styles.analysis}>
                <div className={styles.analysisSection}>
                  <h3>Category</h3>
                  <span className={styles.categoryBadge}>{nluResults.category}</span>
                </div>

                <div className={styles.analysisSection}>
                  <h3>Keywords</h3>
                  <div className={styles.keywordList}>
                    {nluResults.keywords?.map((kw, i) => (
                      <span key={i} className={styles.keyword}>
                        {kw.text}
                        <span className={styles.keywordScore}>
                          {(kw.relevance * 100).toFixed(0)}%
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.analysisSection}>
                  <h3>Concepts</h3>
                  <div className={styles.conceptList}>
                    {nluResults.concepts?.map((concept, i) => (
                      <div key={i} className={styles.concept}>
                        {concept.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.analysisSection}>
                  <h3>Sentiment</h3>
                  <div className={styles.sentiment}>
                    <span className={styles.sentimentLabel}>{nluResults.sentiment?.label}</span>
                    <span className={styles.sentimentScore}>
                      Score: {nluResults.sentiment?.score?.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Skill Draft */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2>Skill Draft</h2>
            {skillDraft && (
              <div className={styles.draftActions}>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className={styles.saveButton}
                >
                  {saving ? (
                    <>
                      <Loader2 className={styles.spinner} size={16} />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      Approve & Save
                    </>
                  )}
                </button>
                <button onClick={handleDiscard} className={styles.discardButton}>
                  <X size={16} />
                  Discard
                </button>
              </div>
            )}
          </div>

          <div className={styles.panelContent}>
            {generating ? (
              <div className={styles.loading}>
                <Loader2 className={styles.spinner} size={24} />
                <p>Generating skill...</p>
              </div>
            ) : !skillDraft ? (
              <div className={styles.empty}>
                <p>Skill draft will appear here after analysis</p>
              </div>
            ) : (
              <div className={styles.draftContainer}>
                <div className={styles.draftEditor}>
                  <textarea
                    value={skillDraft}
                    onChange={(e) => setSkillDraft(e.target.value)}
                    className={styles.textarea}
                    placeholder="Edit skill markdown..."
                  />
                </div>
                <div className={styles.draftPreview}>
                  <h3>Preview</h3>
                  <MarkdownRenderer content={skillDraft} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
