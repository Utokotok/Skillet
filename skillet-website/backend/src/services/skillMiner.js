/**
 * Skill Miner Service - Local Implementation
 * Analyzes Bob session files using local text processing (no external APIs).
 */

/**
 * Extract keywords from text using frequency analysis
 * @param {string} text - Text to analyze
 * @returns {Array<Object>} Keywords with relevance scores
 */
function extractKeywords(text) {
  // Common words to ignore
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should',
    'could', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those',
    'i', 'you', 'he', 'she', 'it', 'we', 'they', 'what', 'which', 'who',
    'when', 'where', 'why', 'how', 'all', 'each', 'every', 'both', 'few',
    'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only',
    'own', 'same', 'so', 'than', 'too', 'very', 'just', 'now', 'then'
  ]);

  // Extract words (alphanumeric, including hyphens and underscores)
  const words = text.toLowerCase().match(/[a-z0-9_-]+/g) || [];
  
  // Count word frequencies
  const wordFreq = {};
  words.forEach(word => {
    if (word.length > 2 && !stopWords.has(word)) {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    }
  });

  // Convert to array and sort by frequency
  const keywords = Object.entries(wordFreq)
    .map(([text, count]) => ({
      text,
      relevance: Math.min(count / 10, 1), // Normalize to 0-1
      sentiment: 0.5 // Neutral sentiment
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 10);

  return keywords;
}

/**
 * Extract concepts from text by identifying multi-word phrases
 * @param {string} text - Text to analyze
 * @returns {Array<Object>} Concepts with relevance scores
 */
function extractConcepts(text) {
  const concepts = [];
  
  // Look for common technical patterns
  const patterns = [
    /\b(api|rest|graphql|endpoint)\s+\w+/gi,
    /\b(react|vue|angular)\s+\w+/gi,
    /\b(database|sql|nosql)\s+\w+/gi,
    /\b(docker|kubernetes|container)\s+\w+/gi,
    /\b(test|testing|unit|integration)\s+\w+/gi,
    /\b(frontend|backend|fullstack)\s+\w+/gi,
    /\b(component|service|module)\s+\w+/gi,
  ];

  patterns.forEach(pattern => {
    const matches = text.match(pattern) || [];
    matches.forEach(match => {
      concepts.push({
        text: match.trim(),
        relevance: 0.8
      });
    });
  });

  // Remove duplicates and limit to top 5
  const uniqueConcepts = Array.from(
    new Map(concepts.map(c => [c.text.toLowerCase(), c])).values()
  ).slice(0, 5);

  return uniqueConcepts;
}

/**
 * Determine category from text content
 * @param {string} text - Text to analyze
 * @returns {string} Category (backend, frontend, devops, qa, shared)
 */
function determineCategory(text) {
  const lowerText = text.toLowerCase();
  
  // Count indicators for each category
  const indicators = {
    backend: ['api', 'server', 'database', 'endpoint', 'express', 'node', 'sql', 'rest', 'graphql', 'backend'],
    frontend: ['react', 'component', 'jsx', 'tsx', 'css', 'html', 'ui', 'interface', 'frontend', 'browser', 'dom'],
    devops: ['docker', 'kubernetes', 'deploy', 'ci/cd', 'pipeline', 'container', 'infrastructure', 'devops'],
    qa: ['test', 'testing', 'jest', 'mocha', 'cypress', 'selenium', 'quality', 'qa', 'automation']
  };

  const scores = {};
  Object.entries(indicators).forEach(([category, words]) => {
    scores[category] = words.reduce((count, word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      const matches = lowerText.match(regex);
      return count + (matches ? matches.length : 0);
    }, 0);
  });

  // Find category with highest score
  const maxScore = Math.max(...Object.values(scores));
  if (maxScore === 0) return 'shared';

  const category = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0];
  return category || 'shared';
}

/**
 * Calculate sentiment from text
 * @param {string} text - Text to analyze
 * @returns {Object} Sentiment score and label
 */
function analyzeSentiment(text) {
  const lowerText = text.toLowerCase();
  
  // Expanded word lists for better technical content analysis
  const positiveWords = [
    'success', 'successful', 'complete', 'completed', 'working', 'works', 'fixed',
    'improved', 'better', 'good', 'great', 'excellent', 'perfect', 'ready',
    'production-ready', 'optimized', 'efficient', 'secure', 'validated',
    'tested', 'verified', 'confirmed', 'achieved', 'implemented', 'created',
    'built', 'deployed', 'automated', 'streamlined', 'enhanced'
  ];
  
  const negativeWords = [
    'error', 'errors', 'failed', 'failure', 'broken', 'issue', 'issues',
    'problem', 'problems', 'bug', 'bugs', 'wrong', 'bad', 'crash', 'crashed',
    'deprecated', 'vulnerable', 'insecure', 'slow', 'inefficient', 'blocked',
    'stuck', 'timeout', 'rejected', 'denied', 'invalid'
  ];

  let positiveCount = 0;
  let negativeCount = 0;

  positiveWords.forEach(word => {
    const matches = lowerText.match(new RegExp(`\\b${word}\\b`, 'gi'));
    positiveCount += matches ? matches.length : 0;
  });

  negativeWords.forEach(word => {
    const matches = lowerText.match(new RegExp(`\\b${word}\\b`, 'gi'));
    negativeCount += matches ? matches.length : 0;
  });

  const total = positiveCount + negativeCount;
  let score = 0;
  let label = 'neutral';

  if (total > 0) {
    score = (positiveCount - negativeCount) / total;
    if (score > 0.2) label = 'positive';
    else if (score < -0.2) label = 'negative';
  } else {
    // If no sentiment words found, assume neutral-positive for technical docs
    score = 0.1;
    label = 'neutral';
  }

  return { score, label };
}

/**
 * Analyze session content using local text processing
 * @param {string} sessionContent - The markdown content of the Bob session
 * @returns {Promise<Object>} Analysis results with keywords, categories, concepts, and sentiment
 */
async function analyzeSession(sessionContent) {
  try {
    const keywords = extractKeywords(sessionContent);
    const concepts = extractConcepts(sessionContent);
    const category = determineCategory(sessionContent);
    const sentiment = analyzeSentiment(sessionContent);

    return {
      keywords,
      concepts,
      categories: [{ label: `/technology/${category}`, score: 0.9 }],
      sentiment: {
        document: sentiment
      }
    };
  } catch (error) {
    console.error('Local analysis error:', error.message);
    throw error;
  }
}

/**
 * Determine if a session should be skipped based on sentiment and content quality
 * @param {Object} analysis - Analysis results
 * @returns {boolean} True if session should be skipped
 */
function shouldSkipSession(analysis) {
  // Skip if overall sentiment is very negative
  if (analysis.sentiment?.document?.score < -0.5) {
    return true;
  }

  // Skip if no meaningful keywords found
  if (!analysis.keywords || analysis.keywords.length < 2) {
    return true;
  }

  // Skip if no categories identified
  if (!analysis.categories || analysis.categories.length === 0) {
    return true;
  }

  return false;
}

/**
 * Map categories to Skillet skill categories
 * @param {Array} aiCategories - Categories from analysis
 * @param {Array} keywords - Keywords from analysis
 * @returns {string} Mapped skill category (backend, frontend, devops, qa, shared)
 */
function mapToSkillCategory(aiCategories, keywords) {
  const categoryText = aiCategories.map(c => c.label.toLowerCase()).join(' ');
  const keywordText = keywords.map(k => k.text.toLowerCase()).join(' ');
  const combinedText = `${categoryText} ${keywordText}`;

  // Backend indicators
  if (
    combinedText.includes('api') ||
    combinedText.includes('server') ||
    combinedText.includes('database') ||
    combinedText.includes('backend') ||
    combinedText.includes('node') ||
    combinedText.includes('express') ||
    combinedText.includes('endpoint')
  ) {
    return 'backend';
  }

  // Frontend indicators
  if (
    combinedText.includes('ui') ||
    combinedText.includes('interface') ||
    combinedText.includes('frontend') ||
    combinedText.includes('react') ||
    combinedText.includes('component') ||
    combinedText.includes('css') ||
    combinedText.includes('html') ||
    combinedText.includes('browser')
  ) {
    return 'frontend';
  }

  // DevOps indicators
  if (
    combinedText.includes('deploy') ||
    combinedText.includes('docker') ||
    combinedText.includes('ci/cd') ||
    combinedText.includes('infrastructure') ||
    combinedText.includes('devops') ||
    combinedText.includes('kubernetes') ||
    combinedText.includes('pipeline')
  ) {
    return 'devops';
  }

  // QA indicators
  if (
    combinedText.includes('test') ||
    combinedText.includes('quality') ||
    combinedText.includes('qa') ||
    combinedText.includes('automation') ||
    combinedText.includes('testing')
  ) {
    return 'qa';
  }

  // Default to shared if no specific category matches
  return 'shared';
}

/**
 * Mine a Bob session file and extract skill information
 * @param {string} sessionContent - The markdown content of the Bob session
 * @returns {Promise<Object>} Mined skill data or null if session should be skipped
 */
async function mineSession(sessionContent) {
  try {
    const analysis = await analyzeSession(sessionContent);

    // Check if session should be skipped
    if (shouldSkipSession(analysis)) {
      return {
        skipped: true,
        reason: 'Low signal or negative sentiment',
        sentiment: analysis.sentiment?.document?.score,
      };
    }

    // Extract and map data
    const category = mapToSkillCategory(
      analysis.categories || [],
      analysis.keywords || []
    );

    return {
      skipped: false,
      category,
      keywords: analysis.keywords || [],
      categories: analysis.categories || [],
      concepts: analysis.concepts || [],
      sentiment: {
        score: analysis.sentiment?.document?.score,
        label: analysis.sentiment?.document?.label,
      },
    };
  } catch (error) {
    console.error('Error mining session:', error.message);
    throw error;
  }
}

/**
 * Check if miner is properly configured (always true for local implementation)
 * @returns {boolean} True (local implementation always available)
 */
function isConfigured() {
  return true;
}

module.exports = {
  mineSession,
  isConfigured,
  analyzeSession,
  shouldSkipSession,
  mapToSkillCategory,
};

// Made with Bob - Local Implementation (No External APIs)
