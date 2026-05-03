# 🚀 Skillet System - Complete Setup Guide

This guide will walk you through setting up all three Skillet projects: **skillet-policies**, **skillet-skills**, and **skillet-website**.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Overview](#project-overview)
3. [Setup Part 1: Core Repositories](#setup-part-1-core-repositories)
4. [Setup Part 2: MCP Server](#setup-part-2-mcp-server)
5. [Setup Part 3: Website (Backend + Dashboard)](#setup-part-3-website-backend--dashboard)
6. [Verification](#verification)
7. [Troubleshooting](#troubleshooting)
8. [Next Steps](#next-steps)

---

## Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js 18+** and npm installed
- ✅ **Git** installed
- ✅ **IBM Bob IDE** installed
- ✅ **GitHub account** with access to the repositories
- ✅ **VS Code** (recommended for development)

---

## Project Overview

The Skillet system consists of three main projects:

### 1. **skillet-policies** (Read-Only)

- **Purpose**: Immutable company standards and policies
- **Access**: Everyone reads, only leadership writes
- **Location**: `skillet-policies/`

### 2. **skillet-skills** (Read-Write)

- **Purpose**: Reusable development skills library
- **Access**: Developers can create/modify skills
- **Location**: `skillet-skills/`
- **Includes**: MCP Server for GitHub integration

### 3. **skillet-website** (Web Interface)

- **Purpose**: Web dashboard for browsing skills
- **Components**:
  - Backend API (Express.js)
  - Frontend Dashboard (React + Vite)
- **Location**: `skillet-website/`

---

## Setup Part 1: Core Repositories

### Step 1: Clone All Repositories

Choose a parent directory for all Skillet projects (e.g., `D:/ibm dev day` or `~/projects/skillet`):

```bash
# Navigate to your projects directory
cd "D:/ibm dev day"

# Clone all three repositories
git clone https://github.com/IvanDaHackerz/skillet-policies.git
git clone https://github.com/IvanDaHackerz/skillet-skills.git
git clone https://github.com/IvanDaHackerz/skillet-website.git
```

Your directory structure should now look like:

```
D:/ibm dev day/
├── skillet-policies/
├── skillet-skills/
└── skillet-website/
```

### Step 2: Verify Repository Structure

```bash
# Check policies repo
cd skillet-policies
ls -la
# Should see: rules/, metadata/, .bob/, CODEOWNERS, README.md

# Check skills repo
cd ../skillet-skills
ls -la
# Should see: skills/, metadata/, mcp-server/, bob_sessions/, README.md

# Check website repo
cd ../skillet-website
ls -la
# Should see: backend/, dashboard/, README.md
```

---

## Setup Part 2: MCP Server

The MCP (Model Context Protocol) Server enables Bob IDE to interact with GitHub repositories.

### Step 1: Get a GitHub Personal Access Token

1. **Go to GitHub Settings**: https://github.com/settings/tokens
2. **Click** "Generate new token" → "Generate new token (classic)"
3. **Name it**: `Skillet MCP Server`
4. **Set expiration**: 90 days (recommended)
5. **Select scopes**:
   - ✅ **repo** (Full control of private repositories)
6. **Generate token** and **copy it immediately** (you won't see it again!)
   - Token format: `ghp_xxxxxxxxxx`

⚠️ **Security**: Never commit this token to git or share it publicly!

### Step 2: Configure MCP Server

```bash
cd skillet-skills/mcp-server

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env
```

### Step 3: Edit .env File

Open `skillet-skills/mcp-server/.env` and fill in **ALL** required values:

```env
# GitHub Authentication (REQUIRED)
GITHUB_TOKEN=ghp_your_actual_token_here

# GitHub Configuration (ALL REQUIRED)
GITHUB_OWNER=your_github_username
POLICIES_REPO=skillet-policies
SKILLS_REPO=skillet-skills
DEFAULT_BRANCH=main

# File Paths (ALL REQUIRED)
METADATA_PATH=metadata/skill-index.json
MCP_SERVER_BUILD_PATH=C:/Users/YourUsername/path/to/skillet-skills/mcp-server/build/index.js
```

**Important Notes**:

- Replace `your_github_username` with your actual GitHub username
- Replace `MCP_SERVER_BUILD_PATH` with the **absolute path** to your `build/index.js` file
- Use forward slashes (`/`) even on Windows
- Example Windows path: `C:/Users/Elieson/Documents/Programming/Skillet/skillet-skills/mcp-server/build/index.js`

### Step 4: Build the MCP Server

```bash
# Still in skillet-skills/mcp-server/
npm run build
```

Expected output:

```
> skillet-github-mcp-server@1.0.0 build
> tsc && node -e "require('fs').chmodSync('build/index.js', '755')"
```

### Step 5: Test the MCP Server (Optional)

```bash
node build/index.js
```

You should see:

```
Skillet GitHub MCP server running on stdio
```

Press `Ctrl+C` to stop. If you see this message, the server is working!

### Step 6: Register MCP Server with Bob IDE

1. **Locate Bob's MCP settings file**:

   ```
   C:\Users\[YourUsername]\.bob\settings\mcp_settings.json
   ```

2. **Open the file** in a text editor

3. **Add the server configuration** to the `mcpServers` object

   See [`skillet-skills/mcp-server/mcp_settings.json.example`](skillet-skills/mcp-server/mcp_settings.json.example) for the complete template:

```json
{
  "mcpServers": {
    "skillet-github": {
      "command": "node",
      "args": [
        "C:/Users/YourUsername/path/to/skillet-skills/mcp-server/build/index.js"
      ],
      "env": {
        "GITHUB_TOKEN": "your_github_token_here",
        "GITHUB_OWNER": "your_github_username",
        "POLICIES_REPO": "skillet-policies",
        "SKILLS_REPO": "skillet-skills",
        "DEFAULT_BRANCH": "main",
        "METADATA_PATH": "metadata/skill-index.json"
      },
      "disabled": false,
      "alwaysAllow": [],
      "disabledTools": []
    }
  }
}
```

**Important**:

- Use the **same values** as in your `.env` file
- Use the **absolute path** to `build/index.js`
- Use forward slashes (`/`) in paths

4. **Save the file** and **restart Bob IDE**

---

## Setup Part 3: Website (Backend + Dashboard)

### Part A: Backend API Setup

The backend serves skills data via REST API.

#### Step 1: Install Backend Dependencies

```bash
cd skillet-website/backend
npm install
```

#### Step 2: Configure Backend Environment

```bash
# Create .env file
cp .env.example .env
```

Edit `skillet-website/backend/.env`:

```env
# GitHub Configuration
GITHUB_TOKEN=ghp_your_personal_access_token_here
GITHUB_OWNER=your_github_username
GITHUB_REPO_SKILLS=skillet-skills
GITHUB_REPO_POLICIES=skillet-policies

# Server Configuration
PORT=3001
NODE_ENV=development
```

**Note**: Use the **same GitHub token** from the MCP server setup.

#### Step 3: Start Backend Server

```bash
# Development mode (with auto-reload)
npm run dev

# Or production mode
npm start
```

Backend will run on: **http://localhost:3001**

#### Step 4: Test Backend API

Open your browser or use curl:

```bash
# Test skills endpoint
curl http://localhost:3001/api/skills

# Test stats endpoint
curl http://localhost:3001/api/stats
```

You should see JSON responses with skills data.

### Part B: Dashboard Setup

The dashboard is a React app for browsing skills.

#### Step 1: Install Dashboard Dependencies

```bash
cd skillet-website/dashboard
npm install
```

#### Step 2: Configure Dashboard (Optional)

The dashboard is pre-configured to connect to `http://localhost:3001`. If you changed the backend port, update `dashboard/src/services/api.js`:

```javascript
const API_BASE_URL = "http://localhost:3001/api";
```

#### Step 3: Start Dashboard

```bash
npm run dev
```

Dashboard will run on: **http://localhost:5173**

#### Step 4: Open Dashboard in Browser

Navigate to: **http://localhost:5173**

You should see:

- ✅ Skillet Dashboard homepage
- ✅ Statistics cards showing skill counts
- ✅ Navigation to browse skills

---

## Verification

### ✅ Verify MCP Server

In Bob IDE, ask:

```
Hey Bob, use the list_policy_files tool to show me what's in the rules directory
```

Expected: Bob lists files from `skillet-policies/rules/`

### ✅ Verify Backend API

```bash
curl http://localhost:3001/api/skills
```

Expected: JSON response with skills array

### ✅ Verify Dashboard

1. Open http://localhost:5173
2. Click "Browse Skills"
3. You should see skill cards (if any skills exist)

### ✅ Complete System Test

1. **In Bob IDE**: Create a new skill

   ```
   Hey Bob, create a new backend skill for REST API endpoints
   ```

2. **In Dashboard**: Refresh and verify the new skill appears

3. **Via API**: Check the skill is accessible
   ```bash
   curl http://localhost:3001/api/skills
   ```

---

## Troubleshooting

### MCP Server Issues

#### "Missing required environment variables"

**Problem**: Server fails to start with missing variables error.

**Solution**:

1. Ensure `.env` file exists in `skillet-skills/mcp-server/`
2. Fill in **ALL** required variables (none are optional)
3. Check for typos in variable names
4. Restart Bob IDE after fixing

#### "Authentication failed"

**Problem**: GitHub rejects the token.

**Solution**:

1. Verify token starts with `ghp_`
2. Check token hasn't expired
3. Ensure token has `repo` scope
4. Generate a new token if needed

#### "File not found"

**Problem**: Can't find files in repositories.

**Solution**:

1. Verify `GITHUB_OWNER` is correct
2. Check repository names match exactly
3. Ensure files exist in GitHub repositories
4. Verify paths are case-sensitive

### Backend API Issues

#### "Cannot connect to backend"

**Problem**: Dashboard can't reach backend API.

**Solution**:

1. Ensure backend is running on port 3001
2. Check for CORS errors in browser console
3. Verify `GITHUB_TOKEN` in backend `.env`
4. Check backend logs for errors

#### "GitHub API rate limit exceeded"

**Problem**: Too many API requests.

**Solution**:

1. Wait for rate limit to reset (1 hour)
2. Ensure you're using an authenticated token
3. Backend caches responses for 5 minutes

### Dashboard Issues

#### "Failed to fetch skills"

**Problem**: Dashboard shows error loading skills.

**Solution**:

1. Ensure backend is running
2. Check browser console for errors
3. Verify API endpoint in `dashboard/src/services/api.js`
4. Test backend API directly with curl

#### "Blank page after build"

**Problem**: Production build shows blank page.

**Solution**:

1. Check base URL in `vite.config.js`
2. Verify build output in `dist/` directory
3. Check browser console for errors

### General Issues

#### "Module not found"

**Problem**: Missing dependencies.

**Solution**:

```bash
# In the affected directory
npm install
```

#### "Port already in use"

**Problem**: Port 3001 or 5173 is occupied.

**Solution**:

```bash
# Find and kill the process
# Windows:
netstat -ano | findstr :3001
taskkill /PID <process_id> /F

# Linux/Mac:
lsof -ti:3001 | xargs kill -9
```

Or change the port in `.env` (backend) or `vite.config.js` (dashboard).

---

## Next Steps

### 1. Create Your First Skill

```
Hey Bob, create a new skill for [your use case]
```

Bob will:

- Read policies from `skillet-policies`
- Generate structured markdown
- Validate against company standards
- Save to `skillet-skills/skills/`

### 2. Browse Skills in Dashboard

1. Open http://localhost:5173
2. Click "Browse Skills"
3. Filter by category
4. View skill details

### 3. Use Skills in Development

```
Hey Bob, use the [skill-name] skill to [accomplish task]
```

### 4. Explore the System

- **Read policies**: Check `skillet-policies/rules/` for standards
- **View skills**: Browse `skillet-skills/skills/` directory
- **Check metadata**: See `skillet-skills/metadata/skill-index.json`
- **API docs**: Review backend endpoints in `skillet-website/backend/README.md`

---

## Development Workflow

### Daily Development

1. **Start backend**:

   ```bash
   cd skillet-website/backend
   npm run dev
   ```

2. **Start dashboard**:

   ```bash
   cd skillet-website/dashboard
   npm run dev
   ```

3. **Open Bob IDE** and start creating/using skills

### Creating Skills

1. Ask Bob to create a skill
2. Bob validates against policies
3. Review the validation report
4. Commit and push to GitHub
5. Skill appears in dashboard automatically

### Updating Policies (Leadership Only)

1. Create branch in `skillet-policies`
2. Update policy files
3. Create PR (requires 2+ approvals)
4. After merge, all developers pull latest
5. Bob enforces new policies immediately

---

## Production Deployment

### Backend Deployment

**Recommended**: Heroku, Railway, or DigitalOcean App Platform

```bash
cd skillet-website/backend

# Set environment variables in hosting platform:
# - GITHUB_TOKEN
# - GITHUB_OWNER
# - GITHUB_REPO_SKILLS
# - GITHUB_REPO_POLICIES
# - PORT (optional, defaults to 3001)

# Deploy
git push heroku main  # or your hosting platform
```

### Dashboard Deployment

**Recommended**: Vercel, Netlify, or GitHub Pages

```bash
cd skillet-website/dashboard

# Update API endpoint in src/services/api.js to production URL
# Build for production
npm run build

# Deploy dist/ folder
vercel deploy --prod  # or your hosting platform
```

---

## Security Best Practices

- ✅ Never commit `.env` files to git
- ✅ Use token expiration dates (90 days recommended)
- ✅ Regenerate tokens if compromised
- ✅ Only grant necessary GitHub permissions
- ✅ Use HTTPS in production
- ✅ Enable CORS only for trusted origins
- ✅ Review token usage regularly in GitHub settings

---

## Getting Help

### Documentation

- **MCP Server**: `skillet-skills/mcp-server/README.md`
- **Skills Repo**: `skillet-skills/README.md`
- **Policies Repo**: `skillet-policies/README.md`
- **Website**: `skillet-website/README.md`

### Common Resources

- **GitHub Token**: https://github.com/settings/tokens
- **Bob IDE Docs**: Check Bob's help menu
- **MCP Protocol**: https://modelcontextprotocol.io

### Support Channels

- Check troubleshooting sections above
- Review error logs in terminal/console
- Verify environment variables
- Test components individually

---

## Project Statistics

- **Total Projects**: 3 (policies, skills, website)
- **Components**: 5 (policies, skills, MCP server, backend, dashboard)
- **Technologies**: Node.js, TypeScript, React, Express, Vite
- **Validation Checks**: 4 (guideline, duplicate, security, completeness)

---

## Acknowledgments

Built for the **IBM Bob Dev Day Hackathon 2026**

- **IBM Bob IDE**: AI-powered development assistant
- **GitHub**: Version control and API
- **React**: UI framework
- **Express.js**: Backend framework
- **MCP Protocol**: Model Context Protocol

---

**Made with ❤️ for the IBM Bob Dev Day Hackathon 2026**

_Skillet: Because great teams cook up great code together_ 🍳
