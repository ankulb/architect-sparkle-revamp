import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { projects } from "@/data/home";
import { Reveal } from "@/components/Reveal";

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className="group relative block overflow-hidden bg-card"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="aspect-square w-full object-cover opacity-65 brightness-75 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:brightness-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
          {project.category}
        </span>
        <h3 className="font-display mt-1.5 text-xl font-normal tracking-tight text-foreground">
          {project.title}
        </h3>
      </div>
    </a>
  );
}

export function ProjectsGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yA = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], [-40, 90]);
  const yC = useTransform(scrollYProgress, [0, 1], [80, -100]);

  const columns = [
    { items: projects.slice(0, 3), y: yA },
    { items: projects.slice(3, 6), y: yB },
    { items: projects.slice(6, 9), y: yC },
  ];

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-10 md:pt-36">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Selected work</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-5xl">
                Featured projects
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <a
              href="https://teamonearchitects.com/portfolio/"
              className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              View all projects
              <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
            </a>
          </Reveal>
        </div>
      </div>

      <div ref={ref} className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        {/* Mobile: simple grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* Desktop: parallax columns */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {columns.map((col, i) => (
            <motion.div key={i} style={{ y: col.y }} className="flex flex-col gap-6">
              {col.items.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
