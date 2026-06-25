import { useRef } from "react";
import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { BlueprintReveal } from "@/components/graphics/BlueprintReveal";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects, projectDetails } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ params }) => {
    const detail = projectDetails[params.slug];
    const meta = detail ?? projects.find((p) => p.slug === params.slug);
    const title = `${meta?.title ?? "Project"} — Team One Architects`;
    const description =
      detail?.description[0] ??
      "A project by Team One Architects — architecture, interiors and urban design that endures.";
    const url = `https://architect-sparkle-revamp.lovable.app/portfolio/${params.slug}`;
    const image = meta?.image ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        ...(image ? [{ property: "og:image", content: image }] : []),
        { name: "twitter:card", content: "summary_large_image" },
        ...(image ? [{ name: "twitter:image", content: image }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">404</p>
      <h1 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
        This project could not be found
      </h1>
      <Link
        to="/portfolio"
        className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to portfolio
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
        <h1 className="font-display text-2xl font-light tracking-tight">Something went wrong</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="text-sm font-medium uppercase tracking-[0.16em] text-gold"
        >
          Retry
        </button>
      </div>
    );
  },
});

function GalleryImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const wide = index % 3 === 0;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-card ${wide ? "md:col-span-2" : ""}`}
    >
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full scale-110 object-cover"
      />
    </div>
  );
}

function ProjectPage() {
  const { slug } = Route.useParams();
  const detail = projectDetails[slug];
  const meta = detail ?? projects.find((p) => p.slug === slug);

  if (!meta) throw notFound();

  const more = projects.filter((p) => p.slug !== slug).slice(0, 3);

  const metaItems = detail
    ? [
        ["Client", detail.client],
        ["Location", detail.location],
        ["Year", detail.year],
        ["Sector", detail.sector],
        ["Area", detail.area],
        ["Status", detail.status],
        ["Service", detail.service],
        ["Category", detail.category],
      ].filter(([, v]) => Boolean(v))
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero
          eyebrow={meta.category}
          title={meta.title}
          lead={detail?.description[0] ?? "A Team One Architects project."}
          image={meta.image}
        />

        {/* Back link */}
        <div className="mx-auto max-w-[1600px] px-6 pt-10 md:px-10">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to portfolio
          </Link>
        </div>

        {detail ? (
          <>
            {/* Meta + overview */}
            <section className="relative overflow-hidden">
              <BlueprintReveal variant="elevation" opacity={0.35} />
              <div className="relative z-10 mx-auto grid max-w-[1600px] gap-14 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
                <div className="md:col-span-4">
                  <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
                    Project facts
                  </Reveal>
                  <dl className="mt-8 space-y-5">
                    {metaItems.map(([label, value], i) => (
                      <Reveal key={label} delay={i} className="border-b border-border pb-4">
                        <dt className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          {label}
                        </dt>
                        <dd className="font-display mt-1 text-lg font-light tracking-tight text-foreground">
                          {value}
                        </dd>
                      </Reveal>
                    ))}
                  </dl>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                  <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
                    Overview
                  </Reveal>
                  <div className="mt-6 space-y-6">
                    {detail.description.map((para, i) => (
                      <Reveal
                        key={i}
                        delay={i}
                        as="p"
                        className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                      >
                        {para}
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Gallery */}
            <section className="border-t border-border">
              <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
                <div className="grid auto-rows-[260px] grid-cols-1 gap-5 sm:auto-rows-[340px] md:grid-cols-2 lg:auto-rows-[420px]">
                  {detail.gallery.map((src, i) => (
                    <GalleryImage key={src} src={src} alt={`${detail.title} — view ${i + 1}`} index={i} />
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="relative overflow-hidden border-t border-border">
            <GridBackdrop glow corners radius={260} baseOpacity={0.4} />
            <div className="relative z-10 mx-auto max-w-[900px] px-6 py-28 text-center md:px-10 md:py-40">
              <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                {meta.category}
              </Reveal>
              <Reveal
                delay={1}
                as="h2"
                className="font-display mt-6 text-3xl font-light tracking-tight sm:text-4xl"
              >
                Full case study coming soon
              </Reveal>
              <Reveal delay={2} as="p" className="mt-5 text-base leading-relaxed text-muted-foreground">
                We're putting the finishing touches on this project's story. In the meantime, explore
                the rest of our work.
              </Reveal>
            </div>
          </section>
        )}

        {/* More projects */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
            <div className="flex items-end justify-between">
              <Reveal as="h2" className="font-display text-2xl font-light tracking-tight sm:text-3xl">
                More projects
              </Reveal>
              <Reveal delay={1}>
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  View all
                  <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
                </Link>
              </Reveal>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
