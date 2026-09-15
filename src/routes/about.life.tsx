import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { life } from "@/data/about";

const title = "Life at TOA — Team One Architects";
const description =
  "Where spaces are built, and so are people. Inside the high-energy, ownership-driven culture of Team One Architects.";
const url = "https://architect-sparkle-revamp.lovable.app/about/life";

export const Route = createFileRoute("/about/life")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: life.hero.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: life.hero.image },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: LifePage,
});

function LifePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero {...life.hero} />

        <section className="relative overflow-hidden border-b border-border">
          <GridBackdrop cellSize={128} radius={300} baseOpacity={0.16} interactive={false} />
          <div className="relative z-10 mx-auto grid max-w-[1600px] gap-10 px-6 py-24 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:px-10 md:py-36">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              The culture behind the work
            </Reveal>
            <Reveal
              delay={1}
              className="font-display max-w-4xl text-3xl font-light leading-[1.18] text-foreground sm:text-4xl lg:text-5xl"
            >
              {life.intro}
            </Reveal>
          </div>
        </section>

        {life.blocks[0]?.image && (
          <section className="border-b border-border px-3 py-3 md:px-6 md:py-6">
            <motion.figure
              initial={{ opacity: 0, clipPath: "inset(8% 0 8% 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-[1800px] overflow-hidden"
            >
              <img
                src={life.blocks[0].image}
                alt="The Team One Architects team together at Family Day"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/8]"
              />
              <figcaption className="absolute bottom-0 left-0 border-r border-t border-border bg-background/90 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-sm">
                Together, by design
              </figcaption>
            </motion.figure>
          </section>
        )}

        <section aria-label="Life at TOA stories">
          {life.blocks.map((block, i) => (
            <article key={block.title} className="relative border-b border-border">
              <div className="mx-auto grid max-w-[1600px] gap-8 px-6 py-20 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] md:gap-16 md:px-10 md:py-28 lg:gap-28">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <Reveal
                    as="h2"
                    className="font-display mt-7 max-w-md text-3xl font-medium leading-tight text-foreground sm:text-4xl"
                  >
                    {block.title}
                  </Reveal>
                </div>

                <div className="md:border-l md:border-border md:pl-10 lg:pl-16">
                  <Reveal delay={1} className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                    {block.body}
                  </Reveal>
                  {block.bullets && (
                    <ol className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
                      {block.bullets.map((bullet, bulletIndex) => (
                        <Reveal
                          as="li"
                          key={bullet}
                          delay={bulletIndex}
                          className="min-h-32 bg-background p-5 sm:min-h-40 sm:p-6"
                        >
                          <span className="font-mono text-[10px] text-gold">
                            {String(bulletIndex + 1).padStart(2, "0")}
                          </span>
                          <p className="mt-6 text-sm leading-relaxed text-foreground">{bullet}</p>
                        </Reveal>
                      ))}
                    </ol>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="border-b border-border bg-card/40">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              {life.mindset.title}
            </Reveal>
            <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {life.mindset.items.map((item, i) => (
                <Reveal key={item} delay={i} className="min-h-44 bg-card p-6 md:p-8">
                  <span className="font-mono text-[10px] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-display mt-12 text-2xl font-medium leading-tight text-foreground">{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why TOA */}
        <section className="relative overflow-hidden border-t border-border bg-card/40">
          <GridBackdrop cellSize={112} radius={260} baseOpacity={0.22} interactive={false} />
          <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-28 text-center md:px-10 md:py-36">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              {life.why.title}
            </Reveal>
            <Reveal
              delay={1}
              className="font-display mt-6 text-3xl font-light leading-tight tracking-tight text-foreground sm:text-5xl"
            >
              {life.why.body}
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
