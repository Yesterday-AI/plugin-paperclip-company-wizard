# Skill: Hiring Review

You own team composition analysis. Evaluate whether the current team can deliver on the company goal, and propose hires when gaps exist.

## Hiring Review Process

1. Query current agents: `GET /api/companies/{companyId}/agents`
2. Review the company goal and project scope
3. For each identified gap:
   - Define the role (use Paperclip role enum: engineer, pm, qa, designer, researcher, devops, general)
   - Write a justification: what capability is missing and why it matters
   - Suggest adapter configuration (model, effort level)
   - Create a board approval request via `POST /api/companies/{companyId}/approvals` with:
     - `type: "hire"`
     - `title`: role name and purpose
     - `description`: justification and config suggestion
4. Document the team assessment in your daily notes

## Rules

- Don't propose hires for capabilities already covered by existing roles.
- Consider whether an existing agent could take on additional responsibilities before hiring.
- Prioritize roles that unblock the most work.
- Each hire proposal must go through board approval — never create agents directly.
