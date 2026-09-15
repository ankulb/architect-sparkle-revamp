import economicTimesLogo from "@/assets/clients/economic-times.jpg.asset.json";
import timesOfIndiaLogo from "@/assets/press/times-of-india.jpg.asset.json";
import hindustanTimesLogo from "@/assets/press/hindustan-times.png.asset.json";
import etEdgeLogo from "@/assets/press/et-edge.png.asset.json";

export type PressItem = {
  publication: string;
  headline: string;
  url: string;
  logo?: string;
};

export const featuredPress: PressItem[] = [
  {
    publication: "The Economic Times",
    headline: "Scaling an SME? Your workspace may be your next big decision",
    url: "https://economictimes.indiatimes.com/small-biz/sme-sector/scaling-an-sme-your-workspace-may-be-your-next-big-decision/articleshow/132357031.cms?from=mdr",
    logo: economicTimesLogo.url,
  },
  {
    publication: "The Times of India",
    headline: "The future of Indian homes isn't glass and steel; it's climate intelligence",
    url: "https://timesofindia.indiatimes.com/life-style/home-garden/the-future-of-indian-homes-isnt-glass-and-steel-its-climate-intelligence/articleshow/131986061.cms",
    logo: timesOfIndiaLogo.url,
  },
  {
    publication: "Hindustan Times",
    headline: "Goodbye, cubicles! 6 Gen Z office design trends transforming workplaces",
    url: "https://www.hindustantimes.com/lifestyle/art-culture/goodbye-cubicles6-gen-z-office-design-trends-transforming-workplaces-with-dopamine-decor-warm-lighting-and-open-desk-101784196317327.html",
    logo: hindustanTimesLogo.url,
  },
  {
    publication: "Realty+",
    headline: "How AI is Reshaping Architecture: From Concept to Construction",
    url: "https://www.rprealtyplus.com/news-views/how-ai-is-reshaping-architecture-from-concept-to-construction-126189.html",
  },
  {
    publication: "ET Edge Insights",
    headline: "The more intelligent AI becomes, the more human workplaces must be",
    url: "https://etedge-insights.com/featured-insights/people-and-organizations/the-more-intelligent-ai-becomes-the-more-human-workplaces-must-be/",
    logo: etEdgeLogo.url,
  },
];

export const pressCoverage: PressItem[] = [
  {
    publication: "Design Sense",
    headline: "The human side of digital design",
    url: "https://www.acedesignsense.com/the-human-side-of-digital-design/",
  },
  {
    publication: "Interiors & Decor",
    headline: "Reimagining Commercial Interiors: Designing Offices for Experience, Not Just Efficiency",
    url: "https://interiorsndecor.com/reimagining-commercial-interiors-designing-offices-for-experience-not-just-efficiency%EF%BF%BC/",
  },
  {
    publication: "Manufacturing Today",
    headline: "Why data centres are India’s defining infrastructure bet",
    url: "https://www.manufacturingtodayindia.com/why-data-centres-are-indias",
  },
  {
    publication: "Responsible Us",
    headline: "Climate Risk Is Not a Future Scenario, It Is the Present Situation",
    url: "https://responsibleus.com/climate-risk-is-not-a-future-scenario-it-is-the-present-situation",
  },
  {
    publication: "Realty+",
    headline: "Architecture Today is as Much Business as it is Design",
    url: "https://teamonearchitects.com/2026/03/18/realtyplus-features-toa-associate-director-varsha-changedia/",
  },
  {
    publication: "CNBC-TV18",
    headline: "Urban Infrastructure: Building Future-Ready Cities",
    url: "https://teamonearchitects.com/2026/03/19/cnbc-tv18-features-toa-director-mr-aditya-b-yamsanwar/",
  },
  {
    publication: "Forbes India",
    headline: "Reinforcing Infrastructure-led Urban Growth",
    url: "https://teamonearchitects.com/2026/03/19/forbes-india-featurestoa-director-mr-parish-s-kapse/",
  },
  {
    publication: "Construction Times",
    headline: "Our focus is on merging design creativity with technological innovation",
    url: "https://teamonearchitects.com/2026/03/19/construction-times-features-toa-director-mr-parish-s-kapse/",
  },
];