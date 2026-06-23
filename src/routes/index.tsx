import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Bestsellers } from "@/components/site/Bestsellers";
import { Guides } from "@/components/site/Guides";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HandyCover – Smartphone Zubehör, ausgewählt für dich" },
      {
        name: "description",
        content:
          "Hüllen, Ladegeräte, MagSafe Accessoires, Powerbanks und mehr – sorgfältig ausgewählt und direkt bei Amazon erhältlich.",
      },
      { property: "og:title", content: "HandyCover – Smartphone Zubehör, ausgewählt für dich" },
      {
        property: "og:description",
        content: "Stilvoll. Praktisch. Ausgewählt. Die besten Amazon Picks für dein Smartphone.",
      },
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
        <Bestsellers />
        <Guides />
      </main>
      <Footer />
    </div>
  );
}
