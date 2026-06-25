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
  { slug: "icici", title: "ICICI Securities", category: INTERIORS, image: `${UP}/2025/07/ICICI.png` },
  { slug: "lincoln-international-bkc-mumbai", title: "Lincoln International, BKC Mumbai", category: INTERIORS, location: "Mumbai", image: `${UP}/2025/08/H2A6507.jpg` },
  { slug: "volkswagen", title: "Volkswagen", category: INTERIORS, image: `${UP}/2025/08/040-1024x683.jpg` },
  { slug: "titan", title: "TITAN", category: INTERIORS, image: `${UP}/2026/03/titan-1-1024x690.jpg` },
  { slug: "ergo-technologies", title: "Ergo Technologies", category: INTERIORS, image: `${UP}/2025/08/X3A9650-HDR-Edit.jpg` },
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
];

// Full case-study detail. Only the reference project (Atomberg) is built out
// for now; other slugs render a graceful "coming soon" state.
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
};

export const categories: ProjectCategory[] = [COMMERCIAL, INTERIORS];
