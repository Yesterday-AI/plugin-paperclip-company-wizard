---
name: release
description: Prepare a new release by updating CHANGELOG.md, verifying documentation (README.md, CLAUDE.md, AGENTS.md, ROADMAP.md, docs/), bumping patch version in package.json, building, and suggesting publish commands. Use when asked to release, bump version, prepare release, or publish.
---

# Release — Prepare and Document a New Version

## Phase 1: Analyze Changes

Understand what changed since the last release:

1. **Read current version** from `package.json`.
2. **Read `CHANGELOG.md`** to understand the last documented version and its date.
3. **Run `git log`** from the last version tag (or last changelog date) to HEAD. Collect all commit messages.
4. **Run `git diff`** against the last release to see all file changes. Pay attention to:
   - New features (new files, new actions, new UI steps)
   - Bug fixes (error handling, logic corrections)
   - Template changes (new presets, modules, roles, prompt updates)
   - Configuration changes (new settings, defaults)
   - Breaking changes (removed features, renamed fields, API changes)
5. **Categorize changes** into: Added, Changed, Fixed, Removed, Template system (if applicable).

## Phase 2: Update CHANGELOG.md

1. **Read** `CHANGELOG.md` to understand the existing format and style.
2. **Add a new version section** at the top (below the header), following [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format:
   ```
   ## [X.Y.Z] — YYYY-MM-DD

   ### Added
   - Feature description

   ### Changed
   - Change description

   ### Fixed
   - Bug fix description
   ```
3. **Match the tone and detail level** of existing entries. Be specific — mention file names, action names, field names where relevant.
4. **Do NOT include** trivial changes (formatting, comments) unless they affect behavior.

## Phase 3: Verify Documentation

Check each documentation file against the actual codebase. For each file, read it and verify accuracy. Only edit if something is factually wrong or missing due to the changes being released.

### Files to check:

1. **`README.md`** — Verify:
   - Feature descriptions match current behavior
   - Configuration options are up to date
   - Template counts (presets, modules, roles) are accurate
   - Example commands still work
   - Any new features from this release are mentioned where appropriate

2. **`CLAUDE.md`** — Verify:
   - Architecture description matches current source layout
   - Key concepts are accurate (especially if state fields, actions, or API flow changed)
   - Template system description is current
   - Build/test commands are correct

3. **`AGENTS.md`** — Verify:
   - Project vision still matches reality
   - Architecture diagram is current
   - Design principles haven't been violated by changes
   - Template/module/role counts are accurate

4. **`ROADMAP.md`** — Verify:
   - Move newly completed items from "Backlog" or "In Progress" to "Done"
   - Add any new backlog items discovered during development
   - Remove items that are no longer relevant

5. **`docs/`** directory — Verify:
   - Any documentation files are consistent with template/module changes
   - Cross-references between docs are still valid

### Documentation rules:
- Only update what's actually wrong or missing. Don't rewrite prose that's still accurate.
- If counts changed (e.g., "14 presets" → "15 presets"), update all occurrences across all files.
- If a new state field was added, ensure CLAUDE.md's WizardContext description mentions it.
- If new worker actions were added, ensure they're listed in the architecture section.

## Phase 4: Bump Version

1. **Read** `package.json` to get the current version.
2. **Increment the patch version** (e.g., `0.1.2` → `0.1.3`). Use minor for new features, patch for fixes and enhancements.
3. **Edit** `package.json` to update the `"version"` field.
4. **Also check** if the version appears in any other files (manifest, README badges, etc.) and update those too.

## Phase 5: Build and Verify

1. **Run `pnpm build`** — ensure it succeeds with no errors.
2. **Run `pnpm typecheck`** — ensure no type errors.
3. **Run `pnpm test`** — if tests exist and are configured, run them.

If any step fails, fix the issue before proceeding.

## Phase 6: Suggest Publish Commands

Do NOT run these commands — just print them for the user to review and execute manually.

Present the commands in order:

```
# Review the changes one more time:
git diff

# Commit everything:
git add -A
git commit -m "chore: release vX.Y.Z"

# Tag the release:
git tag vX.Y.Z

# Push:
git push && git push --tags

# Publish to npm:
pnpm publish --access public
```

If the package is scoped (starts with `@`), remind the user that `--access public` is needed for public packages.

Also mention: "After publishing, reload the plugin in the Paperclip UI to pick up the new version."
