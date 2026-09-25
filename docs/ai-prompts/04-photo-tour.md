# Step 4 Prompt — Photo Tour Implementation

> **Stage:** Step 4 — Build the Photo Tour  
> **Target Reference:** `https://airbnb-clone-umber-two.vercel.app`

---

## Verbatim User Prompt

```text
STEP 4 — BUILD THE PHOTO TOUR
You are continuing the Airbnb-clone take-home assignment.
Reference: https://airbnb-clone-umber-two.vercel.app

Previous completed work:
Step 1 — Reference analysis
Step 2 — Project setup and architecture
Step 3 — Listing Page
Existing documentation:
docs/reference-analysis.md
docs/assets.md
docs/architecture.md
docs/listing-page-checklist.md
.ai/README.md

IMPORTANT ORIGINALITY RULE:
This is an ORIGINAL implementation.
Do NOT copy source code, CSS, React components, or DOM structures from the reference.
Use only the rendered reference application as the visual and behavioral specification.

GOAL:
Implement the desktop Photo Tour / full-screen photo gallery.
The Photo Tour must open from:
- "Show all photos"
- Any hero/gallery image where the reference supports opening the gallery
The result should visually and behaviorally match the reference as closely as possible.
DO NOT implement the final single-image Lightbox in this step.

RE-INSPECT THE REFERENCE:
Observe header, sticky room category navigation strip, 2-column asymmetric room layout, image hover states, scrolling behavior, close actions, and modal URL synchronization (`?modal=PHOTO_TOUR_SCROLLABLE`).

REQUIREMENTS:
- Sticky header with back button (<), centered title ("Photo tour"), Share/Save actions.
- Sticky category navigation strip pinned below header with 9 room categories and thumbnails.
- Clicking room categories smoothly scrolls to that section without clipping (`scroll-mt-48`).
- 2-column room layout: left column with room title and amenity tags; right column with photo stack.
- Body scroll locking when open.
- Focus trapping inside modal, initial focus to back button, focus restoration upon close.
- Accessible dialog semantics (`role="dialog"`, `aria-modal="true"`).

Create:
docs/photo-tour-checklist.md
```

