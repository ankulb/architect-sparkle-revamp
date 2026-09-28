# Board order, homepage cards, and Columbia correction

1. Put Bharat S. Yamsanwar first on the Board of Directors page; retain the other directors and their biographies.
2. Use a genuine awards photograph already shown on the Awards & Recognition page for the homepage Awards tile. Make the Awards, News, and CSR tiles open their respective pages directly, without the full-screen intermediate view or an extra “Know more” click. Keep the remaining homepage topics usable without inventing destinations.
3. Correct the homepage project tile currently labelled Columbia: its photograph matches the existing Lincoln International, BKC Mumbai project. Label it exactly “Lincoln International, BKC Mumbai” and link directly to that project page instead of the external portfolio index.

## Technical notes

- Reorder the board data without changing biography content.
- Reuse the existing awards image asset; use direct in-app navigation for the three page-backed homepage topics and preserve the visual tile treatment and scroll animation.
- Point the Lincoln tile to the existing `/portfolio/lincoln-international-bkc-mumbai` route and remove the Columbia-only external-link exception.
- Check the board page and homepage interactions on desktop and mobile, and confirm the preview builds without errors.
