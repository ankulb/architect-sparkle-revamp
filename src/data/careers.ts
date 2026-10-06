const JOBS = "https://teamonearchitects.com/jobs";

export type Job = { title: string; category: string; location: string; slug: string };

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
  { title: "Project Head", category: "Projects", location: "Mumbai", slug: "project-head" },
  { title: "Procurement Head", category: "Purchase", location: "Mumbai", slug: "procurement-head" },
  { title: "Site Engineer", category: "Projects", location: "Mumbai", slug: "site-engineer" },
  { title: "Quantity Surveyor", category: "Projects", location: "Multiple", slug: "quantity-surveyor" },
  { title: "3D Visualiser / Graphic Designer", category: "Design", location: "Mumbai", slug: "3d-visualiser-graphic" },
  { title: "Design Head", category: "Design", location: "Multiple", slug: "design-head" },
  { title: "Senior Project Manager", category: "Projects", location: "Pune", slug: "sr-project-manager" },
  { title: "Senior Business Development", category: "Sales", location: "Mumbai", slug: "sr-business-development" },
  { title: "Junior Business Development", category: "Sales", location: "Mumbai", slug: "junior-business-development" },
  { title: "PR / Brand Communications", category: "Sales", location: "Mumbai", slug: "pr-brand-communications" },
  { title: "Purchase Head", category: "Purchase", location: "Mumbai", slug: "purchase-head" },
  { title: "Project Manager", category: "Projects", location: "Mumbai", slug: "project-manager" },
  { title: "Interior Designer (Mid-level)", category: "Design", location: "Mumbai", slug: "interior-designer-mid-level" },
  { title: "Site Supervisor", category: "Projects", location: "Multiple", slug: "site-supervisor" },
  { title: "Junior Quantity Surveyor", category: "Projects", location: "Mumbai", slug: "junior-quantity-surveyor" },
  { title: "Graphic Designer", category: "Design", location: "Mumbai", slug: "graphic-designer" },
  { title: "HR Manager", category: "HR", location: "Mumbai", slug: "hr-manager" },
];

export const jobUrl = (slug: string) => `${JOBS}/${slug}/`;
