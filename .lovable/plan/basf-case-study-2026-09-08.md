# BASF case study

Give BASF its own photo-rich case study page, matching the Apicore / Sedmac / VW ITS pattern.

## What gets added

- The eight BASF photographs, resized and optimised for the web, hosted on the CDN.
- A full project page for BASF with:
  - Hero image and the headline idea: brand-embedded acoustic architecture meeting modular well-being.
  - Story: BASF's India headquarters relocation to a 40,000 sq. ft. Mumbai space built around the "Future of Work" philosophy, hybrid working, sustainability and employee well-being in a LEED Gold-certified building, supporting over 250 people; Basotect used as an expressive design feature that merges acoustic performance with visual identity, alongside daylight, biophilic cues and user-centric zoning.
  - Fact file: Client BASF Headquarters, Location Mumbai, Sector Corporate / Manufacturing, Area 40,000 sq. ft., Status Completed, Date August 2025.
  - Scrolling gallery of all eight photographs.
- The BASF tile on the Health & Pharma page opens this page (the link already points at the right address).

## Technical notes

- Compress the 8 JPGs, upload with `lovable-assets`, write pointers to `src/assets/projects/basf/`.
- Add a `basf` gallery entry to `src/data/projectAssets.ts`.
- Add/extend the `basf` entry in `src/data/portfolio.ts` (`projectDetails`) with narrative, facts and gallery; keep the existing archive tile slug.
- Verify the build is clean.
