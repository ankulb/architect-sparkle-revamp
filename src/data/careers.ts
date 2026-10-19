const JOBS = "https://teamonearchitects.com/jobs";

export type Job = {
  title: string;
  category: string;
  location: string;
  openings?: number;
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

// Open positions as of the first week of October 2026 (client-supplied sheet).
export const jobs: Job[] = [
  { title: "Design Lead", category: "Design", location: "Mumbai", openings: 1 },
  { title: "Purchase Head", category: "Purchase", location: "Mumbai", openings: 1 },
  { title: "Purchase Manager", category: "Purchase", location: "Mumbai", openings: 1 },
  { title: "B.D. Head", category: "Business Development", location: "Mumbai", openings: 1 },
  { title: "Jr. Architect", category: "Architecture", location: "Mumbai", openings: 1 },
  { title: "Sr. Architect", category: "Architecture", location: "Mumbai", openings: 1 },
  { title: "Liaison Architect", category: "Architecture", location: "Mumbai", openings: 1 },
  { title: "Project Head", category: "Projects", location: "Mumbai", openings: 1 },
  { title: "Project Manager", category: "Projects", location: "Mumbai", openings: 2 },
  { title: "Site Supervisor / Engineer", category: "Projects", location: "Mumbai", openings: 4 },
  { title: "Quantity Estimator", category: "Projects", location: "Mumbai", openings: 1 },
  { title: "Civil Engineer", category: "Engineering", location: "Mumbai", openings: 1 },
  { title: "MEP Engineer", category: "Engineering", location: "Mumbai", openings: 1 },
  { title: "Interns (Mechanical, Electrical, Plumbing)", category: "Engineering", location: "Mumbai" },
  { title: "Design Head", category: "Design", location: "Pune", openings: 1 },
  { title: "Mid-Level Interior Designer", category: "Design", location: "Pune", openings: 1 },
  { title: "Jr. Interior Designer", category: "Design", location: "Pune", openings: 1 },
  { title: "Project Manager", category: "Projects", location: "Pune", openings: 2 },
  { title: "Site Engineer", category: "Projects", location: "Pune", openings: 2 },
  { title: "Safety Engineer", category: "Projects", location: "Pune", openings: 1 },
  { title: "Sr. 3D Visualiser", category: "Design", location: "Pune", openings: 1 },
  { title: "Graphic Designer", category: "Design", location: "Pune", openings: 1 },
  { title: "Quality Control Engineer", category: "Engineering", location: "Pune", openings: 1 },
  { title: "Quantity Estimator", category: "Projects", location: "Pune", openings: 1 },
  { title: "Jr. Business Development", category: "Business Development", location: "Pune", openings: 1 },
  { title: "Regional Head, Business Development", category: "Business Development", location: "Bengaluru", openings: 1 },
  { title: "Business Development Manager", category: "Business Development", location: "Bengaluru", openings: 1 },
  { title: "SPOC / MEP", category: "Engineering", location: "Hyderabad", openings: 1 },
  { title: "Electrical Supervisor", category: "Engineering", location: "Hyderabad", openings: 1 },
  { title: "HVAC", category: "Engineering", location: "Hyderabad", openings: 1 },
  { title: "QA / QC", category: "Engineering", location: "Hyderabad", openings: 1 },
  { title: "Quantity Surveyor", category: "Projects", location: "Hyderabad", openings: 1 },
  { title: "Project Coordinator", category: "Projects", location: "Hyderabad", openings: 1 },
];

export const applyUrl = (email: string, j: Job) =>
  `mailto:${email}?subject=${encodeURIComponent(`Application: ${j.title} (${j.location})`)}`;
