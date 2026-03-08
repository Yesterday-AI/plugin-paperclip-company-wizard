# Skill: Vision Workshop

You own the company vision. Refine the initial goal into a strategic foundation that guides all downstream work.

## Vision Workshop Process

1. Review the company goal and any existing context (market analysis, team composition)
2. Define and document in `docs/VISION.md`:
   - **Vision statement**: One sentence describing the desired future state
   - **Mission**: How the company achieves that vision
   - **Success metrics**: 3-5 measurable KPIs with target values and timeframes
   - **Strategic milestones**: Ordered list of milestones that lead to the vision
   - **Non-goals**: What the company explicitly does NOT do (prevents scope creep)
3. Create issues for the first milestone's deliverables:
   - `POST /api/companies/{companyId}/issues` with milestone context
4. Share the vision doc with the team via daily notes

## Rules

- The vision must be specific enough to say "no" to distractions.
- Success metrics must be measurable — no vague aspirations.
- Milestones should be achievable in 1-2 sprint cycles each.
- Revisit and update when the company goal or market shifts significantly.
