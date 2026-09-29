# Keep only leading publications in "Across the press"

## What will change
- On the News & Media page, the "Across the press" section currently shows 52 stories from 32 publications, and some outlets repeat a lot (Realty+ 8, Construction Week 3, Commercial Design 3).
- Trim it to one story per publication, showing only leading national and industry names: The Economic Times, The Times of India, Hindustan Times, Mint, The Hindu Business Line, Forbes India, CNBC-TV18, NDTV Profit, Zee Business, Times Now, BW Businessworld, Construction Week, Commercial Design, Realty+, Construction World. That makes about 15 cards.
- Drop smaller portals and repeated stories from this section: Analytics India Magazine, India Today Headline, The Hindustan Express, CXO pages, Skill Outlook, and similar.
- Every story stays on the Articles page, which keeps the full index. The "Browse all articles" button stays where it is.
- Featured Coverage and More Coverages don't change.

## Technical details
- In `insights.news.tsx`, filter `majorCoverage` using a list of leading publications (Times Of India Daily counts as Times of India) and keep the first story for each publication, in the order that list sets.
- `coverageIndex.ts` and the Articles page are not changed.
- Check desktop and mobile afterward: no repeated publications, and all logos load.
