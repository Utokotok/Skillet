/**
 * Bob Shell Runner Service
 * Executes Bob CLI commands with timeout and fallback mechanisms.
 */

const { spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

const BOB_TIMEOUT = 30000; // 30 seconds

/**
 * Check if Bob CLI is available in PATH
 * @returns {Promise<boolean>} True if bob is available
 */
async function isBobAvailable() {
  return new Promise((resolve) => {
    const process = spawn('bob', ['--version'], {
      shell: true,
      stdio: 'ignore',
    });

    process.on('error', () => resolve(false));
    process.on('close', (code) => resolve(code === 0));

    // Timeout after 5 seconds
    setTimeout(() => {
      process.kill();
      resolve(false);
    }, 5000);
  });
}

/**
 * Execute Bob CLI with a task file
 * @param {string} taskFilePath - Path to the task markdown file
 * @returns {Promise<Object>} Result with success status and output
 */
async function executeBob(taskFilePath) {
  return new Promise((resolve, reject) => {
    const bobProcess = spawn(
      'bob',
      ['--non-interactive', '--task-file', taskFilePath],
      {
        shell: true,
        cwd: path.dirname(taskFilePath),
      }
    );

    let stdout = '';
    let stderr = '';

    bobProcess.stdout?.on('data', (data) => {
      stdout += data.toString();
    });

    bobProcess.stderr?.on('data', (data) => {
      stderr += data.toString();
    });

    // Set timeout
    const timeout = setTimeout(() => {
      bobProcess.kill('SIGTERM');
      reject(new Error('Bob execution timed out after 30 seconds'));
    }, BOB_TIMEOUT);

    bobProcess.on('error', (error) => {
      clearTimeout(timeout);
      reject(new Error(`Failed to execute Bob: ${error.message}`));
    });

    bobProcess.on('close', (code) => {
      clearTimeout(timeout);

      if (code === 0) {
        resolve({
          success: true,
          output: stdout,
          error: stderr,
        });
      } else {
        reject(
          new Error(`Bob exited with code ${code}. Error: ${stderr || stdout}`)
        );
      }
    });
  });
}

/**
 * Read markdown file directly as fallback
 * @param {string} filePath - Path to the markdown file
 * @returns {Promise<string>} File content
 */
async function readMarkdownFallback(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    throw new Error(`Failed to read file: ${error.message}`);
  }
}

/**
 * Run Bob with a task file, falling back to direct read if Bob is not available
 * @param {string} taskFilePath - Path to the task markdown file
 * @returns {Promise<Object>} Result with content and execution method
 */
async function runBobTask(taskFilePath) {
  // Check if file exists
  try {
    await fs.access(taskFilePath);
  } catch (error) {
    throw new Error(`Task file not found: ${taskFilePath}`);
  }

  // Check if Bob is available
  const bobAvailable = await isBobAvailable();

  if (!bobAvailable) {
    console.log('Bob CLI not found in PATH, falling back to direct file read');
    const content = await readMarkdownFallback(taskFilePath);
    return {
      success: true,
      method: 'fallback',
      content,
      message: 'Bob CLI not available, read file directly',
    };
  }

  // Try to execute Bob
  try {
    const result = await executeBob(taskFilePath);
    return {
      success: true,
      method: 'bob-cli',
      content: result.output,
      message: 'Executed via Bob CLI',
    };
  } catch (error) {
    console.error('Bob execution failed, falling back to direct read:', error.message);
    
    // Fallback to direct read
    const content = await readMarkdownFallback(taskFilePath);
    return {
      success: true,
      method: 'fallback',
      content,
      message: `Bob execution failed: ${error.message}. Read file directly.`,
    };
  }
}

/**
 * Validate a task file path for security
 * @param {string} filePath - Path to validate
 * @returns {boolean} True if path is safe
 */
function isValidTaskPath(filePath) {
  // Prevent path traversal
  const normalized = path.normalize(filePath);
  
  // Check for path traversal attempts
  if (normalized.includes('..')) {
    return false;
  }

  // Ensure it's a markdown file
  if (!normalized.endsWith('.md')) {
    return false;
  }

  return true;
}

/**
 * Get the absolute path for a task file in the skills directory
 * @param {string} relativePath - Relative path from skills directory
 * @returns {string} Absolute path
 */
function getTaskFilePath(relativePath) {
  const skillsDir = path.join(__dirname, '../../../../skillet-skills');
  return path.join(skillsDir, relativePath);
}

module.exports = {
  runBobTask,
  isBobAvailable,
  executeBob,
  readMarkdownFallback,
  isValidTaskPath,
  getTaskFilePath,
};

// Made with Bob
