## ABD updated mockup

Each category has one concise prompt (high-level guideline), two different realistic descriptions, and 3 levels of accessibility requirements.

Prompt structure per category:
```
[concise prompt]  ← high-level guideline shared across both descriptions

[realistic description #1]  ← specific platform/brand scenario A
[realistic description #2]  ← specific platform/brand scenario B

[accessibility level 0: null — no requirements]
[accessibility level 1: concise general requirements]
[accessibility level 2: full requirements with category-specific detailed examples]
```

Each actual prompt sent to an agent combines:
**concise prompt + one realistic description + one accessibility level**

Total prompt count:
**2 descriptions × 3 agents × 5 categories × 3 levels = 90 prompts**

*Note: The time it takes to create a webpage increases gradually as the accessibility level progresses.

---

## Current Status

### Level 0 (No Accessibility) — Description #1

| Platform      | Codex | Claude Code | Google Antigravity |
|---------------|-------|-------------|--------------------|
| E-commerce    | ✅    | ✅          | ✅                 |
| Government    | ✅    | ✅          | ✅                 |
| Social Media  | ✅    | ✅          | ✅                 |
| Mass Media    | ✅    | ✅          | ✅                 |
| Education     | ✅    | ✅          | ✅                 |

### Level 0 (No Accessibility) — Description #2

| Platform      | Codex | Claude Code | Google Antigravity |
|---------------|-------|-------------|--------------------|
| E-commerce    | ✅     | ✅          | ✅                 |
| Government    | ✅     | ✅          | ✅                 |
| Social Media  | ✅     | ✅          | ✅                 |
| Mass Media    | ✅     | ✅          | ✅                   |
| Education     |       |             |                    |

---

### Level 1 (General Accessibility) — Description #1

| Platform      | Codex | Claude Code | Google Antigravity |
|---------------|-------|-------------|--------------------|
| E-commerce    | ✅    | ✅          | ✅                 |
| Government    | ✅    | ✅          | ✅                 |
| Social Media  | ✅    | ✅          | ✅                 |
| Mass Media    | ✅    | ✅          | ✅                 |
| Education     | ✅    | ✅          | ✅                 |

### Level 1 (General Accessibility) — Description #2

| Platform      | Codex | Claude Code | Google Antigravity |
|---------------|-------|-------------|--------------------|
| E-commerce    |       |             |                    |
| Government    |       |             |                    |
| Social Media  |       |             |                    |
| Mass Media    |       |             |                    |
| Education     |       |             |                    |

---

### Level 2 (Full Accessibility) — Description #1

| Platform      | Codex | Claude Code | Google Antigravity |
|---------------|-------|-------------|--------------------|
| E-commerce    | ✅    | ✅          | ✅                 |
| Government    | ✅    | ✅          | ✅                 |
| Social Media  | ✅    | ✅          | ✅                 |
| Mass Media    | ✅    | ✅          | ✅                 |
| Education     | ✅    | ✅          | ✅                 |

### Level 2 (Full Accessibility) — Description #2

| Platform      | Codex | Claude Code | Google Antigravity |
|---------------|-------|-------------|--------------------|
| E-commerce    |       |             |                    |
| Government    |       |             |                    |
| Social Media  |       |             |                    |
| Mass Media    |       |             |                    |
| Education     |       |             |                    |
