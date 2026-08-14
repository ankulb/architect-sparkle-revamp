# Homepage: dynamic section, hero slide, and press coverage

## 1. "Our practice in action" cards

- Remove the descriptive sub-line under each label (e.g. "Partnering across borders" under Global Collaboration, "Building for a climate-positive future" under Sustainability). Cards show only the label.
- Make the remaining label slightly bolder and a touch larger so it reads as the card title. Gold underline on hover stays.
- The full title and body copy stay inside the immersive full-screen overlay when a card is clicked, so no content is lost.

## 2. Card images: contextual and uncropped

Today each tile is a tall 3:5 crop with `object-cover`, so wide photos lose most of their content. Fix in two parts:

- Move the tiles to a gentler 4:5 frame and centre the subject, so the image reads as a whole rather than a slice.
- Replace the images with ones that actually match each block:

| Block | Image |
| --- | --- |
| Sustainability | Green-certified facade / planted terrace |
| Upcoming Projects | TOA rendering of the upcoming commercial tower |
| Research | TOA research/mission-critical cover visual |
| Global Collaboration | Studio collaboration / multi-city working session |
| Awards | TOA award-winning interior |
| In News | Press/media montage |
| CSR | Community and education initiative |

Where TOA project photography exists it is used; the remaining three (Sustainability, Global Collaboration, CSR) get purpose-made portrait imagery generated for the site instead of the current generic stock, all shot to the same 4:5 framing so nothing is cropped.

## 3. Hero slider — architecture & urban design slide

Add a sixth slide to the homepage hero carousel:

- Kicker: **Architecture & Urban Design**
- Headline: *Master planning and landmark architecture that give cities structure, scale, and a sense of place.*
- Portrait-safe cinematic architectural image, same Ken-Burns motion, dots and pause control as the existing five.

## 4. Media coverage

The uploaded index covers Oct 2025 – Jul 2026, roughly 230 unique pieces, most of it syndicated repeats of a handful of bylines across hundreds of aggregator sites.

Plan:

- Build a curated press list from the sheet — deduplicated by headline, keeping the most notable outlet for each story (The Economic Times, The Times of India, Hindustan Times, Realty+, ET Edge Insight, Manufacturing Today, Interior & Decor, Design Sense, etc.), with publication, headline, edition and date.
- Add a **News & Media** page at `/insights/news`, styled like the rest of the site: cinematic page hero, coverage grouped by month, newest first, each item showing publication, headline and date.
- Wire the homepage "In News" block's **Know more** button and the header Insights > News & Media link to that page.
- Coverage thumbnails: the sheet has no article links or images, so items use publication-led cards with TOA press imagery; if you send article URLs later they can become live links.

## Technical notes

- `src/components/home/DynamicSections.tsx` — drop the title line from `SpatialCard`, restyle the caption, change the tile aspect ratio.
- `src/data/home.ts` — `dynamicSections` images, `In News` href to `/insights/news`.
- `src/components/home/Hero.tsx` — add the sixth slide.
- New `src/data/press.ts` (curated coverage) and `src/routes/insights.news.tsx`.
- New imagery registered through the asset pipeline, not committed as binaries.

## Open item

Article URLs for the coverage list, if you want the headlines clickable.
