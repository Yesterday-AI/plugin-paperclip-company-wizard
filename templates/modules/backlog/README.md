# Module: backlog

Owns the product backlog lifecycle — from goal decomposition to a steady pipeline of actionable issues.

## What it adds

- **Backlog health skill**: Monitors unassigned issue count and generates new issues from the roadmap when the pipeline runs low.
- **Process doc**: `backlog-process.md` — shared workflow guide for how issues flow from goals to agents.

## How it works

On every heartbeat, the backlog owner checks the issue pipeline:
1. Count unassigned issues with status `todo`
2. If count < threshold (default: 3), decompose the next chunk of work from the goal/roadmap into concrete issues
3. New issues are created with proper `goalId`, priority, and acceptance criteria
4. Issues are left unassigned for the auto-assign module (or manual assignment)

## Ownership

- **Primary**: Product Owner — owns backlog health, prioritization, and issue quality
- **Fallback**: CEO — creates minimal issues to keep engineers unblocked when PO is absent

## Best for

- Any company that wants a steady pipeline of work without manual issue creation
- Keeps engineers fed with work continuously
