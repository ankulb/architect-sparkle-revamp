# Match every project page to its Drive write-up

## What changes
1. Re-read every write-up in the Drive folders "Interior Architecture", "Interior Architecture V2" and "Writeups" (all sectors, all projects).
2. For each write-up, compare against its project page and update:
   - Facts panel: Client, Sector, City, Area, Status, Date/Year, Category — exactly as written (e.g. Axis Securities: Banking & Finance · Mumbai · 26,500 sq ft + 12,000 sq ft · Completed 2023 · Corporate Interiors).
   - Overview text: replace any drafted or old-format copy with the write-up wording.
   - Short line under the title (client · city · area) follows the updated facts.
3. Where a write-up gives combined "Location & Area" (multiple cities or multiple floors), show it as written, e.g. "26,500 sq ft + 12,000 sq ft".
4. Pages with no write-up in Drive keep their current text; missing facts stay omitted, never invented.
5. Sector grouping on the site (which sector page a project sits on) stays as agreed; only the displayed sector label follows the write-up.

## What you get back
- A list of every page updated and what changed.
- A list of projects still without a write-up, and any write-up missing city, area or date.

## Technical details
- Drive read via connector (docx/PDF parsed, Docs exported as text) into /tmp.
- Edits only in `src/data/portfolio.ts` projectDetails (facts + description); `portfolio.$slug.tsx` unchanged unless a "Location & Area" combined format needs a small display tweak.
- Verify a sample of updated pages on desktop/mobile; build clean; existing tests pass.
