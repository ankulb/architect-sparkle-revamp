# Logo visibility, Videos logos, Articles page

## Best approach for logo visibility
Some mastheads are white or light artwork, so a white band hides them, while others are dark and vanish on dark backgrounds. One band colour cannot fit every logo. Instead each logo gets its own matching backdrop:
- Every verified logo is reviewed and tagged as "needs light backdrop" (dark artwork) or "needs dark backdrop" (white/light artwork).
- Dark logos sit on a white card; light logos sit on a near-black card. Both cards have the same size and a thin edge, so rows still look uniform in both site themes.
- Where a publisher offers both versions, the correct one is used directly.

## 1. Videos section logos
The Videos / Interviews page (Magicbricks, Sugermint) will show the same publisher logos using the shared logo card; names stay as text only where no verified logo exists.

## 2. Articles page
- Each article row shows its publication logo (shared card) or the name as fallback.
- Remove the "518 articles" / "x of 518" counts here and on the News page link; the button reads "Load more articles" and disappears once everything is shown. News page link becomes "Browse all articles".

## Technical details
- Add a `tone: "light" | "dark"` per entry in `src/data/publicationMarks.ts` (map becomes `{ url, tone }`), decided by viewing each asset on a contact sheet.
- Extract `PublicationMark` into `src/components/PublicationMark.tsx`; use it in `insights.news.tsx`, `insights.media.tsx`, `insights.articles.tsx`.
- Remove `coverageCount` usage from news and articles routes.
- Verify with Playwright at 1280/390 in dark and light themes.
