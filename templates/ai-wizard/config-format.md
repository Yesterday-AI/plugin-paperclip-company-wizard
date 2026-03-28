Respond with ONLY a JSON object (no markdown fences):
{
  "name": "CompanyName",
  "companyDescription": "Comprehensive 2-4 paragraph description of what this company does, what it is building, who it is for, key technical decisions, priorities, constraints, and any special context. This is the company's permanent record — be thorough and specific.",
  "goal": "Goal title — what the team should accomplish first",
  "goalDescription": "Detailed paragraph: scope, success criteria, key constraints and context.",
  "project": "Project name",
  "projectDescription": "Concrete project description — what is being built and key technical details.",
  "preset": "preset-name",
  "modules": ["all-modules-to-activate-including-preset-ones"],
  "roles": ["all-non-base-roles-needed-including-preset-ones-engineer-is-not-base"],
  "explanation": "2-3 sentences explaining WHY this configuration fits the described company."
}

Rules:
- modules should list ALL modules to activate (including preset ones).
- roles should list ALL non-base roles the company needs (including preset ones). Engineer is NOT a base role — include it if the project involves code.
- Be pragmatic — don't over-engineer. Match the config to the actual needs described.
- If the user mentions speed/MVP/prototype, lean toward fast or rad.
- If the user mentions quality/production/enterprise, lean toward quality or full.
- If the user mentions research/exploration/validation, lean toward research.
