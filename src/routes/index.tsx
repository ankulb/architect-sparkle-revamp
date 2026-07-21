import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { IntroOverlay } from "@/components/home/IntroOverlay";
import { ExpertiseDivisions } from "@/components/home/ExpertiseDivisions";
import { DynamicSections } from "@/components/home/DynamicSections";
import { ProjectsGallery } from "@/components/home/ProjectsGallery";
import { Careers } from "@/components/home/Careers";

const title = "Team One Architects | Architecture, Interiors & Engineering";
const description =
  "TOA designs the future through Architecture, Interiors and Engineering — luxury housing, commercial, data centres and corporate interiors. Mumbai, worldwide since 2001.";
const ogImage =
  "https://teamonearchitects.com/wp-content/uploads/2026/03/DSC07321-HDR-650x650.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <IntroOverlay />
      <Header />
      <main>
        <Hero />
        <ExpertiseDivisions />
        <DynamicSections />
        <ProjectsGallery />
        <Careers />
      </main>
      <Footer />
    </div>
  );
}
