# Update project pages from the Google Drive Writeups folder

The Writeups folder holds 14 project write-ups across 8 categories:

- Civic & Institutional: MMRDA Headquarters, Jio School, Lift For Upliftment University
- Commercial: Kinshasa Business Centre, Brose, Fujitsu
- Data Centre: Data Centre Campus, BSE Data Recovery Centre
- Mixed Use: Gated Community - Mixed Use Villas & High Rise
- Luxury Housing & Residential: Dewani's Residence
- Hospitality: Recreation, Retail and Convention Complex; Recreation Block
- Healthcare: CIDCO-CCRH
- Sustainable Practices: Gandhi Museum

## What changes
1. Read each write-up document from Drive (one-off reads, nothing linked to the site).
2. Match each to its existing project page and replace the overview with the supplied wording, kept as written.
3. Update the facts from each document (client, sector label, status, date/year) where it states them.
4. Every one of these project pages shows **City** and **Area** in the facts bar and in the short line under the title. If a write-up doesn't give one, I'll list which in my reply rather than invent it.
5. A write-up with no existing page gets a new project page in the right category, using existing photos if any; otherwise I'll flag it.
6. Check all 14 pages on desktop and mobile.

## Technical details
- Drive files read via the connector gateway (Docs exported as text; .docx downloaded and parsed).
- Edits in `src/data/portfolio.ts` projectDetails; the "Location" label in the facts bar in `src/routes/portfolio.$slug.tsx` becomes "City", with location kept to the city (site or address detail moves into the overview if needed). Hero one-liner: client · city · area.
- Category filtering unchanged (sector grouping vs. source sector label kept separate per AGENTS.md).
