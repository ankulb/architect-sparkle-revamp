# Add supplied publication logos and streamline coverage

## What will change
- Add the four supplied marks for Hello Kotpad, Konsulteer, Design ACE Update (matching the archive's ACE Update naming), and Responsible Us to the shared publication-logo collection. Check each mark's backing so dark lettering remains visible in both site themes.
- On Articles and News, display only coverage from publications with a mapped logo. Keep the source archive intact; entries without a logo simply will not appear on those two pages.
- Remove repeated coverage from those two displays: group the same story even when headlines differ slightly or it was syndicated to multiple outlets, and retain one linked version from a logo-backed publication, preferring a leading/original outlet where identifiable. Keep genuinely different stories, interviews, and perspectives distinct. Avoid showing the same selected story in multiple News sections.
- Update Articles page wording where necessary so it no longer promises every archive article. Keep search and “Load more articles” working on the cleaned selection. Leave Videos / Podcasts / Interviews unchanged.

## Verification
- Check the four new marks in light and dark themes, including mobile, and confirm their article links still open the source.
- Check that Articles search and pagination use only the displayed entries, no duplicate story appears there, and News sections do not repeat a story.

## Technical details
- Store the uploaded images as hosted press assets and extend the existing `publicationMarks` map used by `PublicationMark`.
- Derive curated display lists from `coverageIndex` rather than deleting source records. Apply a consistent logo-only and story-deduplication rule to Articles and News, including the existing featured and more-coverage lists.
