import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { BlueprintReveal } from "@/components/graphics/BlueprintReveal";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { projects, categories } from "@/data/portfolio";

const title = "Portfolio — Team One Architects";
const description =
  "Selected work from Team One Architects — corporate interiors and commercial & institutional architecture shaping how people live, work and gather.";
const url = "https://architect-sparkle-revamp.lovable.app/portfolio";
const heroImage = "https://teamonearchitects.com/wp-content/uploads/2026/03/DSC07321-HDR-1024x683.jpg";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: PortfolioArchive,
});

type Filter = "all" | (typeof categories)[number];

function PortfolioArchive() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const tabs: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "Show All", count: projects.length },
    ...categories.map((c) => ({
      key: c as Filter,
      label: c,
      count: projects.filter((p) => p.category === c).length,
    })),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="Our Work"
          title="Showcasing the spaces we shape"
          lead="A portfolio of corporate interiors and commercial architecture — each project a study in structure, light and the people who move through it."
          image={heroImage}
          phrases={["Corporate Interiors", "Commercial Architecture", "Institutional Spaces"]}
        />

        <section className="relative overflow-hidden border-t border-border">
          <GridBackdrop radius={260} baseOpacity={0.26} />
          <BlueprintReveal variant="plan" opacity={0.4} />

          <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-28 pt-20 md:px-10 md:pb-36 md:pt-28">
            {/* Filter row */}
            <div className="flex flex-col gap-8 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                  Selected work
                </p>
                <h2 className="font-display mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                  Every project, in one place
                </h2>
              </Reveal>

              <Reveal delay={1}>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {tabs.map((t) => {
                    const active = filter === t.key;
                    return (
                      <button
                        key={t.key}
                        onClick={() => setFilter(t.key)}
                        className={`group inline-flex items-baseline gap-2 text-sm font-medium uppercase tracking-[0.14em] transition-colors ${
                          active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="relative">
                          {t.label}
                          <span
                            className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                              active ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                          />
                        </span>
                        <span className="text-[0.65rem] text-gold">{t.count}</span>
                      </button>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            <div className="mt-12">
              <ProjectGrid projects={filtered} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
