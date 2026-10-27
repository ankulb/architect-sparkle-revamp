# Team designations, Nxtra write-up, Aditya interview image

## Our Team page
- Rahul Mane: role becomes **VP Operations**
- Bharat Kukreja: role becomes **Deputy General Manager**

## Nxtra project page
- Title "NXTRA Office", banner category Corporate Interiors.
- Facts from the write-up: Client NXTRA · Sector Telecom / Digital Infrastructure · Location & Area Airoli, Navi Mumbai · 10,000 sq. ft. · Status Completed · Year 2026 · Category Corporate Interiors.
- Replace the current text with the five Overview paragraphs from the write-up, word for word.
- Note: the write-up says "Location: 10K, Airoli". I'm reading "10K" as an area of 10,000 sq. ft. Tell me if it means something else.

## Videos & Interviews page
- On the "Designing for Tomorrow: A Conversation with Aditya Yamsanwar of TOA" tile, take out the play icon and show Aditya's photo there.

## Technical details
- `src/data/about.ts`: update the two `role` fields.
- `src/data/portfolio.ts`: update the Nxtra entry: title, facts, area, sector label and description. The address stays `/portfolio/nxtra`.
- Upload image-22.png with lovable-assets to `src/assets/media/aditya-interview.png.asset.json`. Add an optional `image` field to `MediaCoverageItem`, then make `MediaCard` render it with object-cover and no play icon.
- Check the team page, the Nxtra page and the media page.
