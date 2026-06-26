## Homepage cinematic opening — logo fill-up, blueprint-to-building hero, and a "blueprint meets building" connection moment

Three new beats inspired by the reference, themed to TOA's orange-gold brand and the existing dark cinematic system.

### 1. TOA logo fill-up intro overlay

A full-screen overlay (`#0A0A0B`) that plays on every homepage load, then lifts to reveal the hero.

- New component `src/components/home/IntroOverlay.tsx`, mounted at the top of `src/routes/index.tsx`, fixed `z-[100]`.
- The TOA logo sits centered. Two stacked copies of the logo:
  - a dim base copy (~18% opacity) showing the empty silhouette,
  - a bright orange-gold copy that "fills up" from bottom to top via an animating `clip-path: inset(100% 0 0 0)` → `inset(0 0 0 0)` over ~1.6s, mimicking the liquid welling up in the reference.
- A soft gold glow pulse and a thin gold meniscus line riding the top of the fill as it rises.
- Below the logo: a hairline progress bar and the words "TEAM ONE ARCHITECTS" fading in letter-spaced.
- On completion (~2.2s), the whole overlay slides/fades up and unmounts, revealing the hero. Skippable on click/scroll/Esc.
- `prefers-reduced-motion`: skip the fill, show the logo briefly, fade out fast.

### 2. Hero: blueprint draws into a completed project (3-screen scroll journey)

Replaces the current crossfading `Hero.tsx` with a tall pinned hero (`300vh` section, sticky inner viewport) driven by `useScroll` scroll progress.

```text
scroll 0% ───────────── 50% ───────────── 100%
[ blueprint lines draw ] [ photo fades/saturates in ] [ built project, headline settled ]
   grid + plan + elevation     crossfade + grayscale→color     gold accents + CTA
```

- Stage A (0–45%): structural blueprint SVG (floor-plan + elevation line art, reusing the `BlueprintReveal` pathLength-on-scroll pattern) draws itself in gold on the dark grid, dimensions/annotation ticks appearing.
- Stage B (40–80%): a real completed TOA project photo (from `heroSlides` in `src/data/home.ts`) crossfades over the blueprint, transitioning grayscale→full color and de-blurring — "the drawing becomes the building."
- Stage C (75–100%): photo fully resolved with cinematic gradient; headline "Designing spaces that work, inspire and endure", the rotating expertise words, and the "Discover the studio" CTA settle into place. A scroll cue + progress rail on the left tracks the journey.
- `prefers-reduced-motion`: collapse to a static finished hero (photo + headline), no pinning.

### 3. "Blueprint meets building" connection moment

A new full-bleed band placed between the hero and `StatsAbout` (a transition beat, like the reference's reaching-hands moment), signifying design becoming reality through partnership.

- New component `src/components/home/ConnectionMoment.tsx` on the dark grid backdrop.
- From the left edge, a draftsman's hand + pencil drawn as blueprint line-art reaches inward; from the right edge, a built structure / rising building reaches back. As the band scrolls into view they extend toward center and meet at a glowing **gold spark** at the exact touch point (radial gold flare + small particle burst).
- Centered tagline rises with the meeting: "We design as one." with a supporting line ("Where the drawing meets what's built.").
- Line-art delivered as inline SVG with `pathLength` draw-in tied to in-view/scroll; gold spark uses the brand `--gold` token with a soft bloom (kept low-intensity so text stays legible, consistent with the earlier glow tuning).
- `prefers-reduced-motion`: show both sides already met with a static spark and the tagline.

### Files

- New: `src/components/home/IntroOverlay.tsx`, `src/components/home/ConnectionMoment.tsx`
- Rewrite: `src/components/home/Hero.tsx` (pinned scroll-driven journey)
- Edit: `src/routes/index.tsx` (mount intro overlay; insert `ConnectionMoment` after `Hero`)
- Possibly add a small SVG line-art helper (hand/building) inside the connection component; reuse `BlueprintReveal`/`InteractiveGrid`/`GridBackdrop` patterns already in the codebase
- Reuse existing `--gold` token, Outfit/Figtree fonts, `Reveal`, and `motion/react` — no new dependencies

### Technical notes

- Scroll-pinning uses a `300vh` outer wrapper with a `sticky top-0 h-screen` inner stage and `useScroll({ target, offset })`; all stage transforms derived from one `scrollYProgress` via `useTransform` for smoothness.
- Intro overlay renders client-side only (guard against SSR/hydration: render after mount) to avoid a flash; body scroll locked while it's visible.
- All animations honor `useReducedMotion`; color strictly via semantic tokens (no hardcoded hex in components).
