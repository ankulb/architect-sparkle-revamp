import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { PublicationMark } from "@/components/PublicationMark";
import { coverageIndex } from "@/data/coverageIndex";
import pressImage from "@/assets/dynamic/press.jpg.asset.json";

const PAGE = 40;
const title = "Articles & Coverage Index — Team One Architects";
const description =
  "The complete index of articles, columns and features carrying Team One Architects' perspective, month by month, with links to every original story.";
const url = "https://architect-sparkle-revamp.lovable.app/insights/articles";

export const Route = createFileRoute("/insights/articles")({
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
  component: ArticlesPage,
});

function ArticlesPage() {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return coverageIndex;
    return coverageIndex
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.publication.toLowerCase().includes(q) || item.headline.toLowerCase().includes(q),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const shown = useMemo(() => {
    let left = limit;
    return groups
      .map((g) => { const items = g.items.slice(0, Math.max(left, 0)); left -= items.length; return { ...g, items }; })
      .filter((g) => g.items.length > 0);
  }, [groups, limit]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="Insights / Articles"
          title="Every article, in one index"
          lead="Columns, features and commentary carrying TOA's perspective on workplaces, cities, data infrastructure and climate-intelligent design."
          image={pressImage.url}
          phrases={["Workplace futures", "Climate intelligence", "Urban growth"]}
        />

        <section className="relative border-t border-border">
          <GridBackdrop />
          <div className="relative mx-auto max-w-[1500px] px-6 py-16 md:px-10 md:py-24">
            <div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Coverage index</p>
                <p className="font-display mt-4 text-3xl font-light sm:text-4xl">
                  Month by month, in print and online
                </p>
              </div>
              <label className="flex w-full max-w-sm items-center gap-3 border border-border bg-background px-4 py-3">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(event) => { setQuery(event.target.value); setLimit(PAGE); }}
                  placeholder="Search by publication or headline"
                  className="w-full bg-transparent text-sm font-light outline-none placeholder:text-muted-foreground"
                />
              </label>
            </div>

            {groups.length === 0 ? (
              <p className="mt-16 text-sm font-light text-muted-foreground">No articles match that search.</p>
            ) : (
              <div className="mt-14 space-y-16">
                {shown.map((group) => (
                  <div key={group.month}>
                    <h2 className="font-display text-2xl font-light tracking-tight text-gold sm:text-3xl">
                      {group.month}
                    </h2>
                    <ul className="mt-6 border-t border-border">
                      {group.items.map((item) => {
                        const inner = (
                          <>
                            <span className="md:w-56 md:shrink-0">
                              <PublicationMark publication={item.publication} size="sm" />
                            </span>
                            <span className="flex-1 text-[15px] font-light leading-snug text-foreground">
                              {item.headline}
                            </span>
                            <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                              {item.edition}
                              {item.url ? (
                                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                              ) : null}
                            </span>
                          </>
                        );
                        return (
                          <li key={`${item.publication}-${item.headline}`} className="border-b border-border">
                            {item.url ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col gap-2 py-5 transition-colors hover:bg-card md:flex-row md:items-center md:gap-8 md:px-2"
                              >
                                {inner}
                              </a>
                            ) : (
                              <div className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:gap-8 md:px-2">
                                {inner}
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
                {total > limit ? (
                  <button
                    type="button"
                    onClick={() => setLimit((n) => n + PAGE)}
                    className="inline-flex items-center gap-3 border border-border px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-gold hover:text-gold"
                  >
                    Load more articles
                  </button>
                ) : null}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
