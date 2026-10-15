# Remove the Voya placeholder tile from the GCC page

## Goal
The GCC page's experience grid currently ends with a text-only tile reading "Further GCC experience — Voya", because Voya has no project page yet. Per the user's decision, remove this placeholder so the grid shows only the five linked case studies (WebMD, ERGO Technology & Services, Columbia Ship Management, Volkswagen, Generac).

## Changes

1. `src/routes/gcc.tsx`
   - Delete the text-only "Further GCC experience / Voya" `Reveal` block (the placeholder tile at the end of the experience grid).

2. `src/data/gcc.ts`
   - Remove the Voya entry from `gcc.experience` (it is the only entry with `to: undefined`), leaving the five linked experience items.

## Notes
- If a Voya project (photos, city/area/date, write-up) is supplied later, a `/portfolio/voya` page can be added and Voya restored to the experience list as a linked case study.
- No other pages are affected: the homepage Global Collaborations tile lists WebMD and TTEC only; Voya does not appear elsewhere on the site.

## Verification
- Build clean; `/gcc` renders with exactly five experience cards, no placeholder tile; desktop and mobile check for layout balance.
