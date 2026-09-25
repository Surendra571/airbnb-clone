# Listing Page Implementation Verification Checklist

> **Target Reference:** [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app/)  
> **Status:** STEP 3 Complete — Visual verification and 3 polish passes verified against reference screenshots.

---

## Verification Items

| Section / Component | Specification & Observed Behavior | Status |
| :--- | :--- | :--- |
| **Header** | Sticky `81px` height (`h-[80px]` + 1px border), coral Airbnb logo mark + text, 3-segment search pill (`Anywhere` \| `Anytime` \| `Add guests` with red search circle), right-hand host & globe actions, rounded user pill with hamburger and profile glyph. **Step 6 Polish:** Dynamic sub-navigation bar on scroll past gallery (`window.scrollY > 550`) with tabs (`Photos`, `Amenities`, `Reviews`, `Location`) and quick Reserve pill. | **✓ Verified** |
| **Property Header** | H1 property title (`26px font-semibold leading-[32.5px]`), inline SVG Share tray button, interactive Heart Save button with red fill toggle state. | **✓ Verified** |
| **Gallery Mosaic** | `1120px` width, `480px` height, `12px` border radius (`rounded-xl`), `8px` gap (`gap-2`). 1 large hero image left (`556x480px`), 4 images right (`274x236px`), smooth hover darkening (`brightness-90`), floating "Show all photos" button with 9-dot grid icon. | **✓ Verified** |
| **Property Details** | Subtitle "Entire serviced apartment in Candolim, India", guest capacity breakdown, Guest favourite trophy card with dual golden floral badges (`GoldFloralBadge`), 4.95 rating, 5 stars, and 19 reviews link. Host snippet ("Hosted by Mirashya Homes", 2 years hosting). | **✓ Verified** |
| **Where you'll sleep** | Section header, 2 full-width photo cards (`h-44`, `rounded-xl`, `object-cover` photography): Living room 1 (Sofa) and Living room 2 (Sofa) without border boxes. | **✓ Verified** |
| **Amenities** | 2-column grid (`grid-cols-2`), custom SVG icons (Kitchen, Wifi, Workspace, Parking, Pool, Jacuzzi, Pets, Security camera, Carbon monoxide alarm strikethrough, Smoke alarm strikethrough), "Show all 10 amenities" button. | **✓ Verified** |
| **Dual-Month Calendar** | "5 nights in Candolim" header, October 2026 & November 2026 dual-month layout, October 18–23 selected date range highlighted in black circle/capsule pills, chevron navigation, "Clear dates" action. | **✓ Verified** |
| **Reviews & Ratings** | Grand trophy badge with large 4.95 score, 5-star distribution bar, 6 category metric rows with icons and calibrated ratings (Cleanliness 4.9, Accuracy 4.9, Check-in 5.0, Communication 5.0, Location 4.9, Value 4.8), 5 category filter pills, 6 authentic review cards with initials and avatars, "Show all 19 reviews" button. | **✓ Verified** |
| **Where you'll be (Map)** | Vector styled pastel map card (`bg-[#EBF1F6]`), central circular pin with radar pulse and white house icon, floating zoom controls (+/-), neighbourhood highlights summary. | **✓ Verified** |
| **Host Section** | Green circular avatar `MH` with verified checkmark, Mirashya Homes host card with review count (1,463), rating (4.68★), years hosting (2), 8 co-hosts list with avatars, host details (100% response rate, responds within an hour). | **✓ Verified** |
| **Stay Policies** | "Things to know" 3-column section: Cancellation policy, House rules, Safety & property with "Learn more" links. | **✓ Verified** |
| **Reservation Card** | Sticky at `top-[100px]`, `380px` width, `16px` border-radius, `0 6px 16px` shadow, ₹28,499 for 5 nights, 10% discount banner with SVG `TagIcon`, segmented check-in/checkout dates, interactive guest counter dropdown, coral Reserve button (`#FF385C` -> `#E00B41`), gray rounded cancellation container pill, "Report this listing" link with SVG `FlagIcon`. | **✓ Verified** |
| **Accessibility** | Semantic HTML tags (`<header>`, `<main>`, `<aside>`, `<section>`, `<h1>`-`<h4>`), all buttons use native `<button>` with clear `aria-label` text, high-visibility `:focus-visible` outline. | **✓ Verified** |
| **Desktop Layout** | Strict `max-w-[1120px] mx-auto`, fluid padding on smaller desktop viewports, zero unwanted horizontal scroll, no layout shift. | **✓ Verified** |
| **Visual QA Verification** | Verified against reference screenshots at standard viewport `1440 × 900`. 3-pass visual polish completed. | **✓ Verified** |

