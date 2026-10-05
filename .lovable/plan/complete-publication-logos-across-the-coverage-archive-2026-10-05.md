# Complete publication logos across the coverage archive

## What will change
- Audit every publisher name appearing on News & Media, Videos / Interviews, and the complete Articles archive against the shared logo collection. The current archive has 284 distinct publication names; 252 do not match a logo entry, including some spelling variants and many smaller syndication outlets.
- Match genuine naming variants to the same publication only where identity is clear. Find original mastheads or logos for the remaining outlets from their own sites, supplied artwork, or verifiable publisher materials; do not use generic substitutes or assign a better-known publisher's mark to a similarly named site.
- Add verified assets to the existing shared publication-name map so each publisher looks the same across all sections. Review artwork against its light or dark backing, retain its proportions, and make publication names accessible.
- For publishers whose identity or original artwork cannot be confirmed, retain the readable name rather than showing an incorrect logo. Provide a clear list of any such unresolved names after the audit.

## Verification
- Check every distinct publication in the archive for a mapped asset or an intentional text fallback, including alternate spellings and repeated names.
- Check the News, Articles, and Videos pages on desktop and mobile in both themes; ensure marks load and article destinations remain unchanged.

## Technical details
- Keep `src/data/publicationMarks.ts` as the single mapping used by `PublicationMark` across the three pages. Extend verified asset pointers under `src/assets/press/` and adjust per-mark contrast only where needed.
- Preserve the existing coverage records, filters, page layout, and original links. The full archive is in scope, but unverifiable syndication names are not treated as logos to invent.
