import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { PeopleGrid } from "@/components/about/PeopleGrid";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { anchors } from "@/data/about";

const title = "Anchors of TOA — Team One Architects";
const description =
  "Meet the anchors of Team One Architects — the stewards guiding culture, craft and continuity across the practice.";
const url = "https://architect-sparkle-revamp.lovable.app/about/anchors";

export const Route = createFileRoute("/about/anchors")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: anchors.hero.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: anchors.hero.image },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: AnchorsPage,
});

function AnchorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero {...anchors.hero} />
        <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28">
          <GridBackdrop radius={240} baseOpacity={0.38} />
          <div className="relative z-10 mx-auto max-w-[1600px]">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Anchors of TOA
            </Reveal>
            <Reveal as="h2" delay={1} className="font-display mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Stewards of the practice
            </Reveal>
            <div className="mt-14">
              <PeopleGrid people={anchors.people} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
