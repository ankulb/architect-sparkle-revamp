import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { BlueprintReveal } from "@/components/graphics/BlueprintReveal";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects, projectDetails, type Project } from "@/data/portfolio";



type SectorClient = {
  name: string;
  /** Portfolio slug for this client, when a project exists. */
  projectSlug?: string;
};

type Sector = {
  slug: string;
  name: string;
  discipline: string;
  lead: string;
  phrases: string[];
  image: string;
  /** Named clients in this sector, in display order. */
  clients: SectorClient[];
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
    clients: [],
  },
  "it-software": {
    slug: "it-software",
    name: "IT & Software",
    discipline: "Interior Architecture",
    lead: "Agile workplaces for technology companies — campuses and offices engineered for focus, collaboration and the speed of innovation.",
    phrases: ["Agile Workplaces", "Innovation Hubs", "Campus Design"],
    image: `${UP}/2026/03/DSC03610-HDR-1024x683.jpg`,
    clients: [
      { name: "3i" },
      { name: "Idea forge", projectSlug: "ideaforge-headquarters-mumbai" },
      { name: "Intangles", projectSlug: "intangles" },
      { name: "VW ITS" },
    ],
  },
  engineering: {
    slug: "engineering",
    name: "Engineering",
    discipline: "Interior Architecture",
    lead: "Precision environments for engineering leaders — offices and experience centres that mirror the rigour of the work happening inside them.",
    phrases: ["Experience Centres", "Precision Planning", "Technical Workplaces"],
    image: `${UP}/2025/08/ad2c6b9e-662a-4bb2-b913-063d1304a2a0.jpg`,
    clients: [
      { name: "Emerson" },
      { name: "JCI", projectSlug: "johnson-controls-gcc-offices" },
      { name: "Sedmac" },
      { name: "Vanderlane" },
    ],
  },
  "health-pharma": {
    slug: "health-pharma",
    name: "Health & Pharma",
    discipline: "Interior Architecture",
    lead: "Healthcare and pharmaceutical environments where compliance, care and calm come together — spaces designed around the people they serve.",
    phrases: ["Healing Environments", "Compliance by Design", "Care-centred Spaces"],
    image: `${UP}/2026/05/DSC_8289-1024x681.jpg`,
    clients: [
      { name: "Apicore", projectSlug: "apicore" },
      { name: "BASF", projectSlug: "basf" },
      { name: "Bharat Serum" },
      { name: "Indira IVF", projectSlug: "indira-ivf" },
    ],
  },
  media: {
    slug: "media",
    name: "Media",
    discipline: "Interior Architecture",
    lead: "Studios and creative workplaces for media houses — spaces that keep pace with production, storytelling and the always-on news cycle.",
    phrases: ["Creative Studios", "Production Spaces", "Storytelling Hubs"],
    image: `${UP}/2026/03/titan-1-1024x690.jpg`,
    clients: [{ name: "Digital Domain" }, { name: "MSL Group" }, { name: "Prasad Studios" }],
  },
  shipping: {
    slug: "shipping",
    name: "Shipping",
    discipline: "Interior Architecture",
    lead: "Workplaces for logistics and shipping leaders — efficient, connected offices built for teams that keep the world moving.",
    phrases: ["Logistics Hubs", "Connected Workplaces", "Operational Clarity"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    clients: [{ name: "Toll" }, { name: "XPO", projectSlug: "xpo" }],
  },
  telecom: {
    slug: "telecom",
    name: "Telecom",
    discipline: "Interior Architecture",
    lead: "High-performance workplaces for telecom and network infrastructure companies — designed for scale, uptime and the teams behind connectivity.",
    phrases: ["Network Operations", "Scalable Workplaces", "Future-ready Design"],
    image: `${UP}/2026/03/Infinix_Backlight_0_5_Strict-1024x683.jpg`,
    clients: [{ name: "Infinix", projectSlug: "infinx-mumbai-office" }, { name: "Nxtra" }],
  },
  "green-field": {
    slug: "green-field",
    name: "Green Field",
    discipline: "Architecture & Urban Design",
    lead: "Ground-up developments imagined from a blank site — hospitality, mixed-use and institutional projects shaped from first principles.",
    phrases: ["Ground-up Developments", "Hospitality", "Placemaking"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    clients: [{ name: "Hyatt" }],
  },
};

type SectorEntry = { name: string; project?: Project };

function sectorEntries(sector: Sector): SectorEntry[] {
  const bySlug = new Map(projects.map((p) => [p.slug, p]));

  if (sector.clients.length === 0) {
    // Sectors without a named client list fall back to project-detail matching.
    return Object.values(projectDetails)
      .filter((d) => d.sector === sector.name)
      .map((d) => bySlug.get(d.slug))
      .filter((p): p is Project => Boolean(p))
      .map((p) => ({ name: p.title, project: p }));
  }

  return sector.clients.map((c) => ({
    name: c.name,
    project: c.projectSlug ? bySlug.get(c.projectSlug) : undefined,
  }));
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

function ClientTile({ name }: { name: string }) {
  return (
    <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-border bg-card/40 transition-colors duration-500 hover:border-gold/50">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="relative z-10 text-center">
        <h3 className="font-display text-xl font-normal tracking-tight text-foreground transition-colors duration-500 group-hover:text-gold sm:text-2xl">
          {name}
        </h3>
        <span className="mt-3 block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Client
        </span>
      </div>
    </div>
  );
}

function SectorPage() {
  const { sector } = Route.useLoaderData();
  const list = sectorEntries(sector);

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
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((entry) =>
                    entry.project ? (
                      <ProjectCard key={entry.name} project={entry.project} />
                    ) : (
                      <ClientTile key={entry.name} name={entry.name} />
                    ),
                  )}
                </div>
              ) : (
                <p className="text-muted-foreground">Projects in this sector are being added.</p>
              )}
            </div>
          </div>
        </section>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
