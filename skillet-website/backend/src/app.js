/**
 * Skillet Backend API
 * Express server that proxies GitHub API requests for the dashboard.
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const skillsRoutes = require('./routes/skills');
const skillsFactoryRoutes = require('./routes/skillsFactory');
const { cacheMiddleware } = require('./middleware/cache');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', cacheMiddleware());

// Routes
app.use('/api', skillsRoutes);
app.use('/api/factory', skillsFactoryRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'skillet-backend',
    timestamp: new Date().toISOString(),
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🍳 Skillet Backend API running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/health`);
  console.log(`   Skills: http://localhost:${PORT}/api/skills`);
  console.log(`   Stats:  http://localhost:${PORT}/api/stats`);
  console.log(`   Roles:  http://localhost:${PORT}/api/roles\n`);
});
