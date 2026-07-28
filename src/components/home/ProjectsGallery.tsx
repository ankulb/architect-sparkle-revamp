import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/data/home";
import { Reveal } from "@/components/Reveal";

function slugFromHref(href: string) {
  return href.replace(/\/$/, "").split("/").pop() ?? "";
}

type Project = (typeof projects)[number];

const INTERIOR_CATEGORIES = new Set(["Corporate Interiors"]);

function isInterior(p: Project) {
  return INTERIOR_CATEGORIES.has(p.category);
}

type Filter = "all" | "architecture" | "interiors";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "architecture", label: "Architecture" },
  { id: "interiors", label: "Interiors" },
];

export function ProjectsGallery() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = projects
    .filter((p) => {
      if (filter === "architecture") return !isInterior(p);
      if (filter === "interiors") return isInterior(p);
      return true;
    })
    .slice(0, 6);

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-10 md:pt-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.24em] text-muted-foreground">
                  01
                </span>
                <span className="h-px w-8 bg-gold/60" />
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                  Featured Projects
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-5xl">
                Selected works across scales
              </h2>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <div className="flex flex-wrap items-center gap-2">
              {FILTERS.map((f) => {
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFilter(f.id)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                      active
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-12 pb-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 md:pt-16">
          {filtered.map((project, i) => (
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

      <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 md:pb-32">
        <Reveal>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
