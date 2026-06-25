import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { StorySection } from "@/components/about/StorySection";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { csr } from "@/data/about";

const title = "CSR — Team One Architects";
const description =
  "Our commitment to social impact. Team One Architects partners with foundations across education, community development and infrastructure.";
const url = "https://architect-sparkle-revamp.lovable.app/about/csr";

export const Route = createFileRoute("/about/csr")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: csr.hero.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: csr.hero.image },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: CsrPage,
});

function CsrPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero {...csr.hero} />

        {/* Objective + images */}
        <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-28">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <StorySection kicker={csr.objective.kicker} title="Building stronger foundations">
              {csr.objective.body}
            </StorySection>
            <div className="grid gap-5">
              {csr.images.map((img, i) => (
                <Reveal key={img} delay={i}>
                  <img
                    src={img}
                    alt="Team One Architects CSR initiative"
                    loading="lazy"
                    className="w-full rounded-sm object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="relative overflow-hidden border-t border-border bg-card/40">
          <GridBackdrop radius={240} baseOpacity={0.4} />
          <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-28">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Our Partners
            </Reveal>
            <Reveal as="h2" delay={1} className="font-display mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Foundations we stand with
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {csr.partners.map((p, i) => {
                const Wrapper = p.href ? motion.a : motion.div;
                return (
                  <Wrapper
                    key={p.name}
                    {...(p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: (i % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex h-full flex-col border border-border bg-background p-7 transition-colors duration-300 hover:border-gold/50"
                  >
                    {p.logo && (
                      <div className="mb-5 flex h-12 items-center">
                        <img
                          src={p.logo}
                          alt={`${p.name} logo`}
                          loading="lazy"
                          className="max-h-12 w-auto max-w-[160px] object-contain opacity-80 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                        />
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-light tracking-tight text-foreground">{p.name}</h3>
                      {p.href && (
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-gold" />
                      )}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </Wrapper>
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
