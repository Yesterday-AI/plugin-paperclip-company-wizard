# Skill: Hiring Review (Fallback)

The Product Owner primarily manages team composition analysis. You are the fallback — step in only if the PO is absent or hasn't addressed critical team gaps.

## Hiring Review (Fallback)

1. Query current agents: `GET /api/companies/{companyId}/agents`
2. If a critical capability gap is blocking progress and the PO hasn't acted:
   - Create a board approval request for the most urgent hire
   - Keep it to one proposal at a time
   - Tag the PO to take over broader team planning

## Rules

- This is a safety net, not your primary job. Let the PO own it.
- Only propose hires when progress is visibly blocked by missing expertise.
- One hire at a time. Don't over-expand.
