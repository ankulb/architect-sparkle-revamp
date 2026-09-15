# Awards & Recognition page from the 2026 profile

## Page content

- Create a dedicated **Awards & Recognition** page using the verified material on page 8 of the supplied company profile.
- Present the awards chronologically from 2001 through 2019, preserving the named institutions, award titles, recipients and project distinctions from the PDF.
- Clean only obvious spacing and punctuation issues introduced by PDF extraction; do not invent awards, dates or claims.

## Design and storytelling

- Use the existing TOA header, footer, typography, gold accents and architectural grid language.
- Build an animated editorial timeline with clear year markers and restrained scroll reveals, designed for both desktop and mobile.
- Use the ceremony photography from the PDF as a cinematic visual sequence, separating usable photographs where practical rather than displaying the full PDF page as a screenshot.
- Add a concise opening statement based on the document’s “Awards & Recognitions” framing, without unsupported totals or promotional claims.
- Respect reduced-motion settings and keep all text legible over imagery.

## Connections

- Link **Awards & Recognition** in the Insights navigation directly to the new page.
- Link the homepage **Awards** item and its “Know more” action to the same page.
- Keep the existing News & Media page and other Insights links unchanged.

## Technical details

- Add a new `/insights/awards` route with page-specific title, description, social metadata and canonical URL.
- Store the structured award timeline in the site data layer so the page remains easy to maintain.
- Convert selected PDF artwork into optimized hosted image assets with descriptive alternative text.
- Verify the page at desktop and mobile widths, test both navigation entry points, and confirm the site builds without errors.
