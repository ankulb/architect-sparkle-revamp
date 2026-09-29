# Visible publication logos on dark backgrounds

## What will change
- On the News & Media page, publication logos currently sit directly on the near-black dark theme background, so dark-coloured marks become hard to see.
- Give every rendered publication logo a consistent light "band" — a small white/paper chip behind the mark with subtle padding and a hairline border — so any publisher artwork reads clearly on both the dark and light themes.
- The band uses a fixed white surface (not a theme token) because publisher logos are designed for light backgrounds; in the light theme the hairline border keeps the chip distinguishable from the paper canvas.
- Preserve each logo's proportions (object-contain), its size, the headline text, links, and the page layout. Publications without a verified logo keep their plain text label — no band added there.

## Verification
- Playwright check of /insights/news at desktop and mobile widths, in dark and light themes: every logo sits inside the white band, nothing is broken or clipped, no page errors.
- Build log clean.

## Technical details
- Single edit in `src/routes/insights.news.tsx` (`PublicationMark`): when a logo exists, wrap the `img` in a light chip container (e.g. `bg-white` with `ring-1 ring-border`, small `px`/`py` padding) instead of the current transparent span; keep `max-h`/`object-contain` on the image.
- No data changes: `src/data/publicationMarks.ts` and press data are untouched. Articles index untouched.
