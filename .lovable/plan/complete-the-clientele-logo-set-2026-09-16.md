# Complete the Clientele logo set

## Scope

Add logos to the 12 client tiles that currently render as names only:

- **IT & Software:** 3i, Idea forge, Intangles, VW ITS
- **Engineering:** Sedmac, Vanderlane
- **Health & Pharma:** Indira IVF
- **Media:** Digital Domain, MSL Group, Prasad Studios
- **Telecom:** Nxtra
- **Green Field:** Hyatt

All other client tiles already reference a hosted logo. The existing sector names, client names, order, grid layout, grayscale treatment, and colour-on-hover behaviour will stay unchanged.

## Approach

1. Find the clearest official logo for each missing client, prioritising the original Team One Architects clientele page and each company’s official website or brand materials.
2. Confirm ambiguous identities before use, especially **3i**, **Vanderlane**, and the distinction between **Infinix** and the existing **Infinx** asset.
3. Download and prepare each approved logo with consistent whitespace and sufficient resolution; do not hotlink external images.
4. Host the logo files with the project’s existing client-logo assets and add them to the central logo library.
5. Connect each new logo to its matching Clientele tile without changing the supplied display names.
6. Check the page on desktop and mobile for complete images, balanced sizing, readable captions, no broken requests, and a clean build.

## Technical details

- Add new hosted asset pointers under the existing client-logo asset collection.
- Extend the client-logo map and reference the new entries from the Clientele data.
- Preserve lazy loading, accessible logo descriptions, and the current responsive tile dimensions.
