# Photo Tour Implementation Checklist (Step 4)

## 1. Overview
The Photo Tour is a full-screen desktop modal overlay providing a comprehensive, room-by-room photo exploration experience matching the visual and behavioral specification discovered in Step 1.

---

## 2. Checklist & Implementation Verification

### 2.1 Trigger & Opening Mechanisms
- [x] **"Show all photos" Button:** Floating action button on the bottom right of the hero gallery cleanly opens the Photo Tour.
- [x] **Hero Gallery Grid Photos:** Clicking any of the 5 hero photos opens the Photo Tour and scrolls smoothly to the clicked room's category section.
- [x] **URL Synchronization:** Synchronizes with query parameters `/?modal=PHOTO_TOUR_SCROLLABLE` without page reload.
- [x] **Transition:** Clean opacity/fade transition when modal mounts.

### 2.2 Header & Navigation Bar
- [x] **Sticky Header (`h-[72px]`):** Fixed to top of modal viewport with `border-b border-[#EBEBEB] bg-white`.
- [x] **Close / Back Button:** Left-aligned circular button with `<` icon (`ChevronLeftIcon`), accessible label `aria-label="Close photo tour"`, and hover background `#F7F7F7`.
- [x] **Centered Title:** "Photo tour" (`text-[16px] font-semibold text-[#222222]`).
- [x] **Action Buttons:** Right-aligned Share and Save (heart) icons with circular hover state and accessible labels.

### 2.3 Category Navigation Strip
- [x] **Sticky Positioning (`top-[72px]`):** Stays pinned beneath the top header during scrolling.
- [x] **9 Room Categories:**
  1. Living room 1
  2. Living room 2
  3. Full kitchen
  4. Bedroom
  5. Full bathroom
  6. Gym
  7. Exterior
  8. Pool
  9. Additional photos
- [x] **Thumbnail & Label:** Each button shows a rounded thumbnail image (`h-16 w-20 rounded-xl`) and concise room label.
- [x] **Smooth Anchor Navigation:** Clicking any category button smoothly scrolls the viewport to that room section (`scrollIntoView({ behavior: 'smooth' })`).
- [x] **Scroll Offset:** Uses `scroll-mt-48` so room headers are never clipped by the sticky navigation bars.

### 2.4 2-Column Room Gallery Layout
- [x] **Container:** `max-w-[1120px] mx-auto px-6 py-8`.
- [x] **Two-Column Grid (`grid-cols-[300px_1fr]`):**
  - **Left Column:** Sticky title (`text-[24px] font-semibold text-[#222222]`) and bulleted room metadata tags (`text-[15px] text-[#717171]`).
  - **Right Column:** Stack of full-width high-resolution photos (`h-80`, `rounded-xl`, `object-cover`).
- [x] **Hover States:** Subtle image zoom effect (`group-hover:scale-[1.02] transition-transform duration-300`).
- [x] **Section Dividers:** Clean bottom borders (`border-b border-[#EBEBEB] py-12`) between rooms.

### 2.5 Accessibility & Modal Mechanics
- [x] **Semantics:** Root container features `role="dialog"`, `aria-modal="true"`, and `aria-label="Photo tour"`.
- [x] **Escape Key Handling:** Pressing `Escape` closes the Photo Tour.
- [x] **Focus Trapping:** `Tab` and `Shift+Tab` are trapped strictly within modal focusable elements.
- [x] **Initial Focus:** Focus moves to the modal's back/close button on mount.
- [x] **Focus Restoration:** Storing opener trigger reference (`lastTriggerRef`) and restoring focus upon modal dismissal.
- [x] **Body Scroll Lock:** Page background scroll is locked via `document.body.style.overflow = 'hidden'` with reliable cleanup on unmount.

### 2.6 Step 5 Integration Hook
- [x] **Lightbox Callback:** Clicking any photo invokes `onSelectPhoto(photo.id)` which updates the route to `/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=<id>`.
- [x] **Lightbox Separation:** Lightbox modal overlay is isolated and prepared for complete buildout in Step 5.

---

## 3. Automated Test & Build Status
- **Unit Tests:** `6 passed, 0 failed` (`npm test`)
- **Linting:** `0 errors, 0 warnings` (`npx eslint src`)
- **Production Build:** Next.js Turbopack build compiled successfully
- **Visual QA (Step 6):** Verified against reference at `1440 × 900` (dual-column asymmetric grid, untruncated category labels, smooth scroll offset).

