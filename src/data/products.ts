import pCase from "@/assets/p-case-premium.jpg";
import pCharger from "@/assets/p-charger-premium.jpg";
import pCable from "@/assets/p-cable-premium.jpg";
import pWallet from "@/assets/p-wallet-premium.jpg";
import pMount from "@/assets/p-mount-premium.jpg";
import pPb1 from "@/assets/p-powerbank1-premium.jpg";
import pCar from "@/assets/p-carcharger-premium.jpg";
import pPb2 from "@/assets/p-powerbank2-premium.jpg";
import pSamsung from "@/assets/p-samsung-premium.jpg";
import pAirpods from "@/assets/p-airpods-premium.jpg";
import pWatch from "@/assets/p-watch-premium.jpg";
import pScreen from "@/assets/p-screen-premium.jpg";
import pGift from "@/assets/p-gift-premium.jpg";

/**
 * Zentrale Produktdatenbank.
 *
 * WICHTIG für später:
 *   Um echte Amazon-Links einzufügen, einfach das Feld `amazonUrl` pro Produkt
 *   austauschen. Aktuell stehen alle Links auf "#" als Platzhalter.
 *   Bitte KEINE Amazon-Links in den Komponenten hardcoden – nur hier pflegen.
 */

// Slug-Mapping für Kategorien -> URL-Pfade
export const categorySlugs = {
  iphone: "/iphone-zubehoer",
  samsung: "/samsung-zubehoer",
  magsafe: "/magsafe-zubehoer",
  display: "/displayschutz",
  charging: "/ladegeraete-kabel",
  powerbanks: "/powerbanks",
  car: "/auto-zubehoer",
  airpods: "/amazon-picks",
  watch: "/amazon-picks",
  gifts: "/amazon-picks",
} as const;

export type CategoryId = keyof typeof categorySlugs;

export type Product = {
  id: string;
  title: string;
  benefit: string;
  image: string;
  badge: string;
  badgeGradient: string;
  rating: number;
  reviews: string;
  price: string;
  oldPrice?: string;
  /** TODO: echten Amazon-Link hier einfügen */
  amazonUrl: string;
  category: CategoryId;
};

// TODO: Amazon-Link hier einfügen (für ALLE Produkte unten den Wert "#" durch echten Amazon-Affiliate-Link ersetzen)
export const products: Product[] = [
  {
    id: "spigen-ultra-hybrid",
    title: "Spigen Ultra Hybrid Hülle für iPhone 16 Pro",
    benefit: "Kristallklar, kantenstabil, MagSafe-kompatibel.",
    image: pCase,
    badge: "Amazon Pick",
    badgeGradient: "from-pink-500 to-purple-500",
    rating: 4.7,
    reviews: "2.654",
    price: "19,99 €",
    oldPrice: "24,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "iphone",
  },
  {
    id: "anker-20w",
    title: "Anker 20W USB‑C Ladegerät",
    benefit: "Kompaktes Schnellladen für iPhone & Co.",
    image: pCharger,
    badge: "Bestseller",
    badgeGradient: "from-rose-500 to-pink-500",
    rating: 4.8,
    reviews: "9.742",
    price: "12,99 €",
    oldPrice: "19,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "charging",
  },
  {
    id: "ugreen-cable",
    title: "UGREEN USB‑C auf Lightning Kabel",
    benefit: "Apple MFi zertifiziert, robust geflochten.",
    image: pCable,
    badge: "Top Zubehör",
    badgeGradient: "from-amber-400 to-orange-500",
    rating: 4.7,
    reviews: "15.982",
    price: "9,99 €",
    oldPrice: "15,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "charging",
  },
  {
    id: "esr-magsafe-wallet",
    title: "ESR MagSafe Wallet Stand",
    benefit: "Karten halten, Phone aufstellen, magnetisch.",
    image: pWallet,
    badge: "MagSafe",
    badgeGradient: "from-emerald-400 to-teal-500",
    rating: 4.6,
    reviews: "3.673",
    price: "19,99 €",
    oldPrice: "29,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "magsafe",
  },
  {
    id: "lisen-mount",
    title: "LISEN Handyhalterung Auto Magnetisch",
    benefit: "Bombenfest am Lüftungsgitter, super stark.",
    image: pMount,
    badge: "Praktisch",
    badgeGradient: "from-sky-400 to-blue-500",
    rating: 4.7,
    reviews: "5.879",
    price: "15,99 €",
    oldPrice: "21,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "car",
  },
  {
    id: "iniu-powerbank",
    title: "INIU Powerbank 10000 mAh",
    benefit: "Slim, schnell, mit Display & USB‑C PD.",
    image: pPb1,
    badge: "Power",
    badgeGradient: "from-fuchsia-500 to-purple-600",
    rating: 4.8,
    reviews: "1.918",
    price: "18,99 €",
    oldPrice: "27,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "powerbanks",
  },
  {
    id: "anker-30w-car",
    title: "Anker 30W USB‑C Autoladegerät",
    benefit: "Lädt zwei Geräte gleichzeitig im Auto.",
    image: pCar,
    badge: "Schnellladen",
    badgeGradient: "from-orange-400 to-red-500",
    rating: 4.7,
    reviews: "7.530",
    price: "12,99 €",
    oldPrice: "17,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "car",
  },
  {
    id: "baseus-powerbank",
    title: "Baseus Powerbank 10000 mAh",
    benefit: "Leicht, schick und perfekt für den Alltag.",
    image: pPb2,
    badge: "Kompakt",
    badgeGradient: "from-cyan-400 to-sky-500",
    rating: 4.6,
    reviews: "4.260",
    price: "20,99 €",
    oldPrice: "29,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "powerbanks",
  },
  {
    id: "samsung-s24-case",
    title: "Spigen Liquid Air Hülle für Samsung Galaxy S24",
    benefit: "Mattes Finish, griffig, ultra leicht.",
    image: pSamsung,
    badge: "Samsung",
    badgeGradient: "from-indigo-500 to-blue-500",
    rating: 4.7,
    reviews: "3.120",
    price: "16,99 €",
    oldPrice: "22,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "samsung",
  },
  {
    id: "samsung-buds-case",
    title: "Schutzhülle für Samsung Galaxy Buds",
    benefit: "Stoßfest, mit Karabiner – perfekt unterwegs.",
    image: pAirpods,
    badge: "Buds",
    badgeGradient: "from-violet-400 to-indigo-500",
    rating: 4.5,
    reviews: "1.842",
    price: "9,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "samsung",
  },
  {
    id: "spigen-glas-tr",
    title: "Spigen Glas.tR Panzerglas iPhone 16 Pro",
    benefit: "9H Härte, kristallklar, mit Schablone.",
    image: pScreen,
    badge: "Displayschutz",
    badgeGradient: "from-sky-400 to-cyan-500",
    rating: 4.8,
    reviews: "12.430",
    price: "11,99 €",
    oldPrice: "16,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "display",
  },
  {
    id: "displayschutz-samsung",
    title: "Panzerglas Folie für Samsung Galaxy S24",
    benefit: "Fingerprint-kompatibel, blasenfrei.",
    image: pScreen,
    badge: "2er Pack",
    badgeGradient: "from-blue-400 to-indigo-500",
    rating: 4.6,
    reviews: "4.108",
    price: "8,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "display",
  },
  {
    id: "magsafe-charger",
    title: "MagSafe Ladegerät Wireless 15W",
    benefit: "Magnetisch, schnell, kabelfrei laden.",
    image: pCharger,
    badge: "Wireless",
    badgeGradient: "from-purple-500 to-pink-500",
    rating: 4.7,
    reviews: "2.480",
    price: "24,99 €",
    oldPrice: "34,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "magsafe",
  },
  {
    id: "iphone-15-case",
    title: "Klare Schutzhülle für iPhone 15",
    benefit: "Transparent, vergilbungsfrei, MagSafe.",
    image: pCase,
    badge: "Klar",
    badgeGradient: "from-pink-400 to-rose-500",
    rating: 4.6,
    reviews: "4.910",
    price: "14,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "iphone",
  },
  {
    id: "airpods-case",
    title: "Silikonhülle für AirPods Pro 2",
    benefit: "Rutschfest, mit Karabiner, viele Farben.",
    image: pAirpods,
    badge: "AirPods",
    badgeGradient: "from-slate-400 to-zinc-500",
    rating: 4.5,
    reviews: "2.310",
    price: "8,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "airpods",
  },
  {
    id: "watch-band",
    title: "Sport Armband für Apple Watch",
    benefit: "Atmungsaktiv, langlebig, viele Größen.",
    image: pWatch,
    badge: "Watch",
    badgeGradient: "from-violet-400 to-purple-500",
    rating: 4.7,
    reviews: "6.218",
    price: "12,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "watch",
  },
  {
    id: "gift-set",
    title: "Tech Geschenkbox für Smartphone-Fans",
    benefit: "Ladegerät, Kabel, Halterung – stylisch verpackt.",
    image: pGift,
    badge: "Geschenk",
    badgeGradient: "from-pink-500 to-red-500",
    rating: 4.8,
    reviews: "812",
    price: "29,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "gifts",
  },
];

export type Category = {
  id: CategoryId;
  name: string;
  image: string;
  gradient: string;
  slug: string;
};

export const categories: Category[] = [
  { id: "iphone", name: "iPhone Zubehör", image: pCase, gradient: "from-pink-100 to-rose-100", slug: categorySlugs.iphone },
  { id: "samsung", name: "Samsung Zubehör", image: pSamsung, gradient: "from-indigo-100 to-purple-100", slug: categorySlugs.samsung },
  { id: "magsafe", name: "MagSafe Zubehör", image: pWallet, gradient: "from-purple-100 to-fuchsia-100", slug: categorySlugs.magsafe },
  { id: "display", name: "Displayschutz", image: pScreen, gradient: "from-sky-100 to-blue-100", slug: categorySlugs.display },
  { id: "charging", name: "Ladegeräte & Kabel", image: pCharger, gradient: "from-amber-100 to-orange-100", slug: categorySlugs.charging },
  { id: "powerbanks", name: "Powerbanks", image: pPb1, gradient: "from-emerald-100 to-teal-100", slug: categorySlugs.powerbanks },
  { id: "car", name: "Auto‑Zubehör", image: pMount, gradient: "from-blue-100 to-cyan-100", slug: categorySlugs.car },
  { id: "airpods", name: "AirPods Zubehör", image: pAirpods, gradient: "from-slate-100 to-zinc-100", slug: "/amazon-picks" },
  { id: "watch", name: "Smartwatch Zubehör", image: pWatch, gradient: "from-violet-100 to-purple-100", slug: "/amazon-picks" },
  { id: "gifts", name: "Tech Gifts", image: pGift, gradient: "from-pink-100 to-red-100", slug: "/amazon-picks" },
];

export type Guide = {
  id: string;
  title: string;
  text: string;
  image: string;
  gradient: string;
};

export const guides: Guide[] = [
  {
    id: "magsafe",
    title: "Welches MagSafe Zubehör passt zu dir?",
    text: "Finde die perfekten MagSafe Produkte.",
    image: pWallet,
    gradient: "from-pink-50 via-rose-50 to-purple-50",
  },
  {
    id: "display",
    title: "Displayschutz: Glas oder Folie?",
    text: "Vor‑ & Nachteile einfach erklärt.",
    image: pScreen,
    gradient: "from-sky-50 via-blue-50 to-indigo-50",
  },
  {
    id: "powerbanks",
    title: "Powerbanks kaufen: Worauf achten?",
    text: "Kapazität, Ladeleistung und mehr.",
    image: pPb1,
    gradient: "from-emerald-50 via-teal-50 to-cyan-50",
  },
  {
    id: "car",
    title: "Auto‑Halterung fürs Handy: Magnetisch oder Klemme?",
    text: "Vergleich & Empfehlungen.",
    image: pMount,
    gradient: "from-amber-50 via-orange-50 to-rose-50",
  },
  {
    id: "gifts",
    title: "Geschenkideen für Tech‑Fans",
    text: "Praktische & stylische Geschenke.",
    image: pGift,
    gradient: "from-purple-50 via-fuchsia-50 to-pink-50",
  },
  {
    id: "airpods",
    title: "AirPods Zubehör: Was lohnt sich wirklich?",
    text: "Cases, Spitzen und mehr im Vergleich.",
    image: pAirpods,
    gradient: "from-slate-50 via-zinc-50 to-gray-50",
  },
];
