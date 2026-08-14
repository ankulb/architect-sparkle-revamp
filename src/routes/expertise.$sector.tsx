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
};

const sectors: Record<string, Sector> = {
  "banking-finance": {
    slug: "banking-finance",
    name: "Banking & Finance",
    discipline: "Interior Architecture",
    lead: "Workplaces for banks, brokerages and financial institutions — environments where trust, security and precision meet the warmth of a modern, people-first office.",
    phrases: ["Trading Floors", "Client Experience", "Brand Identity"],
    image:
      "https://teamonearchitects.com/wp-content/uploads/2026/03/DSC07321-HDR-1024x683.jpg",
  },
};

function sectorProjects(name: string) {
  const slugs = Object.values(projectDetails)
    .filter((d) => d.sector === name)
    .map((d) => d.slug);
  return projects.filter((p) => slugs.includes(p.slug));
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
  const list = sectorProjects(sector.name);

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
