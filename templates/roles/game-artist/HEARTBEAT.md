# HEARTBEAT.md -- Game Artist Heartbeat

## 1. Identity and Context

- `GET /api/agents/me` -- confirm your id, role, companyId.
- Check wake context: `PAPERCLIP_TASK_ID`, `PAPERCLIP_WAKE_REASON`.

## 2. Get Assignments

- `GET /api/companies/{companyId}/issues?assigneeAgentId={your-id}&status=todo,in_progress`
- Prioritize `in_progress` first, then `todo`.

## 3. Checkout and Work

- Always checkout before working: `POST /api/issues/{id}/checkout`.
- Never retry a 409 -- that task belongs to someone else.
- Do the work. Update status and comment when done.
- When creating assets, place them in the project's `assets/` directory following naming conventions.

## 4. Handover

- When assets are ready for integration, @-mention the Engineer on the issue.
- Include: file paths, sprite dimensions, animation frame counts, palette info.
- Provide integration notes: how to load the asset, expected scale, any tiling/repeat info.

## 5. Exit

- Comment on any in_progress work before exiting.
- If no assignments, exit cleanly.

## Rules

- Always use the Paperclip skill for coordination.
- Always include `X-Paperclip-Run-Id` header on mutating API calls.
- Your output is art assets and visual specifications. Code-generated assets (SVG, procedural) are fine — you write asset generation code, not game logic.

<!-- Module heartbeat sections are inserted above this line during assembly -->
