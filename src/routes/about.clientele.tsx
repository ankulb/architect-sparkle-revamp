import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { clientele } from "@/data/about";

const title = "Clientele — Team One Architects";
const description =
  "Trusted by the best, chosen for vision. The engineering, technology and enterprise leaders who build the future with Team One Architects.";
const url = "https://architect-sparkle-revamp.lovable.app/about/clientele";

export const Route = createFileRoute("/about/clientele")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: clientele.hero.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: clientele.hero.image },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: ClientelePage,
});

function ClientelePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero {...clientele.hero} />

        <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28">
          <GridBackdrop radius={240} baseOpacity={0.4} />
          <div className="relative z-10 mx-auto max-w-[1600px]">
          {clientele.groups.map((group, gi) => (
            <div key={group.sector} className={gi > 0 ? "mt-20" : ""}>
              <Reveal as="h2" className="font-display text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                {group.sector}
              </Reveal>
              <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {group.logos.map((logo, i) => (
                  <motion.div
                    key={`${group.sector}-${i}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="flex aspect-[3/2] items-center justify-center rounded-sm bg-card p-7 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={logo}
                      alt={`${group.sector} client of Team One Architects`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
