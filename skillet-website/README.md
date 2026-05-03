# 🌐 Skillet Website

The web interface for the Skillet reusable development skills management system, powered by IBM Bob IDE.

## 📦 Repository Structure

```
skillet-website/
├── backend/          # Express.js API server
├── dashboard/        # React dashboard (Vite)
└── README.md         # This file
```

---

## 🎯 Overview

This repository contains the web components of the Skillet system:

- **Backend**: Express.js API that fetches skills from GitHub and serves them via REST endpoints
- **Dashboard**: React-based web interface for browsing and viewing skills

### Related Repositories

- **[skillet-policies](https://github.com/YOUR_USERNAME/skillet-policies)**: Immutable company policies and standards
- **[skillet-skills](https://github.com/YOUR_USERNAME/skillet-skills)**: Reusable development skills library

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- GitHub Personal Access Token (for API access)
- Both `skillet-policies` and `skillet-skills` repos cloned locally

### 1. Clone This Repository

```bash
git clone https://github.com/YOUR_USERNAME/skillet-website.git
cd skillet-website
```

### 2. Set Up Backend

```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Edit .env with your GitHub credentials
# GITHUB_TOKEN=your_github_token_here
# GITHUB_OWNER=your_github_username
# GITHUB_REPO_POLICIES=skillet-policies
# GITHUB_REPO_SKILLS=skillet-skills

# Start backend
npm start
```

Backend will run on: **http://localhost:3000**

### 3. Set Up Dashboard

```bash
cd dashboard
npm install

# Start dashboard
npm run dev
```

Dashboard will run on: **http://localhost:5173**

---

## 🏗️ Backend API

### Technology Stack

- **Express.js**: Web framework
- **Octokit**: GitHub API client
- **Node-cache**: In-memory caching (5-minute TTL)
- **CORS**: Cross-origin resource sharing

### API Endpoints

#### `GET /api/skills`
Get all skills from the skills repository.

**Response:**
```json
{
  "skills": [
    {
      "name": "backend-rest-api-endpoint-generator",
      "path": "skills/backend-rest-api-endpoint-generator.md",
      "category": "backend",
      "sha": "abc123..."
    }
  ],
  "total": 1
}
```

#### `GET /api/skills/:category`
Get skills filtered by category (backend, frontend, devops, qa, shared).

**Response:**
```json
{
  "skills": [...],
  "category": "backend",
  "total": 1
}
```

#### `GET /api/skill/:path`
Get full content of a specific skill.

**Parameters:**
- `path`: URL-encoded skill path (e.g., `skills/backend-rest-api-endpoint-generator.md`)

**Response:**
```json
{
  "name": "backend-rest-api-endpoint-generator",
  "path": "skills/backend-rest-api-endpoint-generator.md",
  "content": "# Skill content in markdown...",
  "category": "backend",
  "sha": "abc123..."
}
```

#### `GET /api/roles`
Get role definitions from the policies repository.

**Response:**
```json
{
  "roles": {
    "backend": {
      "name": "Backend Developer",
      "description": "Server-side development...",
      "categories": ["backend", "shared"]
    }
  }
}
```

#### `GET /api/stats`
Get statistics about the skills library.

**Response:**
```json
{
  "totalSkills": 8,
  "byCategory": {
    "backend": 3,
    "frontend": 2,
    "devops": 2,
    "qa": 1
  }
}
```

### Caching

- All GitHub API responses are cached for **5 minutes**
- Reduces API rate limit usage
- Improves response times
- Cache automatically refreshes on expiry

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# GitHub Configuration
GITHUB_TOKEN=ghp_your_personal_access_token_here
GITHUB_OWNER=your_github_username
GITHUB_REPO_POLICIES=skillet-policies
GITHUB_REPO_SKILLS=skillet-skills

# Server Configuration
PORT=3000
NODE_ENV=development
```

**Getting a GitHub Token:**
1. Go to GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate new token (classic)
3. Select scope: `repo` (full control of private repositories)
4. Copy token and add to `.env`

---

## 🎨 Dashboard

### Technology Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **CSS Modules**: Scoped styling
- **React Markdown**: Markdown rendering
- **React Syntax Highlighter**: Code syntax highlighting

### Pages

#### 1. Home Page (`/`)
- Overview statistics
- Total skills count
- Skills by category
- Quick navigation to skills browser

#### 2. Skills Browser (`/skills`)
- Grid view of all skills
- Category filter (All, Backend, Frontend, DevOps, QA)
- Skill cards with:
  - Skill name
  - Category badge
  - Description preview
  - "View Details" button

#### 3. Skill Detail Page (`/skill/:path`)
- Full skill content rendered as markdown
- Syntax-highlighted code blocks
- Breadcrumb navigation
- Back to skills button

### Components

#### `Navbar`
- Site branding
- Navigation links (Home, Browse Skills)
- Responsive design

#### `SkillCard`
- Displays skill preview
- Category badge with color coding
- Click to view full details

#### `CategoryFilter`
- Filter skills by category
- Active state indication
- Counts per category

#### `StatsCard`
- Display statistics
- Icon support
- Hover effects

#### `MarkdownRenderer`
- Renders markdown content
- Syntax highlighting for code blocks
- Supports multiple languages

### Styling

- **CSS Modules**: Component-scoped styles
- **Design System**:
  - Primary color: `#3b82f6` (blue)
  - Success color: `#10b981` (green)
  - Warning color: `#f59e0b` (amber)
  - Error color: `#ef4444` (red)
- **Responsive**: Mobile-first design
- **Dark mode ready**: CSS variables for theming

---

## 🔧 Development

### Backend Development

```bash
cd backend

# Install dependencies
npm install

# Start dev server (with nodemon)
npm run dev

# Run in production mode
npm start

# Lint code
npm run lint
```

### Dashboard Development

```bash
cd dashboard

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📦 Deployment

### Backend Deployment

**Option 1: Heroku**
```bash
cd backend
heroku create skillet-api
heroku config:set GITHUB_TOKEN=your_token
heroku config:set GITHUB_OWNER=your_username
heroku config:set GITHUB_REPO_POLICIES=skillet-policies
heroku config:set GITHUB_REPO_SKILLS=skillet-skills
git push heroku main
```

**Option 2: Railway**
```bash
cd backend
railway init
railway add
railway up
```

**Option 3: DigitalOcean App Platform**
- Connect GitHub repository
- Set environment variables in dashboard
- Deploy automatically on push

### Dashboard Deployment

**Option 1: Vercel**
```bash
cd dashboard
vercel
```

**Option 2: Netlify**
```bash
cd dashboard
netlify deploy --prod
```

**Option 3: GitHub Pages**
```bash
cd dashboard
npm run build
# Deploy dist/ folder to gh-pages branch
```

**Important**: Update API endpoint in `dashboard/src/services/api.js` to point to your deployed backend URL.

---

## 🧪 Testing

### Backend Tests

```bash
cd backend
npm test
```

### Dashboard Tests

```bash
cd dashboard
npm test
```

---

## 🔒 Security

### Backend Security

- ✅ CORS enabled for specific origins
- ✅ Environment variables for sensitive data
- ✅ GitHub token never exposed to client
- ✅ Rate limiting on API endpoints
- ✅ Input validation and sanitization
- ✅ Secure headers (helmet.js)

### Dashboard Security

- ✅ No sensitive data in client code
- ✅ API calls through backend proxy
- ✅ XSS prevention in markdown rendering
- ✅ Content Security Policy headers
- ✅ HTTPS in production

---

## 📊 Monitoring

### Backend Monitoring

- Request logging with timestamps
- Error tracking and reporting
- GitHub API rate limit monitoring
- Cache hit/miss statistics

### Dashboard Monitoring

- Page load performance
- API response times
- Error boundary for React errors
- User interaction tracking (optional)

---

## 🤝 Contributing

This repository is part of the Skillet system for the IBM Bob Dev Day Hackathon 2026.

### Development Workflow

1. Create a feature branch
2. Make changes
3. Test locally (backend + dashboard)
4. Commit with conventional commits
5. Push and create pull request

### Commit Convention

```
feat: add new feature
fix: bug fix
docs: documentation update
style: formatting changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
```

---

## 📝 License

MIT License - See LICENSE file for details

---

## 🆘 Troubleshooting

### Backend Issues

**Issue**: `Error: GitHub API rate limit exceeded`
- **Solution**: Add or check your `GITHUB_TOKEN` in `.env`

**Issue**: `Error: Cannot find module`
- **Solution**: Run `npm install` in backend directory

**Issue**: `CORS error in browser`
- **Solution**: Check CORS configuration in `backend/src/app.js`

### Dashboard Issues

**Issue**: `Failed to fetch skills`
- **Solution**: Ensure backend is running on port 3000

**Issue**: `Blank page after build`
- **Solution**: Check base URL in `vite.config.js`

**Issue**: `Module not found`
- **Solution**: Run `npm install` in dashboard directory

---

## 📞 Support

For issues related to:
- **Backend API**: Check backend logs and GitHub API status
- **Dashboard**: Check browser console for errors
- **Skills**: See [skillet-skills](https://github.com/YOUR_USERNAME/skillet-skills) repository
- **Policies**: See [skillet-policies](https://github.com/YOUR_USERNAME/skillet-policies) repository

---

## 🎯 Roadmap

- [ ] Add search functionality
- [ ] Implement skill versioning
- [ ] Add user authentication
- [ ] Create skill usage analytics
- [ ] Add skill rating system
- [ ] Implement skill comments/feedback
- [ ] Add watsonx Orchestrate integration
- [ ] Create mobile app

---

## 🏆 Acknowledgments

Built for the **IBM Bob Dev Day Hackathon 2026**

- **IBM Bob IDE**: AI-powered development assistant
- **GitHub**: Version control and API
- **React**: UI framework
- **Express.js**: Backend framework

---

**Made with ❤️ for the IBM Bob Dev Day Hackathon 2026**