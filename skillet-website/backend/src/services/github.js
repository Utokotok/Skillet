/**
 * Local File System Service
 * Fetches skills and policies from local directories (no GitHub API).
 */

const fs = require('fs').promises;
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../../../../skillet-skills/skills');
const POLICIES_DIR = path.join(__dirname, '../../../../skillet-policies');
const SKILL_INDEX_PATH = path.join(__dirname, '../../../../skillet-skills/metadata/skill-index.json');

/**
 * Get all skill files from the local skills/ directory.
 * Returns an array of skill objects with name, path, category, etc.
 */
async function getAllSkills() {
  try {
    const files = await fs.readdir(SKILLS_DIR);
    
    // Filter for markdown files only
    const skillFiles = files.filter(file => file.endsWith('.md'));
    
    return skillFiles.map((filename) => {
      // Extract category from filename: "backend-rest-api.md" → "backend"
      const nameWithoutExt = filename.replace('.md', '');
      const category = nameWithoutExt.split('-')[0];
      const skillName = nameWithoutExt.substring(category.length + 1);

      return {
        name: nameWithoutExt,
        displayName: skillName
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        filename,
        path: `skills/${filename}`,
        category,
        downloadUrl: null, // Not applicable for local files
      };
    });
  } catch (error) {
    // If the skills directory is empty or doesn't exist, return empty
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

/**
 * Get skills filtered by category.
 */
async function getSkillsByCategory(category) {
  const allSkills = await getAllSkills();
  return allSkills.filter((skill) => skill.category === category);
}

/**
 * Get the raw markdown content of a single skill by its path.
 */
async function getSkillContent(filePath) {
  try {
    // Construct full path - filePath is like "skills/backend-api.md" or "bob_sessions/session.md"
    const fullPath = path.join(__dirname, '../../../../skillet-skills', filePath);
    const content = await fs.readFile(fullPath, 'utf-8');
    return content;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }
}

/**
 * Get role definitions from local policies directory.
 */
async function getRoles() {
  try {
    const rolesPath = path.join(POLICIES_DIR, 'metadata/roles.json');
    const data = await fs.readFile(rolesPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return { roles: [], categories: [] };
    }
    throw error;
  }
}

/**
 * Get basic statistics about the skills library.
 */
async function getStats() {
  const skills = await getAllSkills();

  const categories = {};
  skills.forEach((skill) => {
    categories[skill.category] = (categories[skill.category] || 0) + 1;
  });

  return {
    totalSkills: skills.length,
    categories,
    categoryCount: Object.keys(categories).length,
  };
}

module.exports = {
  getAllSkills,
  getSkillsByCategory,
  getSkillContent,
  getRoles,
  getStats,
};

// Made with Bob - Local File System Implementation
