# Workspace Interiors restructure + GCC tile image

## A. GCC homepage tile: dedicated stock image
- Generate one stock-style image matching the other dynamic tiles (modern global workplace, no people, no text); save and upload as `src/assets/dynamic/gcc.jpg.asset.json`.
- In `src/data/home.ts`, replace the `gccTile` import (currently reusing a Columbia Ship Management photo) with the new pointer.
- Add Generac to the GCC experience list in `src/data/gcc.ts` (links to `/portfolio/generac-pune`).

## B. Rename "Interior Architecture" → "Workspace Interiors"
Display label only; URLs and slugs unchanged. Applied to:
- Expertise mega-menu group title (`src/data/home.ts` expertiseGroups) and the homepage expertise section heading.
- `discipline` fields on all interior sectors in `src/routes/expertise.$sector.tsx`.
- Footer link label, Hero mention, and project `service` fields in `src/data/portfolio.ts`.
- Rupali Kapse's personal credential ("Professional Diploma in Interior Architecture") stays as-is — it is a qualification name, not a service label.

## C. Sector order, names and members (Workspace Interiors group first)
New display order and names (slugs stay: banking-finance, it-software, engineering, health-pharma, media, shipping):

1. Banking & Finance — clients: Grihum, Axis Securities, Federal Bank, ICICI Securities
2. Technology & Software (was IT & Software) — 3i, IdeaForge (fix "Idea forge"), Intangles, VW ITS, Strux One / Veeam
3. Engineering & Industrial (was Engineering) — Emerson, Johnson Controls (was "JCI"), Sedemac, Vanderlande, Generac, Atlas Copco, Everllence, BASF (moved from Health & Pharma)
4. Healthcare & Pharma (was Health & Pharma) — APICORE, Bharat Serum, Indira IVF, Sava Global Healthcare, INFINX (moved from Telecom, links to infinx-mumbai-office)
5. Media & Communications (was Media) — Digital Domain, MSL Group, Prasad Studios
6. Logistics & Shipping (was Shipping) — Toll, XPO, Columbia Ship Management (moved from Banking & Finance)
7. Architecture & Urban Design group unchanged, listed after Workspace Interiors.
8. Green Field stays at the end of Workspace Interiors; Education nav link unchanged.

- Telecom sector is dropped from the Expertise menu and expertise pages (its project INFINX moves to Healthcare & Pharma). Nxtra, Airtel, Vodafone and the other telecom names stay visible on the Clientele page.
- Nav order in `expertiseGroups` (home.ts): Workspace Interiors group first, then Architecture & Urban Design.

## D. Data consistency
- `src/data/portfolio.ts`: update project `sector` values to the new names (Technology & Software, Engineering & Industrial, Healthcare & Pharma, Media & Communications, Logistics & Shipping); BASF → Engineering & Industrial; INFINX → Healthcare & Pharma; Columbia Ship Management → Logistics & Shipping; remove Telecom sector value.
- `src/data/about.ts` clientele groups: rename matching group labels and reorder to the new sequence; the telecom group keeps its full client list on the Clientele page.
- `src/components/SearchOverlay.tsx`: update any sector name references.

## Verification
- Build log clean.
- Browser check: Expertise mega-menu (new order + rename), /expertise pages for the six sectors with their client lists, portfolio filtering still working, homepage GCC tile with the new image, /gcc with Generac — desktop and mobile, both themes.
