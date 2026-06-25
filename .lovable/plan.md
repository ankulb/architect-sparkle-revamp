# Portfolio Archive + One Reference Project Page

Build the Portfolio archive page plus a single individual project page (Atomberg, used as the reference/template) — matching the existing dark cinematic theme, inspired by Ultra Confidentiel's `/projects` (archive) and `/projects/trilegal-bangalore` (detail), with architecture-firm graphic motifs (blueprint grids + self-drawing structural line art) that build up as the user scrolls.

## Routes

```text
/portfolio              -> archive (all projects, category filter)
/portfolio/$slug        -> individual project page (dynamic; only "atomberg" fully built for now)
```

- `src/routes/portfolio.tsx` — layout wrapper rendering `<Outlet />`
- `src/routes/portfolio.index.tsx` — archive page
- `src/routes/portfolio.$slug.tsx` — project detail page (path param; `notFound()` for any slug without detail data)

## Data

Create `src/data/portfolio.ts`:
- `projects`: all 27 items from the live archive (title, slug, category, hero image) so the archive grid is complete and every card links to its `/portfolio/$slug`.
- `projectDetails`: full detail for **Atomberg only** for now (sector, area, status, description, client, location, year, category, gallery images). The detail route renders from this map; slugs not present render a "coming soon" notice or `notFound()`, so the rest of the archive cards are visible but only Atomberg opens a complete page.

## Archive page (`/portfolio`)

- Reuse cinematic `PageHero` (curtain-wipe reveal, Ken-Burns, interactive blueprint grid) — eyebrow "Our Work", headline like "Showcasing the spaces we shape".
- Category filter row (Show All / the two categories) with animated count badges; filtering animates the grid via Framer Motion layout transitions.
- Responsive project grid of cards: image with grayscale→color + zoom on hover, location/name/category overlay (Ultra Confidentiel style). Cards link to `/portfolio/$slug`.
- Scroll-driven blueprint backdrop behind the grid using existing `GridBackdrop` plus the new self-drawing structural line motif.

## Project detail page (`/portfolio/atomberg`)

- Full-bleed cinematic hero with the project's lead image and curtain-wipe reveal; title overlaid.
- Meta strip: Client, Location, Year, Sector, Area, Status, Category — staggered reveal.
- Overview copy as editorial sections (reusing `StorySection` styling) from the scraped description.
- Large gallery images that parallax / reveal on scroll, interleaved with blueprint graphics.
- "More Projects" section: 3 other projects as cards linking onward.
- Back-to-portfolio link and per-route `head()` metadata (title, description, og:image = hero image).

## Architecture-firm graphic elements

Create `src/components/graphics/BlueprintReveal.tsx`: a scroll-linked SVG of structural/building line art (floor-plan grids, column grids, elevation outlines) that "draws" itself via `pathLength` tied to `useScroll` progress, in the gold token at low opacity. Layer it into section backdrops on both pages alongside `InteractiveGrid`/`GridBackdrop` so the blueprint feel intensifies as the user scrolls forward. Respects `useReducedMotion`.

## Navigation wiring

- Add `Projects` → `/portfolio` to the header nav (`src/data/home.ts`), replacing the current `/#projects` anchor.
- Update homepage `ProjectsGallery` "View all projects" → `/portfolio`; cards link to internal `/portfolio/$slug` instead of external WordPress URLs.
- Add a Portfolio link to the footer.

## Technical notes

- Path param per TanStack rules: `createFileRoute("/portfolio/$slug")`, read via `Route.useParams()`, navigate with `<Link to="/portfolio/$slug" params={{ slug }}>`.
- All visuals use existing semantic tokens (`--gold`, `bg-background`, `text-foreground`, etc.) so light/dark themes both work.
- Reuse `Reveal`, `PageHero`, `StorySection`, `GridBackdrop`; no new dependencies.

## Files

- New: `src/data/portfolio.ts`, `src/routes/portfolio.tsx`, `src/routes/portfolio.index.tsx`, `src/routes/portfolio.$slug.tsx`, `src/components/portfolio/ProjectCard.tsx`, `src/components/portfolio/ProjectGrid.tsx`, `src/components/graphics/BlueprintReveal.tsx`
- Edit: `src/data/home.ts` (nav), `src/components/home/ProjectsGallery.tsx` (internal links), `src/components/layout/Footer.tsx` (portfolio link)
