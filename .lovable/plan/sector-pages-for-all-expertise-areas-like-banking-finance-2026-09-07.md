# Sector pages for all expertise areas (like Banking & Finance)

## What changes

Every sector in the Expertise mega-menu gets its own cinematic page at `/expertise/<sector>`, built exactly like the existing Banking & Finance page (animated hero with rotating phrases, blueprint background, filtered project grid).

### New pages

| Page URL | Sector | Projects shown initially |
|---|---|---|
| /expertise/it-software | IT & Software | IdeaForge, Intangles, Volkswagen (VW ITS) |
| /expertise/engineering | Engineering | Johnson Controls (JCI) |
| /expertise/health-pharma | Health & Pharma | Apicore, BASF, Indira IVF |
| /expertise/media | Media | None yet — shows "projects being added" state |
| /expertise/shipping | Shipping | XPO |
| /expertise/telecom | Telecom | Infinx (Infinix) |
| /expertise/green-field | Green Field | Hyatt — no project entry yet, shows placeholder |

Each page gets its own hero copy, rotating phrase set (e.g. IT & Software: "Agile Workplaces / Innovation Hubs / Brand Experience"), a hero image drawn from existing portfolio photography, and full SEO metadata (title, description, og tags).

### Navigation

- The seven mega-menu items in `src/data/home.ts` that currently point at the placeholder `/#expertise` anchor get wired to their new pages.
- Banking & Finance stays as-is.

### Project matching

- Today the sector page filters by a `sector` field that only the four detailed case studies have. This gets broadened: each sector page lists its known client names, and any portfolio project whose client matches appears in the grid automatically.
- Media and Green Field have no portfolio projects yet, so they show the graceful "Projects in this sector are being added" state until you share that work.

## Technical details

- `src/routes/expertise.$sector.tsx` — add the seven entries to the `sectors` map (slug, name, discipline, lead, phrases, hero image); extend `sectorProjects` to match portfolio projects by client-name list per sector in addition to the existing `sector` field.
- `src/data/home.ts` — replace `href: "/#expertise"` with `to: "/expertise/<slug>"` for the seven menu items.

## Order of work

1. Add the seven sector definitions and broaden project matching.
2. Wire the mega-menu links.
3. Verify each page renders with the correct projects in the preview.
