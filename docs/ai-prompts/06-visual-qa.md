# Step 6 Prompt — Pixel-Perfect Visual QA & Refinement

> **Stage:** Step 6 — Pixel-Perfect Visual QA + Refinement  
> **Target Reference:** `https://airbnb-clone-umber-two.vercel.app` (Mirror: `https://airbnb-clone-chi-one.vercel.app`)

---

## Verbatim User Prompt

```text
STEP 6 — PIXEL-PERFECT VISUAL QA + REFINEMENT
You are the final visual QA and frontend polish engineer for this Airbnb-clone take-home assignment.
REFERENCE: https://airbnb-clone-umber-two.vercel.app

The application now contains:
- Listing Page
- Photo Tour
- Lightbox
Previous documentation:
docs/reference-analysis.md
docs/assets.md
docs/architecture.md
docs/listing-page-checklist.md
docs/photo-tour-checklist.md
docs/lightbox-checklist.md
.ai/README.md

CORE OBJECTIVE:
DO NOT ADD NEW FEATURES.
DO NOT REWRITE THE APPLICATION FROM SCRATCH.
DO NOT COPY THE REFERENCE SOURCE CODE.
Your job is to perform a serious visual and behavioral comparison between:
REFERENCE WEBSITE and LOCAL IMPLEMENTATION
Then systematically fix every meaningful difference.
The target is pixel-level visual fidelity at the reference desktop viewport.

PREPARE THE TEST ENVIRONMENT:
Start the local development server.
Open the reference website and local application.
Determine reference viewport dimensions (standardize on 1440 × 900 at 100% zoom).
Record in docs/visual-qa.md.

EXECUTE 3 REFINEMENT PASSES:
1. Pass 1: Structural & Layout Alignment
2. Pass 2: Visual & Design Token Precision
3. Pass 3: Interaction & Behavioral Polish

CREATE A VISUAL QA DOCUMENT:
Create: docs/visual-qa.md
Structure: Environment, Systematic Defect Register, 3-Pass Refinement Summary, Verification Matrix.
For every issue record: ID, Area, Reference, Local, Difference, Fix.

FINAL TECHNICAL VALIDATION:
Run npm test, npx eslint src, npm run build.
```

