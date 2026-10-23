## Remove city names from project titles

Project names shown on cards, project page banners, search and page titles drop the city. Cities stay in the Location & Area facts. Page web addresses stay the same so existing links keep working.

| Current | New |
|---|---|
| Johnson Controls GCC Offices | Johnson Controls |
| HPL, Mumbai | HPL |
| Lincoln International, BKC Mumbai | Lincoln International |
| IdeaForge Headquarters, Mumbai | IdeaForge Headquarters |
| INFINX Office, Mumbai | INFINX Office |
| Generac, Pune | Generac |
| Atlas Copco, Pune | Atlas Copco |
| Lift for Upliftment University, Dharashiv | Lift for Upliftment University |
| DC Campus, Navi Mumbai | DC Campus |
| BSE Data Recovery Centre, Hyderabad | BSE Data Recovery Centre |
| Mixed-Use Villas & High-Rise at Khalapur | Mixed-Use Villas & High-Rise |
| Dewani's Residence, Nagpur | Dewani's Residence |
| Recreation, Retail & Convention Complex, Nagpur | Recreation, Retail & Convention Complex |
| Recreation Block, Daund | Recreation Block |
| Gandhi Museum, Jaipur | Gandhi Museum |

### Technical details
- Edit `title` in both the `projects` list and `projectDetails` in `src/data/portfolio.ts`; also update any matching names in `src/data/home.ts`, `gcc.ts` and sector placements found by search.
- Slugs unchanged. Check build and a few pages.
