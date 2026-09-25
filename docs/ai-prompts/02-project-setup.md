# Step 2 Prompt — Project Setup & Architecture

> **Stage:** Step 2 — Project Setup + Component Architecture  
> **Target Reference:** `https://airbnb-clone-umber-two.vercel.app`

---

## Verbatim User Prompt

```text
STEP 2 — Project Setup + Component Architecture
You are continuing the Airbnb-clone take-home assignment.
Reference: https://airbnb-clone-umber-two.vercel.app

The previous step created:
docs/reference-analysis.md
Read that file completely before doing anything else.

IMPORTANT RULES:
This must be an ORIGINAL implementation.
Do NOT copy or lift source code from the reference application.
Do NOT use the reference application's JavaScript bundles or source files.
Use the reference only as a visual and behavioral specification.
Desktop only.
Keep the implementation focused on the assignment.
Do not build unnecessary backend functionality.
Do not over-engineer the application.
Use clean, production-quality TypeScript.
Do not implement the complete UI in this step.

CHOOSE THE PROJECT STACK:
Use:
- Next.js
- TypeScript
- React
- CSS/Tailwind only where appropriate
- ESLint
- Prettier if already configured

Prefer the simplest architecture that allows us to achieve pixel-level visual accuracy.
If an existing project already exists: inspect it first, reuse when reasonable.

PROJECT STRUCTURE:
Create a clean structure similar to:
src/
  app/ (layout.tsx, page.tsx, globals.css)
  components/ (layout/, listing/, gallery/, lightbox/, ui/)
  data/ (property.ts)
  types/ (property.ts)
  hooks/
  lib/
  styles/
docs/ (reference-analysis.md, assets.md, architecture.md)
tests/

DEFINE TYPES:
Create strongly typed models for the listing data, rooms, photos, amenities, host, and reviews.

STATIC DATA & ASSETS:
Prepare high-resolution photos matching the 21 reference images.
Extract/catalog image inventory in docs/assets.md.

DOCUMENT ARCHITECTURE:
Create docs/architecture.md covering technology choices, component hierarchy, routing, and modal state management.
Set up .ai/README.md for AI pair-programming guidelines.
```

