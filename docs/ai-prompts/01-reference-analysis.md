# Step 1 Prompt — Reference Analysis

> **Stage:** Step 1 — Airbnb Clone Reference Analysis  
> **Target Reference:** `https://airbnb-clone-umber-two.vercel.app` (Mirror: `https://airbnb-clone-chi-one.vercel.app`)

---

## Verbatim User Prompt

```text
STEP 1 — Airbnb Clone Reference Analysis
You are a senior frontend engineer and UI reverse-engineering specialist.
We are building an ORIGINAL desktop-only clone of this reference page:
https://airbnb-clone-umber-two.vercel.app

IMPORTANT:
Do NOT copy, download, or lift the source code of the reference application.
Do NOT reproduce its source code, component structure, or implementation.
We are only studying the rendered UI and user interactions.
The final implementation must be independently written and original.
Do not modify the project yet.
This step is analysis only.

Your task:
Open and carefully inspect the reference website.
Analyze all three required experiences:
- Listing Page
- Photo Tour
- Lightbox
Create a detailed implementation specification for the developer who will build the clone.

Analyze the Listing Page:
Document:
- Overall page width and max-width
- Header structure, height, logo placement, navigation/search elements, right-side controls
- Property title section, location information, rating/review information, share/save controls
- Main image gallery: number and arrangement of images, aspect ratios, border radius, gaps, cropping
- Property description, amenities/features section, host section, reservation/card section
- Pricing information, buttons, sticky/fixed elements
- Spacing, typography hierarchy, font sizes, font weights, colors, borders, shadows, icons
- Hover, active, disabled states, cursor behavior, scroll behavior

Analyze Photo Tour:
- How it opens, header/nav controls, photo arrangement, room categories, scrolling behavior
- Layout, aspect ratios, image gaps, interaction triggers

Analyze Lightbox:
- Single image presentation, controls, keyboard navigation, previous/next, counter, edge cases

Create:
docs/reference-analysis.md
```

