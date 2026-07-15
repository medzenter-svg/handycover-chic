import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Bestsellers } from "@/components/site/Bestsellers";
import { TrustSection } from "@/components/site/TrustSection";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { HomeFaq } from "@/components/site/HomeFaq";
import { Guides } from "@/components/site/Guides";
import { TrustAffiliate } from "@/components/site/TrustAffiliate";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HandyCover – Handyhüllen, MagSafe & Smartphone-Zubehör" },
      {
        name: "description",
        content:
          "HandyCover vergleicht Handyhüllen, MagSafe-Zubehör, Displayschutz, Ladegeräte und Powerbanks. Kaufberatung, Produktauswahl und direkter Amazon-Preischeck.",
      },
      { property: "og:title", content: "HandyCover – Handyhüllen, MagSafe & Smartphone-Zubehör" },
      {
        property: "og:description",
        content:
          "Kaufberatung und ausgewählte Produkte rund um Handyhüllen, MagSafe, Displayschutz, Ladegeräte und Powerbanks.",
      },
      { property: "og:url", content: "https://handycover.com/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "HandyCover" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [
      { rel: "canonical", href: "https://handycover.com/" },
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HandyCover",
    url: "https://handycover.com/",
    description:
      "Unabhängige Kaufberatung und Produktauswahl für Handyhüllen, MagSafe-Zubehör, Displayschutz, Ladegeräte und Powerbanks.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HandyCover",
    url: "https://handycover.com/",
    inLanguage: "de-DE",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="w-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 py-2 px-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-3">
          <span className="text-sm font-bold text-white">🐾 15 % unserer Einnahmen spenden wir an Tierheime.</span>
        </div>
      </div>
      <main className="pb-10">
        <Hero />
        <Categories />
        <Bestsellers />
        <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6">
          <img
            src="/assets/tierheim-banner.webp"
            alt="15 % unserer Einnahmen spenden wir an Tierheime"
            className="w-full rounded-2xl object-cover"
          />
        </div>
        <TrustSection />
        <ComparisonTable />
        <TrustAffiliate />
        <Guides />
        <HomeFaq />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </div>
  );
}
