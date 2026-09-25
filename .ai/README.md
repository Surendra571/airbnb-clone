# AI Workflow & Configuration Protocol

> **Project:** Desktop-Only Airbnb Clone Take-Home Assignment  
> **Repository:** `airbnb-clone`  
> **Target Reference:** [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app/)

---

## 1. AI Tooling & Environment

- **Primary AI Assistant:** Google Antigravity (Advanced Agentic Coding Environment)
- **Models:** Gemini 2.5 Pro & Claude 3.7 Sonnet
- **Runtime Environment:** Node.js v24.18.1, Next.js 16.3.5 (App Router, Turbopack), React 19.2, TypeScript 5, Tailwind CSS v4, Windows x64 PowerShell.
- **Automation Protocol:** Headless Chrome DevTools Protocol (CDP) for high-resolution visual capture and interactive sequence verification.

---

## 2. AI Sub-Agent Architecture

Specialized roles and boundary constraints are defined in [`.ai/agents/`](./agents/README.md):

1. [**Reference Analyst**](./agents/reference-analyst.md): Headless observation of reference UI, dimensions, and tokens. Read-only; never copies source code.
2. [**Frontend Builder**](./agents/frontend-builder.md): Authors clean React 19 / Next.js / Tailwind CSS components and SVG vector icons.
3. [**Visual QA**](./agents/visual-qa.md): Captures standardized screenshot pairs (`1440 × 900`) and catalogs visual discrepancies.
4. [**Accessibility Reviewer**](./agents/accessibility-reviewer.md): Audits keyboard navigation, focus trapping, focus restoration, and ARIA dialog semantics.
5. [**Test Reviewer**](./agents/test-reviewer.md): Executes automated test suites, linting, and production builds without regressing working UI.
6. [**Documentation Agent**](./agents/documentation-agent.md): Maintains technical specifications, prompt sequences, and architecture blueprints.

---

## 3. Specialized Agent Skills

Configured skills located in [`.ai/skills/`](./skills/):

- [**cdp-screenshot**](./skills/cdp-screenshot/SKILL.md): Automated Chrome DevTools Protocol script for deterministic desktop viewport screenshots at `1440 × 900`.
- [**pixel-diff**](./skills/pixel-diff/SKILL.md): Structured 3-pass methodology (Structural, Visual, Behavioral) for comparing reference and local implementations.

---

## 4. Strict Engineering Guardrails

Mandatory rules governing all AI assistants on this repository are documented in [`.ai/guardrails.md`](./guardrails.md):

- **Absolute Originality:** Never copy, lift, decompile, or scrape source code or bundles from the reference site.
- **Desktop Focus:** Desktop viewport exclusively (`1120px` content container, `1440 × 900` standard viewport).
- **Zero Bloat:** Native React 19 and Next.js App Router query synchronization; no external state management libraries.
- **Honest Reporting:** Every command, test result, and build metric reported must be verified directly via terminal execution.
