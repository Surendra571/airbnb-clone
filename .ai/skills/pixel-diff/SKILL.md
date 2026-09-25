---
name: pixel-diff
description: Methodology and protocol for multi-pass visual comparison between reference screenshots and local UI implementations.
---

# Pixel Diff Skill

## Purpose
Establishes a rigorous, three-pass methodology to inspect, classify, and systematically resolve visual differences between reference screenshot pairs and local application captures.

## When to Use
- During Step 6 Visual QA or after applying UI polish.
- Prior to final submission verification.

## 3-Pass Methodology

### Pass 1: Structural & Layout Alignment
- Verify container width (`max-w-[1120px]`).
- Verify column grid splits (e.g. `1fr / 380px` for main listing body, `300px / 1fr` for Photo Tour).
- Verify section padding, divider line positions (`border-[#EBEBEB]`), and sticky offsets (`top-28`).

### Pass 2: Visual & Design Token Precision
- Audit colors against design tokens (`#222222`, `#717171`, `#FF385C`, `#F7F7F7`).
- Check font weights (`font-normal`, `font-medium`, `font-semibold`), font sizes, and line heights.
- Ensure all icons are sharp vector SVGs without emoji fallbacks.
- Check corner border radii (`rounded-xl` for cards/gallery, `rounded-full` for pills/buttons).

### Pass 3: Interaction & Behavioral Polish
- Verify scroll listeners (e.g. sticky sub-navigation trigger at `scrollY > 550`).
- Test hover micro-interactions (e.g. image brightness dip or subtle scale).
- Verify disabled states and opacity indicators (e.g. boundary arrow buttons in Lightbox).

## Documentation Protocol
Record every finding in `docs/visual-qa.md` using the standard format:
- `ID`: QA-xx
- `Area`: Component / Section
- `Reference`: Observed reference behavior
- `Local`: Initial local state
- `Difference`: Categorized discrepancy
- `Fix`: Solution implemented and verified

