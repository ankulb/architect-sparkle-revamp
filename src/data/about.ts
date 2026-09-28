// Content sourced from the About section of teamonearchitects.com.
import toaTeamPhoto from "@/assets/toa-team.jpg.asset.json";
import dhartiLogo from "@/assets/brands/dharti.svg.asset.json";
import vijayLogo from "@/assets/brands/vijay-shikshan.png.asset.json";
import liftLogo from "@/assets/brands/lift-upliftment.png.asset.json";
import yuvaLogo from "@/assets/brands/yuva-unstoppable.png.asset.json";
import deepstambhLogo from "@/assets/brands/deepstambh.jpeg.asset.json";
import csrImage from "@/assets/dynamic/csr.jpg.asset.json";
import rahulManePhoto from "@/assets/team/rahul-mane.png.asset.json";
import bharatKukrejaPhoto from "@/assets/team/bharat-kukreja.png.asset.json";
import parishPhoto from "@/assets/board/parish.jpg.asset.json";
import adityaPhoto from "@/assets/board/aditya.jpg.asset.json";

import { clientLogos } from "@/data/clientLogos";


const UP = "https://teamonearchitects.com/wp-content/uploads";

export const companyLinkedin = "https://www.linkedin.com/company/teamonearchitects/";

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
    image: toaTeamPhoto.url,
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
    image: toaTeamPhoto.url,
  },
  directors: [
    {
      name: "Parish S. Kapse",
      role: "Co-Founder & Director",
      image: parishPhoto.url,
      linkedin: "https://www.linkedin.com/in/parish-kapse-25481058/",
      summary:
        "Three decades of global multidisciplinary experience across architecture, land development, construction and strategic realty advisory.",
      bio: [
        "Parish S. Kapse is the Co-Founder and Director of Team One Architects (TOA), bringing over three decades of global multidisciplinary experience across architecture, land development, construction and strategic realty advisory. His career spans 400+ completed projects, reflecting extensive experience in translating complex requirements into strategic opportunities across the built environment. His approach bridges design intent, business viability and real-world execution, shaped in part by early international exposure at DP Architects and Japan's Penta-Ocean Construction.",
        "His expertise spans the full lifecycle of complex assets, from large-scale master plans and Public-Private Partnerships (PPPs) to mission-critical infrastructure such as Tier III data centres and Global Capability Centres (GCCs). His work includes over 5 million sq. ft. of corporate interiors, combining architectural, engineering and operational considerations to create high-performing environments. Across markets including India, Singapore, Africa, Malaysia, the UAE, the US, the UK and the Nordic region, he advises developers, institutions and public-sector organisations on complex development opportunities.",
        "Parish's methodology centres on understanding core requirements, building tailored programmes and integrating sustainability into the planning and delivery process. His experience includes approximately 5,000 acres of master planning, where he has worked across diverse site conditions and development frameworks to shape long-term, functional and commercially viable environments. A defining milestone in his career was leading the winning design for the Bharat Pavilion at Expo 2025 Osaka. His work has been recognised through honours including Best Architectural Firm of the Year, the Golden Brick Award and the Eminent Jury Design Award. He continues to share his perspective on workplaces, data infrastructure, urban development and the evolving role of architecture in shaping economies.",
      ],
      facts: ["400+ projects delivered", "5M+ sq. ft. of corporate interiors", "~5,000 acres master planned", "Bharat Pavilion, Expo 2025 Osaka"],
    },
    {
      name: "Aditya B. Yamsanwar",
      role: "Director",
      image: adityaPhoto.url,
      linkedin: "https://www.linkedin.com/in/aditya-yamsanwar-21683415/",
      summary:
        "Two decades of work at the intersection of design, experience and technology, shaping high-performance workplaces.",
      bio: [
        "With over two decades of experience, Aditya B. Yamsanwar is a Director at Team One Architects (TOA), working at the intersection of design, experience and technology. His work focuses on creating high-performance workplaces that respond to evolving business models, workforce expectations and organisational culture.",
        "At TOA, Aditya combines research, analytics and spatial strategy to develop smart, adaptable environments that support productivity, collaboration and employee experience. He has led large-scale workplace transformations, using the built environment as a strategic tool to address work challenges and prepare businesses for the future of work.",
        "A postgraduate from the University of Arizona, Aditya is an active member of CoreNet Global and GRI. He has authored 200+ industry articles and regularly contributes to conversations around SEZ policy, workplace strategy, Gen Z and the changing relationship between people, organisations and the spaces they occupy.",
      ],
      facts: ["20+ years of experience", "Postgraduate, University of Arizona", "CoreNet Global & GRI member", "200+ industry articles"],
    },
    {
      name: "Bharat S. Yamsanwar",
      role: "Founder & Director",
      image: `${UP}/2025/08/Bharat-Yamsanwar.jpeg`,
      linkedin: "https://www.linkedin.com/in/bharat-yamsanwar-6259619a/",
      summary:
        "Four decades of practice shaping TOA's design philosophy through timeless design, cultural context and spatial harmony.",
      bio: [
        "With over four decades of experience, Ar. Bharat S. Yamsanwar is the Founder and Director of Team One Architects (TOA). His architectural practice has contributed to the firm's design philosophy, shaped by timeless design, cultural context and spatial harmony across large-scale developments.",
        "His experience spans urban townships, public infrastructure, institutional campuses and master planning, with a focus on creating environments that respond to their context, climate and intended use. His approach brings together functionality, design integrity and a considered understanding of how architecture interacts with its surroundings.",
        "An alumnus of the Sir J. J. College of Architecture, Bharat has been recognised for his contribution to architecture and urban design, including a Lifetime Achievement Award and recognition as a Distinguished Alumnus. Over the course of his career, he has remained engaged with the evolution of architecture and the role of thoughtful design in shaping enduring environments.",
      ],
      facts: ["40+ years of practice", "Sir J. J. College of Architecture alumnus", "Lifetime Achievement Award", "Distinguished Alumnus"],
    },
    {
      name: "Jyoti B. Yamsanwar",
      role: "Director",
      image: `${UP}/2025/08/Jyoti-Yamsanwar.jpeg`,
      summary:
        "Stewardship of accounts, finance and administration, with a deep commitment to mentorship and community programmes.",
      bio: [
        "With a background in Commerce and an M. Com qualification, Jyoti B. Yamsanwar brings a strong perspective on the organisational functions that enable a growing practice to operate with structure, accountability and continuity. Her role spans accounts, finance and administration, supporting the systems and processes that form the operational backbone of the workplace.",
        "Beyond her functional responsibilities, Jyoti places particular emphasis on mentorship and people development. Her approach is centred on creating an environment where younger professionals and emerging team members can learn through guidance, responsibility and experience. She believes effective mentorship extends beyond professional skills — helping individuals build confidence, understand accountability and develop the judgement required to grow within a professional practice.",
        "Jyoti is also closely associated with CSR initiatives at TOA, contributing to programmes that connect the resources and capabilities of the practice with wider community needs. Her interests lie at the intersection of people, organisational stewardship and social responsibility, reflecting a belief that a company's impact extends beyond its day-to-day business.",
      ],
      facts: ["M. Com, Commerce", "Accounts, finance & administration", "Mentorship & people development", "CSR stewardship"],
    },
    {
      name: "Rupali P. Kapse",
      role: "Director",
      image: `${UP}/2025/08/Jyoti-Kapse.jpeg`,
      linkedin: "https://www.linkedin.com/in/rupali-kapse-432b5133b/",
      summary:
        "Interior architecture brought together with resource efficiency, workplace wellbeing and corporate ESG principles.",
      bio: [
        "Rupali P. Kapse is a Director at Team One Architects (TOA), with a decade of experience. She holds a Professional Diploma in Interior Architecture, with further academic exposure in environmental studies, sustainability, CSR, climate action and corporate ESG.",
        "Her multidisciplinary background brings together interior architecture with resource efficiency, workplace wellbeing and ESG principles, offering a broader perspective on how spaces can support both people and organisations.",
        "Over the course of her career, Rupali has been associated with multiple projects across the real estate industry, contributing to the planning and execution of corporate and commercial spaces with a focus on workplace environments, climate action, resource efficiency and ESG practices, helping create spaces that are efficient, adaptable and aligned with evolving business needs.",
      ],
      facts: ["Professional Diploma, Interior Architecture", "A decade of experience", "Climate action & resource efficiency", "Corporate ESG practice"],
    },
  ],
};


/* ------------------------------ Our Team ------------------------------ */

export const team = {
  hero: {
    eyebrow: "Our People",
    title: "The people behind the practice",
    lead: "The future isn't imagined alone. It's built together — brick by brick, mind by mind.",
    image: toaTeamPhoto.url,
  },
  leadership: [
    { name: "Laxmikant Sawant", role: "COO", image: `${UP}/2021/10/laxmikant-sawant-1.png`, linkedin: "https://www.linkedin.com/in/laxmikant-sawant-764020ba" },
    { name: "Varsha Changedia", role: "Associate Director", image: `${UP}/2021/10/Varsha-Changedia-1.png`, linkedin: "https://www.linkedin.com/in/varsha-changedia-15ba261b" },
    { name: "Tasheen Issani", role: "Chief Business Development Officer", image: `${UP}/2020/06/Tasheen-Issani.png`, linkedin: "https://www.linkedin.com/in/tasheen-essani" },
    { name: "Mahesh Dhanawade", role: "General Manager", image: `${UP}/2020/10/Mahesh-Dhanawade.png`, linkedin: "https://www.linkedin.com/in/mahesh-dhanavade-383471313" },
    { name: "Abhijit Sutar", role: "Operations Head", image: `${UP}/2024/07/Abhijit-Sutar.png`, linkedin: companyLinkedin },
    { name: "Archiit Chatterjee", role: "Associate Architect", image: `${UP}/2025/07/Archiit-Chatterjee.png`, linkedin: "https://www.linkedin.com/in/archiit-chatterjee-47a225195" },
    { name: "Hiral Parekh", role: "Design Lead", image: `${UP}/2025/10/WhatsApp-Image-2025-10-30-at-2.48.45-PM-2.jpeg`, linkedin: companyLinkedin },
    { name: "Hiral Chouhan", role: "Design Lead", image: `${UP}/2025/10/WhatsApp-Image-2025-10-30-at-2.48.45-PM-1.jpeg`, linkedin: "https://www.linkedin.com/in/hiral-chauhan-01839a26" },
    { name: "Alpesh Parab", role: "Sr. Associate Designer", image: `${UP}/2025/10/WhatsApp-Image-2025-10-30-at-2.48.46-PM.jpeg`, linkedin: companyLinkedin },
    { name: "Rahul Mane", role: "Leadership Team", image: rahulManePhoto.url, linkedin: "https://www.linkedin.com/in/rahul-mane-4494aa155/" },
    { name: "Bharat Kukreja", role: "Leadership Team", image: bharatKukrejaPhoto.url, linkedin: "https://www.linkedin.com/in/bharat-kukreja-72145927/" },
  ],
};

/* ----------------------------- Clientele ----------------------------- */

export const clientele = {
  hero: {
    eyebrow: "Partnerships",
    title: "Trusted by the best. Chosen for vision.",
    lead: "From engineering giants to global software leaders — the organisations who build the future build it with us.",
    image: toaTeamPhoto.url,
  },
  groups: [
    {
      sector: "IT & Software",
      clients: [
        { name: "3i", logo: clientLogos["3i"] },
        { name: "Idea forge", logo: clientLogos["Idea forge"] },
        { name: "Intangles", logo: clientLogos["Intangles"] },
        { name: "VW ITS", logo: clientLogos["VW ITS"] },
      ],
    },
    {
      sector: "Engineering",
      clients: [
        { name: "Emerson", logo: clientLogos["Emerson"] },
        { name: "JCI", logo: clientLogos["Johnson Controls"] },
        { name: "Sedmac", logo: clientLogos["Sedmac"] },
        { name: "Vanderlane", logo: clientLogos["Vanderlane"] },
      ],
    },
    {
      sector: "Health & Pharma",
      clients: [
        { name: "Apicore", logo: clientLogos["Apicore"] },
        { name: "BASF", logo: clientLogos["BASF"] },
        { name: "Bharat Serum", logo: clientLogos["Bharat Serums and Vaccines"] },
        { name: "Indira IVF", logo: clientLogos["Indira IVF"] },
        { name: "Novartis", logo: clientLogos["Novartis"] },
        { name: "Cipla", logo: clientLogos["Cipla"] },
        { name: "Covestro", logo: clientLogos["Covestro"] },
        { name: "Givaudan", logo: clientLogos["Givaudan"] },
        { name: "PharmaACE", logo: clientLogos["PharmaACE"] },
        { name: "inVentiv Health", logo: clientLogos["inVentiv Health"] },
        { name: "WebMD", logo: clientLogos["WebMD"] },
        { name: "Titan Laboratories", logo: clientLogos["Titan Laboratories"] },
      ],
    },
    {
      sector: "Media",
      clients: [
        { name: "Digital Domain", logo: clientLogos["Digital Domain"] },
        { name: "MSL Group", logo: clientLogos["MSL Group"] },
        { name: "Prasad Studios", logo: clientLogos["Prasad Studios"] },
        { name: "Eros International", logo: clientLogos["Eros International"] },
        { name: "Havas Media Group", logo: clientLogos["Havas Media Group"] },
        { name: "Isobar", logo: clientLogos["Isobar"] },
        { name: "The Economic Times", logo: clientLogos["The Economic Times"] },
      ],
    },
    {
      sector: "Shipping",
      clients: [
        { name: "Toll", logo: clientLogos["Toll Group"] },
        { name: "XPO", logo: clientLogos["XPO Logistics"] },
        { name: "Damco", logo: clientLogos["Damco"] },
      ],
    },
    {
      sector: "Telecom",
      clients: [
        { name: "Infinix", logo: clientLogos["Infinx"] },
        { name: "Nxtra", logo: clientLogos["Nxtra"] },
        { name: "Airtel", logo: clientLogos["Airtel"] },
        { name: "Vodafone", logo: clientLogos["Vodafone"] },
        { name: "MTS", logo: clientLogos["MTS"] },
        { name: "STL", logo: clientLogos["STL"] },
        { name: "GTL", logo: clientLogos["GTL"] },
        { name: "UTStarcom", logo: clientLogos["UTStarcom"] },
      ],
    },
    {
      sector: "Green Field",
      clients: [{ name: "Hyatt", logo: clientLogos["Hyatt"] }],
    },
    {
      sector: "Banking & Finance",
      clients: [
        { name: "State Bank of India", logo: clientLogos["State Bank of India"] },
        { name: "IDBI Bank", logo: clientLogos["IDBI Bank"] },
        { name: "BNY Mellon", logo: clientLogos["BNY Mellon"] },
        { name: "Vakrangee", logo: clientLogos["Vakrangee"] },
        { name: "IndiaFirst Life Insurance", logo: clientLogos["IndiaFirst Life Insurance"] },
        { name: "Bajaj", logo: clientLogos["Bajaj"] },
      ],
    },
    {
      sector: "Educational",
      clients: [
        { name: "Pearl Academy", logo: clientLogos["Pearl Academy"] },
        { name: "Amity University", logo: clientLogos["Amity University"] },
        { name: "Global Indian International School", logo: clientLogos["Global Indian International School"] },
      ],
    },
    {
      sector: "Co-Working",
      clients: [
        { name: "Raiaskaran", logo: clientLogos["Raiaskaran"] },
        { name: "DevX", logo: clientLogos["DevX"] },
        { name: "GroWork", logo: clientLogos["GroWork"] },
        { name: "Smartworks", logo: clientLogos["Smartworks"] },
      ],
    },
    {
      sector: "Partners across sectors",
      clients: [
        { name: "Cognizant", logo: clientLogos["Cognizant"] },
        { name: "Tata Consultancy Services", logo: clientLogos["Tata Consultancy Services"] },
        { name: "IBM", logo: clientLogos["IBM"] },
        { name: "Fujitsu", logo: clientLogos["Fujitsu"] },
        { name: "T-Systems", logo: clientLogos["T-Systems"] },
        { name: "Xoriant", logo: clientLogos["Xoriant"] },
        { name: "Symphony Teleca", logo: clientLogos["Symphony Teleca"] },
        { name: "e-Zest", logo: clientLogos["e-Zest"] },
        { name: "PubMatic", logo: clientLogos["PubMatic"] },
        { name: "Cummins", logo: clientLogos["Cummins"] },
        { name: "Gegadyne Energy", logo: clientLogos["Gegadyne Energy"] },
        { name: "Everest", logo: clientLogos["Everest"] },
        { name: "CIDCO", logo: clientLogos["CIDCO"] },
        { name: "MMRDA", logo: clientLogos["MMRDA"] },
        { name: "Hinjawadi Industries Association", logo: clientLogos["Hinjawadi Industries Association"] },
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
    image: csrImage.url,
  },
  objective: {
    kicker: "Our CSR Objective",
    body: "Team One Architects (TOA) is committed to contributing to society through meaningful Corporate Social Responsibility initiatives that support education, inclusive development, and community infrastructure. Our objective is to empower institutions that create opportunities for underserved communities by improving learning environments and enabling long-term social impact. Through sustained partnerships, TOA aims to help build stronger and more equitable foundations for future generations.",
  },
  images: [csrImage.url, `${UP}/2026/03/csr-1-650x540.png`],
  partners: [
    {
      name: "Lift for Upliftment",
      body: "Expanding access to quality medical education for aspiring students from underprivileged and tribal communities.",
      href: "https://www.lfupune.in/",
      logo: liftLogo.url,
    },
    {
      name: "Vijay Shikshan Sanstha",
      body: "Empowering hearing-impaired individuals through education, rehabilitation and skill-building for independent, dignified living.",
      href: "https://vssanstha.org.in/",
      logo: vijayLogo.url,
    },
    {
      name: "Dharti Foundation",
      body: "Uplifting children from farmer families — with a special emphasis on girls — through education and pathways to employment.",
      href: "https://dhartifoundation.com/",
      logo: dhartiLogo.url,
    },
    {
      name: "Deepstambh Foundation",
      body: "Inclusive, quality education for underprivileged students, including persons with disabilities and economically weaker sections.",
      href: "https://deepstambh.org/",
      logo: deepstambhLogo.url,
    },
    {
      name: "Yuva Unstoppable",
      body: "Strengthening school infrastructure and enabling modern learning ecosystems for underprivileged children and youth.",
      href: "https://yuvaunstoppable.org/",
      logo: yuvaLogo.url,
    },
    {
      name: "Jivan Jyot Foundation",
      body: "Enabling better living conditions for underserved communities by promoting education, healthcare and livelihood opportunities.",
      href: "https://www.jivanjyout.in/",
      logo: "",
    },
    {
      name: "The XL Target",
      body: "Supporting the development of sporting talent through access to quality training infrastructure and mentorship in competitive shooting.",
      href: "https://xltsa.com/",
      logo: "",
    },
    {
      name: "Sant Gadge Maharaj Charitable Trust",
      body: "Extending support to underprivileged cancer patients and their families with shelter, nutrition, medical support and dignified care.",
      href: "",
      logo: "",
    },
    {
      name: "Give Welfare Organization",
      body: "Supporting innovative, inclusive learning environments that empower children in underserved communities.",
      href: "",
      logo: "",
    },
    {
      name: "Manilal Gandhi Charitable Trust",
      body: "Supporting social welfare focused on community development, education and access to essential resources.",
      href: "",
      logo: "",
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
      body: "Growth at TOA doesn't come from static training modules. It comes from real projects, real timelines and real challenges. From handling large-scale corporate fit-outs to navigating complex site executions, our teams learn by being in the middle of the action.",
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
      body: "Our work spans industries from corporate offices to infrastructure and institutional spaces. Each project brings scale, complexity and responsibility. This is where speed meets structure, and execution meets detail.",
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
