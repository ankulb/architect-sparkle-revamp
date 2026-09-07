# Client lists on each expertise sector page

## What changes

Each sector page (`/expertise/<sector>`) gets a "Clients we've partnered with" section listing the client names you shared, in the same cinematic style as the rest of the page. The names already live on the Clientele page; this adds them to the matching sector pages too.

| Sector page | Clients listed |
|---|---|
| IT & Software | 3i, Idea Forge, Intangles, VW ITS |
| Engineering | Emerson, JCI, Sedmac, Vandelane |
| Health & Pharma | Apicore, BASF, Bharat Serum, Indira IVF |
| Media | Digital Domain, MSL Group, Prasad Studios |
| Shipping | Toll, XPO |
| Telecom | Infinix, Nxtra |
| Green Field | Hyatt |
| Banking & Finance | Left as-is (no client list shared) |

### Presentation

- A new section between the hero and the project grid: gold "Clients" kicker, sector client names rendered as elegant bordered tiles in the same marquee style used on the Clientele page (grayscale/gold hover kept).
- Logos can be dropped into the tiles later as you send the images — tiles show the client name until then, so nothing ever looks broken.

## Technical details

- `src/routes/expertise.$sector.tsx` — add `clients: string[]` to the `Sector` type and fill in the seven lists; render a client strip (reusing `LogoMarquee` with name-only entries) above the "Selected work" grid.
- No changes to data files, navigation, or other pages.

## Order of work

1. Add client lists to the seven sector definitions and render the client section.
2. Verify a few sector pages in the preview (names visible, marquee animates, project grid unchanged).
