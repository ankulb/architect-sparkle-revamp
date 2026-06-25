// Content sourced from the About section of teamonearchitects.com.

const UP = "https://teamonearchitects.com/wp-content/uploads";

// In-section navigation used by the header dropdown and footer.
export const aboutNav = [
  { label: "About Us", to: "/about" },
  { label: "Board of Directors", to: "/about/board" },
  { label: "Our Team", to: "/about/team" },
  { label: "Clientele", to: "/about/clientele" },
  { label: "CSR", to: "/about/csr" },
  { label: "Life at TOA", to: "/about/life" },
] as const;

/* ----------------------------- About Us ----------------------------- */

export const aboutUs = {
  hero: {
    eyebrow: "Decades of Design. Driven by Vision",
    title: "Creating spaces that matter",
    lead: "A Mumbai-born practice with a 25-year legacy — shaping impactful spaces through innovation, excellence and purpose.",
    image: `${UP}/2025/07/TOA-Team-e1758107663494-1024x535.jpg`,
    phrases: [
      "Twenty-five years of design.",
      "Fortune 500 partnerships.",
      "Landmarks across the GCC.",
      "Built on sustainability and wellness.",
    ],
  },
  intro:
    "Team One Architects (TOA) is a leading architecture and design firm based in Mumbai with a legacy of over 25 years, shaping impactful spaces through innovation, excellence, and purpose. Founded by Bharat Yamsanawar and Parish Kapse, and later joined by Aditya Yamsanawar, TOA has evolved into a multidisciplinary practice partnering with Fortune 500 companies and leading institutions. With a growing international presence, including landmark projects in the GCC, our work reflects a strong commitment to sustainability and wellness — with numerous IGBC and globally certified developments to our name. We work closely with our clients, listening deeply to their goals and communities to co-create spaces that celebrate identity and inspire well-being.",
  visionMission: [
    {
      kicker: "Our Vision",
      body: "To be an enabler of highly functional and adaptable space, guided by principles of sustainability and empowered through artificial intelligence, data analytics and design thinking.",
    },
    {
      kicker: "Our Mission",
      body: "“Creating spaces that matter.” We design spaces that combine architectural depth with user-centric thinking, balancing beauty with purpose and sustainability with scale.",
    },
  ],
  impact: [
    { value: 200, suffix: "+", label: "Repeat Clients", note: "Across Tech, Finance, Healthcare and Media." },
    { value: 30, suffix: "+", label: "Design Awards", note: "For Innovation, Sustainability and Wellness." },
    { value: 18, suffix: "%", label: "Increase in Productivity", note: "Reported in post-occupancy evaluation." },
    { value: 22, suffix: "%", label: "Drop in Attrition", note: "Through improved workplace engagement." },
  ],
  values: [
    {
      title: "Design First",
      body: "Crafting iconic structures and spaces with designer precision, where every detail reflects timeless luxury.",
    },
    {
      title: "Experiential Architecture",
      body: "Shaping spaces and zones that are highly UI/UX adaptive, delivering seamless functionality with immersive experiences.",
    },
    {
      title: "Innovation Beyond AI",
      body: "Pushing the boundaries of creativity to deliver groundbreaking architectural marvels that redefine the future.",
    },
    {
      title: "Collaboration Excellence",
      body: "Partnering with best-in-class specialists, consultants and service providers to integrate the latest technologies for our clients.",
    },
  ],
};

/* -------------------------- Board of Directors -------------------------- */

export const board = {
  hero: {
    eyebrow: "Leadership",
    title: "Board of Directors",
    lead: "The future isn't imagined alone. It's built together — brick by brick, mind by mind.",
    image: `${UP}/2021/11/WhatsApp-Image-2025-10-30-at-2.48.45-PM-3.jpeg`,
  },
  people: [
    { name: "Ar. Parish S. Kapse", role: "Director", image: `${UP}/2025/08/Parish-Kapse.jpeg` },
    { name: "Ar. Aditya B. Yamsanwar", role: "Director", image: `${UP}/2025/08/Aditya-Yamsanwar.jpeg` },
    { name: "Ar. Bharat Yamsanwar", role: "Director", image: `${UP}/2025/08/Bharat-Yamsanwar.jpeg` },
    { name: "Jyoti Yamsanwar", role: "Director", image: `${UP}/2025/08/Jyoti-Yamsanwar.jpeg` },
    { name: "Rupali Kapse", role: "Director", image: `${UP}/2025/08/Jyoti-Kapse.jpeg` },
  ],
};

/* ------------------------------ Our Team ------------------------------ */

export const team = {
  hero: {
    eyebrow: "Our People",
    title: "The people behind the practice",
    lead: "The future isn't imagined alone. It's built together — brick by brick, mind by mind.",
    image: `${UP}/2025/07/TOA-Team-e1758107663494-1024x535.jpg`,
  },
  core: [
    { name: "Laxmikant Sawant", role: "COO", image: `${UP}/2021/10/laxmikant-sawant-1.png` },
    { name: "Suraj Lazar", role: "Associate Director", image: `${UP}/2021/10/Suraj-Lazar-1.png` },
    { name: "Varsha Changedia", role: "Associate Director", image: `${UP}/2021/10/Varsha-Changedia-1.png` },
  ],
  emerging: [
    { name: "Tasheen Issani", role: "Chief Business Development Officer", image: `${UP}/2020/06/Tasheen-Issani.png` },
    { name: "Mahesh Dhanawade", role: "General Manager", image: `${UP}/2020/10/Mahesh-Dhanawade.png` },
    { name: "Abhijit Sutar", role: "Operations Head", image: `${UP}/2024/07/Abhijit-Sutar.png` },
    { name: "Archiit Chatterjee", role: "Associate Architect", image: `${UP}/2025/07/Archiit-Chatterjee.png` },
    { name: "Hiral Parekh", role: "Design Lead", image: `${UP}/2025/10/WhatsApp-Image-2025-10-30-at-2.48.45-PM-2.jpeg` },
    { name: "Hiral Chouhan", role: "Design Lead", image: `${UP}/2025/10/WhatsApp-Image-2025-10-30-at-2.48.45-PM-1.jpeg` },
    { name: "Alpesh Parab", role: "Sr. Associate Designer", image: `${UP}/2025/10/WhatsApp-Image-2025-10-30-at-2.48.46-PM.jpeg` },
  ],
};

/* ----------------------------- Clientele ----------------------------- */

export const clientele = {
  hero: {
    eyebrow: "Partnerships",
    title: "Trusted by the best. Chosen for vision.",
    lead: "From engineering giants to global software leaders — the organisations who build the future build it with us.",
    image: `${UP}/2026/03/DSC07321-HDR-650x650.jpg`,
  },
  groups: [
    {
      sector: "Engineering",
      logos: [
        `${UP}/2025/07/1-3.jpg_1.jpeg`,
        `${UP}/2025/07/4-3.jpg.jpeg`,
        `${UP}/2025/07/3-3.jpg.jpeg`,
        `${UP}/2025/07/6-3.jpg.jpeg`,
      ],
    },
    {
      sector: "IT & Software",
      logos: [
        `${UP}/2025/07/1-3.jpg_1.jpeg`,
        `${UP}/2025/07/4-3.jpg.jpeg`,
        `${UP}/2025/07/3-3.jpg.jpeg`,
        `${UP}/2025/07/6-3.jpg.jpeg`,
      ],
    },
  ],
};

/* -------------------------------- CSR -------------------------------- */

export const csr = {
  hero: {
    eyebrow: "Corporate Social Responsibility",
    title: "Our commitment to social impact",
    lead: "We believe design can create meaningful social change — in education, community development and infrastructure.",
    image: `${UP}/2026/03/csr.png`,
  },
  objective: {
    kicker: "Our CSR Objective",
    body: "Team One Architects (TOA) is committed to contributing to society through meaningful Corporate Social Responsibility initiatives that support education, inclusive development, and community infrastructure. Our objective is to empower institutions that create opportunities for underserved communities by improving learning environments and enabling long-term social impact. Through sustained partnerships, TOA aims to help build stronger and more equitable foundations for future generations.",
  },
  images: [`${UP}/2026/03/csr.png`, `${UP}/2026/03/csr-1-650x540.png`],
  partners: [
    {
      name: "Jivan Jyot Foundation",
      body: "Enabling better living conditions for underserved communities by promoting education, healthcare and livelihood opportunities.",
      href: "https://www.jivanjyout.in/",
    },
    {
      name: "The XL Target",
      body: "Supporting the development of sporting talent through access to quality training infrastructure and mentorship in competitive shooting.",
      href: "https://xltsa.com/",
    },
    {
      name: "Dharti Foundation",
      body: "Uplifting children from farmer families — with a special emphasis on girls — through education and pathways to employment.",
      href: "https://dhartifoundation.com/",
    },
    {
      name: "Sant Gadge Maharaj Charitable Trust",
      body: "Extending support to underprivileged cancer patients and their families with shelter, nutrition, medical support and dignified care.",
      href: "",
    },
    {
      name: "Give Welfare Organization",
      body: "Supporting innovative, inclusive learning environments that empower children in underserved communities.",
      href: "",
    },
    {
      name: "Vijay Shikshan Sanstha",
      body: "Empowering hearing-impaired individuals through education, rehabilitation and skill-building for independent, dignified living.",
      href: "https://vssanstha.org.in/",
    },
    {
      name: "Lift for Upliftment",
      body: "Expanding access to quality medical education for aspiring students from underprivileged and tribal communities.",
      href: "https://www.lfupune.in/",
    },
    {
      name: "Yuva Unstoppable",
      body: "Strengthening school infrastructure and enabling modern learning ecosystems for underprivileged children and youth.",
      href: "https://yuvaunstoppable.org/",
    },
    {
      name: "Manilal Gandhi Charitable Trust",
      body: "Supporting social welfare focused on community development, education and access to essential resources.",
      href: "",
    },
    {
      name: "Deepstambh Foundation",
      body: "Inclusive, quality education for underprivileged students, including persons with disabilities and economically weaker sections.",
      href: "https://deepstambh.org/",
    },
  ],
};

/* ------------------------------ Life at TOA ------------------------------ */

export const life = {
  hero: {
    eyebrow: "Life at TOA",
    title: "Where spaces are built. And so are people.",
    lead: "We don't just create workplaces — we build a team that owns, builds and evolves with every project.",
    image: `${UP}/2026/04/TOA-Family-Day-2025-copy-1.jpg`,
    phrases: [
      "Where spaces are built. And so are people.",
      "A team that owns, builds, and evolves.",
      "Where speed meets structure.",
      "A place to grow, not just work.",
    ],
  },
  intro:
    "At Team One Architects (TOA), we don't just create workplaces — we build environments that shape how businesses perform, collaborate and grow. But behind every space we deliver is something even more important: a team that owns, builds and evolves with every project.",
  blocks: [
    {
      title: "A Culture of Builders",
      image: `${UP}/2026/04/TOA-Family-Day-2025-copy-1.jpg`,
      body: "TOA is not a conventional workplace. It is a high-energy, execution-driven ecosystem where ideas move quickly and outcomes matter. Every individual here is a builder — whether designing a concept, executing a site, closing a deal or enabling operations. There is a shared understanding across teams: we don't just contribute, we take ownership.",
    },
    {
      title: "Where Learning is Real, Not Theoretical",
      body: "Growth at TOA doesn't come from static training modules. It comes from real projects, real timelines and real challenges — from large-scale corporate fit-outs to complex site executions.",
      bullets: [
        "You don't wait for exposure, you earn it",
        "You don't shadow work, you lead parts of it",
        "You don't follow processes blindly, you improve them",
      ],
    },
    {
      title: "Collaboration Without Boundaries",
      body: "At TOA, silos don't define how we work — collaboration does. Designers, project teams, business development, procurement and support functions operate as one integrated unit focused on delivery.",
      bullets: ["Conversations are direct", "Decisions are fast", "Teams move together"],
    },
    {
      title: "Driven by Scale, Built on Precision",
      body: "Our work spans industries from corporate offices to infrastructure and institutional spaces. This is where speed meets structure, and execution meets detail.",
      bullets: [
        "Scale that challenges you",
        "Complexity that sharpens you",
        "Responsibility that grows you",
      ],
    },
    {
      title: "Moments That Define Us",
      body: "While we take pride in what we build, we also value how we build it together. Because beyond projects, we build experiences and memories as a team.",
      bullets: [
        "Celebrating milestones like our 25-year journey in Thailand",
        "Coming together for initiatives like International Yoga Day",
        "Continuous training and upskilling sessions across teams",
        "Recognising wins — both individual and collective",
      ],
    },
    {
      title: "A Place to Grow, Not Just Work",
      body: "At TOA, growth is not linear — it's accelerated. We believe growth happens when you are trusted before you feel ready.",
      bullets: [
        "Early ownership of critical responsibilities",
        "Continuous feedback and a performance-driven culture",
        "Opportunities to step into leadership through real business exposure",
      ],
    },
  ],
  mindset: {
    title: "The TOA Mindset",
    items: ["Ownership over tasks", "Execution over intent", "Learning over comfort", "Team over individual silos"],
  },
  why: {
    title: "Why TOA",
    body: "Because this is not just a place where you work. This is where you build your career, your capability and your impact.",
  },
};
