import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { awardImages, awardsHero, awardsTimeline } from "@/data/awards";

const title = "Awards & Recognition — Team One Architects";
const description =
  "Explore Team One Architects' awards and recognitions across architecture, interior design, project management and industry leadership.";
const url = "https://architect-sparkle-revamp.lovable.app/insights/awards";

export const Route = createFileRoute("/insights/awards")({
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
  component: AwardsPage,
});

function AwardsPage() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow="Insights / Awards & Recognition"
          title="Recognition earned through purpose and practice"
          lead="A record of design distinction, industry contribution and project excellence across the studio's journey."
          image={awardsHero.image}
          phrases={["Architecture", "Interior design", "Project excellence"]}
        />

        <section className="relative overflow-hidden border-b border-border">
          <GridBackdrop cellSize={120} radius={300} baseOpacity={0.18} interactive={false} />
          <div className="relative z-10 mx-auto grid max-w-[1600px] gap-10 px-6 py-20 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-32">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Awards & Recognitions
            </Reveal>
            <Reveal delay={1} className="font-display max-w-4xl text-3xl font-light leading-[1.2] sm:text-4xl lg:text-5xl">
              Milestones that reflect the ideas, collaborations and technical rigour behind our work.
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border px-3 py-3 md:px-6 md:py-6">
          <div className="mx-auto grid max-w-[1800px] gap-3 md:grid-cols-[0.82fr_1fr_1.18fr] md:gap-6">
            {awardImages.map((image, index) => (
              <motion.figure
                key={image.src}
                initial={reduce ? { opacity: 1 } : { opacity: 0, clipPath: "inset(10% 0 10% 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden bg-card"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <figcaption className="absolute bottom-0 left-0 border-r border-t border-border bg-background/90 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
                  {image.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="awards-timeline-title" className="relative overflow-hidden">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
            <div className="grid gap-12 lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
                  The record
                </Reveal>
                <Reveal
                  as="h2"
                  id="awards-timeline-title"
                  delay={1}
                  className="font-display mt-5 text-4xl font-light leading-tight sm:text-5xl"
                >
                  A timeline of recognition
                </Reveal>
              </div>

              <ol className="border-t border-border">
                {awardsTimeline.map((period, periodIndex) => (
                  <motion.li
                    key={period.year}
                    initial={reduce ? false : { opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, delay: periodIndex % 2 === 0 ? 0 : 0.08 }}
                    className="grid gap-6 border-b border-border py-10 sm:grid-cols-[150px_1fr] md:py-14"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-2 h-px w-8 bg-gold" />
                      <span className="font-display text-4xl font-medium text-gold sm:text-5xl">{period.year}</span>
                    </div>
                    <ul className="divide-y divide-border">
                      {period.entries.map((entry) => (
                        <li key={entry} className="py-4 first:pt-0 last:pb-0">
                          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">{entry}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}