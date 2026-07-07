import { createFileRoute } from "@tanstack/react-router";
import { RatgeberArticle } from "@/components/site/RatgeberArticle";
export const Route = createFileRoute("/ratgeber/powerbank-kaufen-worauf-achten")({
  head: () => ({
    meta: [
      { title: "Powerbank kaufen: Worauf achten? – HandyCover Ratgeber" },
      { name: "description", content: "Kapazität, USB-C, Schnellladen und praktische Tipps beim Powerbank-Kauf." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: () => (
    <RatgeberArticle
      title="Powerbank kaufen: Worauf achten?"
      description="Kapazität, USB-C, Schnellladen und praktische Tipps."
      intro="Eine Powerbank ist praktisch, wenn das Smartphone unterwegs nicht leer werden soll. Besonders auf Reisen, bei langen Arbeitstagen, im Auto oder bei Ausflügen kann eine Powerbank sehr nützlich sein. Beim Kauf sollte man aber nicht nur auf den Preis achten."
      publishDate="Juli 2025"
      category="Powerbanks"
      sections={[
        {
          heading: "Kapazität: Wie viel mAh brauche ich?",
          content: "Die Kapazität wird meistens in mAh angegeben. Für den Alltag reicht oft eine Powerbank mit 5.000 bis 10.000 mAh. Damit lässt sich ein Smartphone meist einmal oder mehrmals nachladen. Für Reisen oder mehrere Geräte sind 20.000 mAh praktischer, aber auch größer und schwerer.",
        },
        {
          heading: "USB-C ist Standard",
          content: "Wichtig ist auch der Anschluss. Moderne Powerbanks sollten USB-C haben. USB-C ist schneller, stabiler und passt zu vielen aktuellen Smartphones, Tablets und Ladegeräten. Besonders praktisch ist es, wenn die Powerbank über USB-C geladen werden kann und gleichzeitig andere Geräte über USB-C lädt.",
        },
        {
          heading: "Schnellladen – Power Delivery beachten",
          content: "Schnellladen ist ebenfalls ein wichtiger Punkt. Wer ein iPhone oder Samsung Galaxy schnell laden möchte, sollte auf Power Delivery, kurz PD, achten. Je nach Gerät sind 20 Watt, 25 Watt oder mehr sinnvoll.",
        },
        {
          heading: "MagSafe-Powerbanks für iPhone-Nutzer",
          content: "MagSafe-Powerbanks sind besonders bequem für iPhone-Nutzer. Sie haften magnetisch am Gerät und laden ohne Kabel. Dafür ist aber eine passende MagSafe-Hülle wichtig.",
        },
        {
          heading: "Unsere Empfehlung",
          content: "Für die meisten Nutzer ist eine kompakte USB-C-Powerbank mit 10.000 mAh und Schnellladefunktion die beste Wahl. Wer viel reist, kann zu 20.000 mAh greifen.",
        },
      ]}
      ctaLabel="Powerbanks ansehen"
      ctaTo="/powerbanks"
      faqs={[
        { q: "Wie viel mAh brauche ich für eine Powerbank?", a: "Für den Alltag reichen 5.000–10.000 mAh. Für Reisen oder mehrere Geräte sind 20.000 mAh sinnvoller." },
        { q: "Was ist Power Delivery bei Powerbanks?", a: "Power Delivery (PD) ist eine Schnellladetechnik. Ladegerät und Gerät kommunizieren und nutzen die passende Ladeleistung – effizienter und sicherer." },
        { q: "Kann ich mit einer Powerbank auch ein iPad laden?", a: "Ja, wenn die Powerbank USB-C mit ausreichend Watt hat. Für Tablets empfehlen sich 30 Watt oder mehr." },
        { q: "Was sind MagSafe-Powerbanks?", a: "Powerbanks, die magnetisch am iPhone haften und kabellos laden. Praktisch unterwegs, aber eine MagSafe-kompatible Hülle ist Voraussetzung." },
      ]}
      internalLinks={[
        { label: "Powerbanks", to: "/powerbanks" },
        { label: "Ladegeräte & Kabel", to: "/ladegeraete-kabel" },
        { label: "MagSafe Zubehör", to: "/magsafe-zubehoer" },
        { label: "Ratgeber", to: "/ratgeber" },
      ]}
    />
  ),
});
