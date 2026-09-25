# Visual QA & Pixel-Fidelity Polish Report

## Environment

- **Reference URL:** `https://airbnb-clone-umber-two.vercel.app` (Mirror: `https://airbnb-clone-chi-one.vercel.app`)
- **Local URL:** `http://localhost:3000`
- **Standardized Viewport:** `1440 × 900` px (Desktop reference standard)
- **Browser Zoom:** 100%
- **Color Scheme:** Light mode
- **OS / Rendering Engine:** Windows / Chromium DevTools Protocol (CDP) headless emulation
- **Screenshot Artifacts:** Stored in `scratch/qa/` (`R1_listing.png` – `R8_lightbox_last.png` vs `L1_listing.png` – `L8_lightbox_last.png`)

---

## Systematic Defect & Refinement Register

### 1. Header & Navigation

- **ID:** QA-01
- **Area:** Header / Sticky Navigation
- **Reference:** When user scrolls past the listing hero gallery (~550px), a sticky sub-navigation bar appears smoothly below the top header or replaces search with:
  - Left: Sub-nav links (`Photos`, `Amenities`, `Reviews`, `Location`) with interactive hover and smooth scroll to sections.
  - Right: Floating summary pill with price (`₹7,386 night`), star rating (`★ 4.97 (33)`), and a coral `Reserve` CTA button (`#FF385C`).
- **Local Initial:** Header remained static with search bar even during deep scroll; no section jumping or secondary reserve trigger was present.
- **Difference:** Missing sticky sub-navigation and quick-reserve trigger during content browsing.
- **Fix:** Implemented dynamic scroll listener in `Header.tsx` detecting `window.scrollY > 550`. Rendered section navigation tabs linking to `#amenities-section`, `#reviews-section`, `#location-section`, along with right-side price and `Reserve` CTA button styled identically to reference tokens.

---

### 2. Property Header & Guest Favourite Badge

- **ID:** QA-02
- **Area:** Property Details / Title Section
- **Reference:** "Guest favourite" badge card has ornate golden laurels/floral vector badges on **both** the left and right sides of the title text.
- **Local Initial:** Used single laurel on left side only.
- **Difference:** Asymmetrical badge rendering compared to reference.
- **Fix:** Created SVG vector component `GoldFloralBadge` in `src/components/ui/Icons.tsx` and mirrored it on both left and right sides of "Guest favourite" title block in `PropertyDetails.tsx`.

---

### 3. Property Details / Where You'll Sleep

- **ID:** QA-03
- **Area:** Property Details / Sleeping Arrangements
- **Reference:** Renders two full-width cards in a 2-column grid (`max-w-[650px]`, `gap-4`). Each card features an image (`h-44`, `rounded-xl`, `object-cover`), with bold room title ("Living room 1", "Living room 2") and descriptive bed text below without border boxes.
- **Local Initial:** Rendered as small bordered icon boxes (`border border-gray-200 rounded-xl p-4`) with bed icons.
- **Difference:** Visual layout mismatch; reference uses real property photography cards for sleeping arrangement showcase.
- **Fix:** Refactored `Where you'll sleep` in `PropertyDetails.tsx` to display 2 photo cards with `h-44 rounded-xl object-cover` photography, room subtitle, and bed configuration text.

---

### 4. Reservation Card / Cancellation Policy & Badges

- **ID:** QA-04
- **Area:** Booking Card / Sub-elements
- **Reference:** 
  1. "Free cancellation before 17 October" is enclosed within a dedicated light-gray container (`bg-[#F7F7F7] py-2.5 px-3 rounded-lg text-xs font-medium text-[#222222]`).
  2. "Lower price. Your dates are ₹1,291 less than..." features a clean tag icon rather than emoji.
  3. "Report this listing" features a vector flag icon.
- **Local Initial:** Plain uncontained text with Unicode emojis.
- **Difference:** Inconsistent typography, lack of rounded pill styling, and platform-dependent emoji rendering.
- **Fix:** Replaced emojis with SVG `TagIcon` and `FlagIcon` in `BookingCard.tsx`. Wrapped the cancellation policy text in the rounded container matching reference styling.

---

### 5. Photo Tour / Category Strip

- **ID:** QA-05
- **Area:** Photo Tour / Category Selector
- **Reference:** The category button labels (e.g. "Additional photos") wrap neatly across two lines without text truncation or ellipsis.
- **Local Initial:** Applied `truncate` class causing "Additional..." on narrow category tiles.
- **Difference:** Truncation cut off room category names.
- **Fix:** Removed `truncate` class in `PhotoTour.tsx` room category buttons, allowing multi-word room labels to wrap naturally.

---

### 6. Lightbox / Counter Formatting

- **ID:** QA-06
- **Area:** Lightbox Header / Counter
- **Reference:** Lightbox counter displays exact format: `1 of 21`, `9 of 21`, `21 of 21`.
- **Local Initial:** Counter displayed `1 / 21` with slash separator.
- **Difference:** Punctuation difference from reference design.
- **Fix:** Updated counter string formatting in `Lightbox.tsx` to `${currentIndex + 1} of ${photos.length}`. Updated unit test assertions in `tests/property.test.ts`.

---

### 7. Lightbox / Edge Navigation Buttons

- **ID:** QA-07
- **Area:** Lightbox / Arrow Controls
- **Reference:** On photo 1 (`1000`), the Left chevron button is disabled with `opacity-30` and `pointer-events-none`. On photo 21 (`1020`), the Right chevron button is similarly disabled.
- **Local Initial:** Both buttons operated correctly, verified matching reference behavior.
- **Difference:** None (verified).

---

## 3-Pass Refinement Summary

### Pass 1: Structural & Layout Alignment
- Aligned container max width (`1120px`), margins (`mx-auto`), and standard padding (`px-6 md:px-10`).
- Confirmed sticky reservation card layout (`top-28`, `w-[380px]`) alongside left details column (`w-[650px]`).
- Structured Photo Tour dual-column asymmetric grid layout.

### Pass 2: Visual & Design Token Precision
- Replaced all emoji fallbacks with SVG icons (`GoldFloralBadge`, `TagIcon`, `FlagIcon`, `NineDotsIcon`, `ShareIcon`, `HeartIcon`).
- Matched typography: Circular-like font hierarchy, weights (`font-normal`, `font-medium`, `font-semibold`), sizes (`12px`, `14px`, `16px`, `22px`, `26px`), colors (`#222222`, `#717171`, `#FF385C`, `#EBEBEB`, `#F7F7F7`).
- Implemented photo card sleeping arrangements with proper aspect ratios and border radii (`rounded-xl`).

### Pass 3: Interaction & Behavioral Polish
- Sticky sub-nav header triggers on scroll (`scrollY > 550`), linking seamlessly to sections.
- URL-driven modal synchronization for `modal=PHOTO_TOUR_SCROLLABLE` and `modalItem=[id]`.
- Focus trapping, Escape key closing, and Arrow Left / Right navigation in Lightbox.
- Body scroll locking (`document.body.style.overflow = 'hidden'`) during modal states.

---

## Verification Matrix

| Area | Reference Check | Local Implementation | QA Status |
| :--- | :--- | :--- | :--- |
| **Header (Rest)** | Logo, Search bar, user menu pill | Exact match (`h-[80px]`, borders, shadows) | PASS |
| **Header (Scrolled)** | Sub-nav tabs + Reserve pill | Sticky nav with smooth scroll + CTA | PASS |
| **Hero Gallery** | 5-image grid, rounded outer corners | 5-image grid with hover darkening & "Show all photos" button | PASS |
| **Title & Meta** | Guest favourite laurels, rating, Candolim | Vector laurels, rating 4.97, host superhost | PASS |
| **Sleeping Grid** | 2 photo cards (Living room 1 & 2) | Photo cards with room and bed specs | PASS |
| **Booking Card** | Date/guest picker, cancellation pill, breakdown | Interactive picker, pricing math, SVG badges | PASS |
| **Photo Tour** | Category selector strip, categorized grid | Sticky category strip, dual column grid | PASS |
| **Lightbox** | Full-screen modal, room title, `X of 21` | `X of 21` counter, arrow navigation, escape key | PASS |
| **Responsiveness** | Desktop standard `1440 × 900` | Flawlessly rendered at `1440 × 900` | PASS |

---

## Automated QA & Test Results

- **Unit Tests:** `npm test` -> 6/6 passing (Listing dataset, gallery photos, room categories, design tokens, photo tour rooms, lightbox indexing).
- **Linter:** `npx eslint src` -> 0 errors, 0 warnings.
- **Production Build:** `npm run build` -> Clean Next.js Turbopack compilation.

