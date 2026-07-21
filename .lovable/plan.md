## Full-bleed video hero

Replace the current `Hero.tsx` (scroll-pinned blueprint sequence) with a cinematic full-screen video hero, per the client wireframe.

### Asset
- Upload `user-uploads://hero-video.mp4` as a Lovable Asset (`src/assets/hero-video.mp4.asset.json`) so it's served from the CDN. Import the pointer and use `asset.url` as the `<video src>`.

### New `src/components/home/Hero.tsx`
- Full-viewport section: `h-[100svh] w-full relative overflow-hidden bg-background`.
- Background `<video>` (autoplay, muted, loop, playsInline, `preload="auto"`, poster fallback) covering the section with `object-cover`.
- Layered scrims for legibility: bottom-up dark gradient + subtle left-side gradient (matches the About PageHero treatment, tokens only — no hardcoded colors).
- `InteractiveGrid` overlay at low opacity for the blueprint texture continuity with the rest of the site.
- Content block bottom-left (max-w container, gold eyebrow, display headline, subline, scroll cue on the right):
  - Eyebrow: `TEAM ONE ARCHITECTS`
  - Headline (from wireframe): **"Designing the future through Architecture, Interiors and Engineering"** — word-by-word rising mask reveal (reuse the pattern from `about/PageHero.tsx`).
  - Subline: `Luxury Housing · Commercial · Data Centres · Interiors` (from wireframe).
- Reduced-motion: skip masks, static fade-in; video still plays but respects `prefers-reduced-motion` by pausing autoplay.

### Cleanup
- Remove the 300vh+ pinned scroll logic, blueprint SVG stages, and phase text — no longer used.
- Keep `IntroOverlay` logo intro; the hero starts once the overlay lifts.
- No changes to Header, Expertise, DynamicSections, ProjectsGallery, Careers, Footer, or data files (headline/subline live inline in the hero component since they're wireframe-specific).

### Out of scope
Any other homepage sections, copy tweaks elsewhere, or swapping the video for a different source.
