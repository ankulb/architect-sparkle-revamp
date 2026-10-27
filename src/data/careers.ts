const JOBS = "https://teamonearchitects.com/jobs";

export type Job = {
  title: string;
  category: string;
  location: string;
  openings?: number;
  experience?: string;
  brief?: string;
  responsibilities?: string[];
  requirements?: string[];
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

// Open positions as of 27 October 2026 (client-supplied JDs). Order matches the client's list.
export const jobs: Job[] = [
  { title: "Operations Head", category: "Operations", location: "Mumbai" },
  {
    title: "Senior Procurement Executive", category: "Procurement", location: "Mumbai", experience: "5–8 years",
    brief: "We are looking for an experienced Senior Procurement Executive responsible for managing procurement activities for corporate interior and workplace design projects. The role involves sourcing materials, managing vendor relationships and ensuring timely availability of project materials while optimizing cost and maintaining quality standards.",
    responsibilities: [
      "Manage procurement of materials, finishes, furniture and equipment for interior fit-out projects.",
      "Identify, evaluate and onboard vendors and suppliers for project requirements.",
      "Negotiate pricing, contracts and commercial terms with vendors.",
      "Ensure timely procurement and delivery of materials to project sites.",
      "Coordinate closely with design and project teams to understand material specifications.",
      "Track procurement schedules to align with project timelines.",
      "Monitor material quality and vendor performance.",
      "Maintain procurement documentation including purchase orders, contracts and vendor records.",
      "Ensure cost optimization while maintaining quality standards.",
      "Manage vendor relationships and develop a reliable supplier network.",
      "Resolve procurement-related issues including delays, quality concerns or supply challenges.",
      "Prepare procurement reports and cost analysis for management review.",
    ],
    requirements: [
      "5–8 years of relevant experience in procurement for interior fit-out or construction projects.",
      "Strong negotiation and vendor management skills.",
      "Understanding of materials used in corporate interior projects.",
      "Ability to manage procurement timelines aligned with project schedules.",
      "Strong analytical and cost control capability.",
      "Excellent communication and coordination skills.",
      "Bachelor’s degree in Engineering, Interior Design, Supply Chain Management or related field.",
      "Knowledge of ERP systems or procurement management tools will be an added advantage.",
    ],
  },
  {
    title: "VP – Business Development", category: "Business Development", location: "Mumbai", experience: "15–20 years",
    brief: "We are looking for an experienced VP – Business Development responsible for driving business growth by identifying new opportunities, building client relationships and securing corporate interior and workplace design projects.",
    responsibilities: [
      "Identify and develop new business opportunities in corporate interiors, workplace design and turnkey projects.",
      "Build strong relationships with corporate clients, developers, consultants and industry stakeholders.",
      "Generate leads through networking, industry events, referrals and market research.",
      "Conduct client meetings and presentations to understand project requirements.",
      "Coordinate with design, estimation and project teams during proposal preparation.",
      "Prepare proposals, presentations and commercial discussions with potential clients.",
      "Track sales pipeline and maintain CRM records of client interactions.",
      "Achieve revenue targets and contribute to company growth objectives.",
      "Monitor market trends, competitor activity and emerging opportunities.",
      "Collaborate with marketing teams for brand visibility and lead generation initiatives.",
      "Negotiate project terms and support closure of business deals.",
      "Represent the company in industry forums, networking platforms and client engagements.",
      "AI awareness for business development, market research, lead generation, and data-driven decision-making.",
    ],
    requirements: [
      "15–20 years of relevant experience in business development within corporate interiors, construction or real estate sectors.",
      "Strong client relationship management and networking skills.",
      "Ability to generate and convert business opportunities.",
      "Excellent communication, negotiation and presentation skills.",
      "Strong understanding of workplace design and turnkey project lifecycle.",
      "Ability to collaborate with internal teams including design, estimation and projects.",
      "Strong sales orientation with focus on revenue generation.",
      "Bachelor’s Degree in Business Administration, Marketing, Architecture or related field.",
      "MBA in Marketing or Business Development will be an added advantage.",
    ],
  },
  {
    title: "Quality Check – Quantity Check", category: "Quality", location: "Mumbai", experience: "10–15 years",
    brief: "We are looking for an experienced Senior Quality Engineer responsible for supporting project delivery through effective cost management, site coordination and quality control. The role ensures projects are delivered within defined budgets, timelines and quality standards.",
    responsibilities: [
      "Review project drawings, specifications and BOQs.",
      "Coordinate with design, procurement and project teams for project execution.",
      "Ensure project deliverables meet defined quality and cost standards.",
      "Conduct site inspections and monitor project progress.",
      "Maintain documentation and project reports.",
      "Participate in client meetings and coordination meetings.",
      "Identify potential risks related to cost, quality or execution and recommend corrective actions.",
      "Support project teams in achieving timelines, budgets and quality benchmarks.",
      "Develop and implement quality assurance and quality control processes.",
      "Conduct quality inspections at project sites.",
      "Ensure materials and workmanship meet required quality standards.",
      "Prepare quality reports and non-conformance reports.",
      "Work closely with project teams to implement corrective actions.",
    ],
    requirements: [
      "10–15 years of relevant industry experience in corporate interior fit-out or construction projects.",
      "Strong understanding of drawings, specifications and project documentation.",
      "Ability to coordinate with multidisciplinary teams.",
      "Strong analytical and problem-solving skills.",
      "Excellent documentation and reporting capability.",
      "Bachelor’s Degree / Diploma in Civil Engineering, Construction Management or related field.",
    ],
  },
  {
    title: "Business Development", category: "Business Development", location: "Pune", experience: "3–5 years",
    brief: "Drive new business for Team One ArteQ across corporate interiors, workplace design, construction and real estate in the Pune market.",
    responsibilities: [
      "Identify and develop new business opportunities in corporate interiors, workplace design, commercial fit-outs, and turnkey projects.",
      "Build and maintain strong relationships with corporate clients, developers, IPCs (International Property Consultants), real estate consultants, brokers, architects, and other industry stakeholders.",
      "Develop a strong network within the Pune micro-market and identify potential clients, upcoming projects, and business opportunities.",
      "Generate qualified leads through networking, referrals, industry events, market research, and existing professional connections.",
      "Conduct client meetings, presentations, and follow-ups to understand project requirements and business needs.",
      "Maintain and regularly update the sales pipeline, client database, and CRM records.",
      "Monitor market trends, competitor activities, commercial real estate developments, and emerging business opportunities.",
      "Collaborate with the marketing team to strengthen brand visibility.",
      "Represent Team One ArteQ in client meetings, industry forums, networking events, and other business engagements.",
    ],
    requirements: [
      "3–5 years of relevant experience in Business Development, preferably in corporate interiors, commercial fit-outs, turnkey projects, construction, or commercial real estate.",
      "Strong understanding of the Pune commercial real estate market and local business ecosystem.",
      "Existing professional network with corporate clients, developers, IPCs, real estate consultants, brokers, architects, and corporate decision-makers will be an advantage.",
      "Good understanding of corporate workplace design, interior fit-outs, and the turnkey project lifecycle.",
      "Excellent communication, and relationship-management skills.",
    ],
  },
];
