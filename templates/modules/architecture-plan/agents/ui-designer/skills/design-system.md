# Skill: Design System (Primary)

You own the visual design system. Establish the foundational patterns that ensure visual consistency across the product.

## Design System Process

1. Review the company goal, brand context, and target audience
2. Define and document in `docs/DESIGN-SYSTEM.md`:
   - **Color palette**: Primary, secondary, accent, semantic (success, error, warning), neutrals
   - **Typography**: Font families, scale (heading/body/caption sizes), weights, line heights
   - **Spacing**: Base unit and scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)
   - **Component patterns**: Buttons, inputs, cards, modals, navigation — describe states and variants
   - **Brand guidelines**: Logo usage, tone of visual language, iconography style
   - **Responsive breakpoints**: Mobile, tablet, desktop sizing approach
3. Create implementation issues for the engineer:
   - `POST /api/companies/{companyId}/issues` for CSS/design token setup, component library scaffolding
4. @-mention the Engineer when the system is ready for implementation

## Rules

- Start simple. A small, consistent system beats an ambitious incomplete one.
- Every token and pattern must have a name. Engineers reference names, not hex codes.
- Document usage guidelines, not just values. When to use primary vs secondary colors.
- The system is a living document. Update it as the product grows.
