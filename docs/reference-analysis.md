# Reference Application Analysis & Implementation Specification

> **Target Reference:** [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app/)  
> **Active Mirror Inspected:** [https://airbnb-clone-chi-one.vercel.app](https://airbnb-clone-chi-one.vercel.app/)  
> **Scope:** Desktop-Only, Pixel-Accurate Independent Clone  
> **Status:** Step 1 Analysis Complete — No application code or dependencies modified.

---

## 1. Reference Overview

The reference application is a high-fidelity, desktop-focused clone of an authentic Airbnb luxury property listing: **"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"**, located in Candolim, Goa, India.

The application delivers three core, interconnected experiences:
1. **Listing Page:** A comprehensive property showcase featuring a sticky top navigation header, property header, a 5-photo mosaic grid with a floating "Show all photos" action, room specifications, guest favourite badge, sleeping arrangement cards, amenities list, dual-month calendar, rating & review breakdowns with individual reviews, interactive map view, host bio & co-hosts list, stay policies, and a right-column sticky reservation card with date and guest pickers.
2. **Photo Tour Modal:** A full-screen immersive gallery modal opened via the "Show all photos" button or by clicking any main gallery photo. It features a sticky header with a back chevron (`<`), title ("Photo tour"), share and save icons, a horizontal room-category navigation strip (thumbnails with labels), and a two-column room breakdown where the left column displays room title and tag features while the right column displays vertically stacked, high-resolution room photos.
3. **Lightbox Modal:** A focused single-photo viewer opened when any photo in the Photo Tour is clicked. It presents an edge-to-edge clean canvas with a top control bar (back-to-grid button, centered room label, "X of 21" counter, close `✕` button), prominent previous/next navigation buttons with disabled edge states, and full keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).

---

## 2. Listing Page Analysis

### 2.1 Page Layout & Dimensions
- **Viewport:** Optimized for desktop screens (standard `1440px` and up; fluid down to `1024px` desktop breakpoint).
- **Max Content Width:** Exactly `1120px` (`max-w-[1120px] mx-auto px-6 lg:px-0`).
- **Main Layout Structure:** 
  - Top header: Full-width (`w-full`), bordered bottom.
  - Property title & actions: Spanning full `1120px`.
  - Main photo grid: Spanning full `1120px`, height `480px`.
  - Main body split: Two columns using CSS Grid: `grid-cols-1 lg:grid-cols-[1fr_380px]` with a `48px` gap (`gap-12`).
    - **Left Column:** Fluid flex container (~`692px` width) housing all property details, separated by horizontal dividers (`border-b border-[#EBEBEB]`).
    - **Right Column:** Fixed `380px` width housing the sticky booking card widget.

### 2.2 Header Structure
- **Height:** `81px` (80px content + 1px border bottom `#EBEBEB`).
- **Background:** Pure white (`#FFFFFF`), sticky top positioning (`sticky top-0 z-30 bg-white`).
- **Left Placement:** Airbnb logo icon (coral red `#FF385C`, 32px height) paired with bold lowercase "airbnb" text mark.
- **Center Placement:** Omnipresent search pill (`border border-[#DDDDDD] rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.08)] flex items-center`):
  - Segment 1: "Anywhere" (font-weight: 600, font-size: 14px).
  - Divider: Vertical thin rule (`h-6 border-r border-[#DDDDDD] mx-3`).
  - Segment 2: "Anytime" (font-weight: 600, font-size: 14px).
  - Divider: Vertical thin rule.
  - Segment 3: "Add guests" (font-weight: 400, font-size: 14px, color: `#717171`).
  - Action Icon: Circular button (32x32px, background `#FF385C`, white magnifying glass SVG).
  - Hover state: Shadow deepens to `0 2px 4px rgba(0,0,0,0.18)`.
- **Right Placement:**
  - "Become a host" text button (14px, font-weight: 600, padding: 10px 12px, rounded-full, hover: bg `#F7F7F7`).
  - Language/Globe icon button (circular 40x40px, hover: bg `#F7F7F7`).
  - User profile menu pill (`border border-[#DDDDDD] rounded-full py-1.5 px-3 flex items-center gap-3 hover:shadow-md`): Hamburger icon (`16px`) + User avatar circle outline (`30px`).

### 2.3 Property Title Section
- **Vertical Spacing:** `24px` margin top from header, `16px` margin bottom to gallery.
- **Title Text:** "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10" (font size: `26px`, font weight: `600`, line height: `32.5px`, color: `#222222`).
- **Action Buttons (Right Aligned):**
  - **Share:** Upload tray icon + text "Share" (font size: 14px, font weight: 500, underline on text, hover: bg `#F7F7F7` rounded 8px).
  - **Save:** Heart icon outline + text "Save" (font size: 14px, font weight: 500, underline on text, hover: bg `#F7F7F7` rounded 8px).

### 2.4 Main Image Gallery (Hero Grid)
- **Container Dimensions:** Width `1120px`, fixed height `480px`, `border-radius: 12px`, `overflow: hidden`, `position: relative`.
- **Grid Layout:** CSS Grid with 4 columns and 2 rows, gap: `8px` (`grid-cols-4 grid-rows-2 gap-2`).
- **Arrangement of Images (5 photos visible):**
  - **Photo 1 (Hero Left):** Spans 2 columns and 2 rows (`col-span-2 row-span-2`). Dimensions: `556px × 480px`.
  - **Photo 2 (Top Middle):** `col-span-1 row-span-1`. Dimensions: `274px × 236px`.
  - **Photo 3 (Top Right):** `col-span-1 row-span-1`. Dimensions: `274px × 236px`.
  - **Photo 4 (Bottom Middle):** `col-span-1 row-span-1`. Dimensions: `274px × 236px`.
  - **Photo 5 (Bottom Right):** `col-span-1 row-span-1`. Dimensions: `274px × 236px`.
- **Image Behavior:** `object-cover w-full h-full`. Images darken slightly on hover (`filter brightness-95 transition-all`).
- **Image Semantics:** Each photo is wrapped in a `<button>` with accessible label (`aria-label="View photo: [Room] photo"`).
- **"Show all photos" Button:**
  - Position: Absolute bottom-right (`bottom: 16px, right: 16px, z-10`).
  - Dimensions: Width ~`165px`, height `36px`, padding `8px 16px`.
  - Styling: Pure white background `#FFFFFF`, black text `#222222`, font size `14px`, font weight `600`, rounded `8px`, border `1px solid #222222`, shadow `0 2px 4px rgba(0,0,0,0.12)`.
  - Content: 9-dot grid SVG icon (`16px`) + text "Show all photos".
  - Hover state: Background changes to `#F7F7F7`, scale `1.02`.

### 2.5 Left Column Sections (Property Details)

1. **Property Subtitle & Badging:**
   - Heading: "Entire serviced apartment in Candolim, India" (`font-size: 22px, font-weight: 600`).
   - Guest capacity: "3 guests · 1 bedroom · 1 bed · 1 bathroom" (`font-size: 16px, color: #717171`).
2. **"Guest favourite" Trophy Banner:**
   - Encased pill card with subtle border `#DDDDDD` and flex layout:
   - Left laurel wreath badge + "Guest favourite" (`font-weight: 600`) + description "One of the most loved homes on Airbnb, according to guests".
   - Right score column: "4.95" with 5 black stars + "19 Reviews" (`font-weight: 600, underline`).
3. **Host Snippet:**
   - Circular avatar: Dark green background (`#004D40`) with white letters "MH".
   - Host name: "Hosted by Mirashya Homes" (`16px, font-weight: 600`) + "2 years hosting" (`14px, #717171`).
4. **"Where you'll sleep" Section:**
   - Header: `font-size: 22px, font-weight: 600, margin-bottom: 24px`.
   - 2 side-by-side cards (width ~`210px`, rounded `12px`, border `1px solid #DDDDDD`, padding: `16px`):
     - Card 1: Living room photo thumbnail + "Living room" (`16px font-weight: 600`) + "Sofa" (`14px #717171`).
     - Card 2: Bedroom photo thumbnail + "Bedroom" (`16px font-weight: 600`) + "1 double bed" (`14px #717171`).
5. **"What this place offers" (Amenities):**
   - 2-column grid (`grid-cols-2 gap-y-4 gap-x-8`).
   - 10 core amenities with distinct SVGs:
     - Kitchen (cutlery icon), Wifi (signal icon), Dedicated workspace (desk icon), Free parking on premises (car icon), Pool (swimming waves icon), Hot tub (jacuzzi waves icon), Pets allowed (paw icon), Exterior security cameras on property (camera icon), Carbon monoxide alarm (crossed icon), Smoke alarm (crossed icon).
6. **Date Picker / Stay Duration:**
   - Header: "5 nights in Candolim" (`22px font-weight: 600`).
   - Date range caption: "18 Oct 2026 - 23 Oct 2026" (`14px #717171`).
   - Dual-month interactive calendar displaying October 2026 and November 2026 side-by-side.
   - Selected dates highlighted in black pill range (`bg-[#222222] text-white`).
   - Action: "Clear dates" text button (`font-size: 14px, font-weight: 600, underline`).
7. **Reviews & Rating Breakdown:**
   - Large trophy badge banner with "4.95" and "Guest favourite".
   - Header: "★ 4.95 · 19 reviews".
   - Overall rating distribution bar (5-star 100% full, others empty).
   - 6 category metric rows with icons and scores:
     - Cleanliness: 5.0 (sparkles), Accuracy: 5.0 (checkbox), Check-in: 5.0 (key), Communication: 5.0 (speech bubble), Location: 4.8 (pin), Value: 4.8 (tag).
   - Review category filter pills: "Comfort 6", "Accuracy 5", "Hot tub 5", "Condition 4", "Hospitality 6".
   - 2-column Review cards (6 cards shown):
     - User initial avatar (circle with colored background), user name, tenure ("2 months on Airbnb"), 5 stars, review date, review text.
   - "Show all 19 reviews" button (`border border-[#222222] rounded-lg px-6 py-3 font-semibold hover:bg-[#F7F7F7]`).
8. **"Where you'll be" (Map Section):**
   - Header: "Where you'll be" + "Candolim, Goa, India".
   - Soft pastel vector map card with centered circular pin (black circle with white home icon).
   - Zoom controls (+ and - floating pill) and search button.
   - Disclaimer: "Exact location will be provided after booking."
   - "Neighbourhood highlights" with "Show more >" modal link.
9. **"Meet your host":**
   - Host card widget (`bg-[#F0EFE9] / #F7F7F7`, rounded `24px`, padding `24px`, shadow):
     - Avatar circle "MH" with verified check badge.
     - "Mirashya Homes" (`22px bold`) + "Host".
     - Stats row: 1,463 Reviews, 4.68★ Rating, 2 Years hosting.
   - Co-hosts list (8 co-hosts with circle initials + full names).
   - Host details: Response rate 100%, Responds within an hour.
10. **"Things to know" Policies:**
    - 3-column layout:
      - Cancellation policy: "Free cancellation before 17 October..."
      - House rules: "Check-in after 2:00 pm, Checkout before 11:00 am, 3 guests maximum".
      - Safety & property: Carbon monoxide alarm, Smoke alarm, Security cameras.

### 2.6 Right Column (Sticky Reservation Widget)
- **Container:** `sticky top-[100px] w-[380px]` (sticks smoothly as left column scrolls).
- **Discount Banner Above Card:** Green tag icon + "Get 10% off your next stay. Terms apply" + "Claim" button.
- **Reservation Card:**
  - Dimensions: Width `380px`, padding `24px`, border `1px solid #DDDDDD`, rounded `16px`, shadow `0 6px 16px rgba(0,0,0,0.12)`.
  - Price: `₹28,499` (`font-size: 22px, font-weight: 600`) + ` for 5 nights` (`font-size: 16px, font-weight: 400, color: #717171`).
  - Date Picker Input (Segmented box):
    - 2-column top cell: Left: "CHECK-IN 10/18/2026", Right: "CHECKOUT 10/23/2026" (border-bottom `1px solid #DDDDDD`).
    - Bottom cell: "GUESTS 2 guests" with downward chevron.
  - Notice: "Free cancellation before 17 October" (font-size 14px, text-center).
  - Primary CTA: **"Reserve"** Button:
    - Width `100%`, height `48px`, background `#FF385C`, text `white`, font size `16px`, font weight `600`, rounded `8px`.
    - Hover state: `#E00B41` (darkens slightly).
  - Subtext: "You won't be charged yet" (`font-size: 14px, color: #717171, text-center mt-3`).
  - Review summary link: "★ 4.95 · 19 reviews" (`font-size: 14px, underline, text-center mt-4`).
- **Below Card:** "🚩 Report this listing" button (`text-[#717171] hover:text-[#222222] underline text-sm mt-4 text-center block`).

---

## 3. Photo Tour Analysis

### 3.1 Trigger & Opening
- **Triggers:**
  1. Clicking "Show all photos" floating button on the main gallery.
  2. Clicking ANY of the 5 photos in the main listing gallery.
- **URL Synchronization:** Updates window URL to `/?modal=PHOTO_TOUR_SCROLLABLE` without page reload (`history.pushState` / Next.js shallow router).
- **Animation:** Slides up smoothly from the bottom with opacity fade-in (`initial: { y: "100%", opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }`).
- **Body Scroll Locking:** Body element receives `overflow: hidden` to lock page background scroll.

### 3.2 Top Navigation Header
- **Position:** Fixed / sticky at top (`sticky top-0 z-40 bg-white border-b border-[#EBEBEB] h-[72px] px-6 flex items-center justify-between`).
- **Left Action:** Back/Close button: Circular `40x40px` button with `<` chevron SVG (`aria-label="Close photo tour"`).
- **Center Title:** "Photo tour" (`font-size: 16px, font-weight: 600, color: #222222`).
- **Right Actions:** Share button icon (circular 40x40px, hover: bg `#F7F7F7`) and Save heart icon button.

### 3.3 Room Category Filter Bar (Horizontal Strip)
- **Position:** Sticky below header (`sticky top-[72px] z-30 bg-white border-b border-[#EBEBEB] py-3 px-8 flex items-center gap-6 overflow-x-auto no-scrollbar`).
- **Items (9 Room Tabs):**
  1. Living room 1
  2. Living room 2
  3. Full kitchen
  4. Bedroom
  5. Full bathroom
  6. Gym
  7. Exterior
  8. Pool
  9. Additional photos
- **Tab Component:** Rounded rectangular thumbnail (`64px × 64px`, rounded `12px`, object-cover) above a centered label (`font-size: 12px, font-weight: 500, color: #222222`).
- **Interaction:** Clicking any room tab smoothly scrolls the right gallery column to the matching room section (`scrollIntoView({ behavior: 'smooth' })`).

### 3.4 Main Gallery Content Layout
- **Layout:** Two columns (`max-w-[1120px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12`).
- **Left Column (Room Meta - Sticky):**
  - Room Title: e.g. "Living room 1" (`font-size: 24px, font-weight: 600`).
  - Room Description / Tag list: "Sofa · Air conditioning · Ceiling fan · TV" (`font-size: 15px, color: #717171, line-height: 24px`).
- **Right Column (Photos - Vertically Stacked):**
  - Photos grouped by room.
  - Photo Container: `<button class="relative h-80 w-full overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff385c]" aria-label="Open [Room] photo in full view">`.
  - Dimensions: Height `320px` (`h-80`), width `100%` (fill column ~`750px`), rounded `12px` (`rounded-xl`), gap `16px`.
  - Image element: `<img class="object-cover w-full h-full">`.
  - Hover behavior: Subtle zoom (`scale-[1.02] transition-transform duration-300`).

### 3.5 Closing Behavior
- **Closing Triggers:**
  1. Clicking the top-left `<` back button.
  2. Pressing the `Escape` key on the keyboard.
- **Closing Behavior:** URL reverts to base `/` (removing `?modal=PHOTO_TOUR_SCROLLABLE`), modal animates downward (`exit: { y: "100%", opacity: 0 }`), body `overflow: hidden` is removed, and focus returns to the initiating trigger button.

---

## 4. Lightbox Analysis

### 4.1 Trigger & Opening
- **Trigger:** Clicking ANY photo button inside the Photo Tour (which has `aria-label="Open [Room] photo in full view"`).
- **URL Synchronization:** URL updates to `/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=<photoId>` (e.g., `modalItem=1000`).
- **Overlay:** Pure white backdrop (`#FFFFFF`), full screen (`fixed inset-0 z-50 bg-white flex flex-col`).

### 4.2 Lightbox Header Bar
- **Height:** `64px` (`px-6 flex items-center justify-between border-b border-transparent`).
- **Left Action:** "Back to photo tour grid" Button:
  - Circular button (`40px × 40px`, border `1px solid #DDDDDD`, rounded-full, flex items-center justify-center).
  - Icon: 9-dot grid SVG (`16px`).
  - Accessible name: `aria-label="Back to photo tour grid"`.
  - Focused state: Focus ring with brand coral outline (`focus-visible:outline-[#FF385C]`).
- **Center Title:** Active photo's room name (e.g., "Living room 1", `font-size: 16px, font-weight: 600, color: #222222`).
- **Right Action Group:**
  - Counter Text: "1 of 21" (`font-size: 14px, font-weight: 500, color: #222222, margin-right: 16px`).
  - Close Button: `✕` icon button (`40px × 40px`, circular, hover: bg `#F7F7F7`, `aria-label="Close photo viewer"`).

### 4.3 Central Image Stage
- **Image Display:**
  - Centered both vertically and horizontally in the remaining viewport height.
  - Image styling: `max-w-full max-h-[75vh] object-contain select-none transition-opacity duration-200`.
  - Aspect ratio: Natural image proportions preserved (no cropping or letterbox stretching).
- **Navigation Controls (Floating Chevrons):**
  - **Previous Button:**
    - Left side: `position: absolute, left: 24px, top: 50%, transform: translateY(-50%)`.
    - Circular `40px × 40px`, white background `#FFFFFF`, border `1px solid #DDDDDD`, shadow `0 2px 6px rgba(0,0,0,0.12)`.
    - Icon: `<` chevron SVG (`16px`).
    - Accessible name: `aria-label="Previous photo"`.
    - **Edge Behavior:** When on the first photo (index 0 / `1 of 21`), the button is disabled (`opacity: 0.3, pointer-events: none, cursor: not-allowed`).
  - **Next Button:**
    - Right side: `position: absolute, right: 24px, top: 50%, transform: translateY(-50%)`.
    - Circular `40px × 40px`, white background `#FFFFFF`, border `1px solid #DDDDDD`, shadow `0 2px 6px rgba(0,0,0,0.12)`.
    - Icon: `>` chevron SVG (`16px`).
    - Accessible name: `aria-label="Next photo"`.
    - **Edge Behavior:** When on the last photo (index 20 / `21 of 21`), the button is disabled (`opacity: 0.3, pointer-events: none, cursor: not-allowed`).

### 4.4 Lightbox Keyboard & Interaction Behaviors
- **Keyboard Right Arrow (`ArrowRight`):**
  - Moves to next photo (`index + 1`).
  - Updates counter text (e.g. "2 of 21").
  - Dynamically updates room title in header if photo belongs to another room (e.g. transitioning from "Living room 1" to "Living room 2").
  - Updates URL parameter to `modalItem=<newId>`.
- **Keyboard Left Arrow (`ArrowLeft`):**
  - Moves to previous photo (`index - 1`).
  - No action if already at first photo.
- **Escape Key (`Escape`):**
  - **First Escape Press:** Closes the Lightbox and returns smoothly to the Photo Tour grid.
  - URL reverts from `/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=...` back to `/?modal=PHOTO_TOUR_SCROLLABLE`.
  - Focus returns to the photo thumbnail button in the Photo Tour that was just active.
- **Clicking "Back to photo tour grid" Button:**
  - Closes Lightbox, returns to Photo Tour grid.
- **Clicking "Close photo viewer" (`✕`) Button:**
  - Closes Lightbox, returns to Photo Tour grid.

---

## 5. Accessibility (a11y) Specification

| Requirement | Observed Reference Behavior & Implementation Standard |
| :--- | :--- |
| **Keyboard Navigation** | All interactive elements (search bar, buttons, photo grid, modal controls) are focusable via `Tab` and `Shift+Tab`. |
| **Focus Rings** | Dedicated high-visibility focus indicator: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C] focus-visible:outline-offset-2`. |
| **Accessible Names** | Every button has an explicit accessible name: `aria-label="Show all photos"`, `aria-label="Close photo tour"`, `aria-label="Back to photo tour grid"`, `aria-label="Previous photo"`, `aria-label="Next photo"`, `aria-label="Open [Room] photo in full view"`. |
| **Dialog Semantics** | Modals use `role="dialog"` and `aria-modal="true"`, with `aria-label="Photo tour"` or `aria-label="Photo viewer"`. |
| **Focus Trapping** | When Photo Tour or Lightbox is open, `Tab` focus is trapped within the active modal container so background content is unreachable. |
| **Focus Restoration** | Closing Lightbox returns focus to the clicked thumbnail button in Photo Tour. Closing Photo Tour returns focus to the "Show all photos" or gallery image button on the listing page. |
| **Alt Text Strategy** | Descriptive alt text for all property photos: `alt="[Room Name] photo"` or contextual descriptions (`alt="Living room with sofa and coffee table"`). Avatar icons carry `alt="Host profile"` or initials with aria labels. |

---

## 6. Visual Measurements & Specifications

| Element | Exact / Observed Measurement | CSS Property / Tailwind Class |
| :--- | :--- | :--- |
| **Page Max Width** | `1120px` | `max-w-[1120px] mx-auto` |
| **Header Height** | `81px` (80px + 1px border) | `h-[80px] border-b border-[#EBEBEB]` |
| **Header Padding** | `0 40px` (desktop fluid) | `px-6 lg:px-10` |
| **Search Bar Pill** | Height `48px`, rounded full | `h-12 rounded-full border border-[#DDDDDD] shadow-sm` |
| **H1 Title Font** | `26px` (1.625rem), weight: 600, line-height: `32.5px` | `text-[26px] font-semibold leading-[32.5px] text-[#222222]` |
| **H2 Section Headings** | `22px` (1.375rem), weight: 600, line-height: `26px` | `text-[22px] font-semibold leading-[26px] text-[#222222]` |
| **Body Text** | `16px` (1rem), weight: 400, line-height: `24px` | `text-[16px] font-normal leading-[24px] text-[#222222]` |
| **Subtle/Secondary Text** | `14px` (0.875rem), color `#717171` | `text-[14px] text-[#717171]` |
| **Main Gallery Height** | `480px` fixed | `h-[480px]` |
| **Main Gallery Gap** | `8px` | `gap-2` |
| **Main Gallery Border Radius**| `12px` | `rounded-xl overflow-hidden` |
| **Hero Image (Left)** | `556px × 480px` (`col-span-2 row-span-2`) | `col-span-2 row-span-2 relative` |
| **Thumbnail Images (Right)** | `274px × 236px` (`col-span-1 row-span-1`) | `col-span-1 row-span-1 relative` |
| **"Show All Photos" Button** | Width `165px`, height `36px`, rounded `8px` | `px-4 py-2 rounded-lg bg-white border border-[#222222]` |
| **Main Grid Split** | Left: `1fr` (~692px), Right: `380px`, Gap: `48px` | `grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12` |
| **Section Dividers** | `1px solid #EBEBEB`, vertical margin `32px-48px` | `border-b border-[#EBEBEB] my-8 lg:my-10` |
| **Booking Card Width** | `380px` fixed | `w-[380px]` |
| **Booking Card Padding** | `24px` | `p-6` |
| **Booking Card Border/Radius**| `1px solid #DDDDDD`, radius `16px` | `border border-[#DDDDDD] rounded-2xl` |
| **Booking Card Shadow** | `0 6px 16px rgba(0,0,0,0.12)` | `shadow-[0_6px_16px_rgba(0,0,0,0.12)]` |
| **Primary Button ("Reserve")**| Width `100%`, height `48px`, radius `8px`, `#FF385C` | `w-full h-12 rounded-lg bg-[#FF385C] text-white font-semibold` |
| **Photo Tour Header Height** | `72px` | `h-[72px] border-b border-[#EBEBEB]` |
| **Photo Tour Right Image H** | `320px` (`h-80`), rounded `12px` | `h-80 w-full rounded-xl object-cover` |
| **Lightbox Nav Buttons** | `40px × 40px`, circular, shadow `0 2px 6px` | `w-10 h-10 rounded-full bg-white border border-[#DDDDDD]` |

---

## 7. Interaction Specification

| Interaction Event | Trigger Element | Observed Expected Behavior |
| :--- | :--- | :--- |
| **Open Photo Tour** | "Show all photos" button or any hero image | URL updates to `?modal=PHOTO_TOUR_SCROLLABLE`. Full-screen modal slides up from bottom (`y: 0, opacity: 1`). Body scroll locks (`overflow: hidden`). Focus moves into modal. |
| **Close Photo Tour** | Top-left `<` chevron button or `Escape` key | Modal slides down. URL reverts to `/`. Body scroll restores. Focus returns to trigger button. |
| **Filter by Room** | Room thumbnail tab in Photo Tour header | Smooth scrolls corresponding room section in right column into viewport. Active tab receives visual highlight. |
| **Open Lightbox** | Any photo card button in Photo Tour | URL updates to `?modal=PHOTO_TOUR_SCROLLABLE&modalItem=<id>`. Pure white lightbox overlay opens. Selected image displayed centered with counter (e.g. "1 of 21") and room title. |
| **Next Photo (Click)** | Right chevron button (`>`) in Lightbox | Advances to next photo in sequence. Image cross-fades smoothly. Counter increments ("2 of 21"). Room title updates if room changes. URL updates `modalItem=<nextId>`. Disabled on photo 21. |
| **Prev Photo (Click)** | Left chevron button (`<`) in Lightbox | Moves to previous photo. Image cross-fades. Counter decrements. Disabled on photo 1. |
| **Arrow Right Key** | Pressing `ArrowRight` on keyboard | Same as Next Photo click. |
| **Arrow Left Key** | Pressing `ArrowLeft` on keyboard | Same as Prev Photo click. |
| **Close Lightbox (Button)**| Top-left "Back to grid" icon button or `✕` close button | Closes Lightbox only. Returns to Photo Tour grid. URL reverts to `?modal=PHOTO_TOUR_SCROLLABLE`. Focus returns to photo thumbnail. |
| **Escape Key (in Lightbox)**| Pressing `Escape` key on keyboard | Closes Lightbox and restores Photo Tour grid (first level of modal stack). Second `Escape` press closes Photo Tour. |
| **Image Hover (Gallery)** | Hovering mouse over listing gallery images | Slight darkening filter (`brightness-95`) with smooth `150ms` transition. Cursor: `pointer`. |
| **Reserve Button Hover** | Hovering mouse over "Reserve" button | Background color transitions from `#FF385C` to `#E00B41`. |
| **Page Scroll (Desktop)** | Scrolling down page | Header remains sticky top (`top: 0, z-30`). Booking card sticks at `top: 100px` within its right column container while left column scrolls. |

---

## 8. Proposed Original Component Architecture

To guarantee clean separation of concerns, optimal performance, and modularity without replicating the reference code structure, the following original React/TypeScript component hierarchy is proposed:

```
src/
├── app/
│   ├── layout.tsx                # Root layout with font configuration & metadata
│   ├── page.tsx                  # Page container orchestrating listing state & URL sync
│   └── globals.css               # Base Tailwind, design tokens, and focus ring utilities
├── components/
│   ├── common/
│   │   ├── Header.tsx            # Sticky top nav: logo, search pill, user menu
│   │   ├── SearchPill.tsx        # Anywhere | Anytime | Add guests pill
│   │   ├── UserMenu.tsx          # Globe + user profile dropdown toggle
│   │   ├── RatingBadge.tsx       # Star rating, count, guest favourite trophy pill
│   │   ├── Button.tsx            # Reusable accessible button with variant & size props
│   │   └── ModalContainer.tsx    # Headless modal portal with focus trap & Esc handler
│   ├── listing/
│   │   ├── ListingHeader.tsx     # Property title (H1) + Share / Save buttons
│   │   ├── GalleryMosaic.tsx     # 5-photo mosaic grid with "Show all photos" floating button
│   │   ├── PropertyOverview.tsx  # Subtitle, guest capacity, key property specs
│   │   ├── SleepingArrangements.tsx # "Where you'll sleep" 2-card layout
│   │   ├── AmenitiesGrid.tsx     # 2-column amenity list with customized SVGs
│   │   ├── DateRangePicker.tsx   # Dual-month desktop calendar display
│   │   ├── ReviewsSection.tsx    # Rating bars, category metrics, filter pills, review cards
│   │   ├── LocationMap.tsx       # Styled vector map card, pin, neighbourhood description
│   │   ├── HostProfile.tsx       # Host bio card, stats, co-hosts grid, response rates
│   │   └── StayPolicies.tsx      # Cancellation, house rules, safety & property notes
│   ├── booking/
│   │   ├── StickyBookingCard.tsx # Sticky reservation card with price, dates, guest picker
│   │   ├── DiscountBanner.tsx    # Top promotional discount pill
│   │   └── GuestPickerModal.tsx  # Guest count selector dropdown
│   └── viewer/
│       ├── PhotoTourModal.tsx    # Full-screen Photo Tour overlay with room tabs & photo stream
│       ├── RoomNavStrip.tsx      # Horizontal thumbnail strip with smooth jump navigation
│       └── LightboxModal.tsx     # Focused single-photo carousel with counter & arrow keys
├── hooks/
│   ├── useModalNavigation.ts     # URL query param synchronization (?modal=...&modalItem=...)
│   ├── useKeyboardShortcut.ts    # Keyboard listener for ArrowLeft, ArrowRight, Escape
│   └── useFocusTrap.ts           # a11y focus containment & restoration hook
├── types/
│   └── listing.ts                # TypeScript domain models (Property, Photo, Room, Review)
└── data/
    └── listingData.ts            # Static listing dataset (21 photos, reviews, host info)
```

---

## 9. Proposed TypeScript Data Model

```typescript
// types/listing.ts

export interface Photo {
  id: number;
  room: string;
  src: string;
  alt: string;
  isHero?: boolean;
}

export interface RoomCategory {
  room: string;
  tags: string[];
  photoIds: number[];
  thumbnailSrc?: string;
}

export interface Amenity {
  id: string;
  name: string;
  category: 'essentials' | 'features' | 'safety';
  icon: string; // SVG identifier
  available: boolean;
}

export interface SleepingSpot {
  roomName: string;
  bedType: string;
  imageSrc: string;
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatarInitial: string;
  authorTenure: string;
  rating: number;
  date: string;
  comment: string;
}

export interface RatingBreakdown {
  overall: number;
  totalReviews: number;
  cleanliness: number;
  accuracy: number;
  checkIn: number;
  communication: number;
  location: number;
  value: number;
}

export interface HostInfo {
  name: string;
  avatarText: string;
  isVerified: boolean;
  yearsHosting: number;
  reviewCount: number;
  rating: number;
  bioSnippet: string;
  responseRate: string;
  responseTime: string;
  coHosts: Array<{
    name: string;
    avatarInitial: string;
  }>;
}

export interface PropertyListing {
  id: string;
  title: string;
  propertyType: string;
  location: {
    city: string;
    region: string;
    country: string;
    neighbourhood: string;
    coordinates: { lat: number; lng: number };
  };
  capacity: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  pricing: {
    nightlyRateINR: number;
    stayNights: number;
    totalPriceINR: number;
    discountNotice?: string;
  };
  dates: {
    checkIn: string; // e.g. "2026-10-18"
    checkOut: string; // e.g. "2026-10-23"
    cancellationDeadline: string; // e.g. "17 October"
  };
  ratings: RatingBreakdown;
  photos: Photo[];
  rooms: RoomCategory[];
  sleepingSpots: SleepingSpot[];
  amenities: Amenity[];
  reviews: Review[];
  host: HostInfo;
}
```

---

## 10. Asset & Static Resource Requirements

1. **High-Resolution Photography:**
   - 21 curated interior/exterior architectural images matching the listing (Living room 1 & 2, Kitchen, Bedroom, Bathroom, Gym, Exterior, Rooftop Pool, Additional photos).
   - All photos served via reliable CDN (Pexels verified high-res endpoints as used by reference or optimized static assets).
2. **SVG Icon Set:**
   - **Branding & Nav:** Airbnb Logo mark (`#FF385C`), Search magnifying glass, Globe icon, Hamburger menu icon, User circle outline.
   - **Header Actions:** Share (tray + arrow up), Heart (outline & filled).
   - **Photo Tour / Lightbox:** 9-dot grid icon, Chevron left (`<`), Chevron right (`>`), Close (`✕`).
   - **Badges:** Laurel wreath trophy pair, 5-star rating stars.
   - **Amenities:** Kitchen cutlery, Wifi signal, Dedicated workspace desk, Car parking, Swimming pool waves, Hot tub jacuzzi, Paw print, Security camera, Carbon monoxide detector, Smoke alarm.
   - **Ratings:** Sparkle, Checkbox, Key, Chat bubble, Compass pin, Price tag.
   - **Sleeping:** Sofa icon, Double bed icon.
   - **Map:** Home location pin with black circle badge, Zoom in (`+`), Zoom out (`-`).
3. **Typography:**
   - Modern clean sans-serif typeface (`Inter`, `-apple-system`, `BlinkMacSystemFont`, `system-ui`, `sans-serif`) supporting weights 400 (Regular), 500 (Medium), and 600 (Semi-Bold).

---

## 11. Implementation Risks & Architectural Solutions

| Risk Factor | Potential Failure Mode | Architectural Mitigation |
| :--- | :--- | :--- |
| **Modal Stack State Management** | Lightbox is opened on top of Photo Tour. Desynchronization can lead to back button skipping Photo Tour or closing both modals abruptly. | Model navigation strictly as a state machine synced with URL search params (`?modal=PHOTO_TOUR_SCROLLABLE` and optional `&modalItem=<id>`). Closing Lightbox clears `modalItem` while keeping `modal`, seamlessly revealing Photo Tour. |
| **Scroll Position Restoration** | Opening Photo Tour locks body scroll (`overflow: hidden`). Closing it must restore original window scroll offset without jumping to top. | Store `window.scrollY` in a ref upon modal opening and restore it cleanly upon unmount. |
| **Sticky Booking Card Clipping** | If parent container does not have `display: flex` or correct grid stretch, `sticky` will fail or extend beyond footer. | Use `lg:grid-cols-[1fr_380px]` on the main container with `items-start`. Apply `sticky top-[100px]` directly to the reservation card wrapper. |
| **Focus Trapping & Escape Collisions** | Pressing `Escape` in Lightbox might inadvertently close both Lightbox and Photo Tour if event listeners bubble. | Implement `event.stopPropagation()` on Lightbox's keyboard listener. Lightbox consumes the first `Escape` event to return to Photo Tour. Only a subsequent `Escape` in Photo Tour dismisses to Listing Page. |
| **Image Aspect Ratio & Letterboxing** | Lightbox images stretching or distorting across wide desktop monitors. | Wrap Lightbox image in flex container with `max-w-full max-h-[75vh] w-auto h-auto object-contain` to guarantee natural aspect ratio preservation without distortion. |

---

## 12. Visual Fidelity Checklist

Use this checklist to verify compliance during implementation:

- [ ] **Top Header:** Height `81px`, sticky top, logo `#FF385C`, search pill with 3 segments and red search icon button, user menu pill on right.
- [ ] **Property Header:** Title `26px font-semibold`, Share and Save buttons on right with icons and underline hover.
- [ ] **Gallery Mosaic:** Width `1120px`, height `480px`, radius `12px`, 5 images in 2x2+hero arrangement, 8px gaps, floating "Show all photos" button at bottom right.
- [ ] **Main Layout:** Exactly `max-w-[1120px] mx-auto`, two-column split `lg:grid-cols-[1fr_380px]` with 48px gap.
- [ ] **Listing Left Column:**
  - [ ] Property subtitle with capacity bullets.
  - [ ] Guest favourite laurel wreath card with 4.95 star rating & 19 reviews.
  - [ ] Host snippet with "MH" circle avatar and hosting tenure.
  - [ ] "Where you'll sleep" with 2 bordered thumbnail cards.
  - [ ] "What this place offers" 10-amenity 2-column icon grid.
  - [ ] Dual-month calendar with black pill selected date range.
  - [ ] Rating breakdown bars, 6 metric categories, review filter pills, 6 review cards.
  - [ ] Pastel styled map with centered home pin.
  - [ ] "Meet your host" profile card with co-hosts list.
  - [ ] "Things to know" 3-column policies.
- [ ] **Sticky Reservation Card:**
  - [ ] Sticky at `top-[100px]`, width `380px`, rounded `16px`, shadow `0 6px 16px`.
  - [ ] Top discount notice pill.
  - [ ] Price `₹28,499 for 5 nights`.
  - [ ] Check-in/out and guest picker inputs.
  - [ ] Coral red "Reserve" CTA button (`#FF385C`).
  - [ ] "You won't be charged yet" and review link.
- [ ] **Photo Tour Modal:**
  - [ ] Full-screen white overlay with smooth slide-up animation.
  - [ ] Top sticky bar with `<` back button, "Photo tour" title, share/save.
  - [ ] Horizontal room thumbnail strip with jump scroll.
  - [ ] Left column sticky room title + tags; right column stacked photo stream.
  - [ ] URL synced to `?modal=PHOTO_TOUR_SCROLLABLE`.
- [ ] **Lightbox Modal:**
  - [ ] White backdrop, top bar with back-to-grid icon, room title, "X of 21" counter, and `✕` close button.
  - [ ] Centered high-resolution image (`object-contain`).
  - [ ] Prev (`<`) and Next (`>`) circular nav buttons.
  - [ ] First image disables Prev; last image disables Next.
  - [ ] Keyboard arrows (`ArrowLeft`, `ArrowRight`) navigate photos.
  - [ ] `Escape` key returns to Photo Tour; subsequent `Escape` returns to Listing.
  - [ ] URL synced to `?modal=PHOTO_TOUR_SCROLLABLE&modalItem=<id>`.
- [ ] **Accessibility:** All buttons have `aria-label`, visible focus rings (`#FF385C`), focus trapped in modals, focus restored on close.
