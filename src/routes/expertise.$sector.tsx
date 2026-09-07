import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { BlueprintReveal } from "@/components/graphics/BlueprintReveal";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { projects, projectDetails } from "@/data/portfolio";


type Sector = {
  slug: string;
  name: string;
  discipline: string;
  lead: string;
  phrases: string[];
  image: string;
  /** Portfolio slugs known to belong to this sector (matched by client). */
  projectSlugs: string[];
  /** Named clients in this sector (logos dropped in later). */
  clients: string[];
};

const UP = "https://teamonearchitects.com/wp-content/uploads";

const sectors: Record<string, Sector> = {
  "banking-finance": {
    slug: "banking-finance",
    name: "Banking & Finance",
    discipline: "Interior Architecture",
    lead: "Workplaces for banks, brokerages and financial institutions — environments where trust, security and precision meet the warmth of a modern, people-first office.",
    phrases: ["Trading Floors", "Client Experience", "Brand Identity"],
    image: `${UP}/2026/03/DSC07321-HDR-1024x683.jpg`,
    projectSlugs: [],
    clients: [],
  },
  "it-software": {
    slug: "it-software",
    name: "IT & Software",
    discipline: "Interior Architecture",
    lead: "Agile workplaces for technology companies — campuses and offices engineered for focus, collaboration and the speed of innovation.",
    phrases: ["Agile Workplaces", "Innovation Hubs", "Campus Design"],
    image: `${UP}/2026/03/DSC03610-HDR-1024x683.jpg`,
    projectSlugs: ["ideaforge-headquarters-mumbai", "intangles", "ergo-technologies"],
    clients: ["3i", "Idea Forge", "Intangles", "VW ITS"],
  },
  engineering: {
    slug: "engineering",
    name: "Engineering",
    discipline: "Interior Architecture",
    lead: "Precision environments for engineering leaders — offices and experience centres that mirror the rigour of the work happening inside them.",
    phrases: ["Experience Centres", "Precision Planning", "Technical Workplaces"],
    image: `${UP}/2025/08/ad2c6b9e-662a-4bb2-b913-063d1304a2a0.jpg`,
    projectSlugs: ["johnson-controls-gcc-offices"],
    clients: ["Emerson", "JCI", "Sedmac", "Vandelane"],
  },
  "health-pharma": {
    slug: "health-pharma",
    name: "Health & Pharma",
    discipline: "Interior Architecture",
    lead: "Healthcare and pharmaceutical environments where compliance, care and calm come together — spaces designed around the people they serve.",
    phrases: ["Healing Environments", "Compliance by Design", "Care-centred Spaces"],
    image: `${UP}/2026/05/DSC_8289-1024x681.jpg`,
    projectSlugs: ["apicore", "basf", "indira-ivf"],
    clients: ["Apicore", "BASF", "Bharat Serum", "Indira IVF"],
  },
  media: {
    slug: "media",
    name: "Media",
    discipline: "Interior Architecture",
    lead: "Studios and creative workplaces for media houses — spaces that keep pace with production, storytelling and the always-on news cycle.",
    phrases: ["Creative Studios", "Production Spaces", "Storytelling Hubs"],
    image: `${UP}/2026/03/titan-1-1024x690.jpg`,
    projectSlugs: [],
    clients: ["Digital Domain", "MSL Group", "Prasad Studios"],
  },
  shipping: {
    slug: "shipping",
    name: "Shipping",
    discipline: "Interior Architecture",
    lead: "Workplaces for logistics and shipping leaders — efficient, connected offices built for teams that keep the world moving.",
    phrases: ["Logistics Hubs", "Connected Workplaces", "Operational Clarity"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    projectSlugs: ["xpo"],
    clients: ["Toll", "XPO"],
  },
  telecom: {
    slug: "telecom",
    name: "Telecom",
    discipline: "Interior Architecture",
    lead: "High-performance workplaces for telecom and network infrastructure companies — designed for scale, uptime and the teams behind connectivity.",
    phrases: ["Network Operations", "Scalable Workplaces", "Future-ready Design"],
    image: `${UP}/2026/03/Infinix_Backlight_0_5_Strict-1024x683.jpg`,
    projectSlugs: ["infinx-mumbai-office"],
    clients: ["Infinix", "Nxtra"],
  },
  "green-field": {
    slug: "green-field",
    name: "Green Field",
    discipline: "Architecture & Urban Design",
    lead: "Ground-up developments imagined from a blank site — hospitality, mixed-use and institutional projects shaped from first principles.",
    phrases: ["Ground-up Developments", "Hospitality", "Placemaking"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    projectSlugs: [],
    clients: ["Hyatt"],
  },
};

function sectorProjects(sector: Sector) {
  const detailSlugs = Object.values(projectDetails)
    .filter((d) => d.sector === sector.name)
    .map((d) => d.slug);
  const slugs = new Set([...detailSlugs, ...sector.projectSlugs]);
  return projects.filter((p) => slugs.has(p.slug));
}

export const Route = createFileRoute("/expertise/$sector")({
  loader: ({ params }) => {
    const sector = sectors[params.sector];
    if (!sector) throw notFound();
    return { sector };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Sector not found — Team One Architects" }, { name: "robots", content: "noindex" }],
      };
    }
    const { sector } = loaderData;
    const title = `${sector.name} Interiors — Team One Architects`;
    const description = sector.lead;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:image", content: sector.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: sector.image },
      ],
    };
  },
  component: SectorPage,
  notFoundComponent: SectorNotFound,
});

function SectorNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl font-light">Sector page coming soon</h1>
        <p className="mt-4 text-muted-foreground">
          This expertise area doesn&apos;t have a dedicated page yet. Explore the full portfolio instead.
        </p>
      </main>
      <Footer />
    </div>
  );
}

function SectorPage() {
  const { sector } = Route.useLoaderData();
  const list = sectorProjects(sector);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow={sector.discipline}
          title={sector.name}
          lead={sector.lead}
          image={sector.image}
          phrases={sector.phrases}
        />


        <section className="relative overflow-hidden border-t border-border">
          <GridBackdrop radius={260} baseOpacity={0.26} />
          <BlueprintReveal variant="plan" opacity={0.4} />

          <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-28 pt-20 md:px-10 md:pb-36 md:pt-28">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Selected work
              </p>
              <h2 className="font-display mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                {sector.name} projects
              </h2>
            </Reveal>

            <div className="mt-12">
              {list.length ? (
                <ProjectGrid projects={list} />
              ) : (
                <p className="text-muted-foreground">Projects in this sector are being added.</p>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
