import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { LogoMarquee } from "@/components/about/LogoMarquee";
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
            <div key={group.sector} className={gi > 0 ? "mt-16" : ""}>
              <Reveal as="h2" className="font-display mb-8 text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                {group.sector}
              </Reveal>
              <LogoMarquee
                logos={group.logos}
                label={group.sector}
                direction={gi % 2 === 0 ? "left" : "right"}
                duration={Math.max(24, group.logos.length * 6)}
              />
            </div>
          ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
