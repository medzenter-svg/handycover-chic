import { createFileRoute } from "@tanstack/react-router";
import { RatgeberArticle } from "@/components/site/RatgeberArticle";
export const Route = createFileRoute("/ratgeber/powerbank-kaufen-worauf-achten")({
  head: () => ({ meta: [
    { title: "Powerbank kaufen: Worauf achten? Kaufberatung | HandyCover" },
    { name: "description", content: "Kapazität, USB-C, Schnellladen, Gewicht und Preis: Worauf du beim Kauf einer Powerbank achten solltest." },
    { name: "robots", content: "index, follow" },
  ]}),
  component: () => (
    <RatgeberArticle
      title="Powerbank kaufen: Worauf achten?"
      description="Kapazität, USB-C, Schnellladen, Gewicht und Preis – die wichtigsten Kriterien beim Powerbank-Kauf."
      intro="Eine Powerbank ist besonders praktisch, wenn unterwegs keine Steckdose verfügbar ist. Beim Kauf gibt es einige wichtige Punkte zu beachten, damit die Powerbank wirklich zu den eigenen Bedürfnissen passt."
      publishDate="Juli 2025"
      category="Powerbanks"
      sections={[
        { heading: "Kapazität: Wie viel mAh brauche ich?", content: "Die Kapazität einer Powerbank wird in mAh angegeben. Für ein Smartphone mit ca. 4.000 mAh Akku reichen 5.000 bis 10.000 mAh für eine bis zwei Ladungen. Für Reisen oder mehrere Geräte kann eine Kapazität von 20.000 mAh sinnvoll sein." },
        { heading: "USB-C und Schnellladen: Wichtig für moderne Geräte", content: "Moderne Powerbanks sollten USB-C unterstützen. Schnellladen (Power Delivery) ermöglicht schnelleres Aufladen von Smartphones und Tablets. Achte auf die Ladeleistung in Watt." },
        { heading: "Größe und Gewicht: Kompakt für unterwegs", content: "Für den Alltag und kurze Reisen sind kompakte Powerbanks mit 5.000 bis 10.000 mAh praktischer. Größere Kapazitäten bedeuten mehr Gewicht und Volumen." },
        { heading: "Anschlüsse: Mehrere Geräte gleichzeitig laden", content: "Wer mehrere Geräte gleichzeitig laden möchte, sollte auf mehrere Anschlüsse achten. Viele Powerbanks bieten USB-A und USB-C Anschlüsse." },
      ]}
      faqs={[
        { q: "Wie viel mAh braucht eine Powerbank für ein Smartphone?", a: "Für eine vollständige Ladung eines modernen Smartphones reichen in der Regel 5.000 bis 10.000 mAh." },
        { q: "Darf man Powerbanks im Flugzeug mitnehmen?", a: "Powerbanks dürfen meist im Handgepäck mitgenommen werden, aber es gelten Kapazitätsgrenzen. Vor dem Flug die Regeln der Airline prüfen." },
        { q: "Ist eine MagSafe-Powerbank sinnvoll?", a: "Für kompatible iPhones ist eine MagSafe-Powerbank praktisch, weil sie magnetisch hält und kein Kabel benötigt." },
      ]}
      internalLinks={[
        { label: "Powerbanks", to: "/powerbanks" },
        { label: "Ladegeräte & Kabel", to: "/ladegeraete-kabel" },
        { label: "Reise-Zubehör", to: "/reise-zubehoer" },
        { label: "MagSafe Zubehör", to: "/magsafe-zubehoer" },
      ]}
    />
  ),
});
