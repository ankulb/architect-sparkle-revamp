import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { PeopleGrid } from "@/components/about/PeopleGrid";
import { Reveal } from "@/components/Reveal";
import { team } from "@/data/about";

const title = "Our Team — Team One Architects";
const description =
  "The people behind the practice — the core team and emerging leaders driving Team One Architects forward.";
const url = "https://architect-sparkle-revamp.lovable.app/about/team";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: team.hero.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: team.hero.image },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero {...team.hero} />

        <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-28">
          <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Core Team
          </Reveal>
          <Reveal as="h2" delay={1} className="font-display mt-4 text-3xl font-light tracking-tight sm:text-4xl">
            Leadership at the helm
          </Reveal>
          <div className="mt-14">
            <PeopleGrid people={team.core} />
          </div>
        </section>

        <section className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-28">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Emerging Leaders
            </Reveal>
            <Reveal as="h2" delay={1} className="font-display mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              The next generation
            </Reveal>
            <div className="mt-14">
              <PeopleGrid people={team.emerging} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
