import { createFileRoute } from "@tanstack/react-router";
import { SeoCategoryPage } from "@/components/site/SeoCategoryPage";
export const Route = createFileRoute("/smartwatch-zubehoer")({
  head: () => ({
    meta: [
      { title: "Smartwatch Zubehör – Armbänder & Schutz | HandyCover" },
      { name: "description", content: "Ausgewähltes Smartwatch-Zubehör: Armbänder, Schutzhüllen und praktische Gadgets mit direktem Amazon-Link." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: () => (
    <SeoCategoryPage
      title="Smartwatch Zubehör: Armbänder, Schutz und Gadgets"
      h1="Smartwatch Zubehör: Armbänder, Schutz und Gadgets"
      description="Ausgewähltes Smartwatch-Zubehör mit direktem Amazon-Link."
      intro="Passendes Smartwatch-Zubehör macht die Uhr alltagstauglicher und schützenswerter. Armbänder in verschiedenen Materialien, Displayschutz und Ladezubehör sind die wichtigsten Kategorien."
      buyingGuide="Achte bei Smartwatch-Armbändern auf die genaue Größe und Kompatibilität mit deinem Modell. Für Apple Watch und Samsung Galaxy Watch gibt es viele Optionen in verschiedenen Materialien."
      category="watch"
      sidebarCards={[
        {
          href: "https://amzn.to/4giFcS9",
          image: "/assets/products/sundara-nylon-armband-garmin-galaxy-amazfit.webp",
          alt: "Sundara Nylon Armband Garmin Galaxy Amazfit",
          label: "Empfehlung",
          title: "Sundara Nylon Armband",
          subtitle: "18-22mm · Garmin · Galaxy Watch · Amazfit",
        },
        {
          href: "https://amzn.to/4v6Tf0Y",
          image: "/assets/products/chinbersky-nylon-armband-samsung-galaxy-watch.webp",
          alt: "chinbersky Nylon Armband Samsung Galaxy Watch",
          label: "Empfehlung",
          title: "chinbersky Nylon Armband 20mm",
          subtitle: "Galaxy Watch 4/5/6/7/FE · Active 2 · 4 Farben",
        },
        {
          href: "https://amzn.to/3SHVFWf",
          image: "/assets/products/neitra-diamanten-huelle-apple-watch-40mm.webp",
          alt: "Neitra Diamanten Hülle Apple Watch 40mm 3 Stück",
          label: "Empfehlung",
          title: "Neitra Diamanten Hülle 3er Set",
          subtitle: "Apple Watch Series 6/5/4/SE 40mm · Silber/Rosé/Schwarz",
        },
        {
          href: "https://amzn.to/447Bl3e",
          image: "/assets/products/jetech-huelle-samsung-galaxy-watch-7-40mm-gruen.webp",
          alt: "JETech Hülle Samsung Galaxy Watch 7 40mm Grün",
          label: "Empfehlung",
          title: "JETech Hülle 2er Set",
          subtitle: "Samsung Galaxy Watch 7 40mm · Gehärtetes Glas · Grün",
        },
        {
          href: "https://amzn.to/4gXg9US",
          image: "/assets/products/8er-nylon-armband-apple-watch.webp",
          alt: "8 Stück Geflochtenes Nylon Armband Apple Watch",
          label: "Empfehlung",
          title: "8er Nylon Armband Set",
          subtitle: "Apple Watch 38–46mm · Series 1–11 & SE · 8 Farben",
        },
        {
          href: "https://amzn.to/44DfH70",
          image: "/assets/products/diruite-huelle-apple-watch-se-40mm-schwarz.webp",
          alt: "Diruite Hülle Apple Watch SE 40mm Schwarz 2 Stück",
          label: "Empfehlung",
          title: "Diruite Hülle 2er Set",
          subtitle: "Apple Watch SE 3/2/1 · Series 6/5/4 40mm · Schwarz",
        },
        {
          href: "https://amzn.to/3SHWj67",
          image: "/assets/products/magnetisches-lederarmband-apple-watch-pink.webp",
          alt: "Magnetisches Lederarmband Apple Watch Pink",
          label: "Empfehlung",
          title: "Magnetisches Lederarmband",
          subtitle: "Apple Watch Ultra/SE/Series 3–10 · 38–49mm · Pink",
        },
        {
          href: "https://amzn.to/4oZ2miJ",
          image: "/assets/products/misxi-huelle-apple-watch-se-44mm-schwarz.webp",
          alt: "Misxi Hülle Apple Watch SE 44mm Schwarz 2 Stück",
          label: "Empfehlung",
          title: "Misxi Hard Hülle 2er Set",
          subtitle: "Apple Watch SE 3/SE2/SE · Series 6/5/4 44mm · Schwarz",
        },
        {
          href: "https://amzn.to/4y1OmZK",
          image: "/assets/products/bangting-armband-xiaomi-mi-band-10-9-8.webp",
          alt: "BANGTING Ersatzarmband Xiaomi Mi Band 10/9/8 mehrere Farben",
          label: "Empfehlung",
          title: "BANGTING Armband 3–12 Stück",
          subtitle: "Xiaomi Mi Band 10/9/8 · TPU · Schnellwechsel · 12 Farben",
        },
        {
          href: "https://amzn.to/4oVvRlq",
          image: "/assets/products/diruite-huelle-apple-watch-ultra-49mm-titan.webp",
          alt: "Diruite Hülle Apple Watch Ultra 49mm Titanstahl 2 Stück",
          label: "Empfehlung",
          title: "Diruite Ultra Hülle 2er Set",
          subtitle: "Apple Watch Ultra 3/2/1 49mm · Hartglas · Titanstahl",
        },
        {
          href: "https://amzn.to/3Te4hnD",
          image: "/assets/products/simpeak-huelle-huawei-watch-fit-3-5stueck.webp",
          alt: "Simpeak Schutzhülle Huawei Watch Fit 3 5 Stück",
          label: "Empfehlung",
          title: "Simpeak TPU Hülle 5er Set",
          subtitle: "Huawei Watch Fit 3 · Ultradünn · 5 Farben",
        },
        {
          href: "https://amzn.to/3RiHuGN",
          image: "/assets/products/fullmosa-lederarmband-apple-watch-creme-rosa.webp",
          alt: "Fullmosa Lederarmband Apple Watch Creme Rosa",
          label: "Empfehlung",
          title: "Fullmosa Lederarmband",
          subtitle: "Apple Watch Ultra 3/2 · iWatch 1–11 · 38–49mm",
        },
        {
          href: "https://amzn.to/448ibdw",
          image: "/assets/products/amsky-6er-silikon-armband-apple-watch.webp",
          alt: "AMSKY 6 Stück Silikon Armband Apple Watch",
          label: "Empfehlung",
          title: "AMSKY Silikon Armband 6er Set",
          subtitle: "Apple Watch 38–49mm · iWatch 1–11 & SE · 6 Farben",
        },
        {
          href: "https://amzn.to/4y7X0pJ",
          image: "/assets/products/ccnutri-nylon-loop-armband-apple-watch-4stueck.webp",
          alt: "CCnutri 4 Stück Nylon Loop Armband Apple Watch",
          label: "Empfehlung",
          title: "CCnutri Nylon Loop 4er Set",
          subtitle: "Apple Watch 38–49mm · iWatch 1–11 & SE · Elastisch",
        },
        {
          href: "https://amzn.to/4v8D8Qs",
          image: "/assets/products/ccnutri-nylon-loop-armband-apple-watch-orange-4stueck.webp",
          alt: "CCnutri 4 Stück Nylon Loop Armband Apple Watch Orange Teal Pink",
          label: "Empfehlung",
          title: "CCnutri Nylon Loop 4er Set",
          subtitle: "Apple Watch 38–49mm · Orange/Teal/Pink · Elastisch",
        },
        {
          href: "https://amzn.to/4wlm4rm",
          image: "/assets/products/maledan-10er-nylon-sport-loop-apple-watch.webp",
          alt: "Maledan 10 Stück Nylon Sport Loop Armband Apple Watch",
          label: "Empfehlung",
          title: "Maledan Nylon Loop 10er Set",
          subtitle: "Apple Watch 42–49mm · iWatch 1–11 & Ultra · 10 Muster",
        },
        {
          href: "https://amzn.to/4v7v56k",
          image: "/assets/products/apple-watch-series-11-gps-42mm-schwarz.webp",
          alt: "Apple Watch Series 11 GPS 42mm Diamantschwarz",
          label: "Top Pick",
          title: "Apple Watch Series 11 GPS",
          subtitle: "42mm · Diamantschwarz · Always-On Display · Wasserschutz",
        },
        {
          href: "https://amzn.to/44Dh4ma",
          image: "/assets/products/apple-watch-se3-gps-cellular-40mm-polarstern.webp",
          alt: "Apple Watch SE 3 GPS Cellular 40mm Polarstern",
          label: "Top Pick",
          title: "Apple Watch SE 3 GPS + Cellular",
          subtitle: "40mm · Polarstern · Herzfrequenz · Wasserschutz",
        },
        {
          href: "https://amzn.to/444fedV",
          image: "/assets/products/apple-watch-series-11-gps-42mm-rosegold.webp",
          alt: "Apple Watch Series 11 GPS 42mm Roségold Blassrosa",
          label: "Top Pick",
          title: "Apple Watch Series 11 GPS",
          subtitle: "42mm · Roségold · Always-On Display · Wasserschutz",
        },
        {
          href: "https://amzn.to/4xZtcLR",
          image: "/assets/products/apple-watch-ultra3-gps-cellular-49mm-schwarz.webp",
          alt: "Apple Watch Ultra 3 GPS Cellular 49mm Titan Schwarz",
          label: "Premium",
          title: "Apple Watch Ultra 3 GPS + Cellular",
          subtitle: "49mm · Titan Schwarz · Ocean Armband · Sport",
        },
        {
          href: "https://amzn.to/4eQ6Chj",
          image: "/assets/products/apple-watch-ultra3-gps-cellular-49mm-alpine-loop-schwarz.webp",
          alt: "Apple Watch Ultra 3 GPS Cellular 49mm Alpine Loop Schwarz",
          label: "Premium",
          title: "Apple Watch Ultra 3 GPS + Cellular",
          subtitle: "49mm · Titan Schwarz · Alpine Loop · Medium",
        },
        {
          href: "https://amzn.to/4b2z0u2",
          image: "/assets/products/apple-watch-ultra3-gps-cellular-49mm-natur-ocean-maritimblau.webp",
          alt: "Apple Watch Ultra 3 GPS Cellular 49mm Titan Natur Ocean Maritimblau",
          label: "Premium",
          title: "Apple Watch Ultra 3 GPS + Cellular",
          subtitle: "49mm · Titan Natur · Ocean Maritimblau",
        },
        {
          href: "https://amzn.to/4wmfJvJ",
          image: "/assets/products/apple-watch-ultra3-gps-cellular-49mm-natur-trail-loop-blau.webp",
          alt: "Apple Watch Ultra 3 GPS Cellular 49mm Titan Natur Trail Loop Blau",
          label: "Premium",
          title: "Apple Watch Ultra 3 GPS + Cellular",
          subtitle: "49mm · Titan Natur · Trail Loop Blau/Hellblau · M/L",
        },
        {
          href: "https://amzn.to/448j3Pk",
          image: "/assets/products/apple-watch-series-11-gps-cellular-42mm-rosegold-blassrosa.webp",
          alt: "Apple Watch Series 11 GPS Cellular 42mm Roségold Blassrosa",
          label: "Top Pick",
          title: "Apple Watch Series 11 GPS + Cellular",
          subtitle: "42mm · Roségold · Always-On Display · Cellular",
        },
      ]}
      faqs={[
        { q: "Welche Armbänder passen zur Apple Watch?", a: "Apple Watch Armbänder sind in verschiedenen Größen erhältlich. Achte auf die Gehäusegröße (38/40/41 mm oder 42/44/45 mm)." },
        { q: "Ist Displayschutz für Smartwatches sinnvoll?", a: "Ja, besonders bei aktiver Nutzung kann Displayschutz vor Kratzern schützen." },
      ]}
      internalLinks={[
        { label: "iPhone Zubehör", to: "/iphone-zubehoer" },
        { label: "Geschenkideen", to: "/geschenkideen-tech-fans" },
      ]}
    />
  ),
});
