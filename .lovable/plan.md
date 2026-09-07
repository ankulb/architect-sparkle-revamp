# Clientele page — named clients by sector

## What changes

The Clientele page (`/about/clientele`) gets restructured so each sector lists its clients by name with logos, per your list.

### New sector groups (replaces the current logo-only groups)

| Sector | Clients |
|---|---|
| IT & Software | 3i, Idea Forge, Intangles, VW ITS |
| Engineering | Emerson, JCI, Sedmac, Vandelane |
| Health & Pharma | Apicore, BASF, Bharat Serum, Indira IVF |
| Media | Digital Domain, MSL Group, Prasad Studios |
| Shipping | Toll, XPO |
| Telecom | Infinix, Nxtra |
| Green Field | Hyatt |

### Kept as-is (existing logo groups stay on the page)

- Banking & Finance
- Educational
- Co-Working

### Presentation

- Each client tile shows the logo with the client name as a small caption beneath it (decided with you).
- `LogoMarquee` is extended to accept `{ name, logo }` entries and render the caption; the infinite-scroll marquee, grayscale-to-color hover, and gold hover accents stay unchanged.
- Logo images: you will send the images for each client shortly. The data structure will be built with the names now; logos get dropped in as you share them (tiles show the name caption even before a logo is added, so the page never looks broken).

## Technical details

- `src/data/about.ts` — `clientele.groups` becomes `{ sector, clients: { name, logo? }[] }`; the three kept sectors get their existing logo URLs mapped to client entries (name inferred where obvious, otherwise left blank).
- `src/components/about/LogoMarquee.tsx` — props change from `logos: string[]` to `clients: { name?: string; logo?: string }[]`; renders a caption under each tile; renders a name-only tile when no logo yet.
- `src/routes/about.clientele.tsx` — updated to pass the new data shape; hero and layout untouched.

## Order of work

1. Restructure data + marquee component + route with all client names in place.
2. When you send the logo images, register them as assets and wire them into the entries.
