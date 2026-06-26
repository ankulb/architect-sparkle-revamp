## Goal
Replace the current hand+pencil "reaching" graphic in the "We design as one" section with a **sketch → built reveal**: a loose, rough, hand-drawn architectural sketch of a building draws itself line-by-line as the section scrolls into view, then dissolves/refines into the actual built photograph — visualising "from drawing to reality."

## File touched
- `src/components/home/ConnectionMoment.tsx` (full rewrite; no other files change)
- Reuse an existing building exterior already in `src/data/home.ts` (e.g. the Commercial Office Building / MMRDA exterior `VIEW-1` / `R3A8108`) as the "built" image — no new assets needed.

## Visual concept
A single centered "drawing board" frame (max-w ~5xl, ~58vh tall) containing two stacked layers:

```text
 ┌───────────────────────────────────────┐
 │  (1) loose pencil sketch — draws in    │   phase 1
 │  (2) real built photo — fades up over  │   phase 2
 │      the sketch, grayscale→color       │
 └───────────────────────────────────────┘
        DESIGN, REALISED
        We design as one
   Where the drawing becomes the building.
```

### Layer 1 — the loose hand-drawn sketch (SVG)
- A building **elevation/perspective** built from `motion.path`/`motion.line` using `pathLength` 0→1 (self-drawing), staggered delays so it draws like someone sketching: ground line first, massing box, floor plates, mullions, entrance, a few context strokes (ground hatching, a tree, sun rays).
- **Loose & rough feel:**
  - Apply an SVG `feTurbulence` + `feDisplacementMap` filter to the whole sketch group for a subtly wobbly, hand-drawn wobble.
  - Each main edge drawn as **2 slightly offset overlapping strokes** with small overshoot past corners (construction-line look).
  - Thin dashed **construction/guide lines** that draw first, plus light **cross-hatching** for shadow faces.
  - `strokeLinecap/Join: round`, `vectorEffect: non-scaling-stroke`, stroke = `var(--gold)` warm pencil tone, slightly varied opacity per stroke.
- A small **pencil-tip dot** travels along the leading stroke while drawing (offsetPath/keyframes), then a quick gold spark when the sketch completes.

### Layer 2 — the built reveal
- The real building photo sits in the same frame, initially `opacity 0`, grayscale + slight blur.
- Once the sketch finishes (~70% through the sequence) the photo **crossfades up** while transitioning grayscale→color and blur→sharp; the sketch lines simultaneously fade to ~15% so faint draft lines linger over the photo (the "drawing behind the building").
- A thin gold **wipe line** sweeps top→bottom as the photo resolves, reinforcing the reveal.

### Copy (kept, lightly updated)
- Eyebrow: `DESIGN, REALISED`
- Heading: `We design as one`
- Sub: `Where the drawing becomes the building.`

## Motion / triggering
- Trigger with `useInView(once, amount: 0.4)` (same as today) so it plays when scrolled into view.
- Sequence ~2.6s: guides (0–0.4s) → main sketch strokes (0.3–1.6s) → hatching/details (1.2–1.8s) → spark (1.7s) → photo crossfade + wipe (1.8–2.6s) → tagline rises (2.2s).
- Full `useReducedMotion` support: skip drawing/wipe, show the resolved photo with faint sketch overlay and the tagline immediately.

## Theme / tokens
- Use existing semantic tokens only (`--gold`, `--gold-soft`, `--foreground`, `--muted-foreground`, `--background`); keep the big 96px blueprint grid backdrop already in the section. Works in both dark and light themes.

## Verification
- `npx tsgo --noEmit`.
- Playwright: scroll the section into view at 2–3 timestamps and screenshot to confirm (a) the rough sketch draws, (b) it dissolves into the built photo, (c) tagline reads clearly, in both dark and light themes.
