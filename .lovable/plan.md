## Practice in Action — Spatial Portfolio experience

Upgrade the 7 horizontal cards in `src/components/home/DynamicSections.tsx` so each card behaves like a spatial portfolio tile: cinematic on hover, immersive 3D-feeling on entry.

### 1. Hover — spatial card
- On pointer enter, the card lifts on a subtle 3D tilt driven by cursor position (`rotateX/rotateY` ~6°, perspective 1200px). Image inside has a parallax offset (~8px) opposite to the tilt, giving a parallax "window into a room" feel.
- The image scales to full-bleed inside the card, siblings dim to 0.5 opacity + slight desaturation, gold corner marks appear at the card corners.
- Category label + title rise from the bottom with gold underline draw-in; 1-line excerpt fades in beneath.
- Custom gold "Enter →" cursor chip follows the pointer (desktop only).
- `prefers-reduced-motion`: no tilt/scale, only underline + excerpt fade.

### 2. Click — immersive spatial entry
- Clicking triggers a shared-element expansion using Framer Motion `layoutId`: the card's image grows from its grid slot to fill the viewport in ~800ms with an ease-out curve, while a soft depth-of-field blur radiates from the edges inward, mimicking stepping into the space.
- During expansion:
  - Sibling cards fade out and scroll locks.
  - A slow Ken-Burns push-in (scale 1 → 1.08 over 8s) begins on the hero image so the frame feels alive.
  - Title re-lays out into a large font-display headline bottom-left; category + excerpt animate up beneath it with staggered word masks.
  - Gold hairline frames draw in along the viewport edges (top, bottom sweep) as architectural spatial cues.
  - A vertical gold scroll rail with the item number (01–07) appears bottom-right.
- Two destination modes:
  - **Route items** (CSR, Clientele): after the expansion completes, navigate to their page; the hero image acts as the shared element into `PageHero`.
  - **Overlay items** (Awards, In the News, Upcoming Projects, University Collaboration, AI in Architecture): stay in a full-viewport immersive overlay with the image, longer description, and metadata. Close via ✕ button, Esc key, or backdrop drag-down; the image collapses back into its grid slot with the reverse transition.

### 3. Data + routing
- Add optional `excerpt` (short sentence) and, where useful, `body` (2–3 sentences for the overlay) to each item in `src/data/home.ts`.
- Items with a `href` navigate; the rest use the overlay. No new routes in this pass.

### 4. Files touched
- `src/components/home/DynamicSections.tsx` — spatial hover, tilt/parallax, `layoutId` shared element, click handler, immersive overlay (co-located).
- `src/data/home.ts` — add `excerpt` and `body` fields to the 7 items.
- `src/styles.css` — small utilities for the gold cursor chip and depth-blur helper (if needed).

### Out of scope
- No WebGL/Three.js — the "spatial" feel is achieved with CSS 3D transforms, parallax, Ken-Burns, and shared-element motion to keep the page fast.
- No new dedicated routes for Awards / News / Upcoming / University / AI.
- No changes to hero, expertise, projects, careers, nav, or theme tokens.
