import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { StorySection } from "@/components/about/StorySection";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { gcc } from "@/data/gcc";

const title = "GCC — Global Capability Centres | Team One Architects";
const description =
  "Building workplaces for global capabilities. TOA designs and delivers Global Capability Centre environments in India — workplace strategy, design and end-to-end delivery for WebMD, ERGO, Columbia Ship Management, Voya and Volkswagen.";
const url = "https://architect-sparkle-revamp.lovable.app/gcc";

export const Route = createFileRoute("/gcc")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: gcc.hero.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: gcc.hero.image },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: GccPage,
});

function GccPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero {...gcc.hero} />

        {/* Narrative */}
        <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <StorySection kicker="Global Capability Centres" title="A platform for how global teams work">
            {gcc.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-2xl">
                {p}
              </p>
            ))}
          </StorySection>
        </section>

        {/* GCC experience */}
        <section className="relative overflow-hidden border-t border-border bg-card/40">
          <GridBackdrop radius={240} baseOpacity={0.4} />
          <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-28">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Our GCC Experience
            </Reveal>
            <Reveal as="h2" delay={1} className="font-display mt-4 max-w-3xl text-3xl font-light tracking-tight sm:text-4xl">
              Workplaces we've shaped for global teams
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gcc.experience.map((item, i) => {
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-light tracking-tight text-foreground">
                        {item.name}
                      </h3>
                      {item.to && (
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-gold" />
                      )}
                    </div>
                    <span className="mt-auto block h-px w-0 bg-gold transition-all duration-400 group-hover:w-10 group-focus-visible:w-10" />
                  </>
                );
                return (
                  <Reveal key={item.name} delay={i % 3}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="group flex h-full min-h-[9rem] flex-col border border-border bg-background p-7 transition-colors duration-300 hover:border-gold/50"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div className="group flex h-full min-h-[9rem] flex-col border border-border bg-background p-7">
                        {inner}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
