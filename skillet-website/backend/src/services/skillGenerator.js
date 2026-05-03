/**
 * Skill Generator Service
 * Generates complete skill markdown files from NLU analysis results.
 */

const fs = require('fs').promises;
const path = require('path');

/**
 * Load roles data from metadata/roles.json
 * @returns {Promise<Object>} Roles configuration
 */
async function loadRoles() {
  try {
    const rolesPath = path.join(
      __dirname,
      '../../../../skillet-policies/metadata/roles.json'
    );
    const rolesData = await fs.readFile(rolesPath, 'utf-8');
    return JSON.parse(rolesData);
  } catch (error) {
    console.error('Error loading roles:', error.message);
    // Return default roles if file not found
    return {
      roles: [
        { id: 'backend', categories: ['backend', 'shared'] },
        { id: 'frontend', categories: ['frontend', 'shared'] },
        { id: 'fullstack', categories: ['backend', 'frontend', 'shared'] },
        { id: 'devops', categories: ['devops', 'shared'] },
        { id: 'qa', categories: ['qa', 'shared'] },
      ],
    };
  }
}

/**
 * Determine appropriate roles based on skill category
 * @param {string} category - Skill category
 * @param {Object} rolesConfig - Roles configuration
 * @returns {Array<string>} List of role IDs
 */
function determineRoles(category, rolesConfig) {
  const roles = [];

  rolesConfig.roles.forEach((role) => {
    if (role.categories && role.categories.includes(category)) {
      roles.push(role.id);
    }
  });

  // Ensure at least one role is assigned
  if (roles.length === 0) {
    roles.push('fullstack');
  }

  return roles;
}

/**
 * Extract code blocks from session content
 * @param {string} sessionContent - The markdown content of the Bob session
 * @returns {Array<Object>} Array of code blocks with language and content
 */
function extractCodeBlocks(sessionContent) {
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  const blocks = [];
  let match;

  while ((match = codeBlockRegex.exec(sessionContent)) !== null) {
    blocks.push({
      language: match[1] || 'text',
      content: match[2].trim(),
    });
  }

  return blocks;
}

/**
 * Generate steps from NLU analysis and code blocks
 * @param {Object} nluResults - Results from Watson NLU
 * @param {Array<Object>} codeBlocks - Extracted code blocks
 * @returns {Array<string>} List of steps
 */
function generateSteps(nluResults, codeBlocks) {
  const steps = [];

  // Add analysis-based steps
  if (nluResults.keywords && nluResults.keywords.length > 0) {
    const topKeywords = nluResults.keywords.slice(0, 3);
    steps.push(
      `Analyze the project structure and identify ${topKeywords.map(k => k.text).join(', ')} requirements`
    );
  }

  // Add code-based steps
  if (codeBlocks.length > 0) {
    const languages = [...new Set(codeBlocks.map(b => b.language))];
    
    if (languages.includes('javascript') || languages.includes('js')) {
      steps.push('Create or modify JavaScript/Node.js files with the required functionality');
    }
    
    if (languages.includes('jsx') || languages.includes('tsx')) {
      steps.push('Implement React components following the project structure');
    }
    
    if (languages.includes('css') || languages.includes('scss')) {
      steps.push('Apply styling using CSS modules or the project\'s styling approach');
    }
    
    if (languages.includes('json')) {
      steps.push('Update configuration files as needed');
    }
  }

  // Add validation and testing steps
  steps.push('Validate the implementation against project standards');
  steps.push('Test the functionality to ensure it works as expected');

  // Ensure minimum 3 steps
  if (steps.length < 3) {
    steps.push('Review the changes and ensure they meet requirements');
  }

  return steps;
}

/**
 * Generate a skill title from keywords and category
 * @param {Object} nluResults - Results from Watson NLU
 * @param {string} category - Skill category
 * @returns {string} Skill title
 */
function generateTitle(nluResults, category) {
  const topKeywords = nluResults.keywords
    ?.slice(0, 3)
    .map(k => k.text)
    .join(' ');

  if (topKeywords) {
    return `${category.charAt(0).toUpperCase() + category.slice(1)} - ${topKeywords}`;
  }

  return `${category.charAt(0).toUpperCase() + category.slice(1)} Skill`;
}

/**
 * Generate a skill description from concepts and keywords
 * @param {Object} nluResults - Results from Watson NLU
 * @returns {string} Skill description
 */
function generateDescription(nluResults) {
  const concepts = nluResults.concepts?.slice(0, 2).map(c => c.text) || [];
  const keywords = nluResults.keywords?.slice(0, 3).map(k => k.text) || [];

  if (concepts.length > 0 && keywords.length > 0) {
    return `This skill helps with ${concepts.join(' and ')} by implementing ${keywords.join(', ')}. Use this when you need to accomplish similar tasks in your project.`;
  }

  if (keywords.length > 0) {
    return `This skill implements ${keywords.join(', ')} functionality. Use this when you need to add these capabilities to your project.`;
  }

  return 'This skill automates a common development task. Use this when you need to accomplish similar objectives in your project.';
}

/**
 * Generate prerequisites from code blocks and keywords
 * @param {Array<Object>} codeBlocks - Extracted code blocks
 * @param {Object} nluResults - Results from Watson NLU
 * @returns {Array<string>} List of prerequisites
 */
function generatePrerequisites(codeBlocks, nluResults) {
  const prereqs = [];
  const languages = [...new Set(codeBlocks.map(b => b.language))];

  if (languages.includes('javascript') || languages.includes('js')) {
    prereqs.push('Node.js project with npm or yarn');
  }

  if (languages.includes('jsx') || languages.includes('tsx')) {
    prereqs.push('React application setup');
  }

  const keywordText = nluResults.keywords?.map(k => k.text.toLowerCase()).join(' ') || '';

  if (keywordText.includes('express')) {
    prereqs.push('Express.js installed as dependency');
  }

  if (keywordText.includes('database') || keywordText.includes('sql')) {
    prereqs.push('Database connection configured');
  }

  // Default prerequisite
  if (prereqs.length === 0) {
    prereqs.push('Existing project structure');
  }

  return prereqs;
}

/**
 * Generate inputs section from keywords
 * @param {Object} nluResults - Results from Watson NLU
 * @returns {Array<string>} List of inputs
 */
function generateInputs(nluResults) {
  const inputs = [];
  const keywords = nluResults.keywords?.slice(0, 5) || [];

  keywords.forEach((keyword, index) => {
    if (index < 3) {
      inputs.push(
        `${keyword.text} (string, required): Specify the ${keyword.text.toLowerCase()} details`
      );
    }
  });

  // Ensure at least one input
  if (inputs.length === 0) {
    inputs.push('Task description (string, required): Describe what you want to accomplish');
  }

  return inputs;
}

/**
 * Generate outputs section from code blocks
 * @param {Array<Object>} codeBlocks - Extracted code blocks
 * @returns {Array<string>} List of outputs
 */
function generateOutputs(codeBlocks) {
  const outputs = [];
  const languages = [...new Set(codeBlocks.map(b => b.language))];

  languages.forEach((lang) => {
    switch (lang) {
      case 'javascript':
      case 'js':
        outputs.push('src/**/*.js: JavaScript files with implemented functionality');
        break;
      case 'jsx':
      case 'tsx':
        outputs.push('src/components/**/*.jsx: React component files');
        break;
      case 'css':
      case 'scss':
        outputs.push('src/**/*.css: Styling files');
        break;
      case 'json':
        outputs.push('Configuration files: Updated JSON configuration');
        break;
    }
  });

  // Default output
  if (outputs.length === 0) {
    outputs.push('Modified files: Updated project files with new functionality');
  }

  return outputs;
}

/**
 * Generate a complete skill markdown from NLU results and session content
 * @param {Object} nluResults - Results from Watson NLU mining
 * @param {string} sessionContent - Original session content
 * @returns {Promise<string>} Complete skill markdown
 */
async function generateSkill(nluResults, sessionContent) {
  const rolesConfig = await loadRoles();
  const codeBlocks = extractCodeBlocks(sessionContent);
  
  const title = generateTitle(nluResults, nluResults.category);
  const description = generateDescription(nluResults);
  const category = nluResults.category;
  const roles = determineRoles(category, rolesConfig);
  const prerequisites = generatePrerequisites(codeBlocks, nluResults);
  const steps = generateSteps(nluResults, codeBlocks);
  const inputs = generateInputs(nluResults);
  const outputs = generateOutputs(codeBlocks);

  // Build the markdown
  let markdown = `# ${title}\n\n`;
  markdown += `## Description\n${description}\n\n`;
  markdown += `## Category\n${category}\n\n`;
  markdown += `## Roles\n${roles.join(', ')}\n\n`;
  
  markdown += `## Prerequisites\n`;
  prerequisites.forEach(prereq => {
    markdown += `- ${prereq}\n`;
  });
  markdown += `\n`;

  markdown += `## Steps\n`;
  steps.forEach((step, index) => {
    markdown += `${index + 1}. ${step}\n`;
  });
  markdown += `\n`;

  markdown += `## Inputs\n`;
  inputs.forEach(input => {
    markdown += `- ${input}\n`;
  });
  markdown += `\n`;

  markdown += `## Outputs\n`;
  outputs.forEach(output => {
    markdown += `- ${output}\n`;
  });
  markdown += `\n`;

  markdown += `## Example Usage\n`;
  markdown += `User: "I need to ${nluResults.keywords?.[0]?.text || 'implement this functionality'}"\n\n`;
  markdown += `Expected Output:\n`;
  outputs.forEach(output => {
    markdown += `- ${output}\n`;
  });
  markdown += `\n`;

  markdown += `## Notes\n`;
  markdown += `This skill was automatically generated from a Bob session. Review and adjust as needed.\n`;

  return markdown;
}

module.exports = {
  generateSkill,
  generateTitle,
  generateDescription,
  generateSteps,
  extractCodeBlocks,
};

// Made with Bob
