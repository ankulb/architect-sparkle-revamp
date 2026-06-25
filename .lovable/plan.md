# Graphic Elements + Interactive Grid Hover Effect

## Goal
Recreate the reference video's "drafting grid" mouse effect — a faint blueprint grid where cells near the cursor illuminate and trail the pointer — and layer in additional architectural graphic accents on the sections that currently feel too empty, across the homepage and all six About pages. Theme-aware (dark + light), performant, and respectful of reduced-motion / touch devices.

## Hover glow color
The cursor glow uses the TOA brand **orange-gold blend** — driven by the existing `--gold` token (`oklch(0.76 0.092 78)` in dark, the darkened bronze in light). The reveal will blend warm orange into gold via a radial gradient (hot orange-gold core fading to soft bronze at the edge), matching the warmth of the TOA logo/site. No neutral white highlight.

## What the reference shows
- A subtle full-bleed grid of thin lines (graph-paper / blueprint look).
- As the mouse moves, grid cells closest to the cursor brighten with a soft radial glow that follows the pointer and fades behind it.
- Used as a background layer behind content, never interfering with text legibility.

## New components

### 1. `src/components/graphics/InteractiveGrid.tsx`
The core hover effect. Absolutely-positioned background layer (`absolute inset-0 -z-0 pointer-events-none`).
- Base grid: tiled CSS background of thin `--border`-colored lines (~48px cells).
- Tracks the cursor on the parent section, writing `--mx` / `--my` CSS variables.
- A second masked layer paints an orange-gold grid revealed only through a radial mask centered on `--mx/--my`, so cells glow warm near the cursor and fade out behind it.
- Glow gradient blends warm orange → `--gold` → transparent for the TOA look.
- Props: `cellSize`, `radius` (glow size), `className`, `interactive` (default true).
- Performance: pointer updates throttled via `requestAnimationFrame`; listener on the section, not window.
- Accessibility: `prefers-reduced-motion` or coarse pointer (touch) → static faint grid only, no tracking.

### 2. `src/components/graphics/GridBackdrop.tsx` (thin wrapper)
Drops the grid plus an optional soft orange-gold gradient glow + corner crosshair markers behind a section's content, so each section opts in with one line.

### 3. Decorative accents (static, CSS/SVG only)
- `CornerMarks` — thin L-shaped crosshair brackets in section corners (architectural drawing cue).
- `PlusMarkers` — small `+` registration marks at fixed grid intersections.
- Soft radial gold glow blob utility for depth.

## Where it gets applied
Flat-background sections get the grid + accents behind content:

Homepage (`src/routes/index.tsx`):
- `StatsAbout` — grid behind the stats band + corner marks.
- `Responsibilities` — grid backdrop.
- `Testimonials` — grid backdrop with a centered gold glow.
- `Insights` — subtle grid.
- Hero & ProjectsGallery already carry imagery — restrained corner marks only, no full grid.

About pages:
- `PageHero` — faint interactive grid over the darkened image overlay (matches the reference, grid floating above the visual).
- `StorySection`, `PeopleGrid` bands, `about.clientele`, `about.csr`, `about.life` flat blocks — grid backdrop (the clientele logo wall is the closest match to the reference clip).

All placements use semantic tokens (`--border`, `--gold`, `--background`) so they invert in light mode (grid lines become faint ink lines, glow stays warm bronze).

## Technical notes
- Front-end / presentation only; no data or backend changes.
- Grid glow via CSS variables + CSS mask (GPU-friendly, no per-cell DOM nodes).
- Host sections set `position: relative` with real content at `z-10` so the `-z-0` grid sits behind — minor className additions where needed.
- No new dependencies expected.

## Out of scope
- The robot/human "Creation of Adam" hand visuals from the reference (bespoke hero art, not TOA content).
- Any copy or data changes.

## Verification
- Typecheck/build.
- Playwright: load `/` and a couple of About routes, move the pointer across a gridded section, screenshot to confirm cells illuminate with the orange-gold glow and trail the cursor in both themes; confirm text stays legible and touch/reduced-motion falls back to the static grid.