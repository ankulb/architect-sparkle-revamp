# Full-bleed hero banners with left gradient for people photos

## Problem

After the earlier face-safe fix, the people-photo banners (About, Board, Team, Clientele, CSR, Life at TOA, Careers) show a small contained photo floating in the middle of a dark blurred backdrop, with the headline in a separate row below. The image looks undersized — especially portrait/vertical photos like the CSR classroom shot.

## Goal

Make these banners use the full hero area for the photograph again, with a **left-to-right gradient** scrim: dark on the left where the headline sits, fading to reveal the photo on the right. Text overlays the image (no separate text row), and faces stay visible and unobscured.

## Changes — `src/components/about/PageHero.tsx` (faceSafe branch only)

Replace the current stacked "image row + text row" layout with a full-bleed hero:

- The image fills the entire banner (`absolute inset-0`, `object-cover`), anchored to the **right** of the frame (`object-right`) so the left portion — where text sits — is the gradient, not faces. Ken-Burns slow zoom retained.
- A directional scrim over the image:
  - Desktop: `bg-gradient-to-r from-background via-background/60 to-transparent` (strong left, clear right).
  - A light bottom-up gradient retained for the lead text legibility.
- Content block overlays at the bottom-left (same position and reveal animation as the standard hero): eyebrow, headline, lead, rotating phrases — using the on-image text treatment (light text, soft shadow) instead of the separate-row text colors.
- Mobile: same full-bleed image; the gradient shifts to be strongest at the left/bottom so the headline remains legible; the photo stays visible in the upper/right area. Verify faces are not cropped away by `object-right` on narrow screens — if the group photo loses too many people, use `object-position` tuned per check (e.g. `object-center` on mobile).
- Gold sweep line, blueprint grid, scroll cue, and the curtain reveal animation all keep working unchanged (they already assume a full-bleed image layer).
- The non-faceSafe branch (align right, blurred backdrop) stays exactly as it is.

## Pages affected

All heroes rendered with `faceSafe: true` — About, Board of Directors, Team, Clientele, CSR, Life at TOA — plus the Careers banner. No data or copy changes.

## Verification

- Playwright screenshots of /about, /about/board, /about/team, /about/clientele, /about/csr, /about/life, /careers at desktop (1440px) and mobile (602px), in dark and light themes.
- Check on each: photo fills the banner, headline/lead fully legible over the gradient, no text covering any face, no overflow.
- Build log clean.
