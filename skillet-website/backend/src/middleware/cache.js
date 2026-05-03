/**
 * Simple In-Memory Cache Middleware
 * Caches GET responses for a configurable TTL to avoid GitHub API rate limits.
 */

const cache = new Map();
const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

function cacheMiddleware(ttl = DEFAULT_TTL) {
  return (req, res, next) => {
    // Only cache GET requests
    if (req.method !== 'GET') {
      return next();
    }

    const key = req.originalUrl;
    const cached = cache.get(key);

    if (cached && Date.now() - cached.timestamp < ttl) {
      return res.json(cached.data);
    }

    // Override res.json to intercept the response and cache it
    const originalJson = res.json.bind(res);
    res.json = (data) => {
      cache.set(key, { data, timestamp: Date.now() });
      return originalJson(data);
    };

    next();
  };
}

/**
 * Clear the entire cache. Useful after mutations.
 */
function clearCache() {
  cache.clear();
}

module.exports = { cacheMiddleware, clearCache };
