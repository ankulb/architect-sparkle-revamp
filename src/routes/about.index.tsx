import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { StorySection } from "@/components/about/StorySection";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { aboutUs } from "@/data/about";

const title = "About Us — Team One Architects";
const description =
  "Decades of design, driven by vision. Team One Architects is a Mumbai-based architecture and design firm with a 25-year legacy of creating spaces that matter.";
const url = "https://architect-sparkle-revamp.lovable.app/about";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: aboutUs.hero.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: aboutUs.hero.image },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero {...aboutUs.hero} />

        {/* Intro */}
        <section className="mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-32">
          <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Who We Are
          </Reveal>
          <Reveal
            delay={1}
            className="font-display mt-6 text-2xl font-light leading-snug tracking-tight text-foreground sm:text-3xl"
          >
            {aboutUs.intro}
          </Reveal>
        </section>

        {/* Vision & Mission */}
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-[1600px] gap-14 px-6 py-24 md:grid-cols-2 md:px-10 md:py-28">
            {aboutUs.visionMission.map((vm) => (
              <StorySection key={vm.kicker} kicker={vm.kicker}>
                {vm.body}
              </StorySection>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-28">
            <Reveal as="h2" className="font-display text-3xl font-light tracking-tight sm:text-4xl">
              Measured impact
            </Reveal>
            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {aboutUs.impact.map((s, i) => (
                <Reveal key={s.label} delay={i}>
                  <div className="font-display text-5xl font-light tracking-tight text-gold sm:text-6xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-foreground">
                    {s.label}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-28">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              What Guides Us
            </Reveal>
            <Reveal as="h2" delay={1} className="font-display mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              TOA core values
            </Reveal>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {aboutUs.values.map((v, i) => (
                <Reveal key={v.title} delay={i}>
                  <div className="h-full border border-border bg-card/40 p-8 transition-colors duration-300 hover:border-gold/50">
                    <h3 className="font-display text-xl font-light tracking-tight text-foreground">{v.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                  </div>
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
