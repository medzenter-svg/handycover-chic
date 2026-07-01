import { createFileRoute } from "@tanstack/react-router";
import { SeoCategoryPage } from "@/components/site/SeoCategoryPage";
export const Route = createFileRoute("/powerbanks")({
  head: () => ({
    meta: [
      { title: "Powerbanks kaufen – mobile Ladegeräte für unterwegs | HandyCover" },
      { name: "description", content: "Powerbanks für Alltag, Reise und Notfälle: Kapazität, USB-C, Schnellladen und praktische Empfehlungen im Überblick." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: () => (
    <SeoCategoryPage
      title="Powerbanks kaufen: mobile Energie für Alltag, Reise und Notfälle"
      h1="Powerbanks kaufen: mobile Energie für Alltag, Reise und Notfälle"
      description="Ausgewählte Powerbanks für verschiedene Situationen – mit direktem Amazon-Link und klarer Kaufberatung."
      intro="Eine Powerbank ist praktisch, wenn unterwegs keine Steckdose verfügbar ist. Ob auf Reisen, im Auto, bei der Arbeit oder im Notfall – mit einer passenden Powerbank bleibt das Smartphone länger nutzbar. HandyCover zeigt ausgewählte Powerbanks für verschiedene Situationen. Wichtig sind Kapazität, Größe, Gewicht, USB-C, Ladeleistung und die Anzahl der Anschlüsse."
      buyingGuide="Für den Alltag reicht oft eine kompakte Powerbank. Für Reisen oder mehrere Geräte lohnt sich eine höhere Kapazität. Achte auf USB-C, Ladeleistung, Größe, Gewicht, Sicherheitsfunktionen und die Anzahl der Anschlüsse. Für iPhones kann eine MagSafe-Powerbank bequem sein."
      category="powerbanks"
      faqs={[
        { q: "Wie viel mAh sollte eine Powerbank haben?", a: "Für den Alltag sind 5.000 bis 10.000 mAh oft ausreichend. Für Reisen oder mehrere Geräte können 20.000 mAh sinnvoll sein." },
        { q: "Ist eine MagSafe-Powerbank sinnvoll?", a: "Für kompatible iPhones ist eine MagSafe-Powerbank praktisch, weil sie magnetisch hält und kein Kabel benötigt." },
        { q: "Darf man Powerbanks im Flugzeug mitnehmen?", a: "Viele Powerbanks dürfen im Handgepäck mitgenommen werden, aber es gelten Kapazitätsgrenzen. Nutzer sollten vor dem Flug die Regeln der Airline prüfen." },
      ]}
      internalLinks={[
        { label: "Ladegeräte & Kabel", to: "/ladegeraete-kabel" },
        { label: "Reise-Zubehör", to: "/reise-zubehoer" },
        { label: "MagSafe Zubehör", to: "/magsafe-zubehoer" },
        { label: "Ratgeber: Powerbank kaufen", to: "/ratgeber/powerbank-kaufen-worauf-achten" },
      ]}
    />
  ),
});
