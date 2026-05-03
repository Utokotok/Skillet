import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Folder, Tag } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { fetchSkillContent } from '../services/api';
import styles from './SkillDetailPage.module.css';

export default function SkillDetailPage() {
  const { name } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract category from the skill name: "backend-rest-api" → "backend"
  const category = name.split('-')[0];
  const displayName = name
    .substring(category.length + 1)
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  useEffect(() => {
    fetchSkillContent(`skills/${name}.md`)
      .then(setContent)
      .catch((err) => {
        console.error('Failed to load skill:', err);
        setError('Skill not found');
      })
      .finally(() => setLoading(false));
  }, [name]);

  return (
    <div className={`container page-enter ${styles.page}`}>
      <Link to="/skills" className={styles.backLink}>
        <ArrowLeft size={14} /> Back to Skills
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>{displayName}</h1>
        <div className={styles.meta}>
          <span className={`badge badge-${category}`}>
            {category}
          </span>
          <span className={styles.metaItem}>
            <Folder size={13} /> skills/{name}.md
          </span>
        </div>
      </div>

      {loading && <div className={styles.loading}>Loading skill...</div>}
      {error && <div className={styles.error}>{error}</div>}

      {!loading && !error && (
        <div className={styles.content}>
          <MarkdownRenderer content={content} />
        </div>
      )}
    </div>
  );
}
