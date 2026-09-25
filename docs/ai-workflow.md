# AI-Assisted Engineering Workflow

> **Project:** Desktop-Only Airbnb Clone Take-Home Assignment  
> **Environment:** Google Antigravity Agentic Assistant / Gemini Pro & Claude Sonnet Models  
> **Repository:** `airbnb-clone`

---

## 1. AI Tooling & Environment Stack

During the development of this application, AI was employed as an active pair programmer and reverse-engineering partner:

- **Primary AI Assistant:** Google Antigravity (Advanced Agentic Coding Environment)
- **Language Models Used:** Gemini 2.5 Pro & Claude 3.7 Sonnet (multi-turn reasoning, architectural design, component authoring, visual QA differential analysis)
- **Browser Automation Tools:** Chrome DevTools Protocol (CDP) via Node.js scripts for headless inspection, automated interaction sequences, and high-resolution viewport screenshot capture (`1440 × 900`).
- **Testing & Runtime Environment:** Node.js v24.18.1, Next.js 16.3.5 (Turbopack, App Router), React 19.2, TypeScript 5, Tailwind CSS v4, Windows x64 PowerShell.

*Note: Only tools and models that were actually used during this project are listed.*

---

## 2. End-to-End Development Workflow

The project followed a disciplined, seven-phase engineering process:

```text
1. Reference Analysis (Step 1)
   └── Inspected rendered UI of the reference deployment
   └── Documented exact dimensions, layout, token values, room taxonomy, and photo inventory
   └── Created docs/reference-analysis.md

2. Project Setup & Architecture (Step 2)
   └── Initialized clean Next.js 16 App Router application
   └── Established TypeScript domain interfaces and design tokens (src/styles/tokens.ts)
   └── Authored initial unit tests (tests/property.test.ts)
   └── Created docs/assets.md & docs/architecture.md

3. Listing Page Implementation (Step 3)
   └── Built complete desktop listing page (Header, Hero Mosaic, Property Details,
       Amenities, Dual-month Calendar, Reviews, Map, Host, Policies, BookingCard)
   └── Replaced emoji with custom SVG vector icons
   └── Created docs/listing-page-checklist.md

4. Photo Tour Modal (Step 4)
   └── Built fullscreen overlay modal with sticky header & 9-room category strip
   └── Implemented asymmetric 2-column room grid with smooth anchor scrolling
   └── Implemented focus trapping, Escape key handling, and URL parameter sync
   └── Created docs/photo-tour-checklist.md

5. Lightbox Modal (Step 5)
   └── Built single-image inspection modal layered above Photo Tour
   └── Implemented ArrowLeft / ArrowRight navigation, boundary button disabling,
       and exact 'X of 21' counter
   └── Preserved background Photo Tour scroll state and established focus restoration
   └── Created docs/lightbox-checklist.md

6. Pixel-Perfect Visual QA & Refinement (Step 6)
   └── Captured 8 QA screenshot pairs at standardized 1440×900 viewport
   └── Performed 3-pass visual differential inspection (Structural, Visual, Behavioral)
   └── Implemented sticky sub-navigation header on scroll past gallery, dual laurels,
       cancellation container pill, and photo card sleeping layouts
   └── Created docs/visual-qa.md and updated all checklists

7. Production Architecture & Submission Package (Step 7)
   └── Designed production-scale vacation-rental marketplace architecture
   └── Generated high-resolution architecture diagram (docs/architecture-diagram.png)
   └── Authored comprehensive AI workflow, prompt history, guardrails, and submission checklist
```

---

## 3. Division of Responsibilities

A strict separation of concerns was maintained between human oversight and AI assistance throughout the project:

### 3.1 Human Responsibilities
The human software engineer maintained complete architectural authority and editorial control:
- **Code Review:** Reviewed every file created and modified by the AI assistant, ensuring code cleanliness, type safety, and adherence to React 19 standards.
- **Visual & Behavioral Verification:** Directly observed and validated the reference website interactions (scrolling, modal transitions, hover states, keyboard shortcuts).
- **Accessibility & Focus Validation:** Checked focus trap loops, screen-reader semantics, and `:focus-visible` ring visibility.
- **Testing & Build Verification:** Ran the test runner (`npm test`), linter (`npm run lint`), and production compiler (`npm run build`) after every major milestone.
- **Architectural Decision-Making:** Approved the URL-driven state machine approach over global state libraries to maintain architectural simplicity.
- **Visual QA Governance:** Evaluated screenshot diffs to prioritize high-impact visual refinements over superficial changes.

### 3.2 AI Responsibilities
The AI assistant operated as an execution and analysis accelerator:
- **Specification Structuring:** Synthesized observed reference UI behaviors into clear, structured implementation checklists.
- **Component Authoring & Scaffolding:** Generated type-safe React/TypeScript components with clean Tailwind CSS v4 utility classes.
- **Vector Icon Translation:** Designed lightweight, mathematically accurate SVG path elements for the Airbnb icon suite.
- **Automated QA Scripting:** Wrote Chrome DevTools Protocol (CDP) scripts to capture deterministic, multi-state comparison screenshots at `1440 × 900`.
- **Differential Reasoning:** Analyzed side-by-side screenshot comparisons to spot subtle discrepancies (e.g. missing sticky sub-navigation on scroll, laurel symmetry, counter formatting).
- **Test Generation:** Authored automated unit tests verifying data models, edge boundary indexes, and token consistency.
- **Documentation Authoring:** Maintained technical documentation, prompt records, and architecture diagrams.

---

## 4. Key AI Pair-Programming Insights

1. **Deterministic Verification over Guessing:**
   Instead of guessing reference measurements, the AI wrote CDP scripts to inspect computed styles and capture exact pixel views, dramatically reducing iteration time.
2. **URL Search Parameter State Machine:**
   The AI recommended using Next.js App Router query parameters (`?modal=...&modalItem=...`) rather than ephemeral React state, yielding shareable modal links and seamless browser Back/Forward history support out of the box.
3. **Rigorous Guardrails:**
   By strictly adhering to the constraint never to inspect, decompile, or lift the reference site's source code, all components and logic were authored from first principles, ensuring complete originality and clean architectural structure.

