import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { board } from "@/data/about";

const title = "Board of Directors — Team One Architects";
const description =
  "Meet the directors guiding Team One Architects across design, workplace strategy, craft, stewardship and sustainability.";
const url = "https://architect-sparkle-revamp.lovable.app/about/board";

export const Route = createFileRoute("/about/board")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: board.hero.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: board.hero.image },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: BoardPage,
});

function BoardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero {...board.hero} />
        <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
          <GridBackdrop radius={240} baseOpacity={0.38} />
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              The Board
            </Reveal>
            <Reveal as="h2" delay={1} className="font-display mt-4 max-w-3xl text-3xl font-light tracking-tight sm:text-4xl">
              The leadership of the practice
            </Reveal>

            <div className="mt-16 space-y-20 md:space-y-28">
              {board.directors.map((person, index) => (
                <Reveal key={person.name}>
                  <article
                    className={`grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 ${
                      index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                    }`}
                  >
                    <figure className="relative overflow-hidden bg-card">
                      <div className="aspect-[4/5] w-full">
                        <img
                          src={person.image}
                          alt={person.name}
                          loading="lazy"
                          className="h-full w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
                        />
                      </div>
                    </figure>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{person.role}</p>
                      <h3 className="font-display mt-4 text-4xl font-light tracking-tight sm:text-5xl">{person.name}</h3>
                      <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                        {person.summary}
                      </p>

                      <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
                        {person.facts.map((fact) => (
                          <p key={fact} className="bg-background px-5 py-4 text-sm font-light text-foreground">
                            {fact}
                          </p>
                        ))}
                      </div>

                      <div className="mt-8 space-y-5 text-[15px] font-light leading-relaxed text-muted-foreground">
                        {person.bio.map((paragraph) => (
                          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                      </div>

                      {"linkedin" in person && person.linkedin ? (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-8 inline-flex items-center gap-3 border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-gold hover:text-gold"
                        >
                          <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                          Connect on LinkedIn
                        </a>
                      ) : null}
                    </div>
                  </article>
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
