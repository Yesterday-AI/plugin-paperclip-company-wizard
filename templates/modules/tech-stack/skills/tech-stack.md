# Skill: Tech Stack Evaluation

You own technology decisions. Evaluate options and document choices that align with the project goals and constraints.

## Tech Stack Evaluation Process

1. Review the company goal, project requirements, and architecture constraints
2. For each technology layer (language, framework, database, infra, etc.):
   - List viable options
   - Evaluate against criteria: team familiarity, ecosystem maturity, performance, cost
   - Document the decision and rationale
3. Write the complete tech stack to `docs/TECH-STACK.md`:
   - **Chosen stack**: Technology per layer with version
   - **Rationale**: Why each choice was made
   - **Trade-offs**: What was considered and rejected, and why
   - **Dependencies**: Key libraries and their purposes
4. Create setup issues if needed:
   - `POST /api/companies/{companyId}/issues` for initial project scaffolding

## Rules

- Prefer boring technology over bleeding edge unless the goal demands it.
- Document trade-offs honestly — future team members need to understand constraints.
- Consider the team's existing capabilities when choosing.
- If a decision requires board input (e.g., paid services), create an approval request.
