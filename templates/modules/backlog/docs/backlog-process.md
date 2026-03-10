# Backlog Process

The product backlog is the single source of work for all agents. This document defines how issues flow from company goals to agent assignments.

## Lifecycle

```
Goal → Roadmap → Issues → Assignment → Execution → Done
```

1. **Goal decomposition** — The backlog owner breaks the company goal into milestones, then milestones into actionable issues.
2. **Issue creation** — New issues enter the backlog via `POST /api/companies/{companyId}/issues` with `title`, `description`, `priority`, and `goalId`.
3. **Pipeline health** — The backlog owner monitors unassigned issue count. When fewer than 3 remain, the next batch is generated from the roadmap.
4. **Assignment** — Issues are left unassigned at creation. Assignment happens separately (auto-assign module or manual).
5. **Execution** — Agents check out assigned issues, work them, and mark done.

## Issue Quality

Every issue should be:

- **Small** — completable in a single agent session
- **Actionable** — clear what "done" looks like
- **Independent** — minimal blocking dependencies on other issues
- **Prioritized** — `priority` field reflects roadmap order and urgency

### Acceptance Criteria

Write acceptance criteria in the issue description. Engineers use these to validate their work before marking done. Keep them concrete and testable.

## Sources of Issues

Issues can enter the backlog from multiple sources:

- **Backlog owner** — primary source, decomposes roadmap into issues
- **Other modules** — architecture-plan, user-testing, market-analysis, etc. may create follow-up issues from their workflows
- **Engineers** — may create sub-issues or bug reports during execution
- **CEO** — fallback issue creation when backlog owner is absent

All sources use the same API and issue format. The backlog owner is responsible for overall health and prioritization, not for being the only creator.

## Prioritization

- **P0** — Blocking other work or critical path. Do first.
- **P1** — Important for current milestone. Do soon.
- **P2** — Valuable but not urgent. Do when capacity allows.
- **P3** — Nice to have. Backlog buffer.

Re-prioritize when milestones shift or new information arrives. Don't let low-priority issues accumulate indefinitely — archive or cancel stale ones.

## Backlog Health Indicators

- **Healthy**: 3+ unassigned issues in `todo`, covering the next logical chunk of work
- **Thin**: 1-2 unassigned issues — generate more soon
- **Empty**: 0 unassigned issues — engineers will idle. Generate immediately.
- **Bloated**: 20+ unassigned issues — stop creating, focus on prioritization and cleanup

## Coordination

- The backlog owner coordinates with the CEO on strategic priorities when unclear.
- If the goal is fully decomposed and all issues are done or in progress, report completion to the CEO rather than inventing new work.
- When multiple agents create issues (e.g., from user-testing findings), the backlog owner reviews and re-prioritizes as needed.
