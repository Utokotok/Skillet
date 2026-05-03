/**
 * Skills API Routes
 * Endpoints for the Skillet Dashboard to fetch skills and policies.
 */

const express = require('express');
const router = express.Router();
const github = require('../services/github');

// GET /api/skills — List all skills
router.get('/skills', async (req, res) => {
  try {
    const skills = await github.getAllSkills();
    res.json({ success: true, data: skills, count: skills.length });
  } catch (error) {
    console.error('Error fetching skills:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch skills' });
  }
});

// GET /api/skills/:category — List skills by category
router.get('/skills/:category', async (req, res) => {
  try {
    const skills = await github.getSkillsByCategory(req.params.category);
    res.json({ success: true, data: skills, count: skills.length });
  } catch (error) {
    console.error('Error fetching skills by category:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch skills' });
  }
});

// GET /api/skill/:path — Get single skill content (markdown)
// Usage: /api/skill/skills/backend-rest-api-endpoint-generator.md
router.get('/skill/*', async (req, res) => {
  try {
    const filePath = req.params[0];
    const content = await github.getSkillContent(filePath);

    if (!content) {
      return res.status(404).json({ success: false, error: 'Skill not found' });
    }

    res.json({ success: true, data: content });
  } catch (error) {
    console.error('Error fetching skill content:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch skill' });
  }
});

// GET /api/roles — Get role definitions from policies repo
router.get('/roles', async (req, res) => {
  try {
    const roles = await github.getRoles();
    res.json({ success: true, data: roles });
  } catch (error) {
    console.error('Error fetching roles:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch roles' });
  }
});

// GET /api/stats — Get skills statistics
router.get('/stats', async (req, res) => {
  try {
    const stats = await github.getStats();
    res.json({ success: true, data: stats });
  } catch (error) {
    console.error('Error fetching stats:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch stats' });
  }
});

module.exports = router;
