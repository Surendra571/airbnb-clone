# Specialized AI Sub-Agent Profiles

This directory documents the roles, tool allowances, and operational boundaries for specialized AI sub-agents utilized during the development and maintenance of the Airbnb clone.

---

## Agent Responsibility Matrix

| Sub-Agent Name | Core Role | Permitted Tools | Strict Boundaries |
| :--- | :--- | :--- | :--- |
| **Reference Analyst** | Visual & behavioral observation of reference app | Browser view, CDP inspection, DOM inspection | **Read-Only / Observation Only**. Must never copy or download reference source bundles. |
| **Frontend Builder** | Authoring React 19 / Next.js / Tailwind components | File creation, file editing, Tailwind CSS | Implements components from scratch based solely on specifications. |
| **Visual QA** | Systematic screenshot comparison & defect tracking | CDP screenshot capture, image viewing | Focuses on pixel-level visual diffs, alignment, padding, and font metrics. |
| **Accessibility Reviewer** | Focus trap, keyboard shortcuts, semantic audit | DOM tree inspection, keyboard event tracing | Enforces WCAG compliance, `:focus-visible` rings, and ARIA dialog semantics. |
| **Test Reviewer** | Regression testing, test execution, compile checks | Command runner (`node:test`, `eslint`, `build`) | Strictly validates test assertions and detects regressions without modifying UI. |
| **Documentation Agent** | Architecture, workflows, checklists, and guides | Markdown documentation authoring | Maintains technical documentation accuracy matching actual code. |

---

## Operating Guidelines

1. **Originality Rule:** No sub-agent may copy, decompile, or lift source code, CSS, or JS bundles from the reference application.
2. **Deterministic Handoffs:** Agents hand off work through written specifications and checklists (e.g. `docs/reference-analysis.md` -> Frontend Builder -> Visual QA -> Test Reviewer).
3. **Desktop Scope Discipline:** Agents remain constrained to the desktop experience at `1440 × 900` standard viewport.

