import { coverageIndex, type CoverageItem, type CoverageMonth } from "@/data/coverageIndex";
import { getPublicationMark } from "@/data/publicationMarks";

type Story = Pick<CoverageItem, "headline" | "publication" | "url">;

// Treat syndicated announcements and their social echoes as one story, while
// leaving unrelated reporting (even from the same month) independent.
export function storyKey(item: Story): string {
  const headline = item.headline.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (/columbia/.test(headline) && /gcc|global capability cent|ship management|shipmanagement/.test(headline)) return "columbia-gcc";
  if (/generac/.test(headline) && /gcc|global capability cent|india operations|india presence/.test(headline)) return "generac-gcc";
  if (/toa|team one architects/.test(headline) && /medical|neet|university campus|26 years|foundation day|dedicated campus/.test(headline)) return "toa-medical-campus";
  // Truncated social posts share their source link's publisher and story prefix.
  if (/^how indian brands are embedding sustainability at the core/.test(headline)) return "sustainability-brands";
  if (/^budget 2026 industry leaders call for execution certainty/.test(headline)) return "budget-industry-leaders";
  return headline;
}

const isOnline = (edition: string) => edition.toLowerCase() === "online";

function quality(item: CoverageItem): number {
  return (item.url ? 8 : 0) + (isOnline(item.edition) ? 4 : 0) + (item.tier === "major" ? 2 : 0);
}

export function isLogoCoverage(item: Story): boolean {
  return Boolean(getPublicationMark(item.publication));
}

/** Preserve month order and choose the strongest logo-backed original for each story. */
export const curatedCoverage: CoverageMonth[] = (() => {
  const best = new Map<string, CoverageItem>();
  for (const group of coverageIndex) {
    for (const item of group.items) {
      if (!isLogoCoverage(item)) continue;
      const key = storyKey(item);
      const previous = best.get(key);
      if (!previous || quality(item) > quality(previous)) best.set(key, item);
    }
  }
  const shown = new Set(best.values());
  return coverageIndex.map((group) => ({
    month: group.month,
    items: group.items.filter((item) => shown.has(item)),
  })).filter((group) => group.items.length > 0);
})();