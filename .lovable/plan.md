## Goal

Two polish fixes on the homepage cinematic sequence:
1. The first screen shown right after the intro loader is blank — the blueprint/sketch build-up should already be drawing from the very first frame.
2. In the "We design as one" section, the sketch jumps abruptly into the photo and the photo gets cropped — make the transition smooth and keep the whole reveal contained in view without cutting the image.

---

## 1. Start the sketch build-up from the first frame (`src/components/home/Hero.tsx`)

**Why it's blank now:** The hero is a 300vh scroll-pinned journey where every visual is driven purely by `scrollYProgress`, which is `0` on load:
- blueprint `pathLength` (`0 → 0.45`) = `0`, so no lines are drawn yet
- photo opacity (`0.35 → 0.8`) = `0`
- headline opacity (`0.72 → 0.95`) = `0`

So right after the loader lifts, the user sees an empty dark canvas with only the faint grid until they scroll.

**Fix — the blueprint draws itself starting on the first frame, then scroll continues the journey:**
- Add a mount-time animation (a `useMotionValue` driven by `animate()` from `motion/react`, kicked off in `useEffect`) that begins drawing the blueprint line-art the moment the hero appears — the build-up starts from frame one, over ~1.6s, with no scroll required.
- Drive the blueprint `pathLength` from the **max** of this mount-draw progress and the scroll progress, so the lines draw on load and stay drawn (and continue) as the user scrolls into the photo stage.
- Fade in the headline + "Inspiring Spaces Since 2001" eyebrow on mount as well, so the first screen already has copy plus the actively-drawing blueprint — never blank.
- Leave the scroll-driven photo reveal (blueprint → building) intact for the rest of the journey.
- Keep the reduced-motion branch unchanged (it already shows a static finished hero).

Result: the instant the loader lifts, the blueprint is already building itself with the headline visible, and scrolling still plays the full blueprint-to-building journey.

---

## 2. Smooth, contained, uncropped reveal (`src/components/home/ConnectionMoment.tsx`)

**Why it looks abrupt / cropped:**
- The built photo is a **square** `VIEW-1-650x650.png` placed in a **16:9** frame with `object-cover`, so it's hard-cropped top/bottom (the "cut" the user sees).
- The photo fades in on a single opacity step at `revealAt` (1.9s) while the sketch only dims to `0.16` — the two layers don't truly crossfade, so it reads as a sudden swap.
- A tall 16:9 frame inside `max-w-5xl` can also exceed the viewport on smaller screens.

**Fix — developing-photo crossfade, matched aspect, capped to viewport:**
- Use a landscape source so nothing is cropped (e.g. `heroSlides[0]` from `home.ts`, a wide project image) and/or switch the image to `object-contain` so the full built image is always shown, not cut.
- Match the frame's aspect ratio to the image and cap it with `max-h-[78vh]` (plus `mx-auto`) so the entire reveal — sketch and photo — stays within the screen on all sizes.
- Replace the single hard fade with an overlapping crossfade timeline so it "develops" smoothly instead of swapping:
  - the photo eases in over a longer duration (~1.4–1.6s) from grayscale+blur to full color/sharp,
  - the sketch fades down **concurrently** (and lingers very faintly as a draft overlay rather than snapping off),
  - soften/slow the gold wipe line and spark so they read as part of one continuous reveal, not a cut.
- Keep the loose hand-drawn sketch, the wobble filter, the blueprint grid backdrop, and the tagline timing as-is.

Result: the sketch gently resolves into the full, uncropped building photo, and the whole moment fits on screen.

---

## Technical notes
- Both files already use `motion/react`; the mount draw uses `useMotionValue` + `animate()`, combined with the existing `useTransform` scroll values (via a `useTransform([...], ...)` max, or by reading both into a combined motion value).
- No data-model or routing changes; this is presentation-only.
- Verify with a Playwright pass: (a) screenshot the first frames immediately after the loader dismisses to confirm the blueprint is actively drawing (not blank), and (b) capture the ConnectionMoment mid- and end-reveal in both dark and light themes to confirm the photo is uncropped and the crossfade is gradual.
