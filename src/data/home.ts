// Content sourced from teamonearchitects.com (current homepage).
import johnsonControlsLogo from "@/assets/brands/johnson-controls.png.asset.json";

const UP = "https://teamonearchitects.com/wp-content/uploads";

export type NavChild = { label: string; to?: string; href?: string };
export type NavGroup = { title: string; items: NavChild[] };
export type NavItem = {
  label: string;
  href?: string;
  to?: string;
  children?: NavChild[];
  groups?: NavGroup[];
};

export const aboutNav: NavChild[] = [
  { label: "Our Story", to: "/about" },
  { label: "Board of Directors", to: "/about/board" },
  { label: "Anchors of TOA", to: "/about/anchors" },
  { label: "Our Team", to: "/about/team" },
  { label: "CSR", to: "/about/csr" },
  { label: "Climate Action", to: "/about/csr" },
  { label: "Life at TOA", to: "/about/life" },
  { label: "Clientele", to: "/about/clientele" },
];

export const expertiseGroups: NavGroup[] = [
  {
    title: "Architecture & Urban Design",
    items: [
      { label: "Civic and Institutional", href: "/#expertise" },
      { label: "Commercial", href: "/#expertise" },
      { label: "Data Centres", href: "/#expertise" },
      { label: "Transit Infra", href: "/#expertise" },
      { label: "Mixed Use", href: "/#expertise" },
      { label: "Luxury Housing and Residential", href: "/#expertise" },
      { label: "Hospitality", href: "/#expertise" },
      { label: "Healthcare", href: "/#expertise" },
      { label: "Sustainable Practices", href: "/#expertise" },
      { label: "Adaptive Reuse", href: "/#expertise" },
    ],
  },
  {
    title: "Interior Architecture",
    items: [
      { label: "Banking & Finance", href: "/#expertise" },
      { label: "IT & Software", href: "/#expertise" },
      { label: "Engineering", href: "/#expertise" },
      { label: "Health & Pharma", href: "/#expertise" },
      { label: "Media", href: "/#expertise" },
      { label: "Shipping", href: "/#expertise" },
      { label: "Telecom", href: "/#expertise" },
      { label: "Co-working", href: "/#expertise" },
      { label: "Education", href: "/#expertise" },
      { label: "Green Field", href: "/#expertise" },
    ],
  },
];

export const nav: NavItem[] = [
  {
    label: "Expertise",
    href: "/#expertise",
    groups: expertiseGroups,
  },
  {
    label: "Insights",
    href: "/#insights",
    children: [
      { label: "News & Media", href: "/#insights" },
      { label: "Awards & Recognition", href: "/#insights" },
      { label: "Events & Engagements", href: "/#insights" },
      { label: "Videos / Podcasts / Interviews", href: "/#insights" },
      { label: "Articles", href: "/#insights" },
      { label: "Research Reports", href: "/#insights" },
    ],
  },
  { label: "Studio", href: "/about", children: aboutNav },
  {
    label: "Careers",
    href: "/#careers",
    children: [
      { label: "Life at TOA", href: "/#careers" },
      { label: "Trainee Program", href: "/#careers" },
      { label: "Open Positions", href: "/#careers" },
      { label: "Employee Stories", href: "/#careers" },
    ],
  },
  { label: "Contact", href: "https://teamonearchitects.com/contact/" },
];


export const heroSlides = [
  {
    image: `${UP}/2021/11/WhatsApp-Image-2025-10-30-at-2.48.45-PM-3.jpeg`,
    alt: "Urban design and city planning project by Team One Architects",
  },
  {
    image: `${UP}/2026/03/DSC07321-HDR-650x650.jpg`,
    alt: "APICORE corporate interior by Team One Architects",
  },
  {
    image: `${UP}/2025/10/WhatsApp-Image-2025-10-28-at-11.20.12-AM-1.jpeg`,
    alt: "Commercial and institutional architecture by Team One Architects",
  },
  {
    image: `${UP}/2021/11/WhatsApp-Image-2025-10-31-at-12.51.59-PM.jpeg`,
    alt: "Corporate interior design by Team One Architects",
  },
];

export const expertise = [
  "Urban Design & City Planning",
  "Commercial & Institutional Architecture",
  "Corporate Interiors",
];

export const expertiseDivisions = [
  {
    number: "01",
    title: "Architecture & Urban Design",
    lede:
      "From master plans to landmark buildings, we shape environments that balance civic ambition with human scale.",
    services: [
      "Master Planning",
      "Commercial & Institutional",
      "Mixed-Use Developments",
      "Data Centres",
      "Luxury Housing",
    ],
    image: `${UP}/2021/11/WhatsApp-Image-2025-10-30-at-2.48.45-PM-3.jpeg`,
  },
  {
    number: "02",
    title: "Interior Architecture",
    lede:
      "Workplaces, hospitality and retail spaces engineered for wellbeing, brand story and enduring performance.",
    services: [
      "Corporate Interiors",
      "Workplace Strategy",
      "Hospitality",
      "Retail",
      "Experience Design",
    ],
    image: `${UP}/2026/03/DSC07321-HDR-650x650.jpg`,
  },
] as const;

export const dynamicSections = [
  // ——————————————————————————— Architecture (7)
  {
    caption: "Awards & Recognition",
    title: "Recognized among India's leading practices",
    image: `${UP}/2026/03/R3A8108-newy-650x650.jpg`,
    excerpt: "Honoured across national and international platforms for design excellence.",
    body: "From IIID and NDTV Design & Architecture accolades to global mentions, our work is consistently recognised for how it balances craft, context and community. Every citation is a reminder that considered architecture endures.",
    href: undefined as string | undefined,
    discipline: "architecture" as const,
  },
  {
    caption: "In the News",
    title: "TOA in the press",
    image: `${UP}/2026/03/Blog-Cover-1.png`,
    excerpt: "Featured in leading design, business and lifestyle publications.",
    body: "Our projects and points of view have been covered by ArchDaily, Architectural Digest, Economic Times and more — spanning workplace futures, sustainable urbanism and India's evolving design language.",
    href: undefined as string | undefined,
    discipline: "architecture" as const,
  },
  {
    caption: "CSR",
    title: "Design in service of community",
    image: `${UP}/2025/07/TOA-Team-e1758107663494-1024x535.jpg`,
    excerpt: "Pro-bono civic work, education and climate-positive initiatives.",
    body: "",
    href: "/about/csr",
    discipline: "architecture" as const,
  },
  {
    caption: "Upcoming Projects",
    title: "What we're building next",
    image: `${UP}/2026/03/VIEW-1-650x650.png`,
    excerpt: "A pipeline of landmark workplaces, campuses and mixed-use developments.",
    body: "From next-generation data centres to civic-scale mixed-use quarters, our forthcoming portfolio pushes further into sustainable materials, adaptive reuse and technology-forward workplaces.",
    href: undefined as string | undefined,
    discipline: "architecture" as const,
  },
  {
    caption: "Sustainability",
    title: "Building for a climate-positive future",
    image: `${UP}/2026/03/VIEW-1-2-650x650.png`,
    excerpt: "IGBC, LEED and WELL-aligned practices woven into every project.",
    body: "Energy modelling, passive design and low-carbon materials are non-negotiables in our studio — helping clients meet ambitious ESG targets while creating healthier places to live and work.",
    href: undefined as string | undefined,
    discipline: "architecture" as const,
  },
  {
    caption: "Research & Thought Leadership",
    title: "Ideas that shape tomorrow's cities",
    image: `${UP}/2026/02/Featured-image-1.png`,
    excerpt: "White papers, keynotes and studios exploring the future of the built environment.",
    body: "Our research spans mission-critical infrastructure, mixed-use urbanism and AI-ready campuses — feeding directly back into project work and industry conversation.",
    href: undefined as string | undefined,
    discipline: "architecture" as const,
  },
  {
    caption: "Global Collaborations",
    title: "Partnering across borders",
    image: `${UP}/2026/03/786928477867589-copy-650x650.jpg`,
    excerpt: "Joint ventures with international consultants and specialist studios.",
    body: "We collaborate with engineering, landscape and specialist design partners across Asia, Europe and North America to bring world-class expertise to Indian and global projects.",
    href: undefined as string | undefined,
    discipline: "architecture" as const,
  },

  // ——————————————————————————— Interiors (7)
  {
    caption: "Clients",
    title: "Trusted by 200+ brands worldwide",
    image: `${UP}/2026/03/DSC07321-HDR-650x650.jpg`,
    excerpt: "Long-term partners across enterprise, government and hospitality.",
    body: "",
    href: "/about/clientele",
    discipline: "interiors" as const,
  },
  {
    caption: "University Collaboration",
    title: "Mentoring the next generation",
    image: `${UP}/2026/03/786928477867589-copy-650x650.jpg`,
    excerpt: "Studios, juries and research partnerships with leading schools of design.",
    body: "We invest in emerging voices through visiting critiques, live-project studios and thesis mentorship with institutions across India — bringing academia and practice into a continuous conversation.",
    href: undefined as string | undefined,
    discipline: "interiors" as const,
  },
  {
    caption: "AI in Interiors",
    title: "Designing with intelligent tools",
    image: `${UP}/2026/03/01.-Reception-Atomberg-AI-650x650.png`,
    excerpt: "Generative workflows augmenting — not replacing — the designer's craft.",
    body: "From massing exploration to daylight simulation and material search, we're integrating AI into our studio pipeline to accelerate iteration while keeping human judgement, context and craft at the centre.",
    href: undefined as string | undefined,
    discipline: "interiors" as const,
  },
  {
    caption: "Workplace Futures",
    title: "Reimagining how we work",
    image: `${UP}/2026/03/Infinix_Backlight_0_5_Strict-650x650.jpg`,
    excerpt: "Hybrid-ready workplaces engineered for focus, collaboration and wellbeing.",
    body: "Our workplace practice blends occupancy analytics, acoustic design and brand storytelling to shape offices that support how teams actually work today — and how they'll want to work tomorrow.",
    href: undefined as string | undefined,
    discipline: "interiors" as const,
  },
  {
    caption: "Hospitality",
    title: "Interiors with a sense of place",
    image: `${UP}/2025/08/040-650x650.jpg`,
    excerpt: "Restaurants, lounges and hospitality environments rooted in narrative.",
    body: "We design hospitality interiors that translate brand and context into atmosphere — considered materiality, lighting and detail that make each space unmistakably its own.",
    href: undefined as string | undefined,
    discipline: "interiors" as const,
  },
  {
    caption: "Wellness & Certifications",
    title: "Human-first, certified interiors",
    image: `${UP}/2026/05/DSC_8289-650x650.jpg`,
    excerpt: "WELL, IGBC and Fitwel principles built into every workplace we deliver.",
    body: "Air, light, movement and material health are core briefs — not add-ons — helping our clients hit certification targets while creating environments people genuinely want to be in.",
    href: undefined as string | undefined,
    discipline: "interiors" as const,
  },
  {
    caption: "Craft & Materiality",
    title: "A studio obsessed with detail",
    image: `${UP}/2026/03/R3A8108-newy-650x650.jpg`,
    excerpt: "Bespoke joinery, considered finishes and a deep bench of maker partnerships.",
    body: "From custom lighting to hand-finished stone and joinery, our interiors are built on long-standing relationships with India's finest fabricators — where every detail is drawn, prototyped and refined.",
    href: undefined as string | undefined,
    discipline: "interiors" as const,
  },
] as const;


export const careers = {
  overline: "Careers at TOA",
  title: "Build the next 25 years with us.",
  body: "We're a multidisciplinary studio of architects, interior designers and engineers building calmly, courageously, and together. Our Trainee Program brings emerging talent into live projects from day one.",
  cta: { label: "Explore the Trainee Program", href: "https://teamonearchitects.com/careers/" },
  video:
    "https://videos.pexels.com/video-files/3networking-professionals/pexels-fauxels-3252571.mp4",
  poster: `${UP}/2025/07/TOA-Team-e1758107663494-1024x535.jpg`,
  team: [
    `${UP}/2025/07/TOA-Team-e1758107663494-1024x535.jpg`,
    `${UP}/2026/03/DSC07321-HDR-650x650.jpg`,
    `${UP}/2026/03/R3A8108-newy-650x650.jpg`,
    `${UP}/2026/03/VIEW-1-650x650.png`,
  ],
};


export const stats = [
  { value: 25, suffix: "", label: "Years of Legacy", note: "25 years of delivering purposeful, high-impact design." },
  { value: 490, suffix: "+", label: "Projects", note: "Extensive experience across smart, green and urban infrastructure." },
  { value: 115, suffix: "+", label: "Employees", note: "A multidisciplinary team united by a shared design vision." },
  { value: 20, suffix: "%", label: "Year-on-Year Growth", note: "Strong, lasting client relationships built on trust and results." },
];

export const about = {
  intro:
    "As a leading architecture and urban design company founded in 2001, TOA brings together visionary thinking, deep technical expertise, and a commitment to creating purposeful spaces that endure. With headquarters in Mumbai, we've partnered with clients across the world to deliver sustainable architecture, cutting-edge office interior design, and award-winning commercial building design — blending aesthetics, functionality, and innovation at every step.",
  image: `${UP}/2025/07/TOA-Team-e1758107663494-1024x535.jpg`,
};

export const responsibilities = {
  quote: "Good design serves people. Great design uplifts them.",
  items: [
    {
      title: "Design with Purpose",
      body: "We design with a responsibility toward people, communities and the planet. Our projects reflect intentional thinking — not just visual appeal.",
    },
    {
      title: "Sustainability at the Core",
      body: "IGBC and wellness certifications are part of our design DNA. Energy efficiency and health-first planning guide every phase.",
    },
    {
      title: "Beyond the Drawing Board",
      body: "Monitoring emerging technologies and talent is key to our process, allowing us to provide future-ready solutions that create value, productivity and longevity.",
    },
  ],
};

export const projects = [
  { title: "APICORE", category: "Corporate Interiors", image: `${UP}/2026/03/DSC07321-HDR-650x650.jpg`, href: "https://teamonearchitects.com/portfolio-item/apicore/" },
  { title: "MMRDA Headquarters", category: "Commercial & Institutional", image: `${UP}/2026/03/R3A8108-newy-650x650.jpg`, href: "https://teamonearchitects.com/portfolio-item/mmrda-headquarters/" },
  { title: "JIO School", category: "Commercial & Institutional", image: `${UP}/2026/03/786928477867589-copy-650x650.jpg`, href: "https://teamonearchitects.com/portfolio-item/jio-school-jain-international-organization/" },
  { title: "Volkswagen", category: "Corporate Interiors", image: `${UP}/2025/08/040-650x650.jpg`, href: "https://teamonearchitects.com/portfolio-item/volkswagen/" },
  { title: "ATOMBERG", category: "Corporate Interiors", image: `${UP}/2026/03/01.-Reception-Atomberg-AI-650x650.png`, href: "https://teamonearchitects.com/portfolio-item/atomberg/" },
  { title: "Commercial Office Building", category: "Commercial & Institutional", image: `${UP}/2026/03/VIEW-1-650x650.png`, href: "https://teamonearchitects.com/portfolio-item/commercial-office-building/" },
  { title: "INFINX Office, Mumbai", category: "Corporate Interiors", image: `${UP}/2026/03/Infinix_Backlight_0_5_Strict-650x650.jpg`, href: "https://teamonearchitects.com/portfolio-item/infinx-mumbai-office/" },
  { title: "Recreation & Convention Complex", category: "Commercial & Institutional", image: `${UP}/2026/03/VIEW-1-2-650x650.png`, href: "https://teamonearchitects.com/portfolio-item/recreation-retail-convention-complex/" },
  { title: "Indira IVF", category: "Corporate Interiors", image: `${UP}/2026/05/DSC_8289-650x650.jpg`, href: "https://teamonearchitects.com/portfolio-item/indira-ivf/" },
];

export const testimonials = [
  {
    quote:
      "TOA took our input very carefully and worked on it very effectively. Very impressed with the designs, timely visits and professional attitude. My team and I are very pleased with the final look of our office premises.",
    name: "Rashmi Arya",
    role: "Head HR (India / Malaysia)",
    logo: "",
  },
  {
    quote: "An exceptional service matched with an excellent quality of work.",
    name: "Subrata Bhattacharya",
    role: "GM & MD, Johnson Controls India",
    logo: johnsonControlsLogo.url,
  },
  {
    quote:
      "TOA is full of positive energy and wonderful ideas! I would recommend Team One to anyone looking for an inspirational, thoughtful and concept-based interior design.",
    name: "Tan Kwang Liang",
    role: "Regional Head, Facilities & Real Estate, Singapore",
    logo: "",
  },
];

export const insights = [
  {
    title: "Balancing Science and Tradition: Integrating Vastu Principles in Large-Scale Commercial Design",
    image: `${UP}/2026/03/Blog-Cover-1.png`,
    href: "https://teamonearchitects.com/2026/03/24/balancing-science-and-tradition-integrating-vastu-principles-in-large-scale-commercial-design/",
  },
  {
    title: "Designing AI-Ready Corporate Campuses in the USA: Scalable Workplaces for the Next Enterprise Era",
    image: `${UP}/2026/03/Blog-Cover.png`,
    href: "https://teamonearchitects.com/2026/03/24/designing-ai-ready-corporate-campuses-in-the-usa-building-scalable-workplaces-for-the-next-enterprise-era/",
  },
  {
    title: "Mission-Critical Architecture in the U.S.: Designing for Resilience, Compliance and Long-Term Risk",
    image: `${UP}/2026/02/Featured-image-1.png`,
    href: "https://teamonearchitects.com/2026/02/11/mission-critical-architecture-in-the-u-s-how-large-corporations-are-designing-for-resilience-compliance-and-long-term-risk/",
  },
];
