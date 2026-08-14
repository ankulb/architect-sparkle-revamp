import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { pressCoverage, pressTotal } from "@/data/press";
import pressImage from "@/assets/dynamic/press.jpg.asset.json";

const title = "News & Media — Team One Architects in the press";
const description =
  "TOA's media coverage index, October 2025 to July 2026 — architecture, workplace and sustainability commentary across The Economic Times, Times of India, Hindustan Times, Realty+ and more.";
const url = "https://architect-sparkle-revamp.lovable.app/insights/news";

export const Route = createFileRoute("/insights/news")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="Insights / News & Media"
          title="TOA in the press"
          lead="Our projects and points of view, covered across design, business and lifestyle media — from workplace futures and Gen Z offices to data centres, climate risk and India's evolving design language."
          image={pressImage.url}
          phrases={[
            "Workplace futures",
            "Sustainable urbanism",
            "Mission-critical infrastructure",
          ]}
        />

        <section className="relative border-t border-border">
          <GridBackdrop />
          <div className="relative mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Coverage index
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display mt-5 max-w-3xl text-3xl font-light tracking-tight sm:text-4xl">
                {pressTotal}+ stories across print and digital, October 2025 — July 2026
              </h2>
            </Reveal>

            <div className="mt-16 space-y-16">
              {pressCoverage.map((group) => (
                <div key={group.month}>
                  <Reveal>
                    <div className="flex items-baseline justify-between border-b border-border pb-4">
                      <h3 className="font-display text-xl font-light tracking-tight sm:text-2xl">
                        {group.month}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        {group.count} {group.count === 1 ? "story" : "stories"}
                      </span>
                    </div>
                  </Reveal>

                  <ul className="mt-2 divide-y divide-border/60">
                    {group.items.map((item) => (
                      <li key={`${item.publication}-${item.headline}`}>
                        <Reveal>
                          <article className="grid gap-2 py-6 md:grid-cols-[220px_1fr_140px] md:items-baseline md:gap-8">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                              {item.publication}
                            </p>
                            <h4 className="text-base font-normal leading-snug text-foreground md:text-lg">
                              {item.headline}
                            </h4>
                            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-right">
                              {item.edition}
                              {item.date ? ` · ${item.date}` : ""}
                            </p>
                          </article>
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
