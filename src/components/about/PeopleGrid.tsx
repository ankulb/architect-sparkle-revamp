import { motion } from "motion/react";

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
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          <h3 className="font-display mt-5 text-lg font-light tracking-tight text-foreground">{p.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">{p.role}</p>
        </motion.div>
      ))}
    </div>
  );
}
