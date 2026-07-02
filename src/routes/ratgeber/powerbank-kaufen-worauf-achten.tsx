import { createFileRoute } from "@tanstack/react-router";
import { RatgeberArticle } from "@/components/site/RatgeberArticle";

export const Route = createFileRoute("/ratgeber/powerbank-kaufen-worauf-achten")({
  head: () => ({
    meta: [
      { title: "Powerbank kaufen: Worauf achten? Kaufberatung | HandyCover" },
      {
        name: "description",
        content:
          "Kapazität, USB-C, Schnellladen, Gewicht und Preis: Worauf du beim Kauf einer Powerbank wirklich achten solltest.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: () => (
    <RatgeberArticle
      title="Powerbank kaufen: Worauf achten?"
      description="Kapazität, USB-C, Schnellladen, Gewicht und Preis – die wichtigsten Kriterien beim Powerbank-Kauf."
      intro="Eine Powerbank ist praktisch, wenn unterwegs keine Steckdose verfügbar ist. Beim Kauf gibt es einige wichtige Punkte zu beachten, damit die Powerbank wirklich zu den eigenen Bedürfnissen passt. Kapazität, Ladeleistung, Anschlüsse, Gewicht und Verarbeitung spielen alle eine Rolle."
      publishDate="Juli 2025"
      category="Powerbanks"
      sections={[
        {
          heading: "Kapazität: Wie viel mAh brauche ich?",
          content:
            "Die Kapazität einer Powerbank wird in Milliamperestunden (mAh) angegeben. Für ein Smartphone mit ca. 4.000 mAh Akku reichen 5.000 bis 10.000 mAh für eine bis zwei Ladungen. Für Reisen oder mehrere Geräte kann eine Kapazität von 20.000 mAh sinnvoll sein. Wichtig: Die tatsächlich nutzbare Kapazität ist durch Umwandlungsverluste etwas geringer als der angegebene Wert.",
        },
        {
          heading: "Ladeleistung: Schnellladen spart Zeit",
          content:
            "Moderne Powerbanks unterstützen Schnellladen über USB-C Power Delivery. Damit lässt sich das Smartphone deutlich schneller aufladen als mit älteren Powerbanks. Achte auf die Ladeleistung in Watt. Für Smartphones reichen meist 18 bis 30 Watt. Für Tablets oder Laptops kann mehr Leistung sinnvoll sein.",
        },
        {
          heading: "Anschlüsse: USB-C und mehrere Ports",
          content:
            "Moderne Powerbanks sollten mindestens einen USB-C-Anschluss haben. Wer mehrere Geräte gleichzeitig laden möchte, sollte auf mehrere Anschlüsse achten. Einige Powerbanks bieten USB-A und USB-C Anschlüsse kombiniert.",
        },
        {
          heading: "Kaufberatung",
          content:
            "Für den Alltag und kurze Ausflüge: 5.000 bis 10.000 mAh, kompaktes Format, USB-C. Für Reisen und längere Trips: 20.000 mAh, mehrere Anschlüsse, Schnellladen. Für MagSafe-Nutzer: MagSafe-kompatible Powerbank. Wichtige Kriterien: Kapazität, Ladeleistung, Anschlüsse, Gewicht, Sicherheitszertifizierungen, Verarbeitung.",
        },
      ]}
      faqs={[
        {
          q: "Wie viel mAh braucht eine Powerbank für ein Smartphone?",
          a: "Für eine vollständige Ladung eines modernen Smartphones reichen in der Regel 5.000 bis 10.000 mAh.",
        },
        {
          q: "Darf man Powerbanks im Flugzeug mitnehmen?",
          a: "Powerbanks dürfen meist im Handgepäck mitgenommen werden, aber es gelten Kapazitätsgrenzen. Vor dem Flug die Regeln der Airline prüfen.",
        },
        {
          q: "Was ist besser: viele mAh oder hohe Watt-Zahl?",
          a: "Beides ist wichtig. Viele mAh bedeuten mehr Ladekapazität. Hohe Watt-Zahl bedeutet schnelleres Laden. Für den Alltag ist ein gutes Gleichgewicht ideal.",
        },
        {
          q: "Ist eine MagSafe-Powerbank sinnvoll?",
          a: "Für kompatible iPhones ist eine MagSafe-Powerbank praktisch, weil sie magnetisch hält und kein Kabel benötigt.",
        },
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
