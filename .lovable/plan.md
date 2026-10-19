# One continuous News & Media coverage section

## What will change
- **Featured coverage:** CNBC-TV18, NDTV Profit and Zee Business go first, followed by the current five (Economic Times, Times of India, Hindustan Times, Construction Times, ET Edge Insights). CNBC-TV18 becomes the large lead card.
- **One continuous grid:** "More Coverages" and "Across the press / Coverage in leading national mastheads" become one grid with no heading or column break between them. The current "More Coverages" stories come first, then the leading-publication stories, with no repeats and no story that already appears in Featured.
- The "Browse all articles" button stays at the end. The Articles page doesn't change.

## Technical details
- `insights.news.tsx`: build `featuredCoverage` from the CNBC, NDTV Profit and Zee Business stories (taken from `pressCoverage` and `majorCoverage`) plus `featuredPress`. Merge `moreCoverage` and `leadingCoverage` into one list and show it in a single section using the existing card style. Remove the second section header.
- Keep the existing logo and deduplication helpers. Check the page on desktop and mobile.
