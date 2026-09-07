# Sector pages — exact client names and project-grid cleanup

## Goal
Each sector page stays as **hero + project grid** (no Clients tiles section — that removal stands). The project grid shows only the portfolio projects whose client matches the exact names you gave for that sector. Update the stored `clients` data to your exact spelling so it's correct if you re-use it later.

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

## What actually changes in `src/routes/expertise.$sector.tsx`

Only **one** visible change — on the IT & Software page. Every other sector's project grid already matches your list, so it stays as it is.

1. **IT & Software `projectSlugs`** — drop `ergo-technologies`. ERGO Technologies is not in your IT & Software client list, so its card should not appear.
   - From: `["ideaforge-headquarters-mumbai", "intangles", "ergo-technologies"]`
   - To: `["ideaforge-headquarters-mumbai", "intangles"]`
   - Result: IT & Software shows **IdeaForge** and **Intangles** only. (3i and VW ITS have no portfolio project yet, so no card for them.)

2. **`clients` field spelling** — correct two names to match your exact text:
   - IT & Software: `Idea Forge` → `Idea forge`
   - Engineering: `Vandelane` → `Vanderlane`
   - (All other sectors already match your exact spelling, including the Telecom = Infinix, Nxtra fix.)

3. **No Clients section is re-added.** Pages remain hero + project grid. The `clients` field stays in the data but is not rendered.

## Resulting project grid per sector
| Sector | Projects shown |
|---|---|
| IT & Software | IdeaForge HQ, Intangles |
| Engineering | Johnson Controls — GCC Offices |
| Health & Pharma | APICORE, BASF, Indira IVF |
| Media | none — "projects being added" |
| Shipping | XPO |
| Telecom | INFINX Office, Mumbai |
| Green Field | none — "projects being added" |
| Banking & Finance | Axis Securities, Federal Bank, ICICI Securities (unchanged) |

## Note
ERGO Technologies still has its full case-study page and stays in the main portfolio archive — only the IT & Software sector card is removed. If you'd rather keep ERGO on the IT & Software page, say so and I'll leave its slug in.
