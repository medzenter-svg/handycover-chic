import pCase from "@/assets/p-case.jpg";
import pCharger from "@/assets/p-charger.jpg";
import pCable from "@/assets/p-cable.jpg";
import pWallet from "@/assets/p-wallet.jpg";
import pMount from "@/assets/p-mount.jpg";
import pPb1 from "@/assets/p-powerbank1.jpg";
import pCar from "@/assets/p-carcharger.jpg";
import pPb2 from "@/assets/p-powerbank2.jpg";

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
  amazonUrl: string;
};

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
    amazonUrl: "https://www.amazon.de/?tag=handycover-21",
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
    amazonUrl: "https://www.amazon.de/?tag=handycover-21",
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
    amazonUrl: "https://www.amazon.de/?tag=handycover-21",
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
    amazonUrl: "https://www.amazon.de/?tag=handycover-21",
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
    amazonUrl: "https://www.amazon.de/?tag=handycover-21",
  },
  {
    id: "iniu-powerbank",
    title: "INIU Powerbank 10000 mAh",
    benefit: "Slim, schnell, mit Display & USB‑C PD.",
    image: pPb1,
    badge: "Power unterwegs",
    badgeGradient: "from-fuchsia-500 to-purple-600",
    rating: 4.8,
    reviews: "1.918",
    price: "18,99 €",
    oldPrice: "27,99 €",
    amazonUrl: "https://www.amazon.de/?tag=handycover-21",
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
    amazonUrl: "https://www.amazon.de/?tag=handycover-21",
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
    amazonUrl: "https://www.amazon.de/?tag=handycover-21",
  },
];

export type Category = {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
};

export const categories: Category[] = [
  { id: "iphone", name: "iPhone Zubehör", emoji: "📱", gradient: "from-pink-100 to-rose-100" },
  { id: "samsung", name: "Samsung Zubehör", emoji: "✨", gradient: "from-indigo-100 to-purple-100" },
  { id: "magsafe", name: "MagSafe Zubehör", emoji: "🧲", gradient: "from-purple-100 to-fuchsia-100" },
  { id: "display", name: "Displayschutz", emoji: "🛡️", gradient: "from-sky-100 to-blue-100" },
  { id: "charging", name: "Ladegeräte & Kabel", emoji: "⚡", gradient: "from-amber-100 to-orange-100" },
  { id: "powerbanks", name: "Powerbanks", emoji: "🔋", gradient: "from-emerald-100 to-teal-100" },
  { id: "car", name: "Auto‑Halterungen", emoji: "🚗", gradient: "from-blue-100 to-cyan-100" },
  { id: "airpods", name: "AirPods Zubehör", emoji: "🎧", gradient: "from-rose-100 to-pink-100" },
  { id: "watch", name: "Smartwatch Zubehör", emoji: "⌚", gradient: "from-violet-100 to-purple-100" },
  { id: "gifts", name: "Tech Gifts", emoji: "🎁", gradient: "from-pink-100 to-red-100" },
];

export type Guide = {
  id: string;
  title: string;
  text: string;
  emoji: string;
  gradient: string;
};

export const guides: Guide[] = [
  {
    id: "magsafe",
    title: "MagSafe Zubehör: Was lohnt sich wirklich?",
    text: "Finde die perfekten MagSafe Produkte für deinen Alltag.",
    emoji: "🧲",
    gradient: "from-pink-100 via-rose-50 to-purple-100",
  },
  {
    id: "display",
    title: "Displayschutz: Glas oder Folie?",
    text: "Vor‑ und Nachteile einfach erklärt.",
    emoji: "🛡️",
    gradient: "from-sky-100 via-blue-50 to-indigo-100",
  },
  {
    id: "powerbanks",
    title: "Powerbanks kaufen: Worauf achten?",
    text: "Kapazität, Ladeleistung und mehr.",
    emoji: "🔋",
    gradient: "from-emerald-100 via-teal-50 to-cyan-100",
  },
  {
    id: "car",
    title: "Auto‑Halterung fürs Handy: Magnetisch oder klassisch?",
    text: "Vergleich & klare Empfehlungen.",
    emoji: "🚗",
    gradient: "from-amber-100 via-orange-50 to-rose-100",
  },
  {
    id: "gifts",
    title: "Geschenkideen für Tech‑Fans",
    text: "Praktische & stylische Geschenke entdecken.",
    emoji: "🎁",
    gradient: "from-purple-100 via-fuchsia-50 to-pink-100",
  },
];
