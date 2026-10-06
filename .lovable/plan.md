# Find projects that span multiple cities

## What I checked so far
- The site's project data (`src/data/portfolio.ts`): every project currently shows a single city in its City fact — no entry lists two cities, and no project write-up text on the site mentions two different cities.
- Your Google Drive Writeups folder: all 14 project write-ups are located (MMRDA, JIO School, LFU University, Kinshasa, Brose, Fujitsu, DC Campus, BSE Hyderabad, RRCC Nagpur, Recreation Block Daund, Gated Community Khalapur, Dewani's Residence, CIDCO-CCRH, Gandhi Museum), plus the newer Interior Architecture V2 write-ups (Hyatt, Atlas Copco, Everllence, Generac, Sava, Grihum, Strux).

## Plan
1. Download and read every write-up from both Drive folders (Writeups + Interior Architecture V2).
2. Extract every city/location mention per project and compare with the single City value shown on the site today.
3. Report back the list of projects whose write-up mentions more than one city (e.g. a client with offices in two cities, or a project delivered across locations).
4. For each confirmed multi-city project, update the project page so the City fact and the one-line summary under the title show all cities (e.g. "Mumbai & Pune"), using only what the write-up states — nothing invented.

## Technical details
- Downloads via the Drive connector into /tmp; docx/pdf parsed to text; city names extracted and cross-checked against `src/data/portfolio.ts`.
- Edits limited to the affected `projectDetails` entries (City/location field and hero one-liner); no layout changes.
- Verify each touched project page at desktop/mobile; build clean.
