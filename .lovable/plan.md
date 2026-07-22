## Changes

### 1. Expertise → Navigation mega-menu (SOM-style)
- Remove `<ExpertiseDivisions />` from the homepage (`src/routes/index.tsx`); the section no longer lives on the page.
- Rebuild the "Expertise" nav item in `src/components/layout/Header.tsx` as a full-width mega panel that opens on hover (desktop). Two large columns titled **Architecture & Urban Design** and **Interior Architecture**, each listing disciplines as big, airy links (light weight, generous line-height, gold hover, underline on hover), matching the SOM reference. Bottom-left "Explore our expertise" link scrolls/links back to the homepage anchor.
- Populate the two columns from the handwritten list:
  - **Architecture & Urban Design**: Adaptive Reuse, Airports, Civic + Government, Commercial, Facade Design, Luxury Housing, Residential, Sustainable Architecture Engineering, Mixed Use, Data Centres
  - **Interior Architecture**: Corporate + Workplace, Healthcare, Hospitality, Workplace, IT & Software, Banking & Finance, Media, Shipping, Telecom, Educational, Co-working
- Update `src/data/home.ts`: replace the current 2-child Expertise `children` with a new `groups` structure (two titled columns of items). Header renders `groups` as the mega panel; other nav items keep the existing small dropdown.
- Mega panel: dark background matching header, subtle border-top hairline, closes on Escape / outside click / route change. Mobile: Expertise expands inline with both columns stacked.

### 2. Dynamic Sections — shorter blocks
- In `src/components/home/DynamicSections.tsx`, shrink `SpatialCard` from `h-[68vh] max-h-[640px] min-h-[440px]` to roughly `h-[42vh] max-h-[400px] min-h-[300px]` so cards read as blocks, not tall tiles. Tighten inner padding and title size to match the smaller footprint. Overlay behaviour unchanged.

### 3. Careers section (`src/components/home/Careers.tsx`)
- Remove the 4-image team grid below the hero (the "image under the Trainee Program").
- Restructure into a two-column layout matching the reference: **left column** holds the media (video/poster, contained to that column with a fixed aspect, not full-bleed); **right column** holds the overline, headline, body, and CTA on the pure background — no dark scrim. A short gold hairline sits above the overline as in the reference. Stacks vertically on mobile (media on top, text below).

No other content, data, or route changes.
