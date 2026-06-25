import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function StorySection({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div>
      {kicker && (
        <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
          {kicker}
        </Reveal>
      )}
      {title && (
        <Reveal
          as="h2"
          delay={1}
          className="font-display mt-4 text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl"
        >
          {title}
        </Reveal>
      )}
      <Reveal delay={2} className="mt-5 text-base leading-relaxed text-muted-foreground">
        {children}
      </Reveal>
    </div>
  );
}
