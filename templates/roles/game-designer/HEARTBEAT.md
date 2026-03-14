# HEARTBEAT.md -- Game Designer Heartbeat

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
- When producing design documents, write them as markdown in the project workspace.

## 4. Handover

- When designs are ready for implementation, @-mention the Engineer on the issue.
- Include specific implementation notes: parameter values, edge cases, expected feel.
- When requesting playtesting, define what to test and what metrics to watch.

## 5. Exit

- Comment on any in_progress work before exiting.
- If no assignments, exit cleanly.

## Rules

- Always use the Paperclip skill for coordination.
- Always include `X-Paperclip-Run-Id` header on mutating API calls.
- Your output is design documents and specifications, not game code. Engineers implement your designs.

<!-- Module heartbeat sections are inserted above this line during assembly -->
