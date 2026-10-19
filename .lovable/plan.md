# Team LinkedIn links, Essani spelling, Life at TOA photo

## What will change
- **Our Team LinkedIn links:** Abhijit Sutar, Hiral Parekh and Alpesh Parab each get their own LinkedIn profile, replacing the company page:
  - Abhijit Sutar: https://www.linkedin.com/in/abhijit-sutar-b6806b11a/
  - Hiral Parekh: https://www.linkedin.com/in/hiral-parekh-100204211/
  - Alpesh Parab: https://www.linkedin.com/in/alpesh-parab-2b298214b/
- **Spelling:** "Tasheen Issani" becomes "Tasheen Essani" everywhere it appears on the site.
- **Life at TOA:** the Family Day 2025 photo appears twice, once in the top banner and again in the large photo just below. The second copy will be removed, so the photo appears only once. If you have another team photo for that spot, send it and I'll put it there.

## Technical details
- `src/data/about.ts`: update the three `linkedin` fields and Tasheen's name. Check whether the image filename needs to change too: the photo URL contains "Tasheen-Issani.png" from the live site, so leave it as-is.
- `src/routes/about.life.tsx`: remove the large-photo block that shows `life.blocks[0].image`, which is the same file as the banner. Then check that the page layout still flows on desktop and mobile.
