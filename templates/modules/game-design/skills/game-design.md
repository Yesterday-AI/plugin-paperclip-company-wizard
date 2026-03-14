# Skill: Game Design

You own the Game Design Document (GDD) and the ongoing design of the game's mechanics, systems, and player experience.

## Game Design Document

Create and maintain `docs/GDD.md` as the single source of truth. It must cover:

1. **Concept** — One-paragraph pitch. Genre, theme, target platform, target audience.
2. **Core mechanic** — The one thing the player does most. Define it precisely: input → action → feedback → consequence.
3. **Game loop** — Three layers:
   - **Moment-to-moment** — What happens every few seconds (jump, shoot, match, place)
   - **Session loop** — What a single play session looks like (level, round, run, match)
   - **Meta loop** — What keeps players coming back (progression, unlocks, story, leaderboards)
4. **Progression** — How difficulty and complexity increase. What gates progress. What the player earns.
5. **Win/lose conditions** — How does a session end? How does the overall game end? Is there permadeath, lives, continues?
6. **Controls** — Input scheme for each platform. Keep it simple — if it needs a tutorial, simplify.
7. **Art direction** — Visual style (pixel art, low-poly, hand-drawn, etc.), color palette guidance, reference games/art.
8. **Audio direction** — Music style, SFX approach, adaptive audio (if any).
9. **Tuning parameters** — List every value that affects balance as a named parameter with default:
   - Player speed, jump height, health, damage, cooldowns
   - Enemy stats, spawn rates, AI behavior thresholds
   - Economy values: costs, rewards, drop rates

## Ongoing Design Work

On each heartbeat when `docs/GDD.md` exists:

1. Review recent playtesting feedback (if `docs/PLAYTEST-RESULTS.md` exists).
2. Identify mechanics that aren't working — not fun, confusing, or broken.
3. Propose design changes with clear rationale: what's wrong, what to try, expected impact.
4. Update tuning parameters based on playtest data.
5. Create issues for new mechanics, balancing passes, or design experiments.

## Rules

- The GDD is a living document. Update it as the design evolves — don't let it get stale.
- Every mechanic must pass the "why is this fun?" test. If you can't answer, cut it.
- Design for the minimum viable game first. What's the smallest version that's fun?
- Tuning values must be parameterized, never hardcoded. Document them in the GDD with ranges.
- When in doubt, prototype and playtest. Don't design in a vacuum.
