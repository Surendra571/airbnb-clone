# Step 7 Prompt — Production Architecture & Documentation

> **Stage:** Step 7 — Production Architecture + AI Workflow + Documentation  
> **Target Reference:** `https://airbnb-clone-umber-two.vercel.app`

---

## Verbatim User Prompt

```text
STEP 7 — PRODUCTION ARCHITECTURE + AI WORKFLOW + DOCUMENTATION
You are preparing the final engineering documentation for the Airbnb-clone take-home assignment.
REFERENCE: https://airbnb-clone-umber-two.vercel.app

The application is already implemented and visually refined.
Previous work:
Step 1 — Reference analysis
Step 2 — Project architecture
Step 3 — Listing Page
Step 4 — Photo Tour
Step 5 — Lightbox
Step 6 — Pixel-perfect visual QA

DO NOT redesign or rewrite the application in this step.
DO NOT change working UI unless a documentation issue requires a very small correction.
The goal is now to produce a professional submission package.

READ EXISTING DOCUMENTATION:
docs/reference-analysis.md, docs/assets.md, docs/architecture.md,
docs/listing-page-checklist.md, docs/photo-tour-checklist.md,
docs/lightbox-checklist.md, docs/visual-qa.md, .ai/README.md

PRODUCTION-SCALE MARKETPLACE ARCHITECTURE:
Create a high-level architecture diagram for a production-scale vacation-rental marketplace:
docs/architecture-diagram.png
Cover Client, Edge/CDN, Web Frontend, API Gateway / Load Balancer, Logical backend microservices,
Database (PostgreSQL + Read Replicas), Redis Cache, Search (OpenSearch/ES), Object Storage (S3),
Async Message Queue & Workers, Payment Abstraction, CI/CD Pipeline, Observability, Security, Scaling.

UPDATE ARCHITECTURE DOCUMENT:
Update docs/architecture.md separating Current Take-Home Architecture,
Production-Scale Marketplace Architecture, and Scaling Strategy.

AI WORKFLOW DOCUMENTATION:
Create docs/ai-workflow.md documenting Tools, Workflow, Human Responsibilities, and AI Responsibilities.

AI PROMPT HISTORY:
Create docs/ai-prompts/ (01 through 07) and docs/ai-prompts/README.md.

SUB-AGENT / SKILL CONFIGURATION:
Create .ai/ directory structure with README.md, agents/README.md, agents/, skills/, and guardrails.md.

README:
Update README.md with clean overview, features, stack, architecture links, setup, test, and originality statement.

SUBMISSION CHECKLIST:
Create docs/submission-checklist.md.

FINAL TECHNICAL VALIDATION:
Run npm run lint, npm run build, and npm test.
```

