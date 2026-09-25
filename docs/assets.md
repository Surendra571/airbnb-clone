# Asset Inventory & Media Strategy

> **Project:** Desktop Airbnb Clone (Candolim, Goa Listing)  
> **Source Specification:** `docs/reference-analysis.md`  
> **Rule:** Original implementation only. No scraping or reproducing hidden source files.

---

## 1. Directory Structure

All local assets are organized logically under `public/images/`:

```text
public/
└── images/
    ├── property/       # Local cached or optimized room & listing photography
    ├── host/           # Host & co-host avatar imagery
    └── icons/          # Custom SVG icons & UI symbols
```

---

## 2. Photography Asset Inventory (21 High-Resolution Images)

| # | Photo ID | Room / Subject | Target Aspect Ratio | Usage Location | Status | Current Fallback / Endpoint |
|---|---|---|---|---|---|---|
| 1 | `1000` | Living room 1 (Hero) | `~4:3` (556×480) | Hero Grid (Left), Photo Tour, Lightbox | Validated CDN | Pexels `276746` (high-res 1200w) |
| 2 | `1001` | Living room 1 | `~1:1` (274×236) | Hero Grid (Top-Mid), Photo Tour, Lightbox | Validated CDN | Pexels `29012619` (high-res 1200w) |
| 3 | `1002` | Living room 1 | `~1:1` (274×236) | Hero Grid (Top-Right), Photo Tour, Lightbox | Validated CDN | Pexels `30386991` (high-res 1200w) |
| 4 | `1003` | Living room 2 | `~1:1` (274×236) | Hero Grid (Bot-Mid), Photo Tour, Lightbox | Validated CDN | Pexels `33537442` (high-res 1200w) |
| 5 | `1004` | Living room 2 | `~1:1` (274×236) | Hero Grid (Bot-Right), Photo Tour, Lightbox | Validated CDN | Pexels `28542161` (high-res 1200w) |
| 6 | `1005` | Full kitchen | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `1080721` (high-res 1200w) |
| 7 | `1006` | Full kitchen | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `2724749` (high-res 1200w) |
| 8 | `1007` | Bedroom | `16:9` / `4:3` | Sleeping Spot 1, Photo Tour, Lightbox | Validated CDN | Pexels `34574606` (high-res 1200w) |
| 9 | `1008` | Bedroom | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `1454806` (high-res 1200w) |
| 10 | `1009` | Bedroom | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `271624` (high-res 1200w) |
| 11 | `1010` | Full bathroom | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `1910472` (high-res 1200w) |
| 12 | `1011` | Full bathroom | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `1457842` (high-res 1200w) |
| 13 | `1012` | Gym | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `1954524` (high-res 1200w) |
| 14 | `1013` | Gym | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `2247179` (high-res 1200w) |
| 15 | `1014` | Exterior | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `323780` (high-res 1200w) |
| 16 | `1015` | Exterior | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `1396122` (high-res 1200w) |
| 17 | `1016` | Pool | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `261102` (high-res 1200w) |
| 18 | `1017` | Pool | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `221457` (high-res 1200w) |
| 19 | `1018` | Additional photos | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `1643383` (high-res 1200w) |
| 20 | `1019` | Additional photos | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `1571460` (high-res 1200w) |
| 21 | `1020` | Additional photos | `16:9` / `4:3` | Photo Tour, Lightbox | Validated CDN | Pexels `1457847` (high-res 1200w) |

---

## 3. Host and Avatar Assets

| Asset | Purpose | Expected Dimensions | Usage Location | Status |
|---|---|---|---|---|
| Host Avatar (`MH`) | Host profile representation | `56×56px` round | Host Section, Reviews | Styled SVG/CSS circular badge (`#004D40` forest green with white serif lettering) |
| Co-host Avatars | Co-host badges (`P`, `S`) | `24×24px` round | Host Section co-hosts | Styled circular badges |

---

## 4. SVG Icon Inventory

| Icon Name | Purpose | Dimensions | Usage | Status |
|---|---|---|---|---|
| `airbnb-logo` | Primary brand symbol | `32×32px` | Top Navigation Header | **Active** (`src/components/ui/Icons.tsx`) |
| `search-mag` | Search trigger action | `12×12px` | Search pill button | **Active** (`src/components/ui/Icons.tsx`) |
| `grid-9dots` | "Show all photos" / "Back to grid" | `16×16px` | Gallery bottom button & Lightbox header | **Active** (`src/components/ui/Icons.tsx`) |
| `chevron-left` | Backward navigation | `16×16px` | Lightbox & Photo Tour & Calendar | **Active** (`src/components/ui/Icons.tsx`) |
| `chevron-right` | Forward navigation | `16×16px` | Lightbox & Calendar | **Active** (`src/components/ui/Icons.tsx`) |
| `close-x` | Modal dismissal | `16×16px` | Lightbox & Photo Tour | **Active** (`src/components/ui/Icons.tsx`) |
| `heart-outline` | Save listing | `16×16px` | Header actions (interactive toggle) | **Active** (`src/components/ui/Icons.tsx`) |
| `share-tray` | Share listing | `16×16px` | Header actions | **Active** (`src/components/ui/Icons.tsx`) |
| `trophy-wreath`| Guest favourite badge | `24×24px` | Highlights card & Reviews badge | **Active** (`src/components/ui/Icons.tsx`) |
| `amenity-icons`| Kitchen, Wifi, Desk, Parking, Pool, Jacuzzi, Pet, Camera, Alarms | `24×24px` | Amenities grid | **Active** (`src/components/ui/Icons.tsx`) |

