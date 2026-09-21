import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mic2, Play, Video } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { mediaCoverage, type MediaCoverageItem, type MediaCoverageType } from "@/data/mediaCoverage";
import pressImage from "@/assets/dynamic/press.jpg.asset.json";

const title = "Videos, Podcasts & Interviews — Team One Architects";
const description = "Watch and listen to selected conversations, interviews and media appearances featuring Team One Architects.";
const url = "https://architect-sparkle-revamp.lovable.app/insights/media";

export const Route = createFileRoute("/insights/media")({
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
  component: MediaPage,
});

const sectionLabels: Record<MediaCoverageType, string> = {
  video: "Videos",
  podcast: "Podcasts",
  interview: "Interviews",
};

const sectionIcons = {
  video: Video,
  podcast: Mic2,
  interview: Mic2,
};

function MediaCard({ item }: { item: MediaCoverageItem }) {
  return (
    <article className="group grid border border-border bg-background lg:grid-cols-[1.25fr_0.75fr]">
      {item.videoId ? (
        <div className="relative aspect-video overflow-hidden bg-card lg:aspect-auto lg:min-h-[420px]">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.videoId}`}
            title={item.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center bg-card lg:aspect-auto lg:min-h-[420px]">
          <Play className="h-12 w-12 text-gold" />
        </div>
      )}
      <div className="flex min-h-[280px] flex-col justify-between p-7 md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{item.publication}</p>
          <h3 className="font-display mt-6 text-3xl font-light leading-tight sm:text-4xl">{item.title}</h3>
        </div>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-gold">
          Open original
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function MediaPage() {
  const sections = (["video", "podcast", "interview"] as const)
    .map((type) => ({ type, items: mediaCoverage.filter((item) => item.type === type) }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero eyebrow="Insights / Media" title="Conversations beyond the page" lead="Selected films, podcasts and interviews exploring architecture, cities, workplaces and the ideas shaping them." image={pressImage.url} phrases={["Watch", "Listen", "Discover"]} />
        {sections.map(({ type, items }) => {
          const Icon = sectionIcons[type];
          return (
            <section key={type} className="relative overflow-hidden border-t border-border">
              <GridBackdrop cellSize={120} radius={280} baseOpacity={0.18} interactive={false} />
              <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
                <Reveal className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-gold" />
                  <h2 className="font-display text-4xl font-light sm:text-5xl">{sectionLabels[type]}</h2>
                </Reveal>
                <div className="mt-12 space-y-8">
                  {items.map((item, index) => (
                    <Reveal key={item.url} delay={index % 3}>
                      <MediaCard item={item} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}