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

        {/* Intro */}
        <section className="mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-32">
          <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Where spaces are built. And so are people.
          </Reveal>
          <Reveal
            delay={1}
            className="font-display mt-6 text-2xl font-light leading-snug tracking-tight text-foreground sm:text-3xl"
          >
            {life.intro}
          </Reveal>
        </section>

        {/* Alternating narrative blocks */}
        {life.blocks.map((block, i) => (
          <section key={block.title} className={`border-t border-border ${i % 2 === 1 ? "bg-card/40" : ""}`}>
            <div
              className={`mx-auto grid max-w-[1600px] items-center gap-12 px-6 py-20 md:px-10 md:py-24 ${
                block.image ? "md:grid-cols-2" : "md:grid-cols-1"
              }`}
            >
              <div className={block.image && i % 2 === 1 ? "md:order-2" : ""}>
                <Reveal as="h2" className="font-display text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                  {block.title}
                </Reveal>
                <Reveal delay={1} className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {block.body}
                </Reveal>
                {block.bullets && (
                  <ul className="mt-7 space-y-3">
                    {block.bullets.map((b, bi) => (
                      <Reveal as="li" key={b} delay={bi} className="flex items-start gap-3 text-foreground">
                        <span className="mt-2.5 h-px w-6 shrink-0 bg-gold" />
                        <span className="text-sm leading-relaxed">{b}</span>
                      </Reveal>
                    ))}
                  </ul>
                )}
              </div>

              {block.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 1.06 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-sm"
                >
                  <img src={block.image} alt={block.title} loading="lazy" className="h-full w-full object-cover" />
                </motion.div>
              )}
            </div>
          </section>
        ))}

        {/* Mindset */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-28">
            <Reveal as="h2" className="font-display text-3xl font-light tracking-tight sm:text-4xl">
              {life.mindset.title}
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {life.mindset.items.map((item, i) => (
                <Reveal key={item} delay={i}>
                  <div className="h-full bg-background p-8">
                    <div className="font-display text-3xl font-light text-gold">{String(i + 1).padStart(2, "0")}</div>
                    <p className="mt-5 text-base leading-snug text-foreground">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why TOA */}
        <section className="relative overflow-hidden border-t border-border bg-card/40">
          <GridBackdrop glow radius={260} baseOpacity={0.4} />
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
