import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Bestsellers } from "@/components/site/Bestsellers";
import { TrustSection } from "@/components/site/TrustSection";
import { AccessoryFinder } from "@/components/site/AccessoryFinder";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { HomeFaq } from "@/components/site/HomeFaq";
import { Guides } from "@/components/site/Guides";
import { TrustAffiliate } from "@/components/site/TrustAffiliate";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HandyCover – Smartphone Zubehör, Hüllen & Amazon Picks" },
      {
        name: "description",
        content:
          "Ausgewähltes Smartphone-Zubehör, Handyhüllen, MagSafe, Displayschutz, Ladegeräte und Gadgets mit direktem Amazon-Preischeck und Kaufberatung.",
      },
      { property: "og:title", content: "HandyCover – Smartphone Zubehör, Hüllen & Amazon Picks" },
      {
        property: "og:description",
        content: "Ausgewähltes Smartphone-Zubehör mit direktem Amazon-Preischeck und Kaufberatung.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-10">
        <Hero />
        <Categories />
        <AccessoryFinder />
        <Bestsellers />
        <TrustSection />
        <ComparisonTable />
        <TrustAffiliate />
        <Guides />
        <HomeFaq />
      </main>
      <Footer />
    </div>
  );
}
