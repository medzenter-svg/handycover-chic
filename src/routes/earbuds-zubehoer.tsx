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
      sidebarCards={[
        {
          href: "https://amzn.to/3SUZ9Vq",
          image: "/assets/products/mygadget-kopfhoerer-aufbewahrung-orange.jpeg",
          alt: "MyGadget Kopfhörer Aufbewahrung Mini Tasche Orange",
          label: "Empfehlung",
          title: "MyGadget Kopfhörer Tasche",
          subtitle: "8x8cm · AirPods & In-Ear · Orange · Reißverschluss",
        },
        {
          href: "https://amzn.to/4ePI9ap",
          image: "/assets/products/xanad-kopfhoerer-tasche-over-ear-lila.jpeg",
          alt: "XANAD Kopfhörer Tasche Over Ear Lila",
          label: "Empfehlung",
          title: "XANAD Over-Ear Kopfhörer Tasche",
          subtitle: "Lila · JBL/Beats/Soundcore · Hartschale",
        },
        {
          href: "https://amzn.to/4ws5ma1",
          image: "/assets/products/mas-carney-mini-kopfhoerer-tasche-pink.jpeg",
          alt: "MAS CARNEY Mini Kopfhörer Tasche Macaron Pink",
          label: "Empfehlung",
          title: "MAS CARNEY Mini Kopfhörer Tasche",
          subtitle: "Pink · Macaron-Design · In-Ear/MP3/iPod",
        },
        {
          href: "https://amzn.to/4eZwHJr",
          image: "/assets/products/eazy-case-inear-tasche-rot-schwarz.jpeg",
          alt: "EAZY CASE Universal In-Ear Tasche Rot Schwarz",
          label: "Empfehlung",
          title: "EAZY CASE In-Ear Hardcase",
          subtitle: "Rot/Schwarz · Netzfach · Extra klein · Rund",
        },
        {
          href: "https://amzn.to/4eHFaSD",
          image: "/assets/products/xanad-kopfhoerer-tasche-jbl-tune-lila.jpeg",
          alt: "XANAD Kopfhörer Tasche JBL Tune Lila",
          label: "Empfehlung",
          title: "XANAD JBL Tune Hardcase",
          subtitle: "Lila · JBL Tune 510–780 · Netzfach · Karabiner",
        },
        {
          href: "https://amzn.to/4gPjaXl",
          image: "/assets/products/moko-ladetasche-apple-watch-airpods-blau-lila.jpeg",
          alt: "MoKo Ladetasche Apple Watch AirPods Blau Lila",
          label: "Empfehlung",
          title: "MoKo Ladetasche Apple Watch & AirPods",
          subtitle: "Blau/Lila · Watch 1–11/SE · AirPods Pro/3/2/1",
        },
        {
          href: "https://amzn.to/4fbjSwV",
          image: "/assets/products/eazy-case-inear-tasche-orange.jpeg",
          alt: "EAZY CASE Universal In-Ear Tasche Orange",
          label: "Empfehlung",
          title: "EAZY CASE In-Ear Hardcase",
          subtitle: "Orange · Netzfach · Extra klein · Rund",
        },
        {
          href: "https://amzn.to/4p2FrDp",
          image: "/assets/products/acronix-airpods-pro3-huelle-orange.jpeg",
          alt: "ACRONIX AirPods Pro 3 Hülle Orange",
          label: "Neu 2025",
          title: "ACRONIX AirPods Pro 3 Hülle",
          subtitle: "Orange · Leder-Textur · TPU · Handschlaufe",
        },
        {
          href: "https://amzn.to/44ICG0q",
          image: "/assets/products/ahastyle-airpods-pro3-huelle-dunkelblau.jpeg",
          alt: "AhaStyle AirPods Pro 3 Hülle Dunkelblau",
          label: "Neu 2025",
          title: "AhaStyle AirPods Pro 3 Hülle",
          subtitle: "Dunkelblau · Silikon · Reinigungsstift · Schlaufe",
        },
        {
          href: "https://amzn.to/4blheSO",
          image: "/assets/products/rfun-airpods-pro3-huelle-rosenrosa.jpeg",
          alt: "R-fun AirPods Pro 3 Hülle Rosenrosa",
          label: "Neu 2025",
          title: "R-fun AirPods Pro 3 Hülle",
          subtitle: "Rosenrosa · Silikon · Reinigungsset · Karabiner",
        },
        {
          href: "https://amzn.to/4vKwmBD",
          image: "/assets/products/rfun-airpods-pro3-huelle-rot.jpeg",
          alt: "R-fun AirPods Pro 3 Hülle Rot",
          label: "Neu 2025",
          title: "R-fun AirPods Pro 3 Hülle",
          subtitle: "Rot · Silikon · Reinigungsset · Karabiner",
        },
        {
          href: "https://amzn.to/4aRGPmv",
          image: "/assets/products/rfun-airpods-pro2-huelle-tuerkis.jpeg",
          alt: "R-fun AirPods Pro 2 Hülle Türkis",
          label: "Bestseller",
          title: "R-fun AirPods Pro 2 Hülle",
          subtitle: "Türkis · Vollschutz Silikon · Reinigungsset",
        },
        {
          href: "https://amzn.to/44GbL5l",
          image: "/assets/products/rfun-airpods-pro3-huelle-rosa.jpeg",
          alt: "R-fun AirPods Pro 3 Hülle Rosa",
          label: "Neu 2025",
          title: "R-fun AirPods Pro 3 Hülle",
          subtitle: "Rosa · Silikon · Reinigungsset · Karabiner",
        },
        {
          href: "https://amzn.to/4ve3Zuz",
          image: "/assets/products/rfun-airpods-pro3-huelle-lila.jpeg",
          alt: "R-fun AirPods Pro 3 Hülle Lila",
          label: "Neu 2025",
          title: "R-fun AirPods Pro 3 Hülle",
          subtitle: "Lila · Silikon · Reinigungsset · Karabiner",
        },
        {
          href: "https://amzn.to/4oVyzY8",
          image: "/assets/products/rfun-airpods-pro3-huelle-himmelblau.jpeg",
          alt: "R-fun AirPods Pro 3 Hülle Himmelblau",
          label: "Neu 2025",
          title: "R-fun AirPods Pro 3 Hülle",
          subtitle: "Himmelblau · Silikon · Reinigungsset · Karabiner",
        },
        {
          href: "https://amzn.to/4az3CDk",
          image: "/assets/products/rfun-airpods-pro3-huelle-orange.jpeg",
          alt: "R-fun AirPods Pro 3 Hülle Orange",
          label: "Neu 2025",
          title: "R-fun AirPods Pro 3 Hülle",
          subtitle: "Orange · Silikon · Reinigungsset · Karabiner",
        },
        {
          href: "https://amzn.to/4as7LsM",
          image: "/assets/products/airpods3-huelle-silikon-neonpink.jpeg",
          alt: "AirPods 3 Silikon Hülle Neon-Rosa",
          label: "Zubehör",
          title: "AirPods 3 Silikon Hülle",
          subtitle: "Neon-Rosa · 3. Gen 2021 · Reinigungsset",
        },
        {
          href: "https://amzn.to/44Hx7iQ",
          image: "/assets/products/airpods-pro3-huelle-silikon-rosenrosa-umhang.jpeg",
          alt: "AirPods Pro 3 Silikon Hülle Rosenrosa mit Umhängeband",
          label: "Neu 2025",
          title: "AirPods Pro 3 Silikon Hülle",
          subtitle: "Rosenrosa · Umhängeband · Reinigungsset",
        },
        {
          href: "https://amzn.to/4wdZ0uw",
          image: "/assets/products/airpods-pro3-huelle-diamant-schwarz.jpeg",
          alt: "AirPods Pro 3 Diamant Strass Hülle Schwarz",
          label: "Neu 2025",
          title: "AirPods Pro 3 Diamant Hülle",
          subtitle: "Schwarz · Strass · Glitzer · Luxus",
        },
        {
          href: "https://amzn.to/3QSywje",
          image: "/assets/products/airpods-magnetische-gurte-4er.jpeg",
          alt: "4er Magnetische Anti-Verlust Gurte AirPods",
          label: "Zubehör",
          title: "Magnetische Anti-Verlust Gurte",
          subtitle: "AirPods Pro/2/1 · 4er Set · 70cm",
        },
        {
          href: "https://amzn.to/3Qzw9C5",
          image: "/assets/products/airpods-pro-ohrbuegel-transparent.jpeg",
          alt: "AirPods Pro Ohrbügel transparent verstellbar",
          label: "Zubehör",
          title: "AirPods Pro Ohrbügel",
          subtitle: "Transparent · Verstellbar · Sport",
        },
      ]}
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
