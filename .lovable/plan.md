## Changes

### 1. "Our practice in action" — match the Colliers reference
Rework `src/components/home/DynamicSections.tsx` so the strip reads like the attached reference:

- Replace the horizontal snap-scroll row with a flush grid of portrait tiles that all sit visible on desktop (no scroll). On desktop show all 7 cards in one row (`grid-cols-7`), tablet `grid-cols-3`, mobile `grid-cols-2` (still scroll-free — just wraps).
- Card shape becomes tall portrait (`aspect-[3/5]`) with the image filling the full tile and no dark gradient by default — image reads clean and bright like the reference.
- Move caption + title OUT of the image and place them BELOW the tile: small blue/gold uppercase overline ("caption") and a short title line underneath, left-aligned, matching the reference's `OUR PEOPLE & EXPERTISE IN ACTION` / title treatment.
- Keep the click-to-open immersive overlay behaviour and the `layoutId` expansion — only the resting presentation changes. Remove the 3D tilt + gold corner marks + "ENTER →" affordance on rest; keep a subtle image zoom on hover and a thin gold underline that grows under the title on hover.
- Section heading stays ("Our practice in action" / "See how we're shaping the future"), aligned left as today.

### 2. Careers — 30 / 70 media-to-text ratio (SOM style)
Update `src/components/home/Careers.tsx`:

- Change the two-column grid from `md:grid-cols-2` to `md:grid-cols-[30%_1fr]` (with the existing `gap-16`) so the video occupies ~30% and the text column ~70%, matching the SOM reference proportions.
- Keep the current media (video in a contained aspect frame with gold corner marks) and the right-column composition (gold hairline, overline, headline, body, CTA) — only the column ratio changes.
- Tighten the media aspect to `aspect-[3/4]` so the smaller 30% column still reads as a substantial portrait frame rather than a thin sliver.
- Mobile stays single-column (media on top, text below) — unchanged.

No other files, data, or routes change.
