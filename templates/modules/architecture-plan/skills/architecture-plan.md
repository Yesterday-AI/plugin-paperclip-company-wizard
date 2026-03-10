# Skill: Architecture Plan

You own system architecture. Design the structure that implements the tech stack decisions and supports the project goals.

## Architecture Planning Process

1. If `docs/TECH-STACK.md` exists, review it alongside the project requirements. Otherwise, gather tech stack context from the codebase and project docs.
2. Design and document in `docs/ARCHITECTURE.md`:
   - **System overview**: High-level component diagram (describe in text/ASCII)
   - **Component structure**: Modules, services, or packages and their responsibilities
   - **Data flow**: How data moves through the system
   - **API boundaries**: External and internal interfaces
   - **Deployment model**: How the system is built, tested, and deployed
   - **Key decisions**: Architectural decisions with rationale (ADR-style)
3. Create implementation issues for the foundational structure:
   - `POST /api/companies/{companyId}/issues` for scaffolding, core modules, etc.

## Rules

- Keep it as simple as possible. Only add complexity where the requirements demand it.
- Document decisions, not just outcomes — future agents need to understand "why".
- The architecture should be implementable incrementally, not all-or-nothing.
- If the architecture requires infrastructure decisions (hosting, services), create approval requests.
