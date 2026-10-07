import gccHeroImage from "@/assets/projects/columbia-ship-management/dsc_7922.jpg.asset.json";
import gccTileImage from "@/assets/projects/columbia-ship-management/dsc_7864.jpg.asset.json";

export const gcc = {
  hero: {
    eyebrow: "Global Capability Centres",
    title: "Building workplaces for global capabilities.",
    lead: "Workplace strategy, design and end-to-end delivery for GCC environments across India.",
    image: gccHeroImage.url,
  },
  paragraphs: [
    "As organisations establish and scale Global Capability Centres in India, the workplace becomes more than an office — it becomes a platform for collaboration, innovation, talent and global connectivity.",
    "TOA brings together workplace strategy, design and end-to-end delivery to create GCC environments that translate global standards into workplaces designed for the Indian context. From technology-enabled collaboration and agile planning to employee experience, scalability and brand expression, we design spaces that support how global teams work, connect and grow.",
  ],
  tileImage: gccTileImage.url,
  experience: [
    { name: "WebMD", to: undefined as string | undefined },
    { name: "ERGO Technology & Services", to: "/portfolio/ergo-technologies" },
    { name: "Columbia Ship Management", to: "/portfolio/columbia-ship-management" },
    { name: "Voya", to: undefined as string | undefined },
    { name: "Volkswagen", to: "/portfolio/volkswagen" },
    { name: "Generac", to: "/portfolio/generac-pune" },
  ],
};
