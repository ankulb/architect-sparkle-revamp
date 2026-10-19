import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { featuredPress, pressCoverage } from "@/data/press";
import { PublicationMark } from "@/components/PublicationMark";
import { majorCoverage } from "@/data/coverageIndex";
import { isLogoCoverage, storyKey } from "@/data/curatedCoverage";
import pressImage from "@/assets/dynamic/press-landscape.jpg";
// Leading outlets only, one story each; the full index lives on the Articles page.
const leadingPublications: [string, string[]][] = [
  ["The Economic Times", ["The Economic Times"]],
  ["The Times of India", ["The Times of India", "Times Of India Daily"]],
  ["Hindustan Times", ["Hindustan Times"]],
  ["Mint", ["Mint"]],
  ["The Hindu Business Line", ["The Hindu Business Line"]],
  ["Forbes India", ["Forbes India"]],
  ["CNBC-TV18", ["CNBC-TV18", "CNBCTV18"]],
  ["NDTV Profit", ["NDTV Profit"]],
  ["Zee Business", ["Zee Business"]],
  ["Times Now", ["Times Now"]],
  ["BW Businessworld", ["BW Businessworld", "BW Businessworld "]],
  ["Construction Week", ["Construction Week"]],
  ["Commercial Design", ["Commercial Design"]],
  ["Realty+", ["Realty+"]],
  ["Construction World", ["Construction World"]],
];
const seenStories = new Set<string>();
const uniqueWithLogo = <T extends { publication: string; headline: string; url?: string }>(items: T[]): T[] =>
  items.filter((item) => {
    const key = storyKey(item);
    if (!isLogoCoverage(item) || seenStories.has(key)) return false;
    seenStories.add(key);
    return true;
  });

// Broadcast business outlets lead the featured section.
const topFeatured: string[][] = [["CNBC-TV18", "CNBCTV18"], ["NDTV Profit"], ["Zee Business"]];
const candidates = [...pressCoverage, ...majorCoverage];
const topFeaturedItems = topFeatured.flatMap((names) => {
  const item = candidates.find((c) => names.includes(c.publication) && c.url && isLogoCoverage(c));
  return item ? [{ publication: item.publication, headline: item.headline, url: item.url as string }] : [];
});
const featuredCoverage = uniqueWithLogo([...topFeaturedItems, ...featuredPress]);
const moreCoverage = uniqueWithLogo(pressCoverage);
const leadingCoverage = leadingPublications.flatMap(([, names]) => {
  const item = majorCoverage.find((candidate) =>
    names.includes(candidate.publication) && isLogoCoverage(candidate) && !seenStories.has(storyKey(candidate)),
  );
  return item ? uniqueWithLogo([item]) : [];
});
const continuousCoverage = [...moreCoverage, ...leadingCoverage];


const title = "News & Media | Team One Architects";
const description = "Explore selected press coverage featuring Team One Architects, its projects and perspectives on the built environment.";
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
        <PageHero eyebrow="Insights / News & Media" title="TOA in the press" lead="Selected conversations on architecture, workplaces, cities and the ideas shaping the built environment." image={pressImage} phrases={["Workplace futures", "Sustainable urbanism", "Human-centred design"]} />

        <section className="relative border-t border-border">
          <GridBackdrop />
          <div className="relative mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Featured coverage</Reveal>
            <Reveal as="h2" delay={1} className="font-display mt-5 max-w-3xl text-3xl font-light tracking-tight sm:text-5xl">Perspectives carried by leading publications</Reveal>

            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-2">
              {featuredCoverage.map((item, i) =>
                i === 0 ? (
                  <Reveal key={item.url} className="lg:row-span-3">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden bg-background p-7 md:p-12 lg:min-h-[560px]">
                      <img src={pressImage} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25 transition-transform duration-[1500ms] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                      <div className="relative flex items-start justify-between gap-5">
                        <div className="origin-left scale-125"><PublicationMark publication={item.publication} /></div>
                        <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                      </div>
                      <div className="relative">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Lead story</span>
                        <h3 className="font-display mt-5 max-w-xl text-3xl font-light leading-tight sm:text-5xl">{item.headline}</h3>
                        <span className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-gold">
                          Read the story
                          <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ) : (
                  <Reveal key={item.url}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex h-full min-h-[220px] flex-col justify-between bg-background p-7 transition-colors hover:bg-card">
                      <div className="flex items-start justify-between gap-5"><PublicationMark publication={item.publication} /><ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" /></div>
                      <div><span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Featured</span><h3 className="font-display mt-4 text-xl font-light leading-tight sm:text-2xl">{item.headline}</h3></div>
                    </a>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">More coverage</Reveal>
            <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {continuousCoverage.map((item, i) => (
                <Reveal key={`${item.publication}-${item.headline}`} delay={i % 3}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex h-full min-h-[240px] flex-col justify-between border-b border-r border-border bg-background p-7 transition-colors hover:bg-card">
                    <div className="flex items-start justify-between gap-4"><PublicationMark publication={item.publication} /><ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" /></div>
                    <h3 className="font-display mt-10 text-xl font-light leading-snug text-foreground">{item.headline}</h3>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={1}>
              <Link to="/insights/articles" className="mt-12 inline-flex items-center gap-3 border border-border px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-gold hover:text-gold">
                Browse all articles
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}