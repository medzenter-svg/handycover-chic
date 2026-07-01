import { createFileRoute } from "@tanstack/react-router";
import { SeoCategoryPage } from "@/components/site/SeoCategoryPage";
export const Route = createFileRoute("/earbuds-zubehoer")({
  head: () => ({
    meta: [
      { title: "Earbuds Zubehör – Hüllen & Schutz für AirPods | HandyCover" },
      { name: "description", content: "Ausgewähltes Zubehör für Earbuds und AirPods: Schutzhüllen, Clips und praktische Gadgets mit direktem Amazon-Link." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: () => (
    <SeoCategoryPage
      title="Earbuds Zubehör: Schutz und Zubehör für AirPods"
      h1="Earbuds Zubehör: Schutz und Zubehör für AirPods"
      description="Ausgewähltes Zubehör für Earbuds und AirPods mit direktem Amazon-Link."
      intro="Gutes Earbuds-Zubehör schützt deine AirPods oder anderen Kopfhörer vor Kratzern und Verlust. Schutzhüllen, Clips und praktische Accessoires sorgen für längere Haltbarkeit und einfaches Handling im Alltag."
      buyingGuide="Achte bei Earbuds-Zubehör auf die genaue Modellkompatibilität. AirPods-Hüllen müssen zur jeweiligen Generation passen. Clips und Karabiner können helfen, die Kopfhörer sicher zu befestigen."
      category="airpods"
      faqs={[
        { q: "Brauche ich eine Hülle für AirPods?", a: "Eine Schutzhülle kann AirPods vor Kratzern und Stößen schützen und das Ladecase griffiger machen." },
        { q: "Passt jede AirPods-Hülle auf alle Generationen?", a: "Nein. AirPods-Hüllen sind meist modellspezifisch. Achte auf die genaue Generation (AirPods 3, AirPods Pro 2 usw.)." },
      ]}
      internalLinks={[
        { label: "iPhone Zubehör", to: "/iphone-zubehoer" },
        { label: "MagSafe Zubehör", to: "/magsafe-zubehoer" },
        { label: "Geschenkideen", to: "/geschenkideen-tech-fans" },
      ]}
    />
  ),
});
