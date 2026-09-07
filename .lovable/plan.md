# Sector pages — show every client name in the work grid

## Goal
On each `/expertise/<sector>` page the grid under the hero should list **every client name you gave for that sector** — not just the ones that happen to have a portfolio project. Today Engineering shows only JCI, so Emerson, Sedmac and Vanderlane look missing. Same gap on the other sectors.

## Exact client names per sector
| Sector | Clients (exact) |
|---|---|
| IT & Software | 3i, Idea forge, Intangles, VW ITS |
| Engineering | Emerson, JCI, Sedmac, Vanderlane |
| Health & Pharma | Apicore, BASF, Bharat Serum, Indira IVF |
| Media | Digital Domain, MSL Group, Prasad Studios |
| Shipping | Toll, XPO |
| Telecom | Infinix, Nxtra |
| Green Field | Hyatt |
| Banking & Finance | unchanged (no list given) |

## How the grid works after this change
Each sector page keeps its hero, then one single grid of cards — one card per client name, in the order you listed them:

- **Client has a portfolio project** — the card shows the project photo and links through to the case study, exactly as it looks today.
- **Client has no project yet** — the card shows the client name on a quiet blueprint-style panel with a subtle gold hover, matching the page's look. Nothing is clickable and nothing looks broken; a project photo can be dropped in later.

No separate "Clients / Partnerships" section comes back — it stays removed. Everything lives in the one grid.

## Name-to-project matching
| Sector | Cards with a project | Cards showing name only |
|---|---|---|
| IT & Software | Idea forge, Intangles | 3i, VW ITS |
| Engineering | JCI (Johnson Controls — GCC Offices) | Emerson, Sedmac, Vanderlane |
| Health & Pharma | Apicore, BASF, Indira IVF | Bharat Serum |
| Media | — | Digital Domain, MSL Group, Prasad Studios |
| Shipping | XPO | Toll |
| Telecom | Infinix (INFINX Office, Mumbai) | Nxtra |
| Green Field | — | Hyatt |
| Banking & Finance | Axis Securities, Federal Bank, ICICI Securities | — |

ERGO Technologies is not in your IT & Software list, so its card is removed from that page. It keeps its own case-study page and stays in the main portfolio.

## Technical details
- `src/routes/expertise.$sector.tsx` — change `clients: string[]` to a list of `{ name, projectSlug? }`; correct spelling to `Idea forge` and `Vanderlane`; drop `ergo-technologies` from IT & Software. Replace `sectorProjects` + `projectSlugs` with a resolver that walks the client list in order and returns either the matched `Project` or a name-only entry.
- Render the mixed list in the "Selected work" section: matched entries reuse `ProjectCard` via `ProjectGrid`-style layout; unmatched entries render a bordered name panel in the same grid cell size so rows stay even.
- `src/data/about.ts` — same two spelling fixes on the Clientele page groups so both pages read identically.
- Banking & Finance keeps its existing behaviour (matched by `projectDetails.sector`).
