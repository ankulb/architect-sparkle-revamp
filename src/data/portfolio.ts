import {
  axisSecuritiesGallery,
  ergoTechnologiesGallery,
  federalBankGallery,
  iciciSecuritiesGallery,
} from "@/data/projectAssets";

// Portfolio content sourced from teamonearchitects.com/portfolio.
const UP = "https://teamonearchitects.com/wp-content/uploads";

export const COMMERCIAL = "Commercial & Institutional Architecture";
export const INTERIORS = "Corporate Interiors";

export type ProjectCategory = typeof COMMERCIAL | typeof INTERIORS;

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location?: string;
  image: string;
};

export type ProjectDetail = Project & {
  sector?: string;
  area?: string;
  status?: string;
  client?: string;
  year?: string;
  service?: string;
  description: string[];
  gallery: string[];
};

// Full archive (projects loaded from the live portfolio grid).
export const projects: Project[] = [
  { slug: "atomberg", title: "ATOMBERG", category: INTERIORS, location: "Pune", image: `${UP}/2026/03/01.-Reception-Atomberg-AI-1024x683.png` },
  { slug: "ccrh", title: "CCRH", category: COMMERCIAL, image: `${UP}/2026/03/02-2-1024x687.png` },
  { slug: "apicore", title: "APICORE", category: INTERIORS, image: `${UP}/2026/03/DSC07321-HDR-1024x683.jpg` },
  { slug: "hindustan-platinum-mumbai", title: "HPL, Mumbai", category: INTERIORS, location: "Mumbai", image: `${UP}/2025/08/DSC08801-copy.jpg` },
  { slug: "ideaforge", title: "IDEAFORGE", category: INTERIORS, image: `${UP}/2026/03/DSC03610-HDR-1024x683.jpg` },
  { slug: "axis-securities", title: "Axis Securities", category: INTERIORS, image: axisSecuritiesGallery[0] },
  { slug: "federal-bank", title: "Federal Bank", category: INTERIORS, image: federalBankGallery[0] },
  { slug: "icici", title: "ICICI Securities", category: INTERIORS, location: "Mumbai", image: iciciSecuritiesGallery[0] },
  { slug: "lincoln-international-bkc-mumbai", title: "Lincoln International, BKC Mumbai", category: INTERIORS, location: "Mumbai", image: `${UP}/2025/08/H2A6507.jpg` },
  { slug: "volkswagen", title: "Volkswagen", category: INTERIORS, image: `${UP}/2025/08/040-1024x683.jpg` },
  { slug: "titan", title: "TITAN", category: INTERIORS, image: `${UP}/2026/03/titan-1-1024x690.jpg` },
  { slug: "ergo-technologies", title: "ERGO Technologies", category: INTERIORS, location: "Powai, Mumbai", image: ergoTechnologiesGallery[0] },
  { slug: "basf", title: "BASF", category: INTERIORS, image: `${UP}/2025/08/YKP_1806-NEW.jpg` },
  { slug: "johnson-controls-gcc-offices", title: "Johnson Controls — GCC Offices", category: INTERIORS, image: `${UP}/2025/08/ad2c6b9e-662a-4bb2-b913-063d1304a2a0.jpg` },
  { slug: "ideaforge-headquarters-mumbai", title: "IdeaForge Headquarters, Mumbai", category: INTERIORS, location: "Mumbai", image: `${UP}/2025/08/DSC03610-HDR.jpg` },
  { slug: "intangles", title: "INTANGLES", category: INTERIORS, image: `${UP}/2026/03/4-1-1024x682.jpg` },
  { slug: "indira-ivf", title: "Indira IVF", category: INTERIORS, image: `${UP}/2026/05/DSC_8289-1024x681.jpg` },
  { slug: "infinx-mumbai-office", title: "INFINX Office, Mumbai", category: INTERIORS, location: "Mumbai", image: `${UP}/2026/03/Infinix_Backlight_0_5_Strict-1024x683.jpg` },
  { slug: "recreation-retail-convention-complex", title: "Recreation, Retail & Convention Complex", category: COMMERCIAL, image: `${UP}/2026/03/VIEW-1-2-1024x683.png` },
  { slug: "recreational-block", title: "Recreational Block", category: COMMERCIAL, image: `${UP}/2026/03/view-1-1-1024x683.jpg` },
  { slug: "mmrda-headquarters", title: "MMRDA Headquarters", category: COMMERCIAL, image: `${UP}/2026/03/R3A8108-newy-1024x683.jpg` },
  { slug: "mixed-use-villas-high-rise-at-khalapur", title: "Mixed-Use Villas & High-Rise at Khalapur", category: COMMERCIAL, location: "Khalapur", image: `${UP}/2026/03/VIEW-1-1-1024x683.png` },
  { slug: "jio-school", title: "JIO School", category: COMMERCIAL, image: `${UP}/2026/03/786928477867589-copy-650x650.jpg` },
  { slug: "commercial-office-building", title: "Commercial Office Building", category: COMMERCIAL, image: `${UP}/2026/03/VIEW-1-650x650.png` },
  { slug: "xpo", title: "XPO", category: INTERIORS, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" },
];

export const projectDetails: Record<string, ProjectDetail> = {
  atomberg: {
    slug: "atomberg",
    title: "ATOMBERG",
    category: INTERIORS,
    sector: "Consumer Electronics",
    area: "1,15,000 sq. ft.",
    status: "Completed",
    client: "ATOMBERG",
    location: "Pune",
    year: "2021",
    service: "Corporate Interiors",
    image: `${UP}/2026/03/03.-Reception-Atomberg-AI.png`,
    description: [
      "Atomberg's Pune office embodies a refined balance of industrial precision and human-centric design. With exposed ceilings, clean lines, and a neutral palette, the space reflects the brand's engineering DNA.",
      "Biophilic elements, vibrant textures, and collaborative zones bring warmth and flexibility to the workplace. From a bold, welcoming reception to open workstations and dynamic breakout areas, every space is designed for efficiency and interaction.",
      "Glass partitions ensure transparency while maintaining functionality. Infused with natural light and thoughtful detailing, the office creates an environment that is modern, agile, and inspiring — perfectly aligning with Atomberg's vision of innovation, performance, and forward-thinking design.",
    ],
    gallery: [
      `${UP}/2026/03/03.-Reception-Atomberg-AI.png`,
      `${UP}/2026/03/02.-Reception-Atomberg-AI.png`,
      `${UP}/2026/03/01.-Reception-Atomberg-AI.png`,
      `${UP}/2026/03/04.-WS-BO-Atomberg-AI.png`,
      `${UP}/2026/03/05.-BO-Atomberg-AI.png`,
      `${UP}/2026/03/06.-BO-Amphi-Atomberg-AI.png`,
    ],
  },
  "axis-securities": {
    slug: "axis-securities",
    title: "Axis Securities",
    category: INTERIORS,
    sector: "Banking & Finance",
    status: "Completed",
    client: "Axis Securities",
    service: "Interior Architecture",
    image: axisSecuritiesGallery[0],
    description: [
      "Axis Securities' workplace pairs the precision expected of a financial institution with a more expressive, people-centred character. A crisp reception establishes trust through controlled geometry, integrated lighting and the restrained use of the brand palette.",
      "Beyond the formal arrival, enclosed meeting rooms and focused work settings are balanced by a colourful collaborative lounge. Art, planting and acoustic surfaces soften the workplace while preserving clear circulation and visual order.",
      "The result is an environment that feels credible and composed without becoming conventional — a contemporary setting for focused work, conversation and connection.",
    ],
    gallery: axisSecuritiesGallery,
  },
  "federal-bank": {
    slug: "federal-bank",
    title: "Federal Bank",
    category: INTERIORS,
    sector: "Banking & Finance",
    status: "Completed",
    client: "Federal Bank",
    service: "Interior Architecture",
    image: federalBankGallery[0],
    description: [
      "Federal Bank's office translates its identity into a compact, efficient workplace. Blue and gold accents move through the space as wayfinding devices, graphic details and moments of emphasis, creating a recognisable experience without overwhelming the architecture.",
      "Glazed partitions preserve openness and daylight while giving meeting rooms the privacy required for focused conversations. Timber screens and ceiling elements introduce warmth and rhythm across the predominantly cool material palette.",
      "Every zone is resolved for clarity and utility, from the reception and workstations to meeting rooms and informal touchdown settings, creating a workplace that is professional, agile and distinctly branded.",
    ],
    gallery: federalBankGallery,
  },
  icici: {
    slug: "icici",
    title: "ICICI Securities",
    category: INTERIORS,
    sector: "Banking & Finance",
    area: "1,37,632 sq. ft.",
    status: "Completed",
    client: "ICICI Securities",
    location: "Mumbai",
    year: "2023",
    service: "Design & Project Management Execution",
    image: iciciSecuritiesGallery[0],
    description: [
      "ICICI Securities' 1,37,632 sq. ft. Mumbai workplace was conceived as a high-performance office with a strong sense of identity. The planning brings together large open work neighbourhoods, transparent meeting suites and social settings within a coherent spatial framework.",
      "Warm timber, planting and vivid colour temper the workplace's industrial detailing. A gold bull sculpture creates a memorable threshold, while collaborative lounges and tiered seating turn circulation into places for exchange, learning and informal gathering.",
      "Delivered through an integrated design and project-management mandate, the completed office balances operational scale with human comfort — giving a financial workplace energy, clarity and a contemporary civic character.",
    ],
    gallery: iciciSecuritiesGallery,
  },
  "ergo-technologies": {
    slug: "ergo-technologies",
    title: "ERGO Technologies",
    category: INTERIORS,
    sector: "Technology",
    area: "1,00,000 sq. ft.",
    status: "Completed",
    client: "ERGO Technologies",
    location: "Powai, Mumbai",
    year: "August 2025",
    service: "Interior Architecture",
    image: ergoTechnologiesGallery[0],
    description: [
      "ERGO Technologies' 1 lakh sq. ft. Powai workplace is a LEED-certified environment shaped around a young, agile workforce. The design moves beyond a conventional office model, using varied settings to support focus, collaboration, restoration and play throughout the day.",
      "Open work neighbourhoods are punctuated by meeting rooms, café settings, breakout lounges, a library and energetic recreation zones. Exposed services, acoustic ceilings, planting and bold graphics create a visual language that is candid, colourful and closely connected to ERGO's culture.",
      "Flexible zoning allows teams to shift naturally between individual and collective modes of work. Completed in August 2025, the workplace combines sustainability, wellbeing and brand expression in an environment designed to evolve with its people.",
    ],
    gallery: ergoTechnologiesGallery,
  },
};

export const categories: ProjectCategory[] = [COMMERCIAL, INTERIORS];
