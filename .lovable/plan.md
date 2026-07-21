## Homepage revamp — aligned to client wireframe

### New section order (top → bottom)
1. Header (unchanged)
2. Hero — cinematic visual + headline "Designing the future through Architecture, Interiors and Engineering" with subline covering Luxury Housing / Commercial / Data Centres / Interiors
3. Expertise — two divisions with detail
4. Dynamic numbered sections (01, 02, 03…) — scroll-driven storytelling blocks
5. Featured Projects — 3 cards only
6. Careers block — video + Trainee program CTA + team pictures
7. Footer (unchanged)

### Removed from current homepage
- Stats + About "trust strip"
- Testimonials / clients section
- Insights (Journal) section
- ConnectionMoment (already removed)

### Expertise — two divisions
Replace the single rotating expertise line with a two-column section:

- **01 · Architecture & Urban Design** — sub-items: Master Planning, Commercial & Institutional, Mixed-Use, Data Centres, Luxury Housing
- **02 · Interior Architecture** — sub-items: Corporate Interiors, Workplace Strategy, Hospitality, Retail, Experience Design

Each division: number, title, 2-line description, list of sub-disciplines, small hover-reveal thumbnail. Dark cinematic style, gold accents, GridBackdrop.

### Dynamic numbered sections (01–0N)
A vertical sequence of pinned/scroll-revealed blocks, each with a large numeral, short title, paragraph, and a supporting visual. Content pillars pulled from current TOA site:
- 01 Purpose-driven design
- 02 Sustainability & wellness (IGBC, WELL)
- 03 Technology-forward practice
- 04 Global delivery, local craft
- 05 25-year legacy

Sticky numeral on the left, content on the right, gold sweep line between blocks. Extendable to more entries via a data array.

### Featured Projects (3 cards)
Trim `ProjectsGallery` to 3 hero projects in a single row (keep hover reveal, drop 3-column parallax masonry). "View all projects" link retained.

### Careers block
New `Careers.tsx`:
- Full-bleed muted background video (silent, autoplay, loop) — placeholder MP4 URL to swap later
- Overline "Careers at TOA"
- Headline + short pitch
- CTA button: "Trainee Program"
- Row of 3–4 team photos below with subtle hover lift

### Files
- Edit `src/routes/index.tsx` — new section order, drop Stats/Testimonials/Insights imports
- Edit `src/data/home.ts` — add `expertiseDivisions`, `dynamicSections`, `careers` data; slice projects to 3
- New `src/components/home/ExpertiseDivisions.tsx`
- New `src/components/home/DynamicSections.tsx`
- New `src/components/home/Careers.tsx`
- Edit `src/components/home/ProjectsGallery.tsx` — 3-card layout
- Keep `StatsAbout.tsx`, `Testimonials.tsx`, `Insights.tsx` files on disk (unused) for possible reuse

### Out of scope this pass
Header/Footer changes, About/Portfolio pages, real careers video asset (placeholder used).
