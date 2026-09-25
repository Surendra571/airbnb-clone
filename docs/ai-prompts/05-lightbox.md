# Step 5 Prompt — Lightbox Implementation

> **Stage:** Step 5 — Build the Lightbox  
> **Target Reference:** `https://airbnb-clone-umber-two.vercel.app`

---

## Verbatim User Prompt

```text
STEP 5 — BUILD THE LIGHTBOX
You are continuing the Airbnb-clone take-home assignment.
Reference: https://airbnb-clone-umber-two.vercel.app

Previous steps completed:
Step 1 — Reference analysis
Step 2 — Project setup and architecture
Step 3 — Listing Page
Step 4 — Photo Tour
Existing documentation:
docs/reference-analysis.md
docs/assets.md
docs/architecture.md
docs/listing-page-checklist.md
docs/photo-tour-checklist.md
.ai/README.md

CORE OBJECTIVE:
Implement the single-image Lightbox exactly according to the reference.
The complete flow should be:
Listing Page -> Show all photos -> Photo Tour -> Click photo -> Lightbox
OR
Listing Page -> Hero/gallery image -> Lightbox

The Lightbox must support:
- Single-image viewing with natural aspect ratio and containment
- Previous image and Next image buttons with circular styling and shadows
- Keyboard ArrowLeft navigation
- Keyboard ArrowRight navigation
- Escape to close
- Close button (X) and back to grid button (9 dots)
- Image counter (e.g. 1 of 21)
- Correct animations and focus behavior
- Correct accessibility and boundary behavior (disabled buttons at edges 0 and 20)
- Preserving underlying Photo Tour scroll position
- Restoring focus to the specific photo button in the Photo Tour grid on exit

URL SYNCHRONIZATION:
- Synchronize with ?modal=PHOTO_TOUR_SCROLLABLE&modalItem=<photoId>
- Update query params cleanly without full page reloads

Create:
docs/lightbox-checklist.md
```

