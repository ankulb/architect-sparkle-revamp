# Contained-right hero banners with a dark text field

## Goal

Rework the shared inner-page hero so the photograph is clearly contained on the right, while the left remains a dark, spacious text area that blends naturally into the image. This keeps headings readable without covering important image details.

## Layout

- Apply the treatment to all inner pages using the shared hero: About, Careers, Expertise, Portfolio, GCC, Awards, News, Media and Articles. Keep the homepage’s separate animated hero unchanged.
- Desktop: reserve roughly the right 55–60% for the photograph, fit the full image within that space without stretching, and place the eyebrow, heading and supporting text in the left 40–45%.
- Blend the two sides with a dark left-to-right gradient that begins as a solid dark text field and fades over only the image’s left edge.
- Keep the hero dark in both site themes so the text treatment and photograph remain consistent and legible.
- Remove the full-banner blurred photograph behind the contained image so the result feels intentional and uncluttered.
- Preserve the existing curtain reveal, restrained image motion, blueprint grid, gold sweep and rotating phrases.

## Face and image safety

- Keep the shared face-safe behaviour for About, Board, Team, Clientele, CSR, Life at TOA and Careers.
- Fit each people photograph inside the right-hand image area and tune its position where needed so heads and faces remain visible.
- Ensure the left text column never extends far enough to cover faces or the main subject.

## Mobile treatment

- Use a stacked composition: photograph in the upper portion, dark text field below, with a short vertical gradient joining them.
- Keep the photograph large enough to inspect while avoiding severe side cropping.
- Preserve comfortable text spacing and prevent headings, supporting copy or controls from overlapping the image.

## Verification

- Check every shared-hero page at desktop and mobile widths in dark and light themes.
- Confirm images remain contained, key subjects and faces are visible, text is readable, animations still work and no content overflows.
- Confirm the project builds cleanly.

## Technical note

Implement this as the default composition in the shared `PageHero`, with `faceSafe` controlling only subject-aware image positioning. Update the project’s hero-layout rule to match the new contained-right design.
