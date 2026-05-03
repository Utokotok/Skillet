**User:**

<task>
can you explain to me bob the workflow for you when making a skill
</task>
<environment_details>
# VSCode Visible Files
skillet-skills\skills\skill-impact-analysis.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:44:36.251Z
User time zone: Asia/Singapore, UTC+8:00

# Current Cost
$0.00

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>


# Current Workspace Directory (e:/IBM DEV DAY) Files
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
skillet-skills/skills/devops-docker-initialize-project.md
skillet-skills/skills/devops-git-commit-push.md
skillet-skills/skills/frontend-css-to-tailwind-refactor.md
skillet-skills/skills/frontend-green-button-component.md
skillet-skills/skills/frontend-local-environment-reset.md
skillet-skills/skills/skill-impact-analysis.md
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

I'll explain my workflow for creating a skill by first examining the existing skill files to understand the format and structure.

<read_file>
<args>
<file>
<path>skillet-policies/rules/skill-format.md</path>
</file>
<file>
<path>skillet-skills/skills/skill-impact-analysis.md</path>
</file>
<file>
<path>skillet-skills/skills/frontend-green-button-component.md</path>
</file>
</args>
</read_file>

---

**User:**

[read_file for 'skillet-policies/rules/skill-format.md', 'skillet-skills/skills/skill-impact-analysis.md', 'skillet-skills/skills/frontend-green-button-component.md'] Result:
<files>
<file><path>skillet-policies/rules/skill-format.md</path>
<content lines="1-316">
  1 | # Skill Format for Bob (Markdown)
  2 | 
  3 | This format is used to generate new reusable skills for Bob. All generated skills must be in Markdown (`.md`) format and follow this structure.
  4 | 
  5 | ---
  6 | 
  7 | ## Format Requirements
  8 | 
  9 | - **Format**: Markdown
 10 | - **File Extension**: `.md`
 11 | - **Maximum Length**: 500 lines
 12 | - **Encoding**: UTF-8
 13 | 
 14 | ---
 15 | 
 16 | ## Markdown Structure
 17 | 
 18 | ```
 19 | # [Skill Name]
 20 | 
 21 | [2-3 sentence description]
 22 | 
 23 | **Category:** [backend|frontend|devops|qa|shared]
 24 | **Roles:** [backend, frontend, fullstack, devops, qa]
 25 | 
 26 | ---
 27 | 
 28 | ## Prerequisites
 29 | 
 30 | - [Requirement 1]
 31 | - [Requirement 2]
 32 | - [Requirement 3]
 33 | 
 34 | ---
 35 | 
 36 | ## Inputs
 37 | 
 38 | | Name | Type | Required | Description |
 39 | |------|------|----------|-------------|
 40 | | `input_name` | string | Yes | What this input is used for |
 41 | | `input_name_2` | number | No | What this input is used for |
 42 | 
 43 | ---
 44 | 
 45 | ## Steps
 46 | 
 47 | ### Step 1: [Short Title]
 48 | 
 49 | First, [imperative instruction]. [Specific command or tool to use].
 50 | [Expected outcome or what to verify].
 51 | 
 52 | ### Step 2: [Short Title]
 53 | 
 54 | Next, [imperative instruction]. [Specific command or tool to use].
 55 | [Expected outcome or what to verify].
 56 | 
 57 | ### Step 3: [Short Title]
 58 | 
 59 | Then, [imperative instruction]. [Specific command or tool to use].
 60 | [Expected outcome or what to verify].
 61 | 
 62 | ---
 63 | 
 64 | ## Outputs
 65 | 
 66 | - `path/to/output.ext` — Description of what this file contains and its purpose
 67 | - `path/to/output2.ext` — Description of what this file contains and its purpose
 68 | 
 69 | ---
 70 | 
 71 | ## Example Usage
 72 | 
 73 | **User request:**
 74 | > [Concrete example of what the user would ask for]
 75 | 
 76 | **Expected output:**
 77 | - `file1.js` — Brief description
 78 | - `file2.js` — Brief description
 79 | 
 80 | ---
 81 | 
 82 | ## Notes
 83 | 
 84 | - [Optional: Additional tip or context]
 85 | - [Optional: Performance consideration]
 86 | 
 87 | ## Warnings
 88 | 
 89 | > ⚠️ [Important caveat to watch out for]
 90 | 
 91 | > ⚠️ [Common pitfall to avoid]
 92 | 
 93 | ## Related Skills
 94 | 
 95 | - [Name of related skill]
 96 | - [Name of another related skill]
 97 | ```
 98 | 
 99 | ---
100 | 
101 | ## Step Writing Guidelines
102 | 
103 | Each step MUST be written as **imperative, specific instructions** — not as a high-level workflow overview.
104 | 
105 | ### ❌ Wrong (Workflow Overview Style)
106 | 
107 | ```markdown
108 | ### Step 1: Analyze CSS
109 | Analyze the CSS file.
110 | 
111 | ### Step 2: Update Styles
112 | Update styles.
113 | ```
114 | 
115 | ### ✅ Correct (Imperative Instruction Style)
116 | 
117 | ```markdown
118 | ### Step 1: Read the CSS File
119 | 
120 | First, run the `read_file` tool on the CSS file at the path provided by the user.
121 | Look for existing color variables, font definitions, and layout patterns.
122 | Note any naming conventions used for CSS classes.
123 | 
124 | ### Step 2: Apply New Theme Colors
125 | 
126 | Next, use the `apply_diff` tool to update the CSS file.
127 | Replace the old color values with the new theme colors specified by the user.
128 | Ensure all hex codes are lowercase and use shorthand notation where possible.
129 | ```
130 | 
131 | ### Key Characteristics of Good Steps
132 | 
133 | 1. **Start with action words** — "First, run...", "Next, use...", "Then, execute...", "Finally, verify..."
134 | 2. **Specify exact tools** — "use the `read_file` tool", "run `npm test` with the `execute_command` tool"
135 | 3. **Include what to look for** — "Look for existing patterns", "Verify that all tests pass"
136 | 4. **Mention expected outcomes** — "This will create a new file", "The output should show no errors"
137 | 5. **Be specific about parameters** — "at the path provided by the user", "with the `--recursive` flag"
138 | 
139 | ---
140 | 
141 | ## Description Guidelines
142 | 
143 | The description (first paragraph) is critical — it helps Bob decide when to trigger this skill.
144 | 
145 | | | Example |
146 | |-|---------|
147 | | ✅ Clear | "Generates a complete REST API endpoint with authentication, validation, and tests. Use this when adding a new authenticated endpoint following company standards." |
148 | | ❌ Vague | "Helps with API stuff." |
149 | 
150 | Your description should:
151 | 1. **State what the skill does** — be specific about the output
152 | 2. **Specify when to use it** — name the trigger scenario
153 | 3. **Mention key features** — validation, error handling, test coverage, etc.
154 | 
155 | ---
156 | 
157 | ## Validation Checklist
158 | 
159 | Before finalizing a generated skill, verify:
160 | 
161 | - [ ] File is valid Markdown (`.md`)
162 | - [ ] File is under 500 lines
163 | - [ ] Skill name is clear and descriptive
164 | - [ ] Description is 2–3 sentences and helps Bob decide when to trigger it
165 | - [ ] `Category` is one of: `backend`, `frontend`, `devops`, `qa`, `shared`
166 | - [ ] `Roles` contains only valid values: `backend`, `frontend`, `fullstack`, `devops`, `qa`
167 | - [ ] At least 2 prerequisites listed
168 | - [ ] At least 3 steps, each using imperative instructions
169 | - [ ] Each step names the exact tool or command to use
170 | - [ ] Inputs table defines all required inputs with types
171 | - [ ] Outputs list all files that will be created
172 | - [ ] Example usage is concrete and realistic
173 | - [ ] No hardcoded credentials or secrets
174 | - [ ] Follows company coding standards
175 | 
176 | ---
177 | 
178 | ## Complete Example
179 | 
180 | ````markdown
181 | # REST API Endpoint Generator
182 | 
183 | Generates a complete REST API endpoint with authentication middleware, input validation
184 | using Zod, error handling, and comprehensive tests. Use this when you need to add a new
185 | API endpoint following company security and coding standards. The generated endpoint will
186 | be production-ready with proper error responses and test coverage.
187 | 
188 | **Category:** backend
189 | **Roles:** backend, fullstack
190 | 
191 | ---
192 | 
193 | ## Prerequisites
194 | 
195 | - Express.js project with existing route structure in `routes/` directory
196 | - Zod installed as a dependency (`npm install zod`)
197 | - Authentication middleware available at `middleware/auth.js`
198 | - Test framework (Jest or Mocha) configured in `package.json`
199 | 
200 | ---
201 | 
202 | ## Inputs
203 | 
204 | | Name | Type | Required | Description |
205 | |------|------|----------|-------------|
206 | | `resource_name` | string | Yes | Name of the resource (e.g., `users`, `orders`) |
207 | | `http_method` | string | Yes | HTTP method: GET, POST, PUT, DELETE, or PATCH |
208 | | `required_fields` | array | Yes | List of required fields and types, e.g. `[{name: 'email', type: 'string'}]` |
209 | | `optional_fields` | array | No | List of optional fields and types |
210 | | `requires_auth` | boolean | No | Whether the endpoint requires authentication (default: `true`) |
211 | 
212 | ---
213 | 
214 | ## Steps
215 | 
216 | ### Step 1: Analyze Existing Routes
217 | 
218 | First, run the `list_files` tool on the `routes/` directory to analyze existing route files.
219 | Look for naming conventions, file structure patterns, and how routes are organized.
220 | Note the import patterns used for middleware and controllers.
221 | 
222 | ### Step 2: Read Existing Route Files
223 | 
224 | Next, use the `read_file` tool to read 2–3 existing route files together.
225 | Examine how authentication middleware is applied, how validation schemas are structured,
226 | and how error handling is implemented. This ensures the new file is consistent with the
227 | existing codebase.
228 | 
229 | ### Step 3: Create the Route File
230 | 
231 | Then, use the `write_to_file` tool to create a new route file at `routes/{resource}.js`.
232 | Include the authentication middleware import, define the Zod validation schema for the
233 | request body, and implement the route handler with `try/catch` error handling.
234 | Follow the patterns observed in Step 2.
235 | 
236 | ### Step 4: Create the Controller File
237 | 
238 | After that, use the `write_to_file` tool to create a controller file at
239 | `controllers/{resource}Controller.js`. Implement the business logic with proper error
240 | handling, input sanitization, and response formatting. Include JSDoc comments for all functions.
241 | 
242 | ### Step 5: Register the New Route
243 | 
244 | Next, use the `read_file` tool to check the main router file (usually `app.js` or
245 | `routes/index.js`). Then use the `apply_diff` tool to add the new route import and
246 | registration, maintaining alphabetical order if that is the existing pattern.
247 | 
248 | ### Step 6: Create Tests
249 | 
250 | Then, use the `write_to_file` tool to create a test file at `tests/{resource}.test.js`.
251 | Include test cases for: successful requests, validation errors, authentication failures,
252 | and edge cases. Use the same test structure as existing test files.
253 | 
254 | ### Step 7: Verify All Tests Pass
255 | 
256 | Finally, run the `execute_command` tool with `npm test` to verify all tests pass.
257 | If any tests fail, use the `read_file` tool to examine the error output and use
258 | `apply_diff` to fix the issues. Confirm that the new endpoint is working correctly.
259 | 
260 | ---
261 | 
262 | ## Outputs
263 | 
264 | - `routes/{resource}.js` — Express route file with authentication, validation, and error handling
265 | - `controllers/{resource}Controller.js` — Controller with business logic and proper error handling
266 | - `tests/{resource}.test.js` — Comprehensive unit tests covering success and error cases
267 | 
268 | ---
269 | 
270 | ## Example Usage
271 | 
272 | **User request:**
273 | > Generate a POST endpoint for creating orders with required fields:
274 | > `customerId` (string), `items` (array), `totalAmount` (number).
275 | > Include authentication and validation.
276 | 
277 | **Expected output:**
278 | - `routes/orders.js` — POST route with auth middleware and Zod validation
279 | - `controllers/ordersController.js` — `createOrder` function with business logic
280 | - `tests/orders.test.js` — Tests for success, validation errors, and auth failures
281 | 
282 | ---
283 | 
284 | ## Notes
285 | 
286 | - Always maintain consistency with existing code patterns in the project
287 | - Use Zod for validation to ensure type safety and clear error messages
288 | - Include JSDoc comments for better IDE support and documentation
289 | 
290 | ## Warnings
291 | 
292 | > ⚠️ Ensure authentication middleware is properly configured before using this skill.
293 | 
294 | > ⚠️ Test the endpoint manually after generation to verify it works with your database.
295 | 
296 | > ⚠️ Review generated validation schemas to ensure they match your business requirements.
297 | 
298 | ## Related Skills
299 | 
300 | - Database Model Generator
301 | - API Documentation Generator
302 | - Integration Test Generator
303 | ````
304 | 
305 | ---
306 | 
307 | ## Notes for Skill Generation
308 | 
309 | 1. **Keep it under 500 lines** — be concise but complete
310 | 2. **Use imperative steps** — every step tells Bob exactly what to do
311 | 3. **Write a helpful description** — this is how Bob decides to use the skill
312 | 4. **Be specific about tools** — name exact Bob tools (`read_file`, `apply_diff`, etc.)
313 | 5. **Include realistic examples** — show concrete use cases, not abstract ones
314 | 6. **Think about prerequisites** — what must exist before this skill can run?
315 | 7. **Define clear outputs** — what files or changes will be made?
316 | 8. **Use the checklist** — validate before finalizing
</content>
</file>
<file><path>skillet-skills/skills/skill-impact-analysis.md</path>
<content lines="1-253">
  1 | # Skill Impact Analysis
  2 | 
  3 | Analyzes the impact of updating or removing an existing skill by scanning for dependencies across tiers, workflows, and related skills. Use this before modifying or deprecating a skill to understand which components will be affected. Generates a formatted impact report that surfaces all dependencies, usage patterns, and potential breaking changes for voters and approvers to review before any change is committed.
  4 | 
  5 | **Category:** shared
  6 | **Roles:** backend, frontend, fullstack, devops, qa
  7 | 
  8 | ---
  9 | 
 10 | ## Prerequisites
 11 | 
 12 | - Access to the skillet-skills repository with all skill files
 13 | - Access to the skillet-policies repository for workflow definitions
 14 | - Read permissions for all tier configuration files
 15 | - Understanding of the skill naming convention and structure
 16 | - Git installed for repository scanning
 17 | 
 18 | ---
 19 | 
 20 | ## Inputs
 21 | 
 22 | | Name | Type | Required | Description |
 23 | |------|------|----------|-------------|
 24 | | `skill_name` | string | Yes | Name of the skill to analyze (e.g., "frontend-css-to-tailwind-refactor") |
 25 | | `analysis_type` | string | Yes | Type of analysis: "update" or "remove" |
 26 | | `include_indirect` | boolean | No | Include indirect dependencies (skills that depend on dependent skills), defaults to true |
 27 | | `output_format` | string | No | Output format: "markdown" or "json", defaults to "markdown" |
 28 | 
 29 | ---
 30 | 
 31 | ## Steps
 32 | 
 33 | ### Step 1: Validate Skill Exists
 34 | 
 35 | First, use the `read_file` tool to check if the skill file exists at `skillet-skills/skills/{skill_name}.md`.
 36 | Verify the file is valid and contains the required metadata (Category, Roles).
 37 | If the skill doesn't exist, stop and inform the user that the skill cannot be found.
 38 | 
 39 | ### Step 2: Read Skill Metadata
 40 | 
 41 | Next, use the `read_file` tool to extract the skill's metadata from the markdown file.
 42 | Parse the Category, Roles, and Related Skills sections to understand the skill's context.
 43 | Note any dependencies or prerequisites mentioned in the skill documentation.
 44 | 
 45 | ### Step 3: Scan All Skills for Direct References
 46 | 
 47 | Then, use the `search_files` tool to search for references to the target skill across all skill files.
 48 | Search in the `skillet-skills/skills/` directory using the regex pattern containing the skill name.
 49 | Look for references in the "Related Skills" section and in step descriptions.
 50 | Record each file that references the target skill as a direct dependency.
 51 | 
 52 | ### Step 4: Scan Workflow Definitions
 53 | 
 54 | After that, use the `search_files` tool to search for the skill name in workflow definitions.
 55 | Search in the `skillet-policies/` directory for any workflow or tier configuration files.
 56 | Look for skill references in automation rules, approval workflows, or tier assignments.
 57 | Document which workflows and tiers currently use this skill.
 58 | 
 59 | ### Step 5: Analyze Skill Index
 60 | 
 61 | Next, use the `read_file` tool to read the `skillet-skills/metadata/skill-index.json` file.
 62 | Check if the skill is registered in the index and note its category statistics.
 63 | Identify how the skill contributes to the overall skill ecosystem metrics.
 64 | 
 65 | ### Step 6: Identify Indirect Dependencies
 66 | 
 67 | Then, if `include_indirect` is true, analyze skills that depend on the direct dependents.
 68 | For each skill found in Step 3, use the `search_files` tool to find skills that reference them.
 69 | Build a dependency tree showing the cascade effect of removing or updating the skill.
 70 | This reveals the full impact scope beyond immediate dependencies.
 71 | 
 72 | ### Step 7: Check for Breaking Changes
 73 | 
 74 | After that, use the `read_file` tool to compare the skill's current structure with standard format.
 75 | Identify any unique patterns, custom inputs, or outputs that dependent skills might rely on.
 76 | Flag potential breaking changes if the skill is being updated (changed inputs, removed steps, etc.).
 77 | Document compatibility concerns for each dependent skill.
 78 | 
 79 | ### Step 8: Generate Impact Report
 80 | 
 81 | Finally, compile all findings into a formatted impact report using the specified output format.
 82 | Include sections for: Executive Summary, Direct Dependencies, Indirect Dependencies, Workflow Impact, Breaking Changes, and Recommendations.
 83 | Present the complete formatted Markdown report directly in the chat window for immediate review.
 84 | Ensure the report includes clear action items for voters and approvers.
 85 | 
 86 | ---
 87 | 
 88 | ## Outputs
 89 | 
 90 | - Formatted Markdown report — Comprehensive impact analysis report displayed directly in chat with all dependencies and recommendations
 91 | - Executive summary — Quick overview of impact scope (number of affected skills, workflows, and tiers)
 92 | - Dependency graph — Visual representation of the relationship tree included in the report
 93 | 
 94 | ---
 95 | 
 96 | ## Example Usage
 97 | 
 98 | **User request:**
 99 | > I need to update the "frontend-css-to-tailwind-refactor" skill to add a new input parameter. Can you analyze the impact?
100 | 
101 | **Expected output:**
102 | - Formatted Markdown report displayed in chat showing:
103 |   - 3 skills directly reference this skill in "Related Skills"
104 |   - 2 workflows use this skill for frontend automation
105 |   - 1 tier (frontend) has this skill in its recommended list
106 |   - Breaking change warning: Adding required input will break existing workflows
107 |   - Recommendation: Make new parameter optional or update dependent workflows first
108 | 
109 | ---
110 | 
111 | ## Impact Report Template
112 | 
113 | The generated report follows this structure:
114 | 
115 | ```markdown
116 | # Impact Analysis Report: {skill_name}
117 | 
118 | **Analysis Type:** {update|remove}
119 | **Generated:** {timestamp}
120 | **Analyzed By:** Bob
121 | 
122 | ---
123 | 
124 | ## Executive Summary
125 | 
126 | - **Direct Dependencies:** {count} skills
127 | - **Indirect Dependencies:** {count} skills
128 | - **Affected Workflows:** {count} workflows
129 | - **Affected Tiers:** {list of tiers}
130 | - **Risk Level:** {Low|Medium|High|Critical}
131 | 
132 | ---
133 | 
134 | ## Direct Dependencies
135 | 
136 | ### Skills Referencing This Skill
137 | 
138 | 1. **{skill-name-1}**
139 |    - Reference Type: Related Skills section
140 |    - Impact: {description}
141 |    - Action Required: {action}
142 | 
143 | 2. **{skill-name-2}**
144 |    - Reference Type: Step 3 instruction
145 |    - Impact: {description}
146 |    - Action Required: {action}
147 | 
148 | ---
149 | 
150 | ## Indirect Dependencies
151 | 
152 | ### Second-Level Dependencies
153 | 
154 | - **{skill-name-3}** depends on **{skill-name-1}** which depends on **{target-skill}**
155 |   - Cascade Impact: {description}
156 | 
157 | ---
158 | 
159 | ## Workflow Impact
160 | 
161 | ### Affected Workflows
162 | 
163 | 1. **Frontend Automation Workflow**
164 |    - Location: `skillet-policies/workflows/frontend-automation.md`
165 |    - Usage: Triggered on CSS file changes
166 |    - Impact: {description}
167 |    - Mitigation: {recommendation}
168 | 
169 | ---
170 | 
171 | ## Breaking Changes Analysis
172 | 
173 | ### Potential Breaking Changes
174 | 
175 | - ⚠️ **Input Parameter Change:** Adding required `new_param` will break existing calls
176 | - ⚠️ **Output Format Change:** Modified output structure may break downstream consumers
177 | - ✅ **Backward Compatible:** Step reordering does not affect external dependencies
178 | 
179 | ---
180 | 
181 | ## Recommendations
182 | 
183 | ### For Skill Update
184 | 
185 | 1. Make new parameters optional with sensible defaults
186 | 2. Update all dependent skills' documentation
187 | 3. Notify workflow owners of upcoming changes
188 | 4. Create migration guide for affected users
189 | 5. Version the skill if breaking changes are unavoidable
190 | 
191 | ### For Skill Removal
192 | 
193 | 1. Deprecate skill with 30-day notice period
194 | 2. Update all dependent skills to remove references
195 | 3. Provide alternative skill recommendations
196 | 4. Archive skill documentation for historical reference
197 | 5. Update skill index and category statistics
198 | 
199 | ---
200 | 
201 | ## Approval Checklist
202 | 
203 | - [ ] All direct dependencies identified and documented
204 | - [ ] Workflow owners notified of changes
205 | - [ ] Breaking changes clearly communicated
206 | - [ ] Migration path defined for affected users
207 | - [ ] Documentation updates planned
208 | - [ ] Rollback plan prepared
209 | - [ ] Testing strategy defined for dependent skills
210 | 
211 | ---
212 | 
213 | ## Next Steps
214 | 
215 | 1. Review this report with stakeholders
216 | 2. Get approval from affected tier owners
217 | 3. Schedule change implementation
218 | 4. Update dependent skills and workflows
219 | 5. Communicate changes to all users
220 | 6. Monitor for issues post-deployment
221 | ```
222 | 
223 | ---
224 | 
225 | ## Notes
226 | 
227 | - Always run impact analysis before modifying or removing any skill
228 | - The analysis is read-only and does not modify any files
229 | - Reports are displayed directly in chat for immediate review and decision-making
230 | - Consider running analysis periodically to maintain dependency awareness
231 | - The formatted report can be copied and saved by users as needed
232 | - The dependency tree can reveal unexpected relationships in complex skill ecosystems
233 | 
234 | ---
235 | 
236 | ## Warnings
237 | 
238 | > ⚠️ Removing a skill without impact analysis can break dependent workflows and cause system failures.
239 | 
240 | > ⚠️ High-impact skills (those with many dependencies) require extended review periods and stakeholder approval.
241 | 
242 | > ⚠️ Indirect dependencies may not be immediately obvious; always include them in the analysis.
243 | 
244 | > ⚠️ Skills referenced in automation workflows require coordination with DevOps before changes.
245 | 
246 | ---
247 | 
248 | ## Related Skills
249 | 
250 | - Skill Version Management
251 | - Skill Deprecation Workflow
252 | - Dependency Graph Visualization
253 | - Skill Documentation Generator
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
skillet-skills\skills\skill-impact-analysis.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:44:49.609Z
User time zone: Asia/Singapore, UTC+8:00

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

<attempt_completion>
<result>
# My Workflow for Creating a Skill

Based on the skill format guidelines and existing examples, here's my step-by-step workflow when creating a new skill:

## 1. **Understand the Request**
- Listen carefully to what the user needs
- Identify the specific problem the skill should solve
- Determine the target audience (backend, frontend, devops, qa, fullstack)

## 2. **Analyze Existing Patterns**
- Use `read_file` to examine similar existing skills
- Study the skill format guidelines in `skillet-policies/rules/skill-format.md`
- Note naming conventions, structure patterns, and writing style
- Check the skill index to understand the ecosystem

## 3. **Define Core Elements**
- **Name**: Clear, descriptive, follows pattern: `{category}-{action}-{subject}`
- **Description**: 2-3 sentences explaining what it does and when to use it
- **Category**: backend, frontend, devops, qa, or shared
- **Roles**: Who can use this skill
- **Prerequisites**: What must exist before using the skill

## 4. **Structure the Inputs**
- Create a table with: Name, Type, Required, Description
- Be specific about data types and requirements
- Include optional parameters with sensible defaults

## 5. **Write Imperative Steps**
Each step must:
- Start with action words: "First, run...", "Next, use...", "Then, execute..."
- Specify exact tools: `read_file`, `apply_diff`, `write_to_file`, `execute_command`
- Include what to look for and verify
- Mention expected outcomes
- Be specific about parameters and paths

**Example of good step writing:**
```markdown
### Step 1: Read the CSS File

First, run the `read_file` tool on the CSS file at the path provided by the user.
Look for existing color variables, font definitions, and layout patterns.
Note any naming conventions used for CSS classes.
```

## 6. **Define Clear Outputs**
- List all files that will be created or modified
- Include brief descriptions of each output's purpose
- Be specific about file paths and formats

## 7. **Create Realistic Examples**
- Write concrete user requests (not abstract)
- Show expected outputs with actual file names
- Demonstrate the skill's value clearly

## 8. **Add Supporting Sections**
- **Notes**: Tips, performance considerations, best practices
- **Warnings**: Common pitfalls, important caveats (use ⚠️)
- **Related Skills**: Link to complementary skills

## 9. **Validate Against Checklist**
- File is valid Markdown (.md)
- Under 500 lines
- All required sections present
- Steps use imperative instructions
- No hardcoded secrets
- Follows company standards

## 10. **Create the File**
- Use `write_to_file` with complete content
- Place in `skillet-skills/skills/` directory
- Follow naming convention: `{category}-{descriptive-name}.md`
- Include accurate line count

## Key Principles I Follow:

✅ **Be Specific**: Name exact tools and commands
✅ **Be Imperative**: Tell me what to do, not what happens
✅ **Be Complete**: Include all necessary context
✅ **Be Consistent**: Follow existing patterns
✅ **Be Helpful**: Write for the person who will use this

❌ **Avoid**: Vague descriptions, workflow overviews, missing prerequisites, hardcoded values

## Tools I Use Most:
- `read_file` - To analyze existing skills and understand patterns
- `write_to_file` - To create the new skill file
- `search_files` - To find similar skills or check for duplicates
- `list_code_definition_names` - To understand codebase structure

This workflow ensures every skill I create is actionable, consistent, and immediately useful for developers.
</result>
</attempt_completion>

---

**User:**

[attempt_completion] Result:
The user has provided feedback on the results. Consider their input to continue the task, and then attempt completion again.
<feedback>
what can I change for you not to forget to always read the skill-generator md when creating a skill as it houses important guidelines and the important validation
</feedback>
<environment_details>
# VSCode Visible Files
skillet-skills\skills\skill-impact-analysis.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:46:50.684Z
User time zone: Asia/Singapore, UTC+8:00

# Current Cost
$0.05

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

I understand! You want me to always reference the skill format guidelines file. Let me check if there's a specific skill-generator.md file I should be reading:

<search_files>
<path>skillet-policies</path>
<regex>skill-generator</regex>
<file_pattern>*.md</file_pattern>
</search_files>

---

**User:**

[search_files for 'skill-generator' in '*.md'] Result:
Found 0 results.
<environment_details>
# VSCode Visible Files
skillet-skills\skills\skill-impact-analysis.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:46:59.709Z
User time zone: Asia/Singapore, UTC+8:00

# Current Cost
$0.09

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

<search_files>
<path>skillet-policies/rules</path>
<regex>.*</regex>
<file_pattern>*.md</file_pattern>
</search_files>

---

**User:**

[search_files for '.*' in '*.md'] Result:
Found 3 results.

# skillet-policies/rules/skill-format.md
  1 | # Skill Format for Bob (Markdown)
  2 | 
  3 | This format is used to generate new reusable skills for Bob. All generated skills must be in Markdown (`.md`) format and follow this structure.
  4 | 
  5 | ---
  6 | 
  7 | ## Format Requirements
  8 | 
  9 | - **Format**: Markdown
 10 | - **File Extension**: `.md`
 11 | - **Maximum Length**: 500 lines
 12 | - **Encoding**: UTF-8
 13 | 
 14 | ---
 15 | 
 16 | ## Markdown Structure
 17 | 
 18 | ```
 19 | # [Skill Name]
 20 | 
 21 | [2-3 sentence description]
 22 | 
 23 | **Category:** [backend|frontend|devops|qa|shared]
 24 | **Roles:** [backend, frontend, fullstack, devops, qa]
 25 | 
 26 | ---
 27 | 
 28 | ## Prerequisites
 29 | 
 30 | - [Requirement 1]
 31 | - [Requirement 2]
 32 | - [Requirement 3]
 33 | 
 34 | ---
 35 | 
 36 | ## Inputs
 37 | 
 38 | | Name | Type | Required | Description |
 39 | |------|------|----------|-------------|
 40 | | `input_name` | string | Yes | What this input is used for |
 41 | | `input_name_2` | number | No | What this input is used for |
 42 | 
 43 | ---
 44 | 
 45 | ## Steps
 46 | 
 47 | ### Step 1: [Short Title]
 48 | 
 49 | First, [imperative instruction]. [Specific command or tool to use].
 50 | [Expected outcome or what to verify].
 51 | 
 52 | ### Step 2: [Short Title]
 53 | 
 54 | Next, [imperative instruction]. [Specific command or tool to use].
 55 | [Expected outcome or what to verify].
 56 | 
 57 | ### Step 3: [Short Title]
 58 | 
 59 | Then, [imperative instruction]. [Specific command or tool to use].
 60 | [Expected outcome or what to verify].
 61 | 
 62 | ---
 63 | 
 64 | ## Outputs
 65 | 
 66 | - `path/to/output.ext` — Description of what this file contains and its purpose
 67 | - `path/to/output2.ext` — Description of what this file contains and its purpose
 68 | 
 69 | ---
 70 | 
 71 | ## Example Usage
 72 | 
 73 | **User request:**
 74 | > [Concrete example of what the user would ask for]
 75 | 
 76 | **Expected output:**
 77 | - `file1.js` — Brief description
 78 | - `file2.js` — Brief description
 79 | 
 80 | ---
 81 | 
 82 | ## Notes
 83 | 
 84 | - [Optional: Additional tip or context]
 85 | - [Optional: Performance consideration]
 86 | 
 87 | ## Warnings
 88 | 
 89 | > ⚠️ [Important caveat to watch out for]
 90 | 
 91 | > ⚠️ [Common pitfall to avoid]
 92 | 
 93 | ## Related Skills
 94 | 
 95 | - [Name of related skill]
 96 | - [Name of another related skill]
 97 | ```
 98 | 
 99 | ---
100 | 
101 | ## Step Writing Guidelines
102 | 
103 | Each step MUST be written as **imperative, specific instructions** — not as a high-level workflow overview.
104 | 
105 | ### ❌ Wrong (Workflow Overview Style)
106 | 
107 | ```markdown
108 | ### Step 1: Analyze CSS
109 | Analyze the CSS file.
110 | 
111 | ### Step 2: Update Styles
112 | Update styles.
113 | ```
114 | 
115 | ### ✅ Correct (Imperative Instruction Style)
116 | 
117 | ```markdown
118 | ### Step 1: Read the CSS File
119 | 
120 | First, run the `read_file` tool on the CSS file at the path provided by the user.
121 | Look for existing color variables, font definitions, and layout patterns.
122 | Note any naming conventions used for CSS classes.
123 | 
124 | ### Step 2: Apply New Theme Colors
125 | 
126 | Next, use the `apply_diff` tool to update the CSS file.
127 | Replace the old color values with the new theme colors specified by the user.
128 | Ensure all hex codes are lowercase and use shorthand notation where possible.
129 | ```
130 | 
131 | ### Key Characteristics of Good Steps
132 | 
133 | 1. **Start with action words** — "First, run...", "Next, use...", "Then, execute...", "Finally, verify..."
134 | 2. **Specify exact tools** — "use the `read_file` tool", "run `npm test` with the `execute_command` tool"
135 | 3. **Include what to look for** — "Look for existing patterns", "Verify that all tests pass"
136 | 4. **Mention expected outcomes** — "This will create a new file", "The output should show no errors"
137 | 5. **Be specific about parameters** — "at the path provided by the user", "with the `--recursive` flag"
138 | 
139 | ---
140 | 
141 | ## Description Guidelines
142 | 
143 | The description (first paragraph) is critical — it helps Bob decide when to trigger this skill.
144 | 
145 | | | Example |
146 | |-|---------|
147 | | ✅ Clear | "Generates a complete REST API endpoint with authentication, validation, and tests. Use this when adding a new authenticated endpoint following company standards." |
148 | | ❌ Vague | "Helps with API stuff." |
149 | 
150 | Your description should:
151 | 1. **State what the skill does** — be specific about the output
152 | 2. **Specify when to use it** — name the trigger scenario
153 | 3. **Mention key features** — validation, error handling, test coverage, etc.
154 | 
155 | ---
156 | 
157 | ## Validation Checklist
158 | 
159 | Before finalizing a generated skill, verify:
160 | 
161 | - [ ] File is valid Markdown (`.md`)
162 | - [ ] File is under 500 lines
163 | - [ ] Skill name is clear and descriptive
164 | - [ ] Description is 2–3 sentences and helps Bob decide when to trigger it
165 | - [ ] `Category` is one of: `backend`, `frontend`, `devops`, `qa`, `shared`
166 | - [ ] `Roles` contains only valid values: `backend`, `frontend`, `fullstack`, `devops`, `qa`
167 | - [ ] At least 2 prerequisites listed
168 | - [ ] At least 3 steps, each using imperative instructions
169 | - [ ] Each step names the exact tool or command to use
170 | - [ ] Inputs table defines all required inputs with types
171 | - [ ] Outputs list all files that will be created
172 | - [ ] Example usage is concrete and realistic
173 | - [ ] No hardcoded credentials or secrets
174 | - [ ] Follows company coding standards
175 | 
176 | ---
177 | 
178 | ## Complete Example
179 | 
180 | ````markdown
181 | # REST API Endpoint Generator
182 | 
183 | Generates a complete REST API endpoint with authentication middleware, input validation
184 | using Zod, error handling, and comprehensive tests. Use this when you need to add a new
185 | API endpoint following company security and coding standards. The generated endpoint will
186 | be production-ready with proper error responses and test coverage.
187 | 
188 | **Category:** backend
189 | **Roles:** backend, fullstack
190 | 
191 | ---
192 | 
193 | ## Prerequisites
194 | 
195 | - Express.js project with existing route structure in `routes/` directory
196 | - Zod installed as a dependency (`npm install zod`)
197 | - Authentication middleware available at `middleware/auth.js`
198 | - Test framework (Jest or Mocha) configured in `package.json`
199 | 
200 | ---
201 | 
202 | ## Inputs
203 | 
204 | | Name | Type | Required | Description |
205 | |------|------|----------|-------------|
206 | | `resource_name` | string | Yes | Name of the resource (e.g., `users`, `orders`) |
207 | | `http_method` | string | Yes | HTTP method: GET, POST, PUT, DELETE, or PATCH |
208 | | `required_fields` | array | Yes | List of required fields and types, e.g. `[{name: 'email', type: 'string'}]` |
209 | | `optional_fields` | array | No | List of optional fields and types |
210 | | `requires_auth` | boolean | No | Whether the endpoint requires authentication (default: `true`) |
211 | 
212 | ---
213 | 
214 | ## Steps
215 | 
216 | ### Step 1: Analyze Existing Routes
217 | 
218 | First, run the `list_files` tool on the `routes/` directory to analyze existing route files.
219 | Look for naming conventions, file structure patterns, and how routes are organized.
220 | Note the import patterns used for middleware and controllers.
221 | 
222 | ### Step 2: Read Existing Route Files
223 | 
224 | Next, use the `read_file` tool to read 2–3 existing route files together.
225 | Examine how authentication middleware is applied, how validation schemas are structured,
226 | and how error handling is implemented. This ensures the new file is consistent with the
227 | existing codebase.
228 | 
229 | ### Step 3: Create the Route File
230 | 
231 | Then, use the `write_to_file` tool to create a new route file at `routes/{resource}.js`.
232 | Include the authentication middleware import, define the Zod validation schema for the
233 | request body, and implement the route handler with `try/catch` error handling.
234 | Follow the patterns observed in Step 2.
235 | 
236 | ### Step 4: Create the Controller File
237 | 
238 | After that, use the `write_to_file` tool to create a controller file at
239 | `controllers/{resource}Controller.js`. Implement the business logic with proper error
240 | handling, input sanitization, and response formatting. Include JSDoc comments for all functions.
241 | 
242 | ### Step 5: Register the New Route
243 | 
244 | Next, use the `read_file` tool to check the main router file (usually `app.js` or
245 | `routes/index.js`). Then use the `apply_diff` tool to add the new route import and
246 | registration, maintaining alphabetical order if that is the existing pattern.
247 | 
248 | ### Step 6: Create Tests
249 | 
250 | Then, use the `write_to_file` tool to create a test file at `tests/{resource}.test.js`.
251 | Include test cases for: successful requests, validation errors, authentication failures,
252 | and edge cases. Use the same test structure as existing test files.
253 | 
254 | ### Step 7: Verify All Tests Pass
255 | 
256 | Finally, run the `execute_command` tool with `npm test` to verify all tests pass.
257 | If any tests fail, use the `read_file` tool to examine the error output and use
258 | `apply_diff` to fix the issues. Confirm that the new endpoint is working correctly.
259 | 
260 | ---
261 | 
262 | ## Outputs
263 | 
264 | - `routes/{resource}.js` — Express route file with authentication, validation, and error handling
265 | - `controllers/{resource}Controller.js` — Controller with business logic and proper error handling
266 | - `tests/{resource}.test.js` — Comprehensive unit tests covering success and error cases
267 | 
268 | ---
269 | 
270 | ## Example Usage
271 | 
272 | **User request:**
273 | > Generate a POST endpoint for creating orders with required fields:
274 | > `customerId` (string), `items` (array), `totalAmount` (number).
275 | > Include authentication and validation.
276 | 
277 | **Expected output:**
278 | - `routes/orders.js` — POST route with auth middleware and Zod validation
279 | - `controllers/ordersController.js` — `createOrder` function with business logic
280 | - `tests/orders.test.js` — Tests for success, validation errors, and auth failures
281 | 
282 | ---
283 | 
284 | ## Notes
285 | 
286 | - Always maintain consistency with existing code patterns in the project
287 | - Use Zod for validation to ensure type safety and clear error messages
288 | - Include JSDoc comments for better IDE support and documentation
289 | 
290 | ## Warnings
291 | 
292 | > ⚠️ Ensure authentication middleware is properly configured before using this skill.
293 | 
294 | > ⚠️ Test the endpoint manually after generation to verify it works with your database.
295 | 
296 | > ⚠️ Review generated validation schemas to ensure they match your business requirements.
297 | 
298 | ## Related Skills
299 | 
300 | - Database Model Generator
301 | - API Documentation Generator
302 | - Integration Test Generator
303 | ````
304 | 
305 | ---
306 | 
307 | ## Notes for Skill Generation
308 | 
309 | 1. **Keep it under 500 lines** — be concise but complete
310 | 2. **Use imperative steps** — every step tells Bob exactly what to do
311 | 3. **Write a helpful description** — this is how Bob decides to use the skill
312 | 4. **Be specific about tools** — name exact Bob tools (`read_file`, `apply_diff`, etc.)
313 | 5. **Include realistic examples** — show concrete use cases, not abstract ones
314 | 6. **Think about prerequisites** — what must exist before this skill can run?
315 | 7. **Define clear outputs** — what files or changes will be made?
316 | 8. **Use the checklist** — validate before finalizing
----

# skillet-policies/rules/security-guidelines.md
  1 | # Security Guidelines
  2 | 
  3 | These security guidelines must be followed by all skills to ensure safe and secure code generation.
  4 | 
  5 | ---
  6 | 
  7 | ## 1. Authentication & Authorization
  8 | 
  9 | ### Never Hardcode Credentials
 10 | **❌ NEVER DO THIS**:
 11 | ```javascript
 12 | const apiKey = 'sk-1234567890abcdef';
 13 | const dbPassword = 'mypassword123';
 14 | const jwtSecret = 'supersecret';
 15 | ```
 16 | 
 17 | **✅ ALWAYS DO THIS**:
 18 | ```javascript
 19 | const apiKey = process.env.API_KEY;
 20 | const dbPassword = process.env.DB_PASSWORD;
 21 | const jwtSecret = process.env.JWT_SECRET;
 22 | ```
 23 | 
 24 | ### Password Security
 25 | - **Hash passwords** with bcrypt (minimum 10 rounds)
 26 | - **Never store** plain text passwords
 27 | - **Never log** passwords or sensitive data
 28 | - **Implement** password strength requirements
 29 | 
 30 | ```javascript
 31 | import bcrypt from 'bcrypt';
 32 | 
 33 | const hashPassword = async (password) => {
 34 |   const saltRounds = 10;
 35 |   return await bcrypt.hash(password, saltRounds);
 36 | };
 37 | 
 38 | const verifyPassword = async (password, hash) => {
 39 |   return await bcrypt.compare(password, hash);
 40 | };
 41 | ```
 42 | 
 43 | ### JWT Token Security
 44 | - Use strong secrets (min 32 characters)
 45 | - Set appropriate expiration times
 46 | - Implement token refresh mechanism
 47 | - Store tokens securely (httpOnly cookies)
 48 | 
 49 | ```javascript
 50 | const token = jwt.sign(
 51 |   { userId: user.id },
 52 |   process.env.JWT_SECRET,
 53 |   { expiresIn: '1h' }
 54 | );
 55 | ```
 56 | 
 57 | ---
 58 | 
 59 | ## 2. Input Validation & Sanitization
 60 | 
 61 | ### Always Validate User Input
 62 | **Every** user input must be validated before processing.
 63 | 
 64 | ```javascript
 65 | import { z } from 'zod';
 66 | 
 67 | const userSchema = z.object({
 68 |   email: z.string().email(),
 69 |   age: z.number().min(0).max(150),
 70 |   username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/)
 71 | });
 72 | ```
 73 | 
 74 | ### Sanitize HTML Input
 75 | Prevent XSS attacks by sanitizing HTML:
 76 | 
 77 | ```javascript
 78 | import DOMPurify from 'isomorphic-dompurify';
 79 | 
 80 | const sanitizedContent = DOMPurify.sanitize(userInput);
 81 | ```
 82 | 
 83 | ### File Upload Security
 84 | - Validate file types (whitelist, not blacklist)
 85 | - Limit file sizes
 86 | - Scan for malware
 87 | - Store files outside web root
 88 | - Use random filenames
 89 | 
 90 | ```javascript
 91 | const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
 92 | const maxSize = 5 * 1024 * 1024; // 5MB
 93 | 
 94 | if (!allowedTypes.includes(file.mimetype)) {
 95 |   throw new ValidationError('Invalid file type');
 96 | }
 97 | 
 98 | if (file.size > maxSize) {
 99 |   throw new ValidationError('File too large');
100 | }
101 | ```
102 | 
103 | ---
104 | 
105 | ## 3. SQL Injection Prevention
106 | 
107 | ### Use Parameterized Queries
108 | **❌ NEVER DO THIS**:
109 | ```javascript
110 | const query = `SELECT * FROM users WHERE email = '${userEmail}'`;
111 | db.query(query);
112 | ```
113 | 
114 | **✅ ALWAYS DO THIS**:
115 | ```javascript
116 | const query = 'SELECT * FROM users WHERE email = ?';
117 | db.query(query, [userEmail]);
118 | ```
119 | 
120 | ### Use ORM/Query Builders
121 | Prefer ORMs that handle parameterization:
122 | 
123 | ```javascript
124 | // Sequelize
125 | const user = await User.findOne({ where: { email: userEmail } });
126 | 
127 | // Prisma
128 | const user = await prisma.user.findUnique({ where: { email: userEmail } });
129 | ```
130 | 
131 | ---
132 | 
133 | ## 4. Cross-Site Scripting (XSS) Prevention
134 | 
135 | ### Escape Output
136 | Always escape user-generated content before rendering:
137 | 
138 | ```javascript
139 | // React automatically escapes
140 | <div>{userInput}</div>
141 | 
142 | // For dangerouslySetInnerHTML, sanitize first
143 | <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
144 | ```
145 | 
146 | ### Content Security Policy (CSP)
147 | Implement CSP headers:
148 | 
149 | ```javascript
150 | app.use((req, res, next) => {
151 |   res.setHeader(
152 |     'Content-Security-Policy',
153 |     "default-src 'self'; script-src 'self' 'unsafe-inline'"
154 |   );
155 |   next();
156 | });
157 | ```
158 | 
159 | ---
160 | 
161 | ## 5. Cross-Site Request Forgery (CSRF) Prevention
162 | 
163 | ### Use CSRF Tokens
164 | ```javascript
165 | import csrf from 'csurf';
166 | 
167 | const csrfProtection = csrf({ cookie: true });
168 | app.use(csrfProtection);
169 | 
170 | app.get('/form', (req, res) => {
171 |   res.render('form', { csrfToken: req.csrfToken() });
172 | });
173 | ```
174 | 
175 | ### SameSite Cookies
176 | ```javascript
177 | res.cookie('token', token, {
178 |   httpOnly: true,
179 |   secure: true,
180 |   sameSite: 'strict'
181 | });
182 | ```
183 | 
184 | ---
185 | 
186 | ## 6. Rate Limiting & DDoS Protection
187 | 
188 | ### Implement Rate Limiting
189 | ```javascript
190 | import rateLimit from 'express-rate-limit';
191 | 
192 | const limiter = rateLimit({
193 |   windowMs: 15 * 60 * 1000, // 15 minutes
194 |   max: 100, // limit each IP to 100 requests per windowMs
195 |   message: 'Too many requests, please try again later'
196 | });
197 | 
198 | app.use('/api/', limiter);
199 | ```
200 | 
201 | ### Stricter Limits for Sensitive Endpoints
202 | ```javascript
203 | const authLimiter = rateLimit({
204 |   windowMs: 15 * 60 * 1000,
205 |   max: 5, // 5 attempts per 15 minutes
206 |   skipSuccessfulRequests: true
207 | });
208 | 
209 | app.post('/api/auth/login', authLimiter, loginController);
210 | ```
211 | 
212 | ---
213 | 
214 | ## 7. Secure Headers
215 | 
216 | ### Use Helmet.js
217 | ```javascript
218 | import helmet from 'helmet';
219 | 
220 | app.use(helmet());
221 | ```
222 | 
223 | This sets multiple security headers:
224 | - `X-Content-Type-Options: nosniff`
225 | - `X-Frame-Options: DENY`
226 | - `X-XSS-Protection: 1; mode=block`
227 | - `Strict-Transport-Security`
228 | 
229 | ---
230 | 
231 | ## 8. Error Handling & Information Disclosure
232 | 
233 | ### Never Expose Stack Traces
234 | **❌ NEVER DO THIS**:
235 | ```javascript
236 | app.use((err, req, res, next) => {
237 |   res.status(500).json({ error: err.stack });
238 | });
239 | ```
240 | 
241 | **✅ ALWAYS DO THIS**:
242 | ```javascript
243 | app.use((err, req, res, next) => {
244 |   logger.error(err.stack); // Log internally
245 | 
246 |   res.status(err.statusCode || 500).json({
247 |     success: false,
248 |     error: {
249 |       message: err.isOperational ? err.message : 'Internal server error'
250 |     }
251 |   });
252 | });
253 | ```
254 | 
255 | ### Sanitize Error Messages
256 | Don't expose sensitive information in error messages:
257 | 
258 | ```javascript
259 | // Bad
260 | throw new Error(`User ${email} not found in database table users`);
261 | 
262 | // Good
263 | throw new Error('User not found');
264 | ```
265 | 
266 | ---
267 | 
268 | ## 9. Dependency Security
269 | 
270 | ### Keep Dependencies Updated
271 | ```bash
272 | npm audit
273 | npm audit fix
274 | ```
275 | 
276 | ### Use Snyk or Dependabot
277 | - Scan for vulnerabilities regularly
278 | - Update dependencies promptly
279 | - Review security advisories
280 | 
281 | ### Lock Dependencies
282 | Use `package-lock.json` or `yarn.lock`:
283 | ```bash
284 | npm ci  # Use in CI/CD instead of npm install
285 | ```
286 | 
287 | ---
288 | 
289 | ## 10. Logging & Monitoring
290 | 
291 | ### Log Security Events
292 | ```javascript
293 | logger.info('User login attempt', { userId, ip: req.ip });
294 | logger.warn('Failed login attempt', { email, ip: req.ip });
295 | logger.error('Unauthorized access attempt', { userId, resource, ip: req.ip });
296 | ```
297 | 
298 | ### Never Log Sensitive Data
299 | **❌ NEVER LOG**:
300 | - Passwords
301 | - API keys
302 | - Credit card numbers
303 | - Personal identification numbers
304 | - Session tokens
305 | 
306 | ```javascript
307 | // Bad
308 | logger.info('User created', { user }); // May contain password
309 | 
310 | // Good
311 | logger.info('User created', { userId: user.id, email: user.email });
312 | ```
313 | 
314 | ---
315 | 
316 | ## 11. API Security
317 | 
318 | ### Use HTTPS
319 | - **Always** use HTTPS in production
320 | - Redirect HTTP to HTTPS
321 | - Use HSTS headers
322 | 
323 | ```javascript
324 | if (process.env.NODE_ENV === 'production') {
325 |   app.use((req, res, next) => {
326 |     if (!req.secure) {
327 |       return res.redirect('https://' + req.headers.host + req.url);
328 |     }
329 |     next();
330 |   });
331 | }
332 | ```
333 | 
334 | ### CORS Configuration
335 | Be specific with CORS origins:
336 | 
337 | ```javascript
338 | import cors from 'cors';
339 | 
340 | const corsOptions = {
341 |   origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
342 |   credentials: true,
343 |   optionsSuccessStatus: 200
344 | };
345 | 
346 | app.use(cors(corsOptions));
347 | ```
348 | 
349 | ### API Versioning
350 | ```javascript
351 | app.use('/api/v1', v1Routes);
352 | app.use('/api/v2', v2Routes);
353 | ```
354 | 
355 | ---
356 | 
357 | ## 12. Session Security
358 | 
359 | ### Secure Session Configuration
360 | ```javascript
361 | import session from 'express-session';
362 | 
363 | app.use(session({
364 |   secret: process.env.SESSION_SECRET,
365 |   resave: false,
366 |   saveUninitialized: false,
367 |   cookie: {
368 |     secure: true, // HTTPS only
369 |     httpOnly: true, // No JavaScript access
370 |     maxAge: 3600000, // 1 hour
371 |     sameSite: 'strict'
372 |   }
373 | }));
374 | ```
375 | 
376 | ---
377 | 
378 | ## 13. File System Security
379 | 
380 | ### Prevent Path Traversal
381 | ```javascript
382 | import path from 'path';
383 | 
384 | const sanitizePath = (userPath) => {
385 |   const normalized = path.normalize(userPath);
386 |   const basePath = path.resolve('./uploads');
387 |   const fullPath = path.resolve(basePath, normalized);
388 | 
389 |   if (!fullPath.startsWith(basePath)) {
390 |     throw new Error('Invalid path');
391 |   }
392 | 
393 |   return fullPath;
394 | };
395 | ```
396 | 
397 | ### Secure File Permissions
398 | ```javascript
399 | import fs from 'fs';
400 | 
401 | fs.writeFileSync('config.json', data, { mode: 0o600 }); // Owner read/write only
402 | ```
403 | 
404 | ---
405 | 
406 | ## 14. Regular Expression Security (ReDoS)
407 | 
408 | ### Avoid Catastrophic Backtracking
409 | **❌ DANGEROUS**:
410 | ```javascript
411 | const regex = /^(a+)+$/;
412 | ```
413 | 
414 | **✅ SAFE**:
415 | ```javascript
416 | const regex = /^a+$/;
417 | ```
418 | 
419 | ### Use Timeout for Regex
420 | ```javascript
421 | import safeRegex from 'safe-regex';
422 | 
423 | if (!safeRegex(userRegex)) {
424 |   throw new Error('Unsafe regex pattern');
425 | }
426 | ```
427 | 
428 | ---
429 | 
430 | ## 15. Environment Configuration
431 | 
432 | ### .env File Security
433 | ```bash
434 | # .env (NEVER commit this file)
435 | NODE_ENV=production
436 | DATABASE_URL=postgresql://user:pass@localhost:5432/db
437 | JWT_SECRET=your-super-secret-key-min-32-chars
438 | API_KEY=your-api-key
439 | ```
440 | 
441 | ### .env.example
442 | ```bash
443 | # .env.example (Safe to commit)
444 | NODE_ENV=development
445 | DATABASE_URL=postgresql://user:pass@localhost:5432/db
446 | JWT_SECRET=change-me
447 | API_KEY=your-api-key-here
448 | ```
449 | 
450 | ### .gitignore
451 | ```
452 | .env
453 | .env.local
454 | .env.*.local
455 | *.key
456 | *.pem
457 | ```
458 | 
459 | ---
460 | 
461 | ## Security Checklist for Skills
462 | 
463 | Before creating or approving a skill, verify:
464 | 
465 | ### Authentication & Authorization
466 | - ✅ No hardcoded credentials
467 | - ✅ Passwords are hashed
468 | - ✅ JWT tokens use strong secrets
469 | - ✅ Environment variables for sensitive data
470 | 
471 | ### Input Validation
472 | - ✅ All user input is validated
473 | - ✅ File uploads are restricted
474 | - ✅ Input sanitization is implemented
475 | 
476 | ### SQL & Injection Prevention
477 | - ✅ Parameterized queries used
478 | - ✅ No string concatenation in queries
479 | - ✅ ORM/query builder used
480 | 
481 | ### XSS Prevention
482 | - ✅ Output is escaped
483 | - ✅ CSP headers implemented
484 | - ✅ HTML sanitization for user content
485 | 
486 | ### Error Handling
487 | - ✅ No stack traces exposed
488 | - ✅ Generic error messages for users
489 | - ✅ Detailed errors logged internally
490 | 
491 | ### Dependencies
492 | - ✅ Dependencies are up to date
493 | - ✅ No known vulnerabilities
494 | - ✅ Lock file is used
495 | 
496 | ### Logging
497 | - ✅ Security events are logged
498 | - ✅ No sensitive data in logs
499 | - ✅ Appropriate log levels used
500 | 
501 | ### API Security
502 | - ✅ HTTPS enforced
503 | - ✅ CORS properly configured
504 | - ✅ Rate limiting implemented
505 | - ✅ Secure headers set
506 | 
507 | ---
508 | 
509 | ## Common Vulnerabilities to Avoid
510 | 
511 | 1. **SQL Injection** - Use parameterized queries
512 | 2. **XSS** - Escape output, sanitize input
513 | 3. **CSRF** - Use CSRF tokens
514 | 4. **Authentication Bypass** - Validate sessions properly
515 | 5. **Insecure Direct Object References** - Check authorization
516 | 6. **Security Misconfiguration** - Use secure defaults
517 | 7. **Sensitive Data Exposure** - Encrypt data, use HTTPS
518 | 8. **Missing Function Level Access Control** - Check permissions
519 | 9. **Using Components with Known Vulnerabilities** - Update dependencies
520 | 10. **Unvalidated Redirects** - Validate redirect URLs
521 | 
522 | ---
523 | 
524 | ## Resources
525 | 
526 | - [OWASP Top 10](https://owasp.org/www-project-top-ten/)
527 | - [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
528 | - [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
529 | - [npm Security Advisories](https://www.npmjs.com/advisories)
530 | 
531 | ---
532 | 
533 | ## Summary
534 | 
535 | Security is **everyone's responsibility**. All skills must:
536 | - Follow these guidelines strictly
537 | - Be reviewed for security issues
538 | - Use secure coding practices
539 | - Keep dependencies updated
540 | - Log security events appropriately
541 | 
542 | **When in doubt, ask for a security review!**
----

# skillet-policies/rules/coding-standards.md
  1 | # Coding Standards
  2 | 
  3 | These are the company's coding conventions that all skills must follow and enforce.
  4 | 
  5 | ---
  6 | 
  7 | ## General Principles
  8 | 
  9 | ### 1. Code Readability
 10 | - Write code that is easy to read and understand
 11 | - Use meaningful variable and function names
 12 | - Keep functions small and focused (single responsibility)
 13 | - Add comments for complex logic, not obvious code
 14 | 
 15 | ### 2. DRY (Don't Repeat Yourself)
 16 | - Extract repeated code into reusable functions
 17 | - Use constants for repeated values
 18 | - Create utility functions for common operations
 19 | 
 20 | ### 3. KISS (Keep It Simple, Stupid)
 21 | - Prefer simple solutions over complex ones
 22 | - Avoid premature optimization
 23 | - Write code that others can easily maintain
 24 | 
 25 | ---
 26 | 
 27 | ## JavaScript / Node.js Standards
 28 | 
 29 | ### ES6+ Syntax
 30 | - **Always use ES6+ features** (const, let, arrow functions, destructuring, etc.)
 31 | - **Prefer `const`** over `let`, never use `var`
 32 | - **Use arrow functions** for callbacks and short functions
 33 | - **Use template literals** for string interpolation
 34 | - **Use async/await** over callbacks or raw promises
 35 | 
 36 | **Good**:
 37 | ```javascript
 38 | const getUserById = async (id) => {
 39 |   const user = await User.findById(id);
 40 |   return user;
 41 | };
 42 | ```
 43 | 
 44 | **Bad**:
 45 | ```javascript
 46 | var getUserById = function(id, callback) {
 47 |   User.findById(id, function(err, user) {
 48 |     callback(err, user);
 49 |   });
 50 | };
 51 | ```
 52 | 
 53 | ### Naming Conventions
 54 | - **Variables and functions**: camelCase (`getUserData`, `isValid`)
 55 | - **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`, `API_BASE_URL`)
 56 | - **Classes**: PascalCase (`UserController`, `DatabaseService`)
 57 | - **Files**: kebab-case (`user-controller.js`, `auth-middleware.js`)
 58 | - **React Components**: PascalCase files (`UserCard.jsx`, `LoginForm.jsx`)
 59 | 
 60 | ### File Organization
 61 | ```
 62 | src/
 63 | ├── routes/          # API routes
 64 | ├── controllers/     # Business logic
 65 | ├── services/        # External services, database
 66 | ├── middleware/      # Express middleware
 67 | ├── models/          # Data models
 68 | ├── utils/           # Utility functions
 69 | ├── config/          # Configuration files
 70 | └── tests/           # Test files
 71 | ```
 72 | 
 73 | ---
 74 | 
 75 | ## Error Handling
 76 | 
 77 | ### Always Handle Errors Explicitly
 78 | - Use try/catch for async operations
 79 | - Never swallow errors silently
 80 | - Provide meaningful error messages
 81 | - Log errors with context
 82 | 
 83 | **Good**:
 84 | ```javascript
 85 | const createUser = async (userData) => {
 86 |   try {
 87 |     const user = await User.create(userData);
 88 |     return { success: true, data: user };
 89 |   } catch (error) {
 90 |     logger.error('Failed to create user:', { error: error.message, userData });
 91 |     throw new AppError('User creation failed', 500);
 92 |   }
 93 | };
 94 | ```
 95 | 
 96 | **Bad**:
 97 | ```javascript
 98 | const createUser = async (userData) => {
 99 |   try {
100 |     const user = await User.create(userData);
101 |     return user;
102 |   } catch (error) {
103 |     // Silent failure
104 |   }
105 | };
106 | ```
107 | 
108 | ### Custom Error Classes
109 | Use custom error classes for different error types:
110 | 
111 | ```javascript
112 | class AppError extends Error {
113 |   constructor(message, statusCode) {
114 |     super(message);
115 |     this.statusCode = statusCode;
116 |     this.isOperational = true;
117 |   }
118 | }
119 | 
120 | class ValidationError extends AppError {
121 |   constructor(message) {
122 |     super(message, 400);
123 |   }
124 | }
125 | ```
126 | 
127 | ---
128 | 
129 | ## API Design
130 | 
131 | ### RESTful Conventions
132 | - **GET** `/api/resources` - List all
133 | - **GET** `/api/resources/:id` - Get one
134 | - **POST** `/api/resources` - Create
135 | - **PUT** `/api/resources/:id` - Update (full)
136 | - **PATCH** `/api/resources/:id` - Update (partial)
137 | - **DELETE** `/api/resources/:id` - Delete
138 | 
139 | ### Response Format
140 | Always return consistent response format:
141 | 
142 | ```javascript
143 | // Success
144 | {
145 |   "success": true,
146 |   "data": { ... }
147 | }
148 | 
149 | // Error
150 | {
151 |   "success": false,
152 |   "error": {
153 |     "message": "Error description",
154 |     "code": "ERROR_CODE"
155 |   }
156 | }
157 | ```
158 | 
159 | ### Status Codes
160 | - **200** - OK (successful GET, PUT, PATCH)
161 | - **201** - Created (successful POST)
162 | - **204** - No Content (successful DELETE)
163 | - **400** - Bad Request (validation error)
164 | - **401** - Unauthorized (authentication required)
165 | - **403** - Forbidden (insufficient permissions)
166 | - **404** - Not Found
167 | - **500** - Internal Server Error
168 | 
169 | ---
170 | 
171 | ## Input Validation
172 | 
173 | ### Always Validate User Input
174 | - Use validation libraries (Zod, Joi, etc.)
175 | - Validate at the route level
176 | - Provide clear validation error messages
177 | - Never trust client-side validation alone
178 | 
179 | **Example with Zod**:
180 | ```javascript
181 | import { z } from 'zod';
182 | 
183 | const createUserSchema = z.object({
184 |   email: z.string().email(),
185 |   password: z.string().min(8),
186 |   name: z.string().min(2).max(50)
187 | });
188 | 
189 | const validateCreateUser = (req, res, next) => {
190 |   try {
191 |     createUserSchema.parse(req.body);
192 |     next();
193 |   } catch (error) {
194 |     res.status(400).json({
195 |       success: false,
196 |       error: { message: 'Validation failed', details: error.errors }
197 |     });
198 |   }
199 | };
200 | ```
201 | 
202 | ---
203 | 
204 | ## Testing Standards
205 | 
206 | ### Test Structure (AAA Pattern)
207 | - **Arrange**: Set up test data and conditions
208 | - **Act**: Execute the code being tested
209 | - **Assert**: Verify the results
210 | 
211 | ```javascript
212 | describe('UserController', () => {
213 |   describe('createUser', () => {
214 |     it('should create a new user with valid data', async () => {
215 |       // Arrange
216 |       const userData = { email: 'test@example.com', password: 'password123' };
217 | 
218 |       // Act
219 |       const result = await createUser(userData);
220 | 
221 |       // Assert
222 |       expect(result.success).toBe(true);
223 |       expect(result.data.email).toBe(userData.email);
224 |     });
225 |   });
226 | });
227 | ```
228 | 
229 | ### Test Coverage
230 | - Write tests for happy paths
231 | - Write tests for error cases
232 | - Write tests for edge cases
233 | - Aim for >80% code coverage
234 | 
235 | ### Test Naming
236 | Use descriptive test names that explain what is being tested:
237 | 
238 | ```javascript
239 | it('should return 400 when email is invalid')
240 | it('should create user when all fields are valid')
241 | it('should throw error when database connection fails')
242 | ```
243 | 
244 | ---
245 | 
246 | ## Security Best Practices
247 | 
248 | ### Environment Variables
249 | - **Never hardcode** credentials, API keys, or secrets
250 | - Use `.env` files for local development
251 | - Use environment variables in production
252 | - Add `.env` to `.gitignore`
253 | 
254 | ```javascript
255 | // Good
256 | const apiKey = process.env.API_KEY;
257 | 
258 | // Bad
259 | const apiKey = 'sk-1234567890abcdef';
260 | ```
261 | 
262 | ### Authentication & Authorization
263 | - Use JWT tokens for stateless authentication
264 | - Hash passwords with bcrypt (min 10 rounds)
265 | - Implement rate limiting
266 | - Use HTTPS in production
267 | 
268 | ### SQL Injection Prevention
269 | - **Always use parameterized queries**
270 | - Never concatenate user input into SQL strings
271 | - Use ORM/query builders (Sequelize, Prisma, etc.)
272 | 
273 | ```javascript
274 | // Good
275 | const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
276 | 
277 | // Bad
278 | const user = await db.query(`SELECT * FROM users WHERE id = ${userId}`);
279 | ```
280 | 
281 | ---
282 | 
283 | ## Code Comments
284 | 
285 | ### When to Comment
286 | - **Complex algorithms**: Explain the "why", not the "what"
287 | - **Business logic**: Explain business rules
288 | - **Workarounds**: Explain why a workaround is needed
289 | - **TODOs**: Mark incomplete or temporary code
290 | 
291 | ### When NOT to Comment
292 | - **Obvious code**: Don't comment self-explanatory code
293 | - **Redundant comments**: Don't repeat what the code says
294 | 
295 | **Good**:
296 | ```javascript
297 | // Calculate discount based on customer tier and purchase amount
298 | // Tier 1: 5%, Tier 2: 10%, Tier 3: 15%
299 | const discount = calculateTierDiscount(customer.tier, amount);
300 | ```
301 | 
302 | **Bad**:
303 | ```javascript
304 | // Set x to 5
305 | const x = 5;
306 | ```
307 | 
308 | ---
309 | 
310 | ## Git Commit Messages
311 | 
312 | ### Format
313 | ```
314 | type(scope): subject
315 | 
316 | body (optional)
317 | 
318 | footer (optional)
319 | ```
320 | 
321 | ### Types
322 | - **feat**: New feature
323 | - **fix**: Bug fix
324 | - **docs**: Documentation changes
325 | - **style**: Code style changes (formatting, etc.)
326 | - **refactor**: Code refactoring
327 | - **test**: Adding or updating tests
328 | - **chore**: Maintenance tasks
329 | 
330 | ### Examples
331 | ```
332 | feat(auth): add JWT token refresh endpoint
333 | 
334 | fix(users): resolve email validation bug
335 | 
336 | docs(readme): update installation instructions
337 | ```
338 | 
339 | ---
340 | 
341 | ## Performance Guidelines
342 | 
343 | ### Database Queries
344 | - Use indexes for frequently queried fields
345 | - Avoid N+1 queries (use joins or eager loading)
346 | - Paginate large result sets
347 | - Cache frequently accessed data
348 | 
349 | ### API Performance
350 | - Implement caching (Redis, in-memory)
351 | - Use compression (gzip)
352 | - Optimize payload size
353 | - Implement rate limiting
354 | 
355 | ---
356 | 
357 | ## Code Review Checklist
358 | 
359 | Before submitting code for review, ensure:
360 | - ✅ Code follows naming conventions
361 | - ✅ No hardcoded credentials or secrets
362 | - ✅ Error handling is implemented
363 | - ✅ Input validation is present
364 | - ✅ Tests are written and passing
365 | - ✅ Code is properly formatted
366 | - ✅ Comments explain complex logic
367 | - ✅ No console.log statements in production code
368 | - ✅ Dependencies are up to date
369 | - ✅ Documentation is updated
370 | 
371 | ---
372 | 
373 | ## Tools & Linting
374 | 
375 | ### ESLint Configuration
376 | Use ESLint with Airbnb or Standard style guide:
377 | 
378 | ```json
379 | {
380 |   "extends": ["airbnb-base"],
381 |   "rules": {
382 |     "no-console": "warn",
383 |     "no-unused-vars": "error",
384 |     "prefer-const": "error"
385 |   }
386 | }
387 | ```
388 | 
389 | ### Prettier Configuration
390 | ```json
391 | {
392 |   "semi": true,
393 |   "singleQuote": true,
394 |   "tabWidth": 2,
395 |   "trailingComma": "es5"
396 | }
397 | ```
398 | 
399 | ---
400 | 
401 | ## Summary
402 | 
403 | These standards ensure:
404 | - **Consistency** across the codebase
405 | - **Maintainability** for future developers
406 | - **Security** against common vulnerabilities
407 | - **Quality** through testing and validation
408 | - **Performance** through best practices
409 | 
410 | All skills created in Skillet must follow and enforce these standards.
----
<environment_details>
# VSCode Visible Files
skillet-skills\skills\skill-impact-analysis.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:47:55.247Z
User time zone: Asia/Singapore, UTC+8:00

# Current Cost
$0.13

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
# My Updated Workflow for Creating a Skill

Perfect! I now understand - you're referring to the **`skill-format.md`** file in `skillet-policies/rules/`. This is my authoritative guide for skill creation. Here's my updated workflow that **always starts with reading this file**:

## 🔴 STEP 0: READ THE SKILL FORMAT GUIDELINES (MANDATORY)

**Before creating ANY skill, I MUST:**

<read_file>
<args>
<file>
<path>skillet-policies/rules/skill-format.md</path>
</file>
</args>
</read_file>

This file contains:
- ✅ **Format Requirements** (Markdown, .md, 500 lines max, UTF-8)
- ✅ **Complete Markdown Structure Template**
- ✅ **Step Writing Guidelines** (imperative vs workflow style)
- ✅ **Description Guidelines** (how to write trigger-worthy descriptions)
- ✅ **Validation Checklist** (15 critical checkpoints)
- ✅ **Complete Working Example** (REST API Endpoint Generator)

## My Complete Workflow:

### 1. **Read Skill Format Guidelines First**
- Use `read_file` on `skillet-policies/rules/skill-format.md`
- Review the validation checklist (lines 157-174)
- Study the complete example (lines 180-303)
- Understand step writing guidelines (lines 101-138)

### 2. **Read Related Policy Files**
- `skillet-policies/rules/coding-standards.md` - For code quality rules
- `skillet-policies/rules/security-guidelines.md` - For security requirements

### 3. **Understand the Request**
- Identify the specific problem to solve
- Determine target audience and roles
- Clarify expected inputs and outputs

### 4. **Analyze Existing Similar Skills**
- Use `search_files` to find related skills
- Use `read_file` to examine 2-3 similar skills
- Note patterns, naming conventions, and structure

### 5. **Apply the Validation Checklist**
As I create the skill, I verify each item from `skill-format.md`:

```markdown
- [ ] File is valid Markdown (`.md`)
- [ ] File is under 500 lines
- [ ] Skill name is clear and descriptive
- [ ] Description is 2–3 sentences and helps Bob decide when to trigger it
- [ ] `Category` is one of: `backend`, `frontend`, `devops`, `qa`, `shared`
- [ ] `Roles` contains only valid values: `backend`, `frontend`, `fullstack`, `devops`, `qa`
- [ ] At least 2 prerequisites listed
- [ ] At least 3 steps, each using imperative instructions
- [ ] Each step names the exact tool or command to use
- [ ] Inputs table defines all required inputs with types
- [ ] Outputs list all files that will be created
- [ ] Example usage is concrete and realistic
- [ ] No hardcoded credentials or secrets
- [ ] Follows company coding standards
```

### 6. **Write Imperative Steps (Not Workflow Overviews)**

Following the guidelines from lines 101-138:

**✅ CORRECT FORMAT:**
```markdown
### Step 1: Read the CSS File

First, run the `read_file` tool on the CSS file at the path provided by the user.
Look for existing color variables, font definitions, and layout patterns.
Note any naming conventions used for CSS classes.
```

**❌ WRONG FORMAT:**
```markdown
### Step 1: Analyze CSS
Analyze the CSS file.
```

### 7. **Create the Skill File**
- Use `write_to_file` with complete content
- Place in `skillet-skills/skills/`
- Follow naming: `{category}-{descriptive-name}.md`
- Include accurate line count

### 8. **Final Validation**
- Re-check against the validation checklist
- Ensure all 15 items are satisfied
- Verify format matches the template exactly

## Key Changes to My Workflow:

### 🔴 BEFORE (Missing Critical Step):
1. ~~Understand request~~
2. ~~Analyze existing skills~~
3. ~~Create skill~~

### ✅ NOW (Correct Workflow):
1. **READ `skill-format.md` FIRST** ← MANDATORY
2. Read related policy files
3. Understand request
4. Analyze existing skills
5. **Apply validation checklist throughout**
6. Create skill with imperative steps
7. **Final validation against checklist**

## Why This Matters:

The `skill-format.md` file contains:
- **The exact template structure** I must follow
- **The validation checklist** that prevents errors
- **Step writing guidelines** that ensure quality
- **A complete working example** to reference
- **Format requirements** (500 lines, UTF-8, .md)

By reading this file first, I ensure:
- ✅ Every skill follows the exact same structure
- ✅ All 15 validation checkpoints are met
- ✅ Steps are written imperatively, not as workflows
- ✅ Descriptions help trigger the skill appropriately
- ✅ No format errors or missing sections

## My Commitment:

**I will ALWAYS read `skillet-policies/rules/skill-format.md` as my FIRST step when creating any skill.** This file is my source of truth for skill creation, and following it ensures consistency, quality, and completeness.
</result>
</attempt_completion>

---

**User:**

[attempt_completion] Result:
The user has provided feedback on the results. Consider their input to continue the task, and then attempt completion again.
<feedback>
I want you to always read the skill-generator.md, why isnt it in your workflow anymore? before i added the custom-at-command it was in your workflow
</feedback>
<environment_details>
# VSCode Visible Files
skillet-skills\skills\skill-impact-analysis.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:49:52.516Z
User time zone: Asia/Singapore, UTC+8:00

# Current Cost
$0.21

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

I understand! You're saying there's a `skill-generator.md` file that I should be reading, but I couldn't find it in my search. Let me search more thoroughly:

<search_files>
<path>skillet-policies</path>
<regex>generator</regex>
<file_pattern>*.md</file_pattern>
</search_files>

---

**User:**

[search_files for 'generator' in '*.md'] Result:
Found 0 results.
<environment_details>
# VSCode Visible Files
skillet-skills\skills\skill-impact-analysis.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:50:08.742Z
User time zone: Asia/Singapore, UTC+8:00

# Current Cost
$0.29

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

<list_files>
<path>skillet-policies</path>
<recursive>true</recursive>
</list_files>

---

**User:**

[list_files for 'skillet-policies'] Result:
.gitignore
CODEOWNERS
README.md
.bob/
metadata/
metadata/roles.json
rules/
rules/coding-standards.md
rules/security-guidelines.md
rules/skill-format.md
<environment_details>
# VSCode Visible Files
skillet-skills\skills\skill-impact-analysis.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:50:14.116Z
User time zone: Asia/Singapore, UTC+8:00

# Current Cost
$0.38

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

<ask_followup_question>
<question>I cannot find a `skill-generator.md` file in the repository. I've searched the entire `skillet-policies` directory and only found these files:

- `rules/skill-format.md` (the skill format guidelines)
- `rules/coding-standards.md` (coding standards)
- `rules/security-guidelines.md` (security guidelines)

Could you please clarify:
1. Where is the `skill-generator.md` file located? (exact path)
2. Or should I be creating this file?
3. Or is it perhaps named differently than `skill-generator.md`?

I want to make sure I'm reading the correct file that you're referring to!</question>
</ask_followup_question>

---

**User:**

[ask_followup_question for 'I cannot find a `skill-generator.md` file in the repository. I've searched the entire `skillet-policies` directory and only found these files:

- `rules/skill-format.md` (the skill format guidelines)
- `rules/coding-standards.md` (coding standards)
- `rules/security-guidelines.md` (security guidelines)

Could you please clarify:
1. Where is the `skill-generator.md` file located? (exact path)
2. Or should I be creating this file?
3. Or is it perhaps named differently than `skill-generator.md`?

I want to make sure I'm reading the correct file that you're referring to!'] Result:
<answer>
it is in skillet-policies/.bob/skills/skill-generator.md please check again
</answer>
<environment_details>
# VSCode Visible Files
skillet-policies\.bob\skills\skill-generator.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md,skillet-policies/.bob/skills/skill-generator.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:51:13.271Z
User time zone: Asia/Singapore, UTC+8:00

# Current Cost
$0.46

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

Perfect! Now I found it. Let me read this critical file:

<read_file>
<args>
<file>
<path>skillet-policies/.bob/skills/skill-generator.md</path>
</file>
</args>
</read_file>

---

**User:**

[read_file for 'skillet-policies/.bob/skills/skill-generator.md'. Reading multiple files at once is more efficient for the LLM. If other files are relevant to your current task, please read them simultaneously.] Result:
<files>
<file><path>skillet-policies/.bob/skills/skill-generator.md</path>
<content lines="1-209">
  1 | # Skill Generator
  2 | 
  3 | Generates production-ready, reusable skills for Bob that follow company standards for format, security, and coding practices. Use this when you need to create a new skill that developers can use to automate common development tasks. The generated skill will be validated automatically against all company policies and guidelines.
  4 | 
  5 | **Category:** shared
  6 | **Roles:** backend, frontend, fullstack, devops, qa
  7 | 
  8 | ---
  9 | 
 10 | ## Prerequisites
 11 | 
 12 | - Access to the `rules/` directory containing skill-format.md, security-guidelines.md, and coding-standards.md
 13 | - Access to the `.bob/skills/` directory containing validate-skill.md
 14 | - Understanding of the task or workflow the skill should automate
 15 | - Clear definition of inputs, outputs, and steps required
 16 | 
 17 | ---
 18 | 
 19 | ## Inputs
 20 | 
 21 | | Name | Type | Required | Description |
 22 | |------|------|----------|-------------|
 23 | | `skill_name` | string | Yes | Descriptive name for the skill (e.g., "REST API Endpoint Generator") |
 24 | | `skill_description` | string | Yes | 2-3 sentence description of what the skill does and when to use it |
 25 | | `category` | string | Yes | One of: backend, frontend, devops, qa, shared |
 26 | | `target_roles` | array | Yes | List of roles that will use this skill (backend, frontend, fullstack, devops, qa) |
 27 | | `prerequisites` | array | Yes | List of requirements that must exist before the skill can run |
 28 | | `inputs_definition` | array | Yes | List of input parameters with name, type, required flag, and description |
 29 | | `steps_definition` | array | Yes | List of steps with titles and detailed instructions |
 30 | | `outputs_definition` | array | Yes | List of files or changes that will be created |
 31 | | `example_usage` | object | Yes | Concrete example with user request and expected output |
 32 | 
 33 | ---
 34 | 
 35 | ## Steps
 36 | 
 37 | ### Step 1: Read All Policy Files
 38 | 
 39 | First, use the `read_file` tool to read all three policy files together:
 40 | - `rules/skill-format.md`
 41 | - `rules/security-guidelines.md`
 42 | - `rules/coding-standards.md`
 43 | 
 44 | Study the format requirements, security checklist, and coding conventions that must be followed.
 45 | Note the required sections, validation criteria, and step-writing guidelines.
 46 | 
 47 | ### Step 2: Analyze User Requirements
 48 | 
 49 | Next, review the user's request to understand:
 50 | - What problem the skill solves
 51 | - What inputs are needed
 52 | - What steps are required
 53 | - What outputs will be generated
 54 | 
 55 | Ask follow-up questions using the `ask_followup_question` tool if any requirements are unclear or missing.
 56 | Ensure you have all necessary information before proceeding.
 57 | 
 58 | ### Step 3: Structure the Skill Content
 59 | 
 60 | Then, organize the skill content following the exact structure from `skill-format.md`:
 61 | - Title (clear and descriptive)
 62 | - Description (2-3 sentences, explains what and when)
 63 | - Category and Roles
 64 | - Prerequisites (at least 2 items)
 65 | - Inputs table (with name, type, required, description)
 66 | - Steps (minimum 3, using imperative instructions)
 67 | - Outputs (specific file paths or changes)
 68 | - Example Usage (concrete and realistic)
 69 | - Notes (optional tips)
 70 | - Warnings (optional caveats)
 71 | - Related Skills (optional)
 72 | 
 73 | Ensure each step uses imperative language ("First, run...", "Next, use...", "Then, execute...") and specifies exact tools or commands.
 74 | 
 75 | ### Step 4: Apply Security Guidelines
 76 | 
 77 | Next, review each step and code example against `security-guidelines.md`:
 78 | - Replace any hardcoded credentials with `process.env.VARIABLE_NAME`
 79 | - Ensure SQL queries use parameterized queries or ORMs
 80 | - Include input validation using Zod or similar libraries
 81 | - Add error handling with try/catch blocks
 82 | - Verify no sensitive data is logged
 83 | - Include authentication and authorization checks where needed
 84 | 
 85 | Add security warnings in the Warnings section if the skill involves sensitive operations.
 86 | 
 87 | ### Step 5: Apply Coding Standards
 88 | 
 89 | Then, ensure all code examples follow `coding-standards.md`:
 90 | - Use ES6+ syntax (const, let, arrow functions, async/await)
 91 | - Follow naming conventions (camelCase for variables, PascalCase for classes)
 92 | - Include proper error handling
 93 | - Use meaningful variable names
 94 | - Add JSDoc comments for complex functions
 95 | - Follow RESTful conventions for API endpoints
 96 | - Include input validation examples
 97 | 
 98 | Verify that generated code examples are production-ready and follow best practices.
 99 | 
100 | ### Step 6: Write the Skill File
101 | 
102 | After that, use the `write_to_file` tool to create the skill file at `.bob/skills/{category}-{skill-name}.md`.
103 | Use kebab-case for the filename (e.g., `backend-rest-api-generator.md`).
104 | Include all sections with complete, meaningful content—no placeholders or TODOs.
105 | Ensure the file is under 500 lines and uses UTF-8 encoding.
106 | 
107 | ### Step 7: Validate the Generated Skill
108 | 
109 | Finally, use the `read_file` tool to load `.bob/skills/validate-skill.md` and follow its validation process:
110 | 
111 | **Run Check #1: Guideline Compliance (0-100)**
112 | - Evaluate structure & format (25 points)
113 | - Evaluate content quality (35 points)
114 | - Evaluate standards compliance (25 points)
115 | - Evaluate example & documentation (15 points)
116 | - Calculate total score
117 | 
118 | **Run Check #2: Duplicate Detection (0-100%)**
119 | - Read all existing skills in `.bob/skills/` directory
120 | - Compare purpose, steps, inputs/outputs, and category
121 | - Calculate similarity percentage with most similar skill
122 | - Determine if unique, needs review, or is duplicate
123 | 
124 | **Run Check #3: Security Review (Pass/Fail)**
125 | - Check for hardcoded credentials
126 | - Check for SQL injection risks
127 | - Check for XSS vulnerabilities
128 | - Check for insecure file operations
129 | - Check for exposed secrets
130 | - Verify input validation is present
131 | 
132 | **Run Check #4: Completeness Check (Pass/Fail)**
133 | - Verify all required sections are present
134 | - Check for placeholder text or empty sections
135 | - Ensure steps are numbered and actionable
136 | - Verify inputs include types
137 | - Verify outputs are specific
138 | 
139 | Generate a validation report with scores, issues, and verdict (APPROVED/NEEDS REVIEW/REJECTED).
140 | 
141 | ### Step 8: Handle Validation Results
142 | 
143 | Then, based on the validation verdict:
144 | 
145 | **If APPROVED (✅)**:
146 | - Present the skill file path and validation report to the user
147 | - Confirm the skill is ready to use
148 | - Use `attempt_completion` to finalize
149 | 
150 | **If NEEDS REVIEW (⚠️)**:
151 | - Present the validation report with specific issues
152 | - Ask the user if they want to fix issues now or proceed anyway
153 | - If fixing, use `apply_diff` to make corrections and re-validate
154 | - If proceeding, use `attempt_completion` with warnings
155 | 
156 | **If REJECTED (❌)**:
157 | - Present the validation report with critical issues
158 | - List required actions to fix each issue
159 | - Use `apply_diff` to fix issues automatically if possible
160 | - Re-run validation after fixes
161 | - Do not complete until validation passes or user explicitly overrides
162 | 
163 | ---
164 | 
165 | ## Outputs
166 | 
167 | - `.bob/skills/{category}-{skill-name}.md` — Complete skill file following all format and security guidelines
168 | - Validation report showing compliance scores and any issues found
169 | 
170 | ---
171 | 
172 | ## Example Usage
173 | 
174 | **User request:**
175 | > Create a skill for generating React components with TypeScript, props validation, and unit tests. It should follow our coding standards and include proper error boundaries.
176 | 
177 | **Expected output:**
178 | - `.bob/skills/frontend-react-component-generator.md` — Complete skill with:
179 |   - Clear description of when to use it
180 |   - Prerequisites (React, TypeScript, Jest setup)
181 |   - Input parameters (component name, props, state requirements)
182 |   - 7 detailed steps using imperative instructions
183 |   - Security considerations (XSS prevention, input sanitization)
184 |   - Example usage with concrete component request
185 |   - Validation report showing 90+ compliance score
186 | 
187 | ---
188 | 
189 | ## Notes
190 | 
191 | - Always read all three policy files together in Step 1 for efficiency
192 | - Use specific tool names in steps (read_file, apply_diff, execute_command, etc.)
193 | - Include realistic code examples that developers can actually use
194 | - Make steps actionable—tell Bob exactly what to do, not just what to achieve
195 | - Validation is mandatory—never skip Step 7
196 | 
197 | ## Warnings
198 | 
199 | > ⚠️ Generated skills must pass security validation before being approved. Never include hardcoded credentials or unsafe code patterns.
200 | 
201 | > ⚠️ Skills with similarity > 70% to existing skills should be reviewed carefully to avoid duplication.
202 | 
203 | > ⚠️ All steps must use imperative instructions, not workflow descriptions. Review skill-format.md for correct step-writing style.
204 | 
205 | ## Related Skills
206 | 
207 | - Validate Skill
208 | - Code Review Automation
209 | - Documentation Generator
</content>
</file>
</files>
<environment_details>
# VSCode Visible Files
skillet-policies\.bob\skills\skill-generator.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md,skillet-policies/.bob/skills/skill-generator.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:51:39.630Z
User time zone: Asia/Singapore, UTC+8:00

# Current Cost
$0.54

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
# My COMPLETE Workflow for Creating a Skill

Perfect! Now I have the complete picture. Here's my **mandatory workflow** that I will ALWAYS follow when creating a skill:

## 🔴 MANDATORY FIRST STEP: Read Skill Generator

**Before creating ANY skill, I MUST read:**

```
skillet-policies/.bob/skills/skill-generator.md
```

This is my **master workflow guide** that tells me exactly how to create skills.

---

## My Complete 8-Step Workflow (From skill-generator.md):

### Step 1: Read All Policy Files ✅

First, use the `read_file` tool to read all three policy files together:
- `skillet-policies/rules/skill-format.md` (format requirements & validation checklist)
- `skillet-policies/rules/security-guidelines.md` (security requirements)
- `skillet-policies/rules/coding-standards.md` (coding conventions)

Study the format requirements, security checklist, and coding conventions that must be followed.

### Step 2: Analyze User Requirements ✅

Review the user's request to understand:
- What problem the skill solves
- What inputs are needed
- What steps are required
- What outputs will be generated

Ask follow-up questions if any requirements are unclear.

### Step 3: Structure the Skill Content ✅

Organize the skill content following the exact structure from `skill-format.md`:
- Title (clear and descriptive)
- Description (2-3 sentences, explains what and when)
- Category and Roles
- Prerequisites (at least 2 items)
- Inputs table (with name, type, required, description)
- Steps (minimum 3, using **imperative instructions**)
- Outputs (specific file paths or changes)
- Example Usage (concrete and realistic)
- Notes, Warnings, Related Skills

**Each step MUST use imperative language**: "First, run...", "Next, use...", "Then, execute..."

### Step 4: Apply Security Guidelines ✅

Review each step and code example against `security-guidelines.md`:
- Replace hardcoded credentials with `process.env.VARIABLE_NAME`
- Ensure SQL queries use parameterized queries
- Include input validation using Zod
- Add error handling with try/catch
- Verify no sensitive data is logged
- Include authentication/authorization checks

### Step 5: Apply Coding Standards ✅

Ensure all code examples follow `coding-standards.md`:
- Use ES6+ syntax (const, let, arrow functions, async/await)
- Follow naming conventions (camelCase, PascalCase)
- Include proper error handling
- Use meaningful variable names
- Add JSDoc comments
- Follow RESTful conventions

### Step 6: Write the Skill File ✅

Use `write_to_file` to create the skill file at:
```
skillet-skills/skills/{category}-{skill-name}.md
```
- Use kebab-case for filename
- Include all sections with complete content
- No placeholders or TODOs
- Under 500 lines, UTF-8 encoding

### Step 7: Validate the Generated Skill ✅

Read `.bob/skills/validate-skill.md` and run all 4 validation checks:

1. **Guideline Compliance (0-100)**: Structure, content, standards, examples
2. **Duplicate Detection (0-100%)**: Compare with existing skills
3. **Security Review (Pass/Fail)**: Check for vulnerabilities
4. **Completeness Check (Pass/Fail)**: Verify all sections present

Generate validation report with verdict: APPROVED/NEEDS REVIEW/REJECTED

### Step 8: Handle Validation Results ✅

Based on validation verdict:
- **APPROVED (✅)**: Present skill and use `attempt_completion`
- **NEEDS REVIEW (⚠️)**: Present issues, ask user, fix if needed
- **REJECTED (❌)**: Fix issues, re-validate, don't complete until passing

---

## Why This Workflow is Critical:

The `skill-generator.md` file ensures:
- ✅ I follow a **standardized 8-step process**
- ✅ I read **all 3 policy files** before starting
- ✅ I apply **security guidelines** to every skill
- ✅ I apply **coding standards** to all examples
- ✅ I **validate** every skill before completion
- ✅ I handle **validation failures** properly
- ✅ I never skip critical steps

---

## My Commitment:

**I will ALWAYS:**
1. Read `skillet-policies/.bob/skills/skill-generator.md` FIRST
2. Follow all 8 steps in order
3. Read all 3 policy files together (Step 1)
4. Validate every skill (Step 7)
5. Handle validation results properly (Step 8)
6. Never skip validation or security checks

This ensures every skill I create is:
- ✅ **Secure** (no vulnerabilities)
- ✅ **Compliant** (follows all standards)
- ✅ **Complete** (no missing sections)
- ✅ **Unique** (not duplicating existing skills)
- ✅ **Production-ready** (validated and approved)

**The skill-generator.md is my master guide, and I will never create a skill without following it.**
</result>
</attempt_completion>

---

**User:**

[attempt_completion] Result:
The user has provided feedback on the results. Consider their input to continue the task, and then attempt completion again.
<feedback>
what code can you change so it will ensure you will always read the skill-generator.md
</feedback>
<environment_details>
# VSCode Visible Files
skillet-policies\.bob\skills\skill-generator.md

# VSCode Open Tabs
skillet-skills/skills/frontend-local-environment-reset.md,skillet-skills/skills/skill-impact-analysis.md,skillet-policies/.bob/skills/skill-generator.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-02T20:53:41.789Z
User time zone: Asia/Singapore, UTC+8:00

# Current Cost
$0.64

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
# What Code Can Be Changed to Ensure I Always Read skill-generator.md

I understand your concern! As Bob (an AI assistant), I don't have persistent memory or code that I can modify to "remember" to always read the skill-generator.md file. However, here are the solutions that **you** can implement to ensure I always follow the correct workflow:

---

## Solution 1: Add to My System Instructions (RECOMMENDED) ✅

**You can modify my system instructions** to include a mandatory step. Add this to my custom instructions or system prompt:

```markdown
# Skill Creation Workflow

When creating any skill, Bob MUST:

1. FIRST: Read `skillet-policies/.bob/skills/skill-generator.md`
2. Follow all 8 steps defined in that file
3. Read all 3 policy files together (skill-format.md, security-guidelines.md, coding-standards.md)
4. Validate the skill before completion

Bob should NEVER create a skill without first reading skill-generator.md.
```

---

## Solution 2: Create a Custom @-Command ✅

**Create a custom @-command** that automatically triggers the skill-generator workflow:

**File: `.bob/commands/create-skill.md`**
```markdown
# @create-skill Command

When the user types `@create-skill`, Bob must:

1. Read `skillet-policies/.bob/skills/skill-generator.md`
2. Follow the 8-step workflow defined in that file
3. Ask for required inputs if not provided
4. Generate and validate the skill

This ensures the skill-generator.md is always read first.
```

Then users would type: `@create-skill [skill description]`

---

## Solution 3: Add Validation Hook ✅

**Create a pre-creation validation file** that I must check:

**File: `skillet-policies/.bob/hooks/pre-skill-creation.md`**
```markdown
# Pre-Skill Creation Hook

Before creating any skill file in `skillet-skills/skills/`, Bob MUST:

1. ✅ Read `skillet-policies/.bob/skills/skill-generator.md`
2. ✅ Confirm all 3 policy files have been read
3. ✅ Verify the 8-step workflow will be followed

If this hook is not followed, the skill creation should be rejected.
```

---

## Solution 4: Update Your Custom Instructions ✅

**Add this to your "User's Custom Instructions"** in the system:

```markdown
## Skill Creation Rules

Bob must ALWAYS:
- Read `skillet-policies/.bob/skills/skill-generator.md` before creating any skill
- Follow the 8-step workflow defined in skill-generator.md
- Read all policy files (skill-format.md, security-guidelines.md, coding-standards.md)
- Validate every skill before completion
- Never skip the validation step

If Bob attempts to create a skill without reading skill-generator.md first, 
remind Bob to read it and start over.
```

---

## Solution 5: Create a Checklist File ✅

**File: `skillet-policies/.bob/checklists/skill-creation-checklist.md`**
```markdown
# Skill Creation Checklist

Bob must complete this checklist for EVERY skill:

- [ ] Read `skillet-policies/.bob/skills/skill-generator.md`
- [ ] Read `skillet-policies/rules/skill-format.md`
- [ ] Read `skillet-policies/rules/security-guidelines.md`
- [ ] Read `skillet-policies/rules/coding-standards.md`
- [ ] Analyze user requirements
- [ ] Structure skill content
- [ ] Apply security guidelines
- [ ] Apply coding standards
- [ ] Write skill file
- [ ] Validate skill (all 4 checks)
- [ ] Handle validation results

If any item is unchecked, the skill is incomplete.
```

---

## Solution 6: Modify the README ✅

**Update `skillet-skills/README.md`** to include prominent instructions:

```markdown
# Skillet Skills Repository

## For Bob: Skill Creation Process

⚠️ **MANDATORY**: Before creating any skill, you MUST:

1. Read `skillet-policies/.bob/skills/skill-generator.md`
2. Follow the 8-step workflow defined in that file
3. Validate the skill before completion

**Never create a skill without reading skill-generator.md first.**

See: `skillet-policies/.bob/skills/skill-generator.md` for the complete workflow.
```

---

## Solution 7: Add to Environment Details ✅

**Request that the system includes this in my environment_details**:

```markdown
# Skill Creation Reminder
Before creating any skill, Bob must read:
- skillet-policies/.bob/skills/skill-generator.md (MANDATORY FIRST STEP)
```

---

## What I Recommend You Do:

**Combine Solutions 1 + 4 + 6:**

1. **Add to my Custom Instructions** (Solution 4) - This is in my system prompt
2. **Update the README** (Solution 6) - Visible reminder in the repository
3. **Create a custom @-command** (Solution 2) - Makes it easy to trigger correctly

This triple-layer approach ensures:
- ✅ I see the reminder in my instructions
- ✅ The repository documents the process
- ✅ Users can trigger the correct workflow easily

---

## The Reality:

As an AI, I don't have persistent memory between conversations. Each time you start a new conversation, I "forget" previous interactions. The only way to ensure I always follow the correct workflow is to:

1. **Embed it in my system instructions** (you control this)
2. **Remind me at the start of each conversation** when creating skills
3. **Use custom @-commands** that trigger the correct workflow
4. **Document it prominently** in README files I'll read

**The most effective solution is updating my Custom Instructions (Solution 4)** because that's part of my system prompt that I receive every time.

Would you like me to help you draft the exact text to add to my Custom Instructions?
</result>
</attempt_completion>

