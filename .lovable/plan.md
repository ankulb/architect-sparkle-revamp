# Architecture & Urban Design portfolio pages

## What will be added

Create the Architecture & Urban Design side of the portfolio using the same cinematic category-page and full case-study pattern already used for Interior Architecture.

### Expertise category pages

Wire the Architecture & Urban Design navigation to dedicated pages for:

- Civic & Institutional
- Commercial
- Data Centres
- Transit Infrastructure
- Mixed Use
- Luxury Housing & Residential
- Hospitality
- Healthcare
- Sustainable Practices
- Adaptive Reuse

Each populated page will have its own project-led banner, architectural motion/background treatment, short category narrative, and project grid. Transit Infrastructure and Adaptive Reuse will launch with a refined “projects being added” state because their supplied archives are empty. Commercial will retain the existing Commercial Office Building work already in the portfolio until additional material is supplied.

## New case studies

Build 11 complete project pages from the uploaded folders:

| Category | Projects |
|---|---|
| Civic & Institutional | MMRDA Headquarters; Lift for Upliftment University, Dharashiv; JIO School, Mumbai |
| Data Centres | Data Centre Campus, Navi Mumbai; BSE Data Recovery Centre, Hyderabad |
| Mixed Use | Mixed-Use Villas & High-Rise at Khalapur |
| Luxury Housing & Residential | Dewani’s Residence, Nagpur |
| Hospitality | Recreation, Retail & Convention Complex, Nagpur; Recreation & Canteen Block, Daund |
| Healthcare | CIDCO–CCRH Hospital & R&D Centre, Navi Mumbai |
| Sustainable Practices | Gandhi Museum, Jaipur |

Every case study will use the existing project-page format: full-image banner, supplied facts, overview narrative, animated architectural backdrop, responsive gallery, and related projects.

## Content and imagery

- Use the **Formatted V2** document as the authoritative source whenever duplicate write-ups conflict.
- Preserve the supplied project names, locations, areas, status, dates, sectors, categories, and approved narrative; correct only obvious formatting and capitalization issues.
- Keep Gandhi Museum under Sustainable Practices, as confirmed.
- Use all suitable supplied photography, renders, plans, and environmental diagrams, with a strong representative image selected for each card and banner.
- Exclude macOS metadata and duplicate draft documents.
- Optimize oversized renders and photographs for fast web delivery, then register them through the site’s hosted asset pipeline rather than committing binary files.

## Portfolio integration

- Add the new work to the main portfolio archive under Architecture & Urban Design while retaining the existing Architecture/Interiors filtering behavior.
- Connect every populated category page to its relevant project detail pages.
- Replace the current Architecture & Urban Design placeholder links in the Expertise menu with the new category destinations.
- Keep all current Interior Architecture pages, filters, data, and navigation unchanged.

## Technical details

- Extend the portfolio data and hosted gallery manifest with the 11 new detail records and optimized image sets.
- Expand the existing `/expertise/$sector` configuration for the ten Architecture & Urban Design destinations instead of creating duplicated page layouts.
- Continue using `/portfolio/$slug` for each project so the existing facts, overview, gallery, related-work, and metadata system remains consistent.
- Give every category and project page unique titles, descriptions, social metadata, and canonical URLs.

## Verification

- Check all ten Architecture & Urban Design navigation destinations and all 11 case studies.
- Verify project facts against the Formatted V2 documents, images and diagrams load correctly, and no duplicate projects appear.
- Review representative category and detail pages on desktop and mobile for image framing, text readability, gallery flow, navigation, and empty states.
- Confirm the site builds successfully with no broken links or console errors.