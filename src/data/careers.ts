const JOBS = "https://teamonearchitects.com/jobs";

export type Job = {
  title: string;
  category: string;
  location: string;
  band: string;
  focus: string;
  slug: string;
};

export const careersPage = {
  eyebrow: "Careers",
  title: "Culture at TOA",
  quote: "We don’t just build ideas, we build each other.",
  pillars: [
    {
      title: "Design with Purpose",
      body: "We design with a responsibility toward people, communities and the planet. Our projects reflect intentional thinking, not just visual appeal.",
    },
    {
      title: "Sustainability at the Core",
      body: "IGBC and wellness certifications are part of our design DNA. Energy efficiency and health-first planning guide every phase.",
    },
    {
      title: "Beyond the Drawing Board",
      body: "Mentoring emerging talent is key to our ecosystem. We promote inclusive hiring and design-led outreach.",
    },
  ],
  invite:
    "We’re always on the lookout for curious designers, visionary project curators and creative thinkers who see the world differently. Even if you don’t see a role that fits right now, we’d love to hear from you.",
  email: "hr1@toa.org.in",
};

export const jobs: Job[] = [
  {
    title: "Project Head",
    category: "Projects",
    location: "Mumbai",
    band: "Leadership (12–18 yrs)",
    focus: "Multi-project delivery, governance, vendor engagement",
    slug: "project-head",
  },
  {
    title: "Procurement Head",
    category: "Purchase",
    location: "Mumbai",
    band: "Leadership (10–15 yrs)",
    focus: "Procurement strategy, vendor ecosystem, cost control",
    slug: "procurement-head",
  },
  {
    title: "Site Engineer",
    category: "Projects",
    location: "Mumbai",
    band: "Entry–Mid (1–4 yrs)",
    focus: "Daily site supervision, measurement, QC",
    slug: "site-engineer",
  },
  {
    title: "Quantity Surveyor",
    category: "Projects",
    location: "Multiple",
    band: "Mid–Senior (3–8 yrs)",
    focus: "BOQ, tendering, billing, VE, MIS",
    slug: "quantity-surveyor",
  },
  {
    title: "3D Visualiser / Graphic",
    category: "Design",
    location: "Mumbai",
    band: "Mid (2–5 yrs)",
    focus: "3D renders, walkthroughs, pitch visuals",
    slug: "3d-visualiser-graphic",
  },
  {
    title: "Design Head",
    category: "Design",
    location: "Multiple",
    band: "Leadership (10–15 yrs)",
    focus: "Creative direction, pitch support, VE, mentoring",
    slug: "design-head",
  },
  {
    title: "Sr. Project Manager",
    category: "Projects",
    location: "Pune",
    band: "Leadership (8–12 yrs)",
    focus: "Multi-site delivery, PM cluster management, reporting",
    slug: "sr-project-manager",
  },
  {
    title: "Sr. Business Development",
    category: "Sales",
    location: "Mumbai",
    band: "Senior (6–10 yrs)",
    focus: "BD strategy, pipeline, RFPs, closures",
    slug: "sr-business-development",
  },
  {
    title: "Junior Business Development",
    category: "Sales",
    location: "Mumbai",
    band: "Mid (1–4 yrs)",
    focus: "Market mapping, pre-sales, MIS",
    slug: "junior-business-development",
  },
  {
    title: "PR / Brand Communications",
    category: "Sales",
    location: "Mumbai",
    band: "Mid–Senior (3–7 yrs)",
    focus: "PR, social, narratives, reporting",
    slug: "pr-brand-communications",
  },
];

export const jobUrl = (slug: string) => `${JOBS}/${slug}/`;
