## Goal
Give the "Our practice in action" section a dynamic scroll-choreographed feel: the two 7-block rows (Architecture, Interiors) enter from opposite sides as the user scrolls in, and drift back out in opposite directions as the user scrolls past.

## Behavior
- Architecture row: enters from the **left**, settles centered, exits to the **left** (mirrored horizontal drift tied to scroll progress).
- Interiors row: enters from the **right**, settles centered, exits to the **right**.
- Both rows also fade in/out at the extremes so the swap feels cinematic rather than a hard slide.
- Slight vertical stagger between rows so they don't move in lockstep.
- Respect `prefers-reduced-motion`: skip transforms, keep static layout.
- Cards keep current hover + `layoutId` immersive open behavior; no changes to overlay, data, or grid counts.

## Implementation (in `src/components/home/DynamicSections.tsx`)
- Wrap each of the two `rows.map(...)` blocks in a Motion component driven by `useScroll({ target: rowRef, offset: ["start end", "end start"] })`.
- Derive `x` and `opacity` from `useTransform(scrollYProgress, ...)`:
  - Architecture: `x` maps `[0, 0.4, 0.7, 1] → [-220, 0, 0, -220]` px, `opacity [0,0.25,0.75,1] → [0,1,1,0]`.
  - Interiors: same curve but positive `x` (mirrored).
- Keep the section header ("See how we're shaping the future") static — only the two row groups animate.
- Guard with `useReducedMotion()` → return identity transforms when true.
- No changes to `SpatialCard`, `ImmersiveOverlay`, styles, or data.

## Out of scope
- No layout, copy, image, or grid-count changes.
- No other homepage sections touched.
