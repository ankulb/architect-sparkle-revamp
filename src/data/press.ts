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
    publication: "Construction Times",
    headline: "Team One Architects Delivers Columbia Group’s First Global Capability Centre in India",
    url: "https://constructiontimes.co.in/Team-One-Architects-delivers-Columbia-Group%E2%80%99s-first-Global-Capability-Centre-in-India",
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
    publication: "Manufacturing Today",
    headline: "Why data centres are India’s defining infrastructure bet",
    url: "https://www.manufacturingtodayindia.com/why-data-centres-are-indias",
  },
  {
    publication: "Construction Week",
    headline: "TOA unveils medical campus master plan in Maharashtra",
    url: "https://www.constructionweekonline.in/news/toa-unveils-medical-campus-master-plan-in-maharashtra",
  },
  {
    publication: "Commercial Design",
    headline: "Gen Z office design is changing what workspaces need to be",
    url: "https://www.commercialdesignindia.com/insights/gen-z-office-design-is-changing-what-workspaces-need-to-be",
  },
  {
    publication: "Realty+",
    headline: "Architecture Today is as Much Business as it is Design",
    url: "https://www.rprealtyplus.com/news-views/architecture-today-is-as-much-business-as-it-is-design-124496.html",
  },
  {
    publication: "Realty+",
    headline: "How Offices are Changing to Meet the Demands of Hybrid Work",
    url: "https://www.rprealtyplus.com/news-views/how-offices-are-changing-to-meet-the-demands-of-hybrid-work-124549.html",
  },
  {
    publication: "Forbes India",
    headline: "Reinforcing Infrastructure-led Urban Growth",
    url: "https://www.forbesindia.com/article/budget-2026/budget-2026-reactions-live-updates-money-markets-and-the-industry-mood-liveblog/2990917/1",
  },
  {
    publication: "CNBC-TV18",
    headline: "Urban Infrastructure: Building Future-Ready Cities",
    url: "https://www.cnbctv18.com/budget/union-budget-2026-industry-flags-infra-push-ai-sustainability-and-startup-support-as-key-priorities-ws-el-19822745.htm/amp",
  },
  {
    publication: "The Economic Times",
    headline: "Budget 2026: The GCC capital of the world needs more brains to bank its $100-billion dream",
    url: "https://economictimes.indiatimes.com/news/economy/policy/budget-2026-gcc-expectations-sitharaman-india-global-capacity-centers-announcement-tech-job-skill/articleshow/127533183.cms",
  },
  {
    publication: "NDTV Profit",
    headline: "Budget 2026 Expectations: Focus on Manufacturing, MSME Push and More",
    url: "https://www.ndtvprofit.com/economy/union-budget-2026-expectations-live-updates-income-tax-changes-news-fm-nirmala-sitharaman-january-30-10911231",
  },
];