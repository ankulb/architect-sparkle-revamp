import { getPublicationMark } from "@/data/publicationMarks";
import { cn } from "@/lib/utils";

export function PublicationMark({ publication, size = "md", className }: { publication: string; size?: "sm" | "md"; className?: string }) {
  const mark = getPublicationMark(publication);
  if (mark) {
    return (
      <span
        className={cn(
          "flex shrink-0 items-center px-3 py-2 ring-1 ring-border",
          mark.tone === "dark" ? "bg-[hsl(240_6%_8%)]" : "bg-[hsl(0_0%_100%)]",
          size === "sm" ? "h-10 w-40" : "h-12 w-[min(190px,75%)]",
          className,
        )}
      >
        <img src={mark.url} alt={`${publication} logo`} loading="lazy" className="max-h-full max-w-full object-contain object-left" />
      </span>
    );
  }
  return (
    <span className={cn(size === "sm" ? "text-xs font-semibold uppercase tracking-[0.22em] text-gold" : "font-display text-xl font-semibold text-foreground", className)}>
      {publication}
    </span>
  );
}
