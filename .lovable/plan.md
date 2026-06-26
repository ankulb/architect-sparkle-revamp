# Adopt the uploaded blueprint→building hero into the homepage

Port the exact design and animation from your standalone HTML into the React/TanStack homepage, re-skinned to the TOA theme tokens (dark canvas, bronze-gold accent, project fonts, real TOA logo). The current broken `Hero` and `ConnectionMoment` are replaced with faithful ports.

## What the design does (from the file)
1. **Logo overlay** — TOA mark fills from the bottom, glows, tagline appears, overlay lifts, nav fades in.
2. **Hero (350vh, sticky)** — two columns:
   - *Left:* pulsing blueprint grid + an SVG building (viewBox 800×580) that draws itself across **8 scroll stages** (ground → outline → floors → entrance+windows → upper floors → roof/penthouse → dimensions/stamp). Lines shift from draft tone to brand color near 100%, with "PROPOSED ELEVATION" stamp, dimension labels (H/W/scale), and a changing caption.
   - *Right:* 4 crossfading text phases (01 Vision → 02 Blueprint → 03 Craft → 04 Realized) with a vertical progress bar + glowing pip and a scroll cue.
3. **Connection section** — "Where Vision Meets Craft": two mirrored blueprint halves slide in from the sides, a gold beam + spark + ring pop where they meet, then the copy fades up. Triggered on scroll-into-view.

## Theme adaptation (re-skin, keep the motion)
- **Colors:** map the design's `#050d1a` canvas → `var(--background)`; the orange `#E87722` accent → `var(--gold)`. Blueprint lines use a subdued cool draft tone, then shift to `var(--gold)` at completion so the "cold draft → warm realized" payoff is preserved but lands on brand. (Single source tone; easy to make fully gold if you prefer.)
- **Fonts:** headlines use the project display font (`--font-display`/Outfit), body uses `--font-sans` (Figtree). The small technical labels keep a monospace stack (`ui-monospace`) for the architectural feel — no new web fonts added.
- **Logo:** the fill-up uses the real `toa-logo.png` (clip-path reveal), not the orange "TOA" square.
- All colors via semantic tokens — works in both dark and existing light theme.

## Files

### `src/components/home/Hero.tsx` (rewrite)
- Section `h-[350vh]` with inner `sticky top-0 h-screen` two-column flex (matches the source).
- Port the SVG building markup verbatim (all `data-stage` paths) into JSX, restyled with tokens via a `.bp-path` class in `styles.css`.
- Drive animation with the source's proven approach (avoids the earlier framer-motion functional-transform bug): a `useEffect` measures each path's `getTotalLength()` and seeds `strokeDasharray/Offset`; a rAF-throttled `scroll` listener computes section progress `sp` and updates per-stage `stageProg`, the draft→gold color shift, dimension/stamp opacity, the changing caption, the 4-phase text crossfade, and the progress pip — a 1:1 port of the `updatePaths/updateText/updateIndicator` logic.
- Right column copy reused from your phases; "View Portfolio" CTA links to `/portfolio`.
- **Mobile:** stack to single column, reduce section to ~250vh, shrink type; blueprint sits above copy.
- **Reduced motion:** render the final drawn building + phase-04 copy statically, no pinning.

### `src/components/home/IntroOverlay.tsx` (align)
- Keep as the logo intro but match the new fill timing/glow and hand off cleanly into the hero (it already uses the real logo + clip-path fill). Nav/Header reveals after dismiss.

### `src/components/home/ConnectionMoment.tsx` (rewrite)
- Port the "Where Vision Meets Craft" section: two mirrored blueprint SVG halves, center gold beam, spark, and ring pop. Use an `IntersectionObserver` (or framer `useInView`) to fire the staggered timeline. Restyle to tokens; "Your Vision" / "Our Expertise" captions kept; CTA → `/portfolio`.

### `src/styles.css`
- Add `.bp-path` base styles (stroke, width, linecaps, `.thick`, `.dim` dashed) and the `gridPulse` / `pipGlow` / `sparkPop` keyframes, all using tokens.

### `src/routes/index.tsx`
- No structural change — `Hero` and `ConnectionMoment` keep their slots; downstream sections (StatsAbout, ProjectsGallery, Responsibilities, Testimonials, Insights) and existing Header/Footer remain. The design's own footer-CTA block is not added (project already has a Footer).

## Verification
Drive the live preview with Playwright in both themes: capture the logo fill, hero at scroll 0 / ~30% / ~65% / 100% (building drawn + gold shift + stamp + phase-04 copy), and the connection spark. Confirm no blank first frame and that mobile stacks correctly.
