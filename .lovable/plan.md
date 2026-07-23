
## Homepage Hero — Cinematic Rotating Banner

Replace the current single-video hero with a SOM-style rotating carousel of the 5 uploaded category images. Each slide feels like video through slow Ken Burns motion (subtle zoom + pan) plus a soft grain/light-shimmer overlay, so a still image reads as a live shot.

### Slides (5)
Each slide = full-bleed image + kicker + large light headline. Content sourced from the current TOA site categories.

1. **Luxury Housing** — `Luxury_Housing.jpg` — Kicker "Expertise" · "Homes shaped around the way people actually live"
2. **Commercial** — `Commercial.png` — Kicker "Expertise" · "Landmark workplaces that anchor a skyline"
3. **Data Centres** — `Data_Centre.png` — Kicker "Expertise" · "Mission-critical infrastructure, engineered end to end"
4. **Hospitality** — `Hospitality.png` — Kicker "Expertise" · "Places that hold a guest from arrival to memory"
5. **Interiors** — `Interior_1.png` — Kicker "Expertise" · "Interiors where material, light and craft meet"

(Copy will be refined in build; captions kept short like SOM.)

### Motion & feel (video-like from stills)
- **Ken Burns per slide**: 8s slow zoom (1.0 → 1.08) with a gentle pan direction that alternates per slide (left, right, up, down, center-in).
- **Crossfade**: 1.2s opacity + slight scale crossfade between slides.
- **Grain overlay**: very low-opacity animated noise SVG for cinematic texture.
- **Light shimmer**: subtle diagonal gradient drifting slowly across (mimics window/sun highlights of a real video).
- **Auto-advance** every ~7s; pauses on hover of the pause button.
- Respects `prefers-reduced-motion` (freezes zoom, keeps crossfade minimal).

### UI chrome (matches SOM references)
- Bottom-left: small uppercase kicker + large thin serif/display headline (existing font-display, `font-light`, ~4-6xl) with soft text-shadow for legibility.
- Bottom-left under headline: **pagination dots** (5), click to jump.
- Bottom-right: **circular pause/play button** with thin border, gold hover.
- Top: existing Header stays overlaid (already transparent-on-hero).
- Bottom scrim gradient for text legibility (dark → transparent, ~40% height).

### Files
- `src/components/home/Hero.tsx` — rewrite to carousel driven by an array of `{ image, kicker, headline }`.
- Add 5 image asset pointers via `lovable-assets` from `/mnt/user-uploads/` → `src/assets/hero/<name>.{png,jpg}.asset.json`.
- Keep `hero-video.mp4.asset.json` in repo but unused (safe to leave; no delete unless asked).
- `src/styles.css` — add `@keyframes toa-kenburns-*` (5 variants), `toa-grain`, `toa-shimmer` utilities.

### Out of scope
- No changes to sections below the hero.
- No changes to nav, footer, or theme tokens.
- Route metadata unchanged.

### Technical notes
- Carousel state via `useState` + `setInterval`; cleared on unmount and when paused.
- Preload next image with `<link rel="preload" as="image">` injected once per slide index change.
- Each slide is absolutely positioned; only active has `opacity-100`, others `opacity-0` with `transition-opacity duration-[1200ms]`.
- Ken-Burns animation is CSS `animation` restarted per active slide via `key={activeIndex}` on the image wrapper so motion always starts fresh from scale 1.
