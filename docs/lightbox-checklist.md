# Lightbox Implementation Checklist (Step 5)

## 1. Overview
The desktop Lightbox is a single-image focus modal providing full-resolution photo inspection with edge boundary detection, keyboard navigation, focus trapping, and bidirectional integration with the Photo Tour and Listing Page.

---

## 2. Checklist & Implementation Verification

### 2.1 Trigger & Opening Mechanisms
- [x] **Photo Tour Trigger:** Clicking any room photo inside the Photo Tour opens the Lightbox on that exact photo.
- [x] **Direct Hero Gallery Trigger:** Clicking any of the 5 hero photos on the listing page opens the Lightbox directly with that photo selected.
- [x] **URL Synchronization:** Synchronizes with query parameters `/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=<photoId>` without page reload.
- [x] **Transition:** Smooth fade-in animation (`animate-fadeIn`) with `motion-reduce:transition-none` respect.

### 2.2 Header Bar Controls (`h-16`)
- [x] **Back to Photo Tour Grid Button:** Circular 40px button on the left with `NineDotsIcon`, `aria-label="Back to photo tour grid"`, returning user to the Photo Tour.
- [x] **Room Name Title:** Centered heading dynamically reflecting the active photo's category (e.g., "Living room 1", "Bedroom").
- [x] **Photo Counter:** Text counter on the right displaying `${currentIndex + 1} of ${photos.length}` (e.g., `1 of 21`, `9 of 21`, `21 of 21`).
- [x] **Close Button:** Circular 40px button with `✕` icon (`CloseIcon`), `aria-label="Close photo viewer"`, returning user to the Photo Tour.

### 2.3 Image Sizing & Presentation
- [x] **Natural Aspect Ratio:** Displayed using `max-h-[75vh] w-auto max-w-full object-contain rounded-xl` without stretching or letterbox distortion.
- [x] **Orientation Adaptability:** Handles both wide landscape images and tall portrait images centered horizontally and vertically.
- [x] **Draggable Prevention:** `draggable={false}` and `select-none` to prevent unwanted image dragging during navigation.

### 2.4 Navigation Controls & Edge Boundaries
- [x] **Previous Button:** Floating circular white button on the left with `<` icon (`ChevronLeftIcon`), shadow, and hover pill styling.
  - **First-Photo Boundary:** On photo 1 (`1 of 21`), the button is disabled (`opacity: 0.3, pointer-events: none, cursor: not-allowed`).
- [x] **Next Button:** Floating circular white button on the right with `>` icon (`ChevronRightIcon`), shadow, and hover pill styling.
  - **Last-Photo Boundary:** On photo 21 (`21 of 21`), the button is disabled (`opacity: 0.3, pointer-events: none, cursor: not-allowed`).

### 2.5 Keyboard Accessibility & Focus Trapping
- [x] **ArrowRight:** Advances to the next photo (inhibited when on the final photo).
- [x] **ArrowLeft:** Retracts to the previous photo (inhibited when on the first photo).
- [x] **Escape Key:** Closes the Lightbox and returns focus smoothly to the Photo Tour grid.
- [x] **Focus Trap:** `Tab` and `Shift+Tab` are trapped strictly within modal interactive controls (`button:not([disabled])`).
- [x] **Initial Focus:** Directs focus to the Close button on modal mount.
- [x] **Focus Restoration:** Returning to Photo Tour restores focus specifically to `#photo-tour-btn-<id>` of the active photo, or falls back to the opener element.
- [x] **Modal Semantics:** Root dialog tagged with `role="dialog"`, `aria-modal="true"`, and `aria-label="Photo viewer"`.

### 2.6 Modal Hierarchy & Scroll Lock
- [x] **Underlying Photo Tour Preservation:** When Lightbox is open, Photo Tour remains mounted in the background so scroll position is preserved.
- [x] **Key Event Isolation:** Photo Tour disables its own keydown listeners when Lightbox is open via `hasActiveSubmodal={isLightboxOpen}` to avoid key event collisions.
- [x] **Body Scroll Lock:** Locks body scroll with `overflow: hidden` and guarantees restoration on unmount.

---

## 3. Automated Verification Results
- **Unit & Boundary Tests:** 6/6 tests passed (`npm test`).
- **Interactive Sequence Automated CDP Tests:**
  - Test 1 (Listing -> Show all -> Open photo 1 -> Arrows & Escape): Passed.
  - Test 2 (Photo Tour -> Open middle photo 1008 -> Arrows): Passed.
  - Test 3 (Keyboard Focus Trap & Escape): Passed.
  - Test 4 (Close Button & Focus Restoration to `photo-tour-btn-1005`): Passed.
  - Direct Hero Photo Click to Lightbox: Passed.
- **Linter:** 0 errors, 0 warnings (`npx eslint src`).
- **Build:** Compiled cleanly with Next.js Turbopack.
- **Visual QA (Step 6):** Verified against reference at `1440 × 900` (counter format `${currentIndex + 1} of ${photos.length}`, boundary button disabled states, image containment, responsive centering).

