## Update Expertise mega-menu order & items

Replace the two lists under `expertiseGroups` in `src/data/home.ts` with the exact sequences the client sent. All items keep `href: "/#expertise"` (same as today) since no dedicated landing pages exist yet.

### Interior Architecture (new order)
1. Banking & Finance
2. IT & Software
3. Engineering
4. Health & Pharma
5. Media
6. Shipping
7. Telecom
8. Co-working
9. Education
10. Green Field

### Architecture & Urban Design (new order)
1. Civic and Institutional
2. Commercial
3. Data Centres
4. Transit Infra
5. Mixed Use
6. Luxury Housing and Residential
7. Hospitality
8. Healthcare
9. Sustainable Practices
10. Adaptive Reuse

### Notes
- Removed from previous list: Airports, Facade Design, Corporate + Workplace, Workplace, Educational (superseded / renamed).
- Added: Engineering, Health & Pharma, Green Field (Interior Architecture); Transit Infra, Healthcare, Sustainable Practices (Architecture & Urban Design).
- Header mega-menu (`src/components/layout/Header.tsx`) reads from `expertiseGroups` — no component changes needed. Footer's Expertise column also updates automatically if it reads the same source; otherwise I'll mirror the new lists there.

### Files touched
- `src/data/home.ts` — replace both `items` arrays in `expertiseGroups`.
- `src/components/layout/Footer.tsx` — only if it has a hardcoded expertise list (I'll verify and update to match).