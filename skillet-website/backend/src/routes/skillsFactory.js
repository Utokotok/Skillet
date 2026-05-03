/**
 * Skills Factory API Routes
 * Endpoints for mining Bob sessions and generating skills automatically.
 */

const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const skillMiner = require("../services/skillMiner");
const skillGenerator = require("../services/skillGenerator");
const bobShellRunner = require("../services/bobShellRunner");

// Base paths
const BOB_SESSIONS_DIR = path.join(
  __dirname,
  "../../../../skillet-skills/bob_sessions",
);
const DRAFT_SKILLS_DIR = path.join(
  __dirname,
  "../../../../skillet-skills/draft-skills",
);

/**
 * GET /api/factory/sessions
 * List all Bob session files from bob_sessions/ directory
 */
router.get("/sessions", async (req, res) => {
  try {
    const files = await fs.readdir(BOB_SESSIONS_DIR);

    // Filter for markdown files only
    const sessionFiles = files.filter((file) => file.endsWith(".md"));

    // Get file stats for each session
    const sessions = await Promise.all(
      sessionFiles.map(async (filename) => {
        const filePath = path.join(BOB_SESSIONS_DIR, filename);
        const stats = await fs.stat(filePath);

        return {
          filename,
          path: `bob_sessions/${filename}`,
          size: stats.size,
          modified: stats.mtime,
          created: stats.birthtime,
        };
      }),
    );

    // Sort by modified date (newest first)
    sessions.sort((a, b) => b.modified - a.modified);

    res.json({
      success: true,
      data: sessions,
      count: sessions.length,
    });
  } catch (error) {
    console.error("Error listing sessions:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to list session files",
    });
  }
});

/**
 * GET /api/factory/status
 * Check if Skills Factory is ready (local implementation, always ready)
 */
router.get("/status", async (req, res) => {
  try {
    const bobAvailable = await bobShellRunner.isBobAvailable();

    res.json({
      success: true,
      data: {
        ready: true,
        bobAvailable,
        message: bobAvailable
          ? "Skills Factory is ready with local text analysis"
          : "Skills Factory is ready with local text analysis (Bob CLI not available, will use fallback)",
      },
    });
  } catch (error) {
    console.error("Error checking status:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to check status",
    });
  }
});

/**
 * POST /api/factory/mine
 * Mine a session file using local text analysis
 * Body: { sessionPath: "bob_sessions/session-name.md" }
 */
router.post("/mine", async (req, res) => {
  try {
    const { sessionPath } = req.body;

    if (!sessionPath) {
      return res.status(400).json({
        success: false,
        error: "sessionPath is required",
      });
    }

    // Validate path
    if (!bobShellRunner.isValidTaskPath(sessionPath)) {
      return res.status(400).json({
        success: false,
        error: "Invalid session path",
      });
    }

    // Read session content
    const fullPath = path.join(
      __dirname,
      "../../../../skillet-skills",
      sessionPath,
    );
    const sessionContent = await fs.readFile(fullPath, "utf-8");

    // Mine the session using local analysis
    const miningResult = await skillMiner.mineSession(sessionContent);

    if (miningResult.skipped) {
      return res.json({
        success: true,
        data: {
          skipped: true,
          reason: miningResult.reason,
          sentiment: miningResult.sentiment,
        },
      });
    }

    res.json({
      success: true,
      data: {
        skipped: false,
        sessionPath,
        analysis: miningResult,
      },
    });
  } catch (error) {
    console.error("Error mining session:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to mine session",
      details: error.message,
    });
  }
});

/**
 * POST /api/factory/generate
 * Generate a skill markdown from NLU results
 * Body: { nluResults: {...}, sessionContent: "..." }
 */
router.post("/generate", async (req, res) => {
  try {
    const { nluResults, sessionContent } = req.body;

    if (!nluResults || !sessionContent) {
      return res.status(400).json({
        success: false,
        error: "nluResults and sessionContent are required",
      });
    }

    // Generate the skill markdown
    const skillMarkdown = await skillGenerator.generateSkill(
      nluResults,
      sessionContent,
    );

    res.json({
      success: true,
      data: {
        markdown: skillMarkdown,
        category: nluResults.category,
      },
    });
  } catch (error) {
    console.error("Error generating skill:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to generate skill",
      details: error.message,
    });
  }
});

/**
 * POST /api/factory/save
 * Save a draft skill to the draft-skills directory
 * Body: { filename: "category-skill-name.md", content: "...", approved: true }
 */
router.post("/save", async (req, res) => {
  try {
    const { filename, content, approved } = req.body;

    if (!filename || !content) {
      return res.status(400).json({
        success: false,
        error: "filename and content are required",
      });
    }

    // Only save if approved
    if (approved !== true) {
      return res.status(400).json({
        success: false,
        error: "Skill must be approved before saving",
      });
    }

    // Sanitize filename - only allow [a-z0-9-_.]
    const sanitizedFilename = filename
      .replace(/[^a-z0-9\-_.]/gi, "-")
      .toLowerCase();

    // Reject path traversal attempts
    if (sanitizedFilename.includes("..")) {
      return res.status(400).json({
        success: false,
        error: "Invalid filename: path traversal not allowed",
      });
    }

    // Ensure .md extension
    const finalFilename = sanitizedFilename.endsWith(".md")
      ? sanitizedFilename
      : `${sanitizedFilename}.md`;

    // Extract category from filename
    const category = finalFilename.split("-")[0];

    // Write skill file to draft-skills directory
    const skillPath = path.join(DRAFT_SKILLS_DIR, finalFilename);
    await fs.writeFile(skillPath, content, "utf-8");

    res.json({
      success: true,
      data: {
        filename: finalFilename,
        path: `draft-skills/${finalFilename}`,
        category,
        message: "Draft skill saved successfully",
      },
    });
  } catch (error) {
    console.error("Error saving skill:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to save skill",
      details: error.message,
    });
  }
});

module.exports = router;

// Made with Bob
