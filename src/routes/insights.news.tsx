import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { featuredPress, pressCoverage, type PressItem } from "@/data/press";
import pressImage from "@/assets/dynamic/press.jpg.asset.json";

const title = "News & Media — Team One Architects";
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

function PublicationMark({ item }: { item: PressItem }) {
  if (item.logo) {
    return <img src={item.logo} alt={`${item.publication} logo`} className="max-h-10 max-w-[190px] object-contain object-left" />;
  }
  return <span className="font-display text-xl font-semibold text-foreground">{item.publication}</span>;
}

function NewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero eyebrow="Insights / News & Media" title="TOA in the press" lead="Selected conversations on architecture, workplaces, cities and the ideas shaping the built environment." image={pressImage.url} phrases={["Workplace futures", "Sustainable urbanism", "Human-centred design"]} />

        <section className="relative border-t border-border">
          <GridBackdrop />
          <div className="relative mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Featured coverage</Reveal>
            <Reveal as="h2" delay={1} className="font-display mt-5 max-w-3xl text-3xl font-light tracking-tight sm:text-5xl">Perspectives carried by leading publications</Reveal>

            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-2">
              {featuredPress.map((item, i) => (
                <Reveal key={item.url} className={i === 0 ? "lg:row-span-2" : ""}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className={`group flex h-full flex-col justify-between bg-background p-7 transition-colors hover:bg-card ${i === 0 ? "min-h-[420px] md:p-12" : "min-h-[240px]"}`}>
                    <div className="flex items-start justify-between gap-5"><PublicationMark item={item} /><ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" /></div>
                    <div><span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Featured</span><h3 className={`font-display mt-4 font-light leading-tight ${i === 0 ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}>{item.headline}</h3></div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">More Coverages</Reveal>
            <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {pressCoverage.map((item, i) => (
                <Reveal key={item.url} delay={i % 3}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-[260px] flex-col justify-between border-b border-r border-border bg-background p-7 transition-colors hover:bg-card">
                    <div className="flex items-start justify-between gap-4"><PublicationMark item={item} /><ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" /></div>
                    <h3 className="font-display mt-12 text-xl font-light leading-snug text-foreground">{item.headline}</h3>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}