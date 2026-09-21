# Highlighted media coverage page

## Coverage selection

- Treat yellow-highlighted spreadsheet rows as the approved editorial selection.
- Review each highlighted item by its source and format, then include only entries that genuinely belong under **Videos**, **Podcasts**, or **Interviews**.
- Keep written press articles on the existing News & Media page rather than forcing them into a media category.
- Deduplicate repeated publication and social-media versions of the same coverage.
- Use the workbook hyperlinks where supplied; verify missing destinations from the original publisher before adding them. Do not invent links.

## Combined Videos / Podcasts / Interviews page

- Create one dedicated Insights page with three clearly labeled sections: **Videos**, **Podcasts**, and **Interviews**.
- Present each item with its publication, authentic headline, format, original destination, and publication artwork where it can be verified.
- Give playable video content a strong visual treatment while keeping external podcast and interview entries consistent with the site’s editorial design.
- Hide empty sections rather than showing placeholders if the approved spreadsheet selection contains no verified item for a format.

## Navigation and related coverage

- Link **Videos / Podcasts / Interviews** in the desktop and mobile Insights menus to the new page.
- Keep the current News & Media structure, but align its editorial selection with highlighted written coverage where appropriate without adding month headings, dates, or coverage counts.
- Preserve Awards, Articles, and Research Reports navigation behavior outside this requested update.

## Verification

- Confirm every included external link opens the correct original coverage in a new tab.
- Check the combined page and Insights navigation on desktop and mobile, in both site themes.
- Verify page metadata and the final app build.

## Technical details

- Add a typed media-coverage collection with a `video`, `podcast`, or `interview` classification.
- Add a new TanStack route for the combined page with unique title, description, Open Graph metadata, and canonical URL.
- Reuse the existing site header, footer, reveal motion, publication-mark treatment, and semantic design tokens.
