# Sync open positions with teamonearchitects.com/jobs

The live jobs page lists 10 roles; the new site's Careers page currently shows 17, including 7 that no longer exist on the live site (Purchase Head, Project Manager, Interior Designer, Site Supervisor, Junior Quantity Surveyor, Graphic Designer, HR Manager).

## Changes

1. **src/data/careers.ts** — replace the jobs list with the 10 roles from the live site, in the live site's order:
   - Project Head — Leadership (12–18 yrs)
   - Procurement Head — Leadership (10–15 yrs)
   - Site Engineer — Entry–Mid (1–4 yrs)
   - Quantity Surveyor — Mid–Senior (3–8 yrs)
   - 3D Visualiser / Graphic — Mid (2–5 yrs)
   - Design Head — Leadership (10–15 yrs)
   - Sr. Project Manager — Leadership (8–12 yrs)
   - Sr. Business Development — Senior (6–10 yrs)
   - Junior Business Development — Mid (1–4 yrs)
   - PR / Brand Communications — Mid–Senior (3–7 yrs)
   - Add the live page's "experience band" and "key role focus" to each role so the listing carries the same detail as the live site.
   - Keep each role linking to its live detail page (teamonearchitects.com/jobs/…), which already works.

2. **src/routes/careers.tsx** — show the experience band and role focus on each position row; keep the category/location filters working with the reduced list.

3. Verify the Careers page at desktop and mobile in both themes; confirm the build is clean.

## Notes
- Locations per role aren't stated on the live jobs listing, so location labels stay as currently set (Mumbai / Pune / Multiple) unless you want them changed.
