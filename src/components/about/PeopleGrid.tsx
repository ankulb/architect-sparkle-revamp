import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { companyLinkedin } from "@/data/about";

type Person = { name: string; role: string; image: string };

export function PeopleGrid({ people }: { people: readonly Person[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
      {people.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="group"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-card">
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <a
              href={companyLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${p.name} on LinkedIn`}
              className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 backdrop-blur-sm transition-all duration-500 hover:bg-gold hover:text-background group-hover:translate-y-0 group-hover:opacity-100"
            >
              <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </a>
          </div>
          <h3 className="font-display mt-5 text-lg font-light tracking-tight text-foreground">{p.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">{p.role}</p>
        </motion.div>
      ))}
    </div>
  );
}
