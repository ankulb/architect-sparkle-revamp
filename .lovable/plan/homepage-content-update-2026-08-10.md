# Homepage content update

## 1. Hero banner headlines

Replace the five slide headlines with the approved copy (kicker + line):

| Kicker | Headline |
| --- | --- |
| Luxury Development | Designing the future through experiential architecture & development, master planning, and detailed planning with sustainability at its core. |
| Commercial | Iconic developments crafted to maximize space utilization while anchoring the skyline |
| Data Centres | Mission-critical digital infrastructure developed with future-ready resilience and end-to-end engineering |
| Hospitality | Evolving spaces that elevate guest happiness and satisfaction from arrival to memory |
| Interior Architecture | Interiors where material, light, and craft shape intuitive and immersive user experiences |

Slide 1's kicker changes from "Luxury Housing" to "Luxury Development"; images, Ken-Burns motion, dots and pause control stay as-is. The first headline is long, so it gets a slightly smaller desktop size so it still fits two to three lines.

## 2. Featured Projects

The homepage grid shows exactly these six, in this order: Ergo, Jio School, JCI, BASF, Commercial Office Building, XPO.

- Ergo (Ergo Technologies), JCI (Johnson Controls), BASF, Jio School and Commercial Office Building all already have images and portfolio pages in the site data — they get wired to those.
- XPO does not exist anywhere in the current content. It will be added with the same card treatment, but it needs an image and a project page from your side; until then I'll show it with a neutral placeholder image.
- The All / Architecture / Interiors filter stays. With only six curated projects the filters will show subsets of these six.

## 3. Dynamic section ("Our practice in action")

- Back to a **single row** of blocks (the earlier layout), not the two Architecture/Interiors rows.
- Sequence per the handwritten note: Sustainability, Upcoming Projects, Research, Global Collaboration, Awards, In News, CSR.
- Images: Awards, Upcoming Projects and Research use TOA project imagery; CSR, Sustainability and Global Collaboration use stock imagery as you noted.
- Awards copy will be drawn from the company profile PDF you attached.
- News: content is on mail and not in this thread — the News block ships with placeholder copy and current TOA press imagery until you paste the items here.

## 4. Careers section

The attached photograph replaces the current looping video as the Careers visual (uploaded as a hosted asset, kept in the 30/70 layout with the gold corner marks). Note: the attached image is the directors' group portrait — confirm if you meant a different workspace shot and I'll swap it.

## Technical notes

- `src/components/home/Hero.tsx` — slide copy array.
- `src/data/home.ts` — `projects` (curated six), `dynamicSections` (single flat list of 7, `discipline` field dropped), `careers.image`.
- `src/components/home/DynamicSections.tsx` — remove the two-row grouping and the opposite-direction scroll split; keep one row with the scroll-in reveal, hover zoom and the immersive click-through overlay with "Know more".
- `src/components/home/Careers.tsx` — swap `<video>` for `<img>`.
- Careers photo added via the asset pipeline, not committed as a binary.

## Open items

- XPO image + project details.
- News items.
