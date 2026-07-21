import { Link } from "@tanstack/react-router";
import { projects } from "@/data/home";
import { Reveal } from "@/components/Reveal";

function slugFromHref(href: string) {
  return href.replace(/\/$/, "").split("/").pop() ?? "";
}

export function ProjectsGallery() {
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-10 md:pt-36">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Selected work
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-5xl">
                Featured projects
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              View all projects
              <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: slugFromHref(project.href) }}
                className="group relative block overflow-hidden bg-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover opacity-70 brightness-75 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
                    {project.category}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-normal tracking-tight text-foreground">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
