import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project.slug }}
      className="group relative block aspect-[4/3] overflow-hidden bg-card"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />

      {/* Corner index tick */}
      <span className="absolute left-5 top-5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-foreground/60">
        {project.category === "Corporate Interiors" ? "Interiors" : "Architecture"}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6">
        {project.location && (
          <span className="block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
            {project.location} — India
          </span>
        )}
        <h3 className="font-display mt-1 text-xl font-normal tracking-tight text-foreground sm:text-2xl">
          {project.title}
        </h3>
        <span className="mt-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
          View project
          <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-12" />
        </span>
      </div>
    </Link>
  );
}
