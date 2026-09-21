export type MediaCoverageType = "video" | "podcast" | "interview";

export type MediaCoverageItem = {
  type: MediaCoverageType;
  publication: string;
  title: string;
  url: string;
  videoId?: string;
};

export const mediaCoverage: MediaCoverageItem[] = [
  {
    type: "video",
    publication: "Magicbricks",
    title: "The Property Show: Investing in Real Estate Property vs REIT",
    url: "https://www.youtube.com/watch?v=X5iiR5cFlLY",
    videoId: "X5iiR5cFlLY",
  },
];