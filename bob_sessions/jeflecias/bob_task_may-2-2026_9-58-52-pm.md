**User:**

<task>
Hey Bob, list all available skills
</task>
<environment_details>
# VSCode Visible Files
hello.py

# VSCode Open Tabs
hello.py

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T13:58:04.856Z
User time zone: Asia/Shanghai, UTC+8:00

# Current Cost
$0.00

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>


# Current Workspace Directory (c:/Users/avar1ce/Desktop/bobhack) Files
hello.py
skillet-policies/
skillet-policies/.gitignore
skillet-policies/CODEOWNERS
skillet-policies/README.md
skillet-policies/.bob/
skillet-policies/metadata/
skillet-policies/metadata/roles.json
skillet-policies/rules/
skillet-policies/rules/coding-standards.md
skillet-policies/rules/security-guidelines.md
skillet-policies/rules/skill-format.md
skillet-skills/
skillet-skills/.gitignore
skillet-skills/CODEOWNERS
skillet-skills/README.md
skillet-skills/.bob/
skillet-skills/bob_sessions/
skillet-skills/bob_sessions/.gitkeep
skillet-skills/metadata/
skillet-skills/metadata/skill-index.json
skillet-skills/skills/
skillet-skills/skills/.gitkeep
skillet-skills/skills/devops-git-commit-push.md
skillet-skills/skills/frontend-css-to-tailwind-refactor.md
skillet-skills/skills/frontend-green-button-component.md
skillet-website/
skillet-website/.gitignore
skillet-website/push-to-github.ps1
skillet-website/QUICK_PUSH_GUIDE.md
skillet-website/README.md
skillet-website/SETUP_GITHUB.md
skillet-website/setup-and-push.ps1
skillet-website/backend/
skillet-website/backend/.env.example
skillet-website/backend/.gitignore
skillet-website/backend/package-lock.json
skillet-website/backend/package.json
skillet-website/backend/src/
skillet-website/backend/src/app.js
skillet-website/backend/src/middleware/
skillet-website/backend/src/middleware/cache.js
skillet-website/backend/src/routes/
skillet-website/backend/src/routes/skills.js
skillet-website/backend/src/services/
skillet-website/backend/src/services/github.js
skillet-website/dashboard/
skillet-website/dashboard/.gitignore
skillet-website/dashboard/eslint.config.js
skillet-website/dashboard/index.html
skillet-website/dashboard/package-lock.json
skillet-website/dashboard/package.json
skillet-website/dashboard/README.md
skillet-website/dashboard/vite.config.js
skillet-website/dashboard/public/
skillet-website/dashboard/public/favicon.svg
skillet-website/dashboard/public/icons.svg
skillet-website/dashboard/src/
skillet-website/dashboard/src/App.jsx
skillet-website/dashboard/src/index.css
skillet-website/dashboard/src/main.jsx
skillet-website/dashboard/src/components/
skillet-website/dashboard/src/components/CategoryFilter.jsx
skillet-website/dashboard/src/components/CategoryFilter.module.css
skillet-website/dashboard/src/components/MarkdownRenderer.jsx
skillet-website/dashboard/src/components/MarkdownRenderer.module.css
skillet-website/dashboard/src/components/Navbar.jsx
skillet-website/dashboard/src/components/Navbar.module.css
skillet-website/dashboard/src/components/SkillCard.jsx
skillet-website/dashboard/src/components/SkillCard.module.css
skillet-website/dashboard/src/components/StatsCard.jsx
skillet-website/dashboard/src/components/StatsCard.module.css
skillet-website/dashboard/src/pages/
skillet-website/dashboard/src/pages/HomePage.jsx
skillet-website/dashboard/src/pages/HomePage.module.css
skillet-website/dashboard/src/pages/SkillDetailPage.jsx
skillet-website/dashboard/src/pages/SkillDetailPage.module.css
skillet-website/dashboard/src/pages/SkillsPage.jsx
skillet-website/dashboard/src/pages/SkillsPage.module.css
skillet-website/dashboard/src/services/
skillet-website/dashboard/src/services/api.js
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

I'll help you list all available skills. Let me read the skill index file to see what skills are available.

<read_file>
<args>
<file>
<path>skillet-skills/metadata/skill-index.json</path>
</file>
</args>
</read_file>

---

**User:**

[read_file for 'skillet-skills/metadata/skill-index.json'. Reading multiple files at once is more efficient for the LLM. If other files are relevant to your current task, please read them simultaneously.] Result:
<files>
<file><path>skillet-skills/metadata/skill-index.json</path>
<content lines="1-15">
 1 | {
 2 |   "skills": [],
 3 |   "lastUpdated": "2026-05-02T08:16:00.000Z",
 4 |   "version": "1.0.0",
 5 |   "stats": {
 6 |     "totalSkills": 0,
 7 |     "byCategory": {
 8 |       "backend": 0,
 9 |       "frontend": 0,
10 |       "devops": 0,
11 |       "qa": 0,
12 |       "shared": 0
13 |     }
14 |   }
15 | }
</content>
</file>
</files>
<environment_details>
# VSCode Visible Files
hello.py

# VSCode Open Tabs
hello.py

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T13:58:27.513Z
User time zone: Asia/Shanghai, UTC+8:00

# Current Cost
$0.01

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

I can see that the skill index is currently empty, but I noticed there are actual skill files in the directory. Let me check those skill files directly.

<list_files>
<path>skillet-skills/skills</path>
<recursive>false</recursive>
</list_files>

---

**User:**

[list_files for 'skillet-skills/skills'] Result:
.gitkeep
devops-git-commit-push.md
frontend-css-to-tailwind-refactor.md
frontend-green-button-component.md
<environment_details>
# VSCode Visible Files
hello.py

# VSCode Open Tabs
hello.py

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T13:58:37.746Z
User time zone: Asia/Shanghai, UTC+8:00

# Current Cost
$0.02

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

Now let me read all the skill files to get their details.

<read_file>
<args>
<file>
<path>skillet-skills/skills/devops-git-commit-push.md</path>
</file>
<file>
<path>skillet-skills/skills/frontend-css-to-tailwind-refactor.md</path>
</file>
<file>
<path>skillet-skills/skills/frontend-green-button-component.md</path>
</file>
</args>
</read_file>

---

**User:**

[read_file for 'skillet-skills/skills/devops-git-commit-push.md', 'skillet-skills/skills/frontend-css-to-tailwind-refactor.md', 'skillet-skills/skills/frontend-green-button-component.md'] Result:
<files>
<file><path>skillet-skills/skills/devops-git-commit-push.md</path>
<content lines="1-498">
  1 | # Git Commit and Push Recent Updates
  2 | 
  3 | ## Description
  4 | Automates the process of staging, committing, and pushing recent changes to a Git repository. Analyzes modified files, generates meaningful commit messages based on changes, and safely pushes to the remote repository. Use this when you need to quickly commit and push your work with proper Git practices, including checking for conflicts and ensuring clean commits.
  5 | 
  6 | ## Category
  7 | devops
  8 | 
  9 | ## Roles
 10 | backend, frontend, fullstack, devops
 11 | 
 12 | ## Prerequisites
 13 | - Git installed on the system (`git --version` to verify)
 14 | - Git repository initialized in the project (`git init` or cloned from remote)
 15 | - Remote repository configured (`git remote -v` to check)
 16 | - Git user configured (`git config user.name` and `git config user.email`)
 17 | - Proper authentication set up (SSH keys or HTTPS credentials)
 18 | - Working directory with changes to commit
 19 | 
 20 | ## Steps
 21 | 1. Check Git status to identify modified, added, and deleted files
 22 | 2. Review unstaged changes to understand what will be committed
 23 | 3. Stage all changes or selectively stage specific files
 24 | 4. Generate a meaningful commit message based on the changes
 25 | 5. Verify no merge conflicts exist
 26 | 6. Create the commit with the generated or custom message
 27 | 7. Check current branch name
 28 | 8. Pull latest changes from remote to avoid conflicts (optional but recommended)
 29 | 9. Push commits to the remote repository
 30 | 10. Verify push was successful and display confirmation
 31 | 
 32 | ## Inputs
 33 | - Commit message (string, optional): Custom commit message, if not provided will be auto-generated based on changes
 34 | - Files to stage (array of strings, optional): Specific files to commit, defaults to all modified files (git add .)
 35 | - Branch name (string, optional): Target branch to push to, defaults to current branch
 36 | - Force push (boolean, optional): Whether to force push (use with caution), defaults to false
 37 | - Skip pull (boolean, optional): Skip pulling latest changes before push, defaults to false
 38 | - Commit type (string, optional): Conventional commit type (feat, fix, docs, style, refactor, test, chore), defaults to auto-detect
 39 | 
 40 | ## Outputs
 41 | - Git status report showing staged files
 42 | - Commit hash and message
 43 | - Push confirmation with branch and remote information
 44 | - Summary of files changed, insertions, and deletions
 45 | - Any warnings or errors encountered during the process
 46 | 
 47 | ## Example Usage
 48 | 
 49 | ### Basic Commit and Push (Auto-generated Message)
 50 | ```bash
 51 | # Check status
 52 | $ git status
 53 | On branch main
 54 | Changes not staged for commit:
 55 |   modified:   src/app.js
 56 |   modified:   src/utils.js
 57 |   modified:   README.md
 58 | 
 59 | # Stage all changes
 60 | $ git add .
 61 | 
 62 | # Auto-generate commit message based on changes
 63 | $ git diff --cached --stat
 64 |  src/app.js   | 15 ++++++++++++---
 65 |  src/utils.js |  8 ++++++--
 66 |  README.md    |  5 ++++-
 67 |  3 files changed, 22 insertions(+), 6 deletions(-)
 68 | 
 69 | # Commit with generated message
 70 | $ git commit -m "feat: update app logic and utility functions
 71 | 
 72 | - Enhanced error handling in app.js
 73 | - Improved utility functions in utils.js
 74 | - Updated README with new features"
 75 | 
 76 | [main a1b2c3d] feat: update app logic and utility functions
 77 |  3 files changed, 22 insertions(+), 6 deletions(-)
 78 | 
 79 | # Pull latest changes
 80 | $ git pull origin main
 81 | Already up to date.
 82 | 
 83 | # Push to remote
 84 | $ git push origin main
 85 | Enumerating objects: 9, done.
 86 | Counting objects: 100% (9/9), done.
 87 | Delta compression using up to 8 threads
 88 | Compressing objects: 100% (5/5), done.
 89 | Writing objects: 100% (5/5), 1.23 KiB | 1.23 MiB/s, done.
 90 | Total 5 (delta 3), reused 0 (delta 0)
 91 | To github.com:username/repo.git
 92 |    z9y8x7w..a1b2c3d  main -> main
 93 | 
 94 | ✅ Successfully pushed to origin/main
 95 | ```
 96 | 
 97 | ### Custom Commit Message
 98 | ```bash
 99 | # Stage specific files
100 | $ git add src/components/Button.jsx src/styles/button.css
101 | 
102 | # Commit with custom message
103 | $ git commit -m "fix: resolve button styling issue in dark mode
104 | 
105 | - Fixed contrast ratio for accessibility
106 | - Updated hover states
107 | - Closes #123"
108 | 
109 | [main b2c3d4e] fix: resolve button styling issue in dark mode
110 |  2 files changed, 12 insertions(+), 4 deletions(-)
111 | 
112 | # Push
113 | $ git push origin main
114 | 
115 | ✅ Successfully pushed to origin/main
116 | ```
117 | 
118 | ### Commit Multiple File Types
119 | ```bash
120 | # Check what changed
121 | $ git status
122 | On branch feature/new-dashboard
123 | Changes not staged for commit:
124 |   modified:   dashboard/src/App.jsx
125 |   modified:   dashboard/src/components/Chart.jsx
126 |   new file:   dashboard/src/components/DataTable.jsx
127 |   modified:   backend/src/routes/analytics.js
128 |   modified:   backend/package.json
129 | 
130 | # Stage all changes
131 | $ git add .
132 | 
133 | # Commit with descriptive message
134 | $ git commit -m "feat: add analytics dashboard with data visualization
135 | 
136 | Frontend:
137 | - Created new Chart component with responsive design
138 | - Added DataTable component for tabular data
139 | - Updated App.jsx to integrate new components
140 | 
141 | Backend:
142 | - Added analytics API endpoints
143 | - Updated dependencies for data processing"
144 | 
145 | [feature/new-dashboard c3d4e5f] feat: add analytics dashboard
146 |  5 files changed, 234 insertions(+), 12 deletions(-)
147 |  create mode 100644 dashboard/src/components/DataTable.jsx
148 | 
149 | # Push to feature branch
150 | $ git push origin feature/new-dashboard
151 | 
152 | ✅ Successfully pushed to origin/feature/new-dashboard
153 | ```
154 | 
155 | ## Detailed Workflow Examples
156 | 
157 | ### Example 1: First-time Push to New Repository
158 | ```bash
159 | # Initialize repository
160 | $ git init
161 | Initialized empty Git repository in /path/to/project/.git/
162 | 
163 | # Add remote
164 | $ git remote add origin https://github.com/username/repo.git
165 | 
166 | # Stage all files
167 | $ git add .
168 | 
169 | # Initial commit
170 | $ git commit -m "chore: initial project setup
171 | 
172 | - Added project structure
173 | - Configured build tools
174 | - Set up dependencies"
175 | 
176 | [main (root-commit) d4e5f6g] chore: initial project setup
177 |  25 files changed, 1523 insertions(+)
178 | 
179 | # Push to remote (set upstream)
180 | $ git push -u origin main
181 | 
182 | ✅ Successfully pushed to origin/main (upstream set)
183 | ```
184 | 
185 | ### Example 2: Handling Merge Conflicts
186 | ```bash
187 | # Try to push
188 | $ git push origin main
189 | To github.com:username/repo.git
190 |  ! [rejected]        main -> main (fetch first)
191 | error: failed to push some refs to 'github.com:username/repo.git'
192 | 
193 | # Pull with rebase
194 | $ git pull --rebase origin main
195 | Auto-merging src/config.js
196 | CONFLICT (content): Merge conflict in src/config.js
197 | 
198 | # Resolve conflicts manually, then:
199 | $ git add src/config.js
200 | $ git rebase --continue
201 | 
202 | # Push after resolving
203 | $ git push origin main
204 | 
205 | ✅ Successfully pushed to origin/main
206 | ```
207 | 
208 | ### Example 3: Conventional Commits
209 | ```bash
210 | # Feature addition
211 | $ git commit -m "feat(auth): add OAuth2 authentication
212 | 
213 | - Implemented Google OAuth provider
214 | - Added user session management
215 | - Created auth middleware"
216 | 
217 | # Bug fix
218 | $ git commit -m "fix(api): resolve rate limiting issue
219 | 
220 | - Fixed token bucket algorithm
221 | - Updated rate limit headers
222 | - Fixes #456"
223 | 
224 | # Documentation
225 | $ git commit -m "docs: update API documentation
226 | 
227 | - Added authentication examples
228 | - Updated endpoint descriptions
229 | - Added troubleshooting section"
230 | 
231 | # Refactoring
232 | $ git commit -m "refactor(database): optimize query performance
233 | 
234 | - Replaced N+1 queries with joins
235 | - Added database indexes
236 | - Improved connection pooling"
237 | ```
238 | 
239 | ## Commit Message Templates
240 | 
241 | ### Feature Addition
242 | ```
243 | feat(scope): brief description
244 | 
245 | - Detailed change 1
246 | - Detailed change 2
247 | - Detailed change 3
248 | 
249 | Closes #issue-number
250 | ```
251 | 
252 | ### Bug Fix
253 | ```
254 | fix(scope): brief description of the fix
255 | 
256 | - Root cause explanation
257 | - Solution implemented
258 | - Testing performed
259 | 
260 | Fixes #issue-number
261 | ```
262 | 
263 | ### Documentation Update
264 | ```
265 | docs: update documentation section
266 | 
267 | - What was updated
268 | - Why it was updated
269 | - Additional context
270 | ```
271 | 
272 | ### Refactoring
273 | ```
274 | refactor(scope): improve code structure
275 | 
276 | - What was refactored
277 | - Benefits of the change
278 | - No functional changes
279 | ```
280 | 
281 | ### Performance Improvement
282 | ```
283 | perf(scope): optimize performance
284 | 
285 | - What was optimized
286 | - Performance metrics
287 | - Benchmark results
288 | ```
289 | 
290 | ## Git Commands Reference
291 | 
292 | ### Status and Inspection
293 | - `git status` - Show working tree status
294 | - `git diff` - Show unstaged changes
295 | - `git diff --cached` - Show staged changes
296 | - `git log --oneline -5` - Show recent commits
297 | 
298 | ### Staging
299 | - `git add .` - Stage all changes
300 | - `git add <file>` - Stage specific file
301 | - `git add -p` - Stage changes interactively
302 | - `git reset <file>` - Unstage file
303 | 
304 | ### Committing
305 | - `git commit -m "message"` - Commit with message
306 | - `git commit -am "message"` - Stage and commit tracked files
307 | - `git commit --amend` - Modify last commit
308 | - `git commit --no-verify` - Skip pre-commit hooks
309 | 
310 | ### Pushing
311 | - `git push origin <branch>` - Push to remote branch
312 | - `git push -u origin <branch>` - Push and set upstream
313 | - `git push --force-with-lease` - Safer force push
314 | - `git push --tags` - Push tags to remote
315 | 
316 | ### Pulling
317 | - `git pull origin <branch>` - Fetch and merge
318 | - `git pull --rebase origin <branch>` - Fetch and rebase
319 | - `git fetch origin` - Fetch without merging
320 | 
321 | ## Notes
322 | 
323 | ### Best Practices
324 | - Write clear, descriptive commit messages
325 | - Use conventional commit format for consistency
326 | - Commit logical units of work, not random changes
327 | - Pull before pushing to avoid conflicts
328 | - Review changes before committing (`git diff`)
329 | - Use meaningful branch names
330 | - Don't commit sensitive data (API keys, passwords)
331 | - Keep commits atomic and focused
332 | 
333 | ### Commit Message Guidelines
334 | - First line: Brief summary (50 characters or less)
335 | - Blank line after summary
336 | - Detailed description (wrap at 72 characters)
337 | - Use imperative mood ("add feature" not "added feature")
338 | - Reference issue numbers when applicable
339 | - Explain what and why, not how
340 | 
341 | ### Security Considerations
342 | - Never commit secrets or credentials
343 | - Use `.gitignore` to exclude sensitive files
344 | - Review staged changes before committing
345 | - Use signed commits for verification (GPG)
346 | - Rotate credentials if accidentally committed
347 | - Use environment variables for sensitive config
348 | 
349 | ### Performance Tips
350 | - Commit frequently with small, logical changes
351 | - Use `.gitignore` to exclude large binary files
352 | - Clean up branches after merging
353 | - Use shallow clones for large repositories
354 | - Compress repository periodically (`git gc`)
355 | 
356 | ## Common Pitfalls
357 | 
358 | ### Issue: Accidentally committed sensitive data
359 | **Solution**: 
360 | ```bash
361 | # Remove from last commit
362 | git reset --soft HEAD~1
363 | git reset HEAD <sensitive-file>
364 | git commit -c ORIG_HEAD
365 | 
366 | # Remove from history (use with caution)
367 | git filter-branch --force --index-filter \
368 |   "git rm --cached --ignore-unmatch <sensitive-file>" \
369 |   --prune-empty --tag-name-filter cat -- --all
370 | ```
371 | 
372 | ### Issue: Commit message has typo
373 | **Solution**:
374 | ```bash
375 | # Amend last commit message
376 | git commit --amend -m "corrected message"
377 | ```
378 | 
379 | ### Issue: Forgot to add files to commit
380 | **Solution**:
381 | ```bash
382 | # Add forgotten files and amend
383 | git add <forgotten-file>
384 | git commit --amend --no-edit
385 | ```
386 | 
387 | ### Issue: Need to undo last commit
388 | **Solution**:
389 | ```bash
390 | # Keep changes, undo commit
391 | git reset --soft HEAD~1
392 | 
393 | # Discard changes and commit
394 | git reset --hard HEAD~1
395 | ```
396 | 
397 | ### Issue: Push rejected due to diverged branches
398 | **Solution**:
399 | ```bash
400 | # Pull with rebase
401 | git pull --rebase origin main
402 | 
403 | # Or merge
404 | git pull origin main
405 | 
406 | # Then push
407 | git push origin main
408 | ```
409 | 
410 | ## Troubleshooting
411 | 
412 | ### Issue: "fatal: not a git repository"
413 | **Solution**: Initialize Git repository with `git init` or clone from remote
414 | 
415 | ### Issue: "fatal: No configured push destination"
416 | **Solution**: Add remote with `git remote add origin <url>`
417 | 
418 | ### Issue: "Permission denied (publickey)"
419 | **Solution**: Set up SSH keys or use HTTPS with credentials
420 | 
421 | ### Issue: "Your branch is behind 'origin/main'"
422 | **Solution**: Pull latest changes with `git pull origin main`
423 | 
424 | ### Issue: "refusing to merge unrelated histories"
425 | **Solution**: Use `git pull origin main --allow-unrelated-histories`
426 | 
427 | ## Related Skills
428 | - `devops-git-branch-management`: Create and manage Git branches
429 | - `devops-git-merge-strategy`: Handle complex merge scenarios
430 | - `devops-github-pr-workflow`: Create and manage pull requests
431 | - `devops-git-rebase-interactive`: Clean up commit history
432 | 
433 | ## Automation Options
434 | 
435 | ### Pre-commit Hooks
436 | ```bash
437 | # .git/hooks/pre-commit
438 | #!/bin/sh
439 | # Run linter before commit
440 | npm run lint
441 | if [ $? -ne 0 ]; then
442 |   echo "Linting failed. Commit aborted."
443 |   exit 1
444 | fi
445 | ```
446 | 
447 | ### Commit Message Validation
448 | ```bash
449 | # .git/hooks/commit-msg
450 | #!/bin/sh
451 | # Validate commit message format
452 | commit_msg=$(cat "$1")
453 | if ! echo "$commit_msg" | grep -qE "^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .+"; then
454 |   echo "Invalid commit message format"
455 |   exit 1
456 | fi
457 | ```
458 | 
459 | ### Automated Push Script
460 | ```bash
461 | #!/bin/bash
462 | # auto-commit-push.sh
463 | 
464 | # Check for changes
465 | if [[ -z $(git status -s) ]]; then
466 |   echo "No changes to commit"
467 |   exit 0
468 | fi
469 | 
470 | # Stage all changes
471 | git add .
472 | 
473 | # Generate commit message
474 | read -p "Enter commit message: " msg
475 | 
476 | # Commit
477 | git commit -m "$msg"
478 | 
479 | # Pull latest
480 | git pull --rebase origin $(git branch --show-current)
481 | 
482 | # Push
483 | git push origin $(git branch --show-current)
484 | 
485 | echo "✅ Successfully committed and pushed"
486 | ```
487 | 
488 | ## Version Compatibility
489 | - Git 2.0+
490 | - Works with GitHub, GitLab, Bitbucket, and other Git hosting services
491 | - Compatible with Windows, macOS, and Linux
492 | - Supports both SSH and HTTPS authentication
493 | 
494 | ## Accessibility Considerations
495 | - Use clear, descriptive commit messages for team collaboration
496 | - Include context in commit descriptions for future reference
497 | - Reference issue numbers for traceability
498 | - Use conventional commits for automated changelog generation
</content>
</file>
<file><path>skillet-skills/skills/frontend-css-to-tailwind-refactor.md</path>
<content lines="1-377">
  1 | # CSS to Tailwind Refactor
  2 | 
  3 | ## Description
  4 | Automatically refactors traditional CSS styles into Tailwind CSS utility classes. Analyzes existing CSS files, identifies patterns, and converts them to equivalent Tailwind utilities while preserving functionality. Use this when migrating legacy projects to Tailwind or modernizing component styling with utility-first CSS.
  5 | 
  6 | ## Category
  7 | frontend
  8 | 
  9 | ## Roles
 10 | frontend, fullstack
 11 | 
 12 | ## Prerequisites
 13 | - Tailwind CSS installed in the project (`npm install -D tailwindcss`)
 14 | - Tailwind configuration file (`tailwind.config.js`) exists
 15 | - Basic understanding of CSS and Tailwind utility classes
 16 | - Node.js and npm installed
 17 | - Text editor or IDE with file access
 18 | 
 19 | ## Steps
 20 | 1. Analyze the target CSS file(s) to identify all style rules and selectors
 21 | 2. Parse CSS properties and values (colors, spacing, typography, layout, etc.)
 22 | 3. Map each CSS property to equivalent Tailwind utility classes
 23 | 4. Handle complex selectors (pseudo-classes, media queries, animations)
 24 | 5. Convert color values to Tailwind color palette or custom colors
 25 | 6. Transform spacing values (margin, padding) to Tailwind spacing scale
 26 | 7. Convert responsive breakpoints to Tailwind responsive utilities
 27 | 8. Replace hover/focus states with Tailwind state variants
 28 | 9. Apply utility classes to HTML elements, removing inline styles
 29 | 10. Create custom Tailwind classes in config for non-standard values
 30 | 11. Remove or comment out the original CSS file
 31 | 12. Verify visual consistency between old CSS and new Tailwind classes
 32 | 
 33 | ## Inputs
 34 | - CSS file path (string, required): Path to the CSS file to refactor (e.g., "styles.css", "component.module.css")
 35 | - HTML/JSX file path (string, required): Path to the corresponding HTML or component file
 36 | - Preserve custom properties (boolean, optional): Keep CSS custom properties (variables) instead of converting, defaults to false
 37 | - Output format (string, optional): "inline" (apply classes directly) or "extract" (create component classes), defaults to "inline"
 38 | - Tailwind config path (string, optional): Path to tailwind.config.js, defaults to "./tailwind.config.js"
 39 | 
 40 | ## Outputs
 41 | - Updated HTML/JSX file with Tailwind utility classes applied
 42 | - Modified or removed CSS file (commented out or deleted based on preference)
 43 | - Updated tailwind.config.js with custom colors, spacing, or utilities if needed
 44 | - Refactor report showing conversion statistics and any manual review items
 45 | - Backup of original files with .backup extension
 46 | 
 47 | ## Example Usage
 48 | 
 49 | ### Input CSS File (styles.css)
 50 | ```css
 51 | .button {
 52 |   background-color: #10b981;
 53 |   color: white;
 54 |   padding: 12px 24px;
 55 |   border: none;
 56 |   border-radius: 8px;
 57 |   font-size: 16px;
 58 |   font-weight: 600;
 59 |   cursor: pointer;
 60 |   transition: all 0.3s ease;
 61 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 62 | }
 63 | 
 64 | .button:hover {
 65 |   background-color: #059669;
 66 |   transform: translateY(-2px);
 67 |   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
 68 | }
 69 | 
 70 | .button:disabled {
 71 |   background-color: #9ca3af;
 72 |   cursor: not-allowed;
 73 |   opacity: 0.6;
 74 | }
 75 | 
 76 | .card {
 77 |   background-color: white;
 78 |   border-radius: 12px;
 79 |   padding: 24px;
 80 |   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
 81 |   max-width: 400px;
 82 |   margin: 0 auto;
 83 | }
 84 | 
 85 | @media (max-width: 768px) {
 86 |   .card {
 87 |     padding: 16px;
 88 |     max-width: 100%;
 89 |   }
 90 | }
 91 | ```
 92 | 
 93 | ### Input HTML File (index.html)
 94 | ```html
 95 | <div class="card">
 96 |   <h2>Welcome</h2>
 97 |   <p>This is a card component</p>
 98 |   <button class="button">Click Me</button>
 99 |   <button class="button" disabled>Disabled</button>
100 | </div>
101 | ```
102 | 
103 | ### Output HTML File (index.html) - After Refactoring
104 | ```html
105 | <div class="bg-white rounded-xl p-6 shadow-sm max-w-md mx-auto md:p-4 md:max-w-full">
106 |   <h2>Welcome</h2>
107 |   <p>This is a card component</p>
108 |   <button class="bg-emerald-500 text-white px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 shadow-sm hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-md">
109 |     Click Me
110 |   </button>
111 |   <button class="bg-emerald-500 text-white px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60" disabled>
112 |     Disabled
113 |   </button>
114 | </div>
115 | ```
116 | 
117 | ### Refactor Report
118 | ```
119 | CSS to Tailwind Refactor Report
120 | ================================
121 | 
122 | File: styles.css → index.html
123 | Total CSS Rules: 4
124 | Successfully Converted: 4
125 | Manual Review Required: 0
126 | 
127 | Conversion Details:
128 | -------------------
129 | ✅ .button → Tailwind utilities (bg-emerald-500, px-6, py-3, etc.)
130 | ✅ .button:hover → hover: variants
131 | ✅ .button:disabled → disabled: variants
132 | ✅ .card → Tailwind utilities with responsive variants
133 | ✅ @media queries → md: responsive prefix
134 | 
135 | Custom Values Added to tailwind.config.js:
136 | ------------------------------------------
137 | None (all values matched existing Tailwind scale)
138 | 
139 | Backup Created:
140 | ---------------
141 | ✅ styles.css.backup
142 | ✅ index.html.backup
143 | ```
144 | 
145 | ## Detailed Conversion Examples
146 | 
147 | ### Example 1: React Component with CSS Module
148 | 
149 | **Before (Button.module.css):**
150 | ```css
151 | .primary {
152 |   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
153 |   color: white;
154 |   padding: 0.75rem 1.5rem;
155 |   border-radius: 0.5rem;
156 |   font-weight: 600;
157 |   transition: transform 0.2s;
158 | }
159 | 
160 | .primary:hover {
161 |   transform: scale(1.05);
162 | }
163 | ```
164 | 
165 | **Before (Button.jsx):**
166 | ```jsx
167 | import styles from './Button.module.css';
168 | 
169 | const Button = ({ children }) => {
170 |   return <button className={styles.primary}>{children}</button>;
171 | };
172 | ```
173 | 
174 | **After (Button.jsx):**
175 | ```jsx
176 | const Button = ({ children }) => {
177 |   return (
178 |     <button className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-transform duration-200 hover:scale-105">
179 |       {children}
180 |     </button>
181 |   );
182 | };
183 | ```
184 | 
185 | ### Example 2: Complex Layout with Flexbox
186 | 
187 | **Before (layout.css):**
188 | ```css
189 | .container {
190 |   display: flex;
191 |   flex-direction: column;
192 |   align-items: center;
193 |   justify-content: space-between;
194 |   min-height: 100vh;
195 |   padding: 2rem;
196 |   gap: 1rem;
197 | }
198 | 
199 | @media (min-width: 768px) {
200 |   .container {
201 |     flex-direction: row;
202 |     padding: 4rem;
203 |   }
204 | }
205 | ```
206 | 
207 | **After (HTML):**
208 | ```html
209 | <div class="flex flex-col items-center justify-between min-h-screen p-8 gap-4 md:flex-row md:p-16">
210 |   <!-- Content -->
211 | </div>
212 | ```
213 | 
214 | ### Example 3: Custom Colors and Spacing
215 | 
216 | **Before (custom.css):**
217 | ```css
218 | .brand-card {
219 |   background-color: #ff6b6b;
220 |   padding: 18px;
221 |   margin-bottom: 20px;
222 |   border-radius: 6px;
223 | }
224 | ```
225 | 
226 | **After (tailwind.config.js):**
227 | ```javascript
228 | module.exports = {
229 |   theme: {
230 |     extend: {
231 |       colors: {
232 |         brand: {
233 |           red: '#ff6b6b',
234 |         },
235 |       },
236 |       spacing: {
237 |         '18': '4.5rem',
238 |       },
239 |     },
240 |   },
241 | };
242 | ```
243 | 
244 | **After (HTML):**
245 | ```html
246 | <div class="bg-brand-red p-18 mb-5 rounded-md">
247 |   <!-- Content -->
248 | </div>
249 | ```
250 | 
251 | ## CSS Property to Tailwind Mapping
252 | 
253 | ### Layout
254 | - `display: flex` → `flex`
255 | - `display: grid` → `grid`
256 | - `display: block` → `block`
257 | - `display: inline-block` → `inline-block`
258 | - `position: relative` → `relative`
259 | - `position: absolute` → `absolute`
260 | - `position: fixed` → `fixed`
261 | - `position: sticky` → `sticky`
262 | 
263 | ### Spacing
264 | - `padding: 16px` → `p-4`
265 | - `padding: 8px 16px` → `py-2 px-4`
266 | - `margin: 16px` → `m-4`
267 | - `margin: 0 auto` → `mx-auto`
268 | - `gap: 16px` → `gap-4`
269 | 
270 | ### Typography
271 | - `font-size: 16px` → `text-base`
272 | - `font-weight: 600` → `font-semibold`
273 | - `font-weight: 700` → `font-bold`
274 | - `text-align: center` → `text-center`
275 | - `line-height: 1.5` → `leading-normal`
276 | 
277 | ### Colors
278 | - `color: #000000` → `text-black`
279 | - `background-color: #ffffff` → `bg-white`
280 | - `border-color: #e5e7eb` → `border-gray-200`
281 | 
282 | ### Borders
283 | - `border-radius: 8px` → `rounded-lg`
284 | - `border: 1px solid #e5e7eb` → `border border-gray-200`
285 | - `border-width: 2px` → `border-2`
286 | 
287 | ### Effects
288 | - `box-shadow: 0 1px 3px rgba(0,0,0,0.1)` → `shadow-sm`
289 | - `opacity: 0.5` → `opacity-50`
290 | - `transition: all 0.3s` → `transition-all duration-300`
291 | 
292 | ### Responsive Breakpoints
293 | - `@media (min-width: 640px)` → `sm:`
294 | - `@media (min-width: 768px)` → `md:`
295 | - `@media (min-width: 1024px)` → `lg:`
296 | - `@media (min-width: 1280px)` → `xl:`
297 | - `@media (min-width: 1536px)` → `2xl:`
298 | 
299 | ### State Variants
300 | - `:hover` → `hover:`
301 | - `:focus` → `focus:`
302 | - `:active` → `active:`
303 | - `:disabled` → `disabled:`
304 | - `:first-child` → `first:`
305 | - `:last-child` → `last:`
306 | 
307 | ## Notes
308 | 
309 | ### Best Practices
310 | - Always create backups before refactoring
311 | - Test visual consistency after conversion
312 | - Use browser DevTools to compare before/after
313 | - Consider extracting repeated utility combinations into components
314 | - Use `@apply` directive in CSS for complex repeated patterns
315 | - Leverage Tailwind's JIT mode for custom values
316 | 
317 | ### Performance Considerations
318 | - Tailwind's JIT compiler only includes used utilities
319 | - Purge unused CSS in production builds
320 | - Consider code splitting for large applications
321 | - Use component extraction for repeated patterns
322 | 
323 | ### Common Pitfalls
324 | - Not all CSS can be directly converted (complex animations, keyframes)
325 | - Custom CSS properties may need manual handling
326 | - Browser-specific prefixes require attention
327 | - Z-index values may need custom configuration
328 | 
329 | ### When NOT to Use This Skill
330 | - Projects with minimal CSS (not worth the migration effort)
331 | - CSS-in-JS solutions (styled-components, emotion) - different approach needed
332 | - Complex animations requiring @keyframes (keep in separate CSS file)
333 | - Third-party component libraries with their own styling system
334 | 
335 | ## Manual Review Items
336 | 
337 | After automatic refactoring, manually review:
338 | 1. **Complex animations**: Convert @keyframes to Tailwind's animation utilities or keep in CSS
339 | 2. **CSS Grid templates**: May require custom grid-template-columns/rows
340 | 3. **Custom fonts**: Ensure font-family is configured in Tailwind config
341 | 4. **Calc() functions**: May need custom spacing values
342 | 5. **CSS variables**: Decide whether to convert to Tailwind theme or keep as CSS custom properties
343 | 6. **Print styles**: Keep @media print rules in separate CSS file
344 | 7. **Browser hacks**: Review if still needed with modern Tailwind
345 | 
346 | ## Troubleshooting
347 | 
348 | ### Issue: Colors don't match exactly
349 | **Solution**: Add custom colors to `tailwind.config.js` theme.extend.colors
350 | 
351 | ### Issue: Spacing values not available
352 | **Solution**: Add custom spacing to `tailwind.config.js` theme.extend.spacing
353 | 
354 | ### Issue: Complex selectors not converting
355 | **Solution**: Use `@apply` directive or keep as custom CSS
356 | 
357 | ### Issue: Animations not working
358 | **Solution**: Define custom animations in Tailwind config or use separate CSS file
359 | 
360 | ### Issue: Pseudo-elements (::before, ::after) not converting
361 | **Solution**: Use Tailwind's `before:` and `after:` variants with content utilities
362 | 
363 | ## Related Skills
364 | - `frontend-tailwind-component-library`: Create reusable Tailwind components
365 | - `frontend-responsive-design`: Implement responsive layouts with Tailwind
366 | - `frontend-dark-mode-setup`: Add dark mode support with Tailwind
367 | 
368 | ## Accessibility Considerations
369 | - Ensure color contrast ratios meet WCAG standards after conversion
370 | - Maintain focus indicators (use `focus:` variants)
371 | - Preserve screen reader text and ARIA attributes
372 | - Test keyboard navigation after refactoring
373 | 
374 | ## Version Compatibility
375 | - Tailwind CSS v3.0+
376 | - Works with React, Vue, Angular, and vanilla HTML
377 | - Compatible with Next.js, Vite, and other build tools
</content>
</file>
<file><path>skillet-skills/skills/frontend-green-button-component.md</path>
<content lines="1-350">
  1 | # Green Button Component
  2 | 
  3 | ## Description
  4 | Generates a reusable green button component that displays "POGI AKO" with modern styling, hover effects, and accessibility features. Works across React, Vue, and vanilla HTML/CSS implementations. Use this when you need a consistent, accessible button component with a distinctive green theme.
  5 | 
  6 | ## Category
  7 | frontend
  8 | 
  9 | ## Roles
 10 | frontend, fullstack
 11 | 
 12 | ## Prerequisites
 13 | - Basic understanding of HTML, CSS, and JavaScript
 14 | - For React: React 16.8+ installed (`npm install react react-dom`)
 15 | - For Vue: Vue 3+ installed (`npm install vue`)
 16 | - For vanilla: Modern browser with ES6+ support
 17 | - Text editor or IDE
 18 | 
 19 | ## Steps
 20 | 1. Determine which framework/approach the developer wants to use (React, Vue, or vanilla HTML/CSS)
 21 | 2. Create the component file with appropriate naming convention for the chosen framework
 22 | 3. Implement the button structure with "POGI AKO" text content
 23 | 4. Add CSS styling with green background (#10b981), proper padding, and border-radius
 24 | 5. Implement hover effects with smooth transitions (darker green on hover)
 25 | 6. Add ARIA attributes for accessibility (role, aria-label)
 26 | 7. Include focus states for keyboard navigation
 27 | 8. Add optional props/attributes for customization (disabled state, onClick handler)
 28 | 9. Export the component for reuse across the application
 29 | 10. Create usage example demonstrating how to import and use the component
 30 | 
 31 | ## Inputs
 32 | - Framework choice (string, required): "react", "vue", or "vanilla"
 33 | - Component name (string, optional): Custom name for the component, defaults to "GreenButton"
 34 | - File location (string, optional): Where to create the component file, defaults to appropriate framework convention
 35 | 
 36 | ## Outputs
 37 | - Component file: React (.jsx), Vue (.vue), or vanilla (.html + .css + .js) files
 38 | - Styled button with green background (#10b981)
 39 | - Hover effect with darker green (#059669)
 40 | - ARIA labels for accessibility
 41 | - Usage example in comments or separate file
 42 | 
 43 | ## Example Usage
 44 | 
 45 | ### React Example
 46 | ```jsx
 47 | // GreenButton.jsx
 48 | import React from 'react';
 49 | import './GreenButton.css';
 50 | 
 51 | const GreenButton = ({ onClick, disabled = false, className = '' }) => {
 52 |   return (
 53 |     <button
 54 |       className={`green-button ${className}`}
 55 |       onClick={onClick}
 56 |       disabled={disabled}
 57 |       aria-label="POGI AKO button"
 58 |       type="button"
 59 |     >
 60 |       POGI AKO
 61 |     </button>
 62 |   );
 63 | };
 64 | 
 65 | export default GreenButton;
 66 | ```
 67 | 
 68 | ```css
 69 | /* GreenButton.css */
 70 | .green-button {
 71 |   background-color: #10b981;
 72 |   color: white;
 73 |   padding: 12px 24px;
 74 |   border: none;
 75 |   border-radius: 8px;
 76 |   font-size: 16px;
 77 |   font-weight: 600;
 78 |   cursor: pointer;
 79 |   transition: all 0.3s ease;
 80 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 81 | }
 82 | 
 83 | .green-button:hover:not(:disabled) {
 84 |   background-color: #059669;
 85 |   transform: translateY(-2px);
 86 |   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
 87 | }
 88 | 
 89 | .green-button:active:not(:disabled) {
 90 |   transform: translateY(0);
 91 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 92 | }
 93 | 
 94 | .green-button:focus {
 95 |   outline: 2px solid #10b981;
 96 |   outline-offset: 2px;
 97 | }
 98 | 
 99 | .green-button:disabled {
100 |   background-color: #9ca3af;
101 |   cursor: not-allowed;
102 |   opacity: 0.6;
103 | }
104 | ```
105 | 
106 | ### Vue Example
107 | ```vue
108 | <!-- GreenButton.vue -->
109 | <template>
110 |   <button
111 |     class="green-button"
112 |     @click="handleClick"
113 |     :disabled="disabled"
114 |     aria-label="POGI AKO button"
115 |     type="button"
116 |   >
117 |     POGI AKO
118 |   </button>
119 | </template>
120 | 
121 | <script>
122 | export default {
123 |   name: 'GreenButton',
124 |   props: {
125 |     disabled: {
126 |       type: Boolean,
127 |       default: false
128 |     }
129 |   },
130 |   emits: ['click'],
131 |   methods: {
132 |     handleClick(event) {
133 |       if (!this.disabled) {
134 |         this.$emit('click', event);
135 |       }
136 |     }
137 |   }
138 | };
139 | </script>
140 | 
141 | <style scoped>
142 | .green-button {
143 |   background-color: #10b981;
144 |   color: white;
145 |   padding: 12px 24px;
146 |   border: none;
147 |   border-radius: 8px;
148 |   font-size: 16px;
149 |   font-weight: 600;
150 |   cursor: pointer;
151 |   transition: all 0.3s ease;
152 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
153 | }
154 | 
155 | .green-button:hover:not(:disabled) {
156 |   background-color: #059669;
157 |   transform: translateY(-2px);
158 |   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
159 | }
160 | 
161 | .green-button:active:not(:disabled) {
162 |   transform: translateY(0);
163 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
164 | }
165 | 
166 | .green-button:focus {
167 |   outline: 2px solid #10b981;
168 |   outline-offset: 2px;
169 | }
170 | 
171 | .green-button:disabled {
172 |   background-color: #9ca3af;
173 |   cursor: not-allowed;
174 |   opacity: 0.6;
175 | }
176 | </style>
177 | ```
178 | 
179 | ### Vanilla HTML/CSS/JS Example
180 | ```html
181 | <!-- index.html -->
182 | <!DOCTYPE html>
183 | <html lang="en">
184 | <head>
185 |   <meta charset="UTF-8">
186 |   <meta name="viewport" content="width=device-width, initial-scale=1.0">
187 |   <title>Green Button Component</title>
188 |   <link rel="stylesheet" href="green-button.css">
189 | </head>
190 | <body>
191 |   <button 
192 |     id="greenButton" 
193 |     class="green-button" 
194 |     aria-label="POGI AKO button"
195 |     type="button"
196 |   >
197 |     POGI AKO
198 |   </button>
199 |   
200 |   <script src="green-button.js"></script>
201 | </body>
202 | </html>
203 | ```
204 | 
205 | ```css
206 | /* green-button.css */
207 | .green-button {
208 |   background-color: #10b981;
209 |   color: white;
210 |   padding: 12px 24px;
211 |   border: none;
212 |   border-radius: 8px;
213 |   font-size: 16px;
214 |   font-weight: 600;
215 |   cursor: pointer;
216 |   transition: all 0.3s ease;
217 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
218 |   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
219 | }
220 | 
221 | .green-button:hover:not(:disabled) {
222 |   background-color: #059669;
223 |   transform: translateY(-2px);
224 |   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
225 | }
226 | 
227 | .green-button:active:not(:disabled) {
228 |   transform: translateY(0);
229 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
230 | }
231 | 
232 | .green-button:focus {
233 |   outline: 2px solid #10b981;
234 |   outline-offset: 2px;
235 | }
236 | 
237 | .green-button:disabled {
238 |   background-color: #9ca3af;
239 |   cursor: not-allowed;
240 |   opacity: 0.6;
241 | }
242 | ```
243 | 
244 | ```javascript
245 | // green-button.js
246 | class GreenButton {
247 |   constructor(elementId) {
248 |     this.button = document.getElementById(elementId);
249 |     this.init();
250 |   }
251 | 
252 |   init() {
253 |     if (this.button) {
254 |       this.button.addEventListener('click', this.handleClick.bind(this));
255 |     }
256 |   }
257 | 
258 |   handleClick(event) {
259 |     if (!this.button.disabled) {
260 |       console.log('Green button clicked!');
261 |       // Add your custom click handler logic here
262 |     }
263 |   }
264 | 
265 |   disable() {
266 |     this.button.disabled = true;
267 |   }
268 | 
269 |   enable() {
270 |     this.button.disabled = false;
271 |   }
272 | }
273 | 
274 | // Initialize the button
275 | const greenButton = new GreenButton('greenButton');
276 | ```
277 | 
278 | ## Usage in Application
279 | 
280 | ### React Usage
281 | ```jsx
282 | import GreenButton from './components/GreenButton';
283 | 
284 | function App() {
285 |   const handleClick = () => {
286 |     console.log('Button clicked!');
287 |   };
288 | 
289 |   return (
290 |     <div>
291 |       <GreenButton onClick={handleClick} />
292 |       <GreenButton onClick={handleClick} disabled />
293 |     </div>
294 |   );
295 | }
296 | ```
297 | 
298 | ### Vue Usage
299 | ```vue
300 | <template>
301 |   <div>
302 |     <GreenButton @click="handleClick" />
303 |     <GreenButton @click="handleClick" :disabled="true" />
304 |   </div>
305 | </template>
306 | 
307 | <script>
308 | import GreenButton from './components/GreenButton.vue';
309 | 
310 | export default {
311 |   components: {
312 |     GreenButton
313 |   },
314 |   methods: {
315 |     handleClick() {
316 |       console.log('Button clicked!');
317 |     }
318 |   }
319 | };
320 | </script>
321 | ```
322 | 
323 | ## Notes
324 | - The green color (#10b981) is from the Tailwind CSS emerald-500 palette
325 | - Hover color (#059669) is emerald-700 for consistent design system
326 | - Component includes smooth transitions (0.3s) for professional feel
327 | - ARIA labels ensure screen reader compatibility
328 | - Focus states support keyboard navigation (Tab key)
329 | - Disabled state prevents interaction and provides visual feedback
330 | - Box shadow adds depth and modern appearance
331 | - Transform on hover creates subtle lift effect
332 | - All CSS uses modern properties supported in current browsers
333 | 
334 | ## Accessibility Features
335 | - `aria-label` attribute for screen readers
336 | - Proper focus indicators for keyboard navigation
337 | - Disabled state prevents interaction when appropriate
338 | - Sufficient color contrast (green on white text meets WCAG AA standards)
339 | - Button semantic HTML element for proper role identification
340 | - Hover and focus states are visually distinct
341 | 
342 | ## Customization Options
343 | Developers can extend the component by:
344 | - Adding size variants (small, medium, large)
345 | - Supporting different color themes
346 | - Adding icon support (left or right of text)
347 | - Implementing loading states
348 | - Adding ripple effects on click
349 | - Supporting full-width option
350 | - Adding custom CSS classes for additional styling
</content>
</file>
</files>
<environment_details>
# VSCode Visible Files
hello.py

# VSCode Open Tabs
hello.py

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T13:58:44.248Z
User time zone: Asia/Shanghai, UTC+8:00

# Current Cost
$0.03

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

<attempt_completion>
<result>
# Available Skills

I found **3 skills** in the skillet-skills repository:

## 1. **Git Commit and Push Recent Updates** (DevOps)
- **Category**: devops
- **Roles**: backend, frontend, fullstack, devops
- **Description**: Automates staging, committing, and pushing changes to Git repositories with meaningful commit messages
- **Key Features**: Auto-generates commit messages, handles conflicts, supports conventional commits

## 2. **CSS to Tailwind Refactor** (Frontend)
- **Category**: frontend
- **Roles**: frontend, fullstack
- **Description**: Converts traditional CSS styles into Tailwind CSS utility classes while preserving functionality
- **Key Features**: Analyzes CSS files, maps properties to Tailwind utilities, handles responsive breakpoints and state variants

## 3. **Green Button Component** (Frontend)
- **Category**: frontend
- **Roles**: frontend, fullstack
- **Description**: Generates a reusable green button component displaying "POGI AKO" with modern styling and accessibility features
- **Key Features**: Works with React, Vue, and vanilla HTML/CSS, includes hover effects and ARIA labels

**Note**: The skill-index.json file shows 0 skills, but there are 3 actual skill files in the skills directory. The index may need to be updated to reflect these existing skills.
</result>
</attempt_completion>

