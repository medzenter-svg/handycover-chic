import { createFileRoute } from "@tanstack/react-router";
import { SeoCategoryPage } from "@/components/site/SeoCategoryPage";

export const Route = createFileRoute("/iphone-zubehoer")({
  head: () => ({
    meta: [
      { title: "iPhone Zubehör kaufen – Hüllen, MagSafe & Displayschutz | HandyCover" },
      { name: "description", content: "Ausgewähltes iPhone Zubehör: Hüllen, MagSafe-Produkte, Displayschutz, Ladegeräte und praktische Gadgets mit direktem Amazon-Link." },
      { property: "og:title", content: "iPhone Zubehör kaufen – Hüllen, MagSafe & Displayschutz | HandyCover" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: () => (
    <SeoCategoryPage
      title="iPhone Zubehör: Hüllen, MagSafe, Displayschutz und Ladegeräte"
      h1="iPhone Zubehör: Hüllen, MagSafe, Displayschutz und Ladegeräte"
      description="Ausgewähltes iPhone Zubehör mit direktem Amazon-Link, klarer Kaufberatung und praktischen Empfehlungen für Alltag, Reise und Business."
      intro="Gutes iPhone Zubehör schützt nicht nur das Smartphone, sondern macht den Alltag spürbar praktischer. Ob transparente Hülle, MagSafe-Zubehör, Panzerglas, USB-C-Ladegerät, Powerbank oder Auto-Halterung – entscheidend ist, dass das Zubehör zum Modell, zur Nutzung und zum persönlichen Stil passt. HandyCover zeigt ausgewählte iPhone Zubehör-Produkte mit direktem Amazon-Link. Der Fokus liegt auf Alltagstauglichkeit, Schutz, Design, Kompatibilität und Preis-Leistung."
      buyingGuide="Beim Kauf von iPhone Zubehör solltest du zuerst prüfen, welches iPhone-Modell du besitzt. Besonders bei Hüllen, Kameraschutz und Displayschutz ist die genaue Modellbezeichnung wichtig. Für neuere iPhones kann MagSafe-Zubehör sinnvoll sein, wenn du magnetische Ladegeräte, Halterungen oder Wallets nutzen möchtest."
      category="iphone"
      faqs={[
        { q: "Welche iPhone Hülle schützt am besten?", a: "Eine gute iPhone Hülle sollte erhöhte Kanten, Kameraschutz, stoßdämpfendes Material und eine genaue Passform haben. Für den Alltag sind schlanke Schutzhüllen oft die beste Kombination aus Schutz und Komfort." },
        { q: "Ist MagSafe Zubehör sinnvoll?", a: "MagSafe Zubehör ist sinnvoll, wenn du magnetische Ladegeräte, Halterungen, Wallets oder Powerbanks nutzen möchtest. Wichtig ist, dass Hülle und Zubehör MagSafe-kompatibel sind." },
        { q: "Brauche ich zusätzlich Panzerglas?", a: "Ja, ein Panzerglas kann das Display zusätzlich vor Kratzern und Sturzschäden schützen. Besonders bei teuren iPhones ist Displayschutz empfehlenswert." },
      ]}
      internalLinks={[
        { label: "MagSafe Zubehör", to: "/magsafe-zubehoer" },
        { label: "Displayschutz", to: "/displayschutz" },
        { label: "Ladegeräte & Kabel", to: "/ladegeraete-kabel" },
        { label: "Powerbanks", to: "/powerbanks" },
        { label: "Ratgeber: MagSafe", to: "/ratgeber/magsafe-zubehoer-was-lohnt-sich" },
        { label: "Ratgeber: Panzerglas oder Folie", to: "/ratgeber/panzerglas-oder-schutzfolie" },
      ]}
    />
  ),
});
