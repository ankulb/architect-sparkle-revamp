# Lighter project-page hero header

## Problem
On portfolio project pages (e.g. `/portfolio/columbia-ship-management`), `PageHero` receives `lead={detail?.description[0]}` — the full write-up paragraph. The hero therefore shows a huge block of text under the title, which reads as text-heavy and duplicates the Overview section below.

## Change
**File: `src/routes/portfolio.$slug.tsx`** — replace the hero lead with a compact one-line summary instead of the description paragraph:

- New lead format: `Client — Location · Year` (e.g. "Columbia Ship Management — Navi Mumbai · July 2026"), falling back to `"A Team One Architects project."` when no detail exists.
- Keep eyebrow (category) and title as-is.
- The full write-up stays untouched in the Overview section below the hero (no data changes in `portfolio.ts`).

## Verification
- Check `/portfolio/columbia-ship-management` on desktop (1280) and mobile (390): hero shows title plus the short one-liner, no long paragraph; overview text unchanged below.
- Spot-check one more project page to confirm the format holds.
- Build log clean.
