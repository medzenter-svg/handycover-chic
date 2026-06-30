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
  /** Optionale kleine Feature-Chips, z. B. "MagSafe", "Kratzschutz" */
  features?: string[];
  /** TODO: echten Amazon-Link hier einfügen */
  amazonUrl: string;
  category: CategoryId;
};

// TODO: Amazon-Link hier einfügen (für ALLE Produkte unten den Wert "#" durch echten Amazon-Affiliate-Link ersetzen)
export const products: Product[] = [
  {
    id: "spigen-ultra-hybrid",
    title: "Transparente Schutzhülle mit MagSafe für iPhone 16 Pro",
    benefit: "Kristallklar, stabile Kanten, voll MagSafe-kompatibel.",
    image: pCase,
    badge: "Empfehlung",
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
    title: "USB-C Schnellladegerät, 20 W",
    benefit: "Kompaktes Schnellladen für Smartphone und Tablet.",
    image: pCharger,
    badge: "Beliebt",
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
    title: "USB-C auf Lightning Kabel, MFi-zertifiziert",
    benefit: "MFi-zertifiziert, robust geflochten, langlebig.",
    image: pCable,
    badge: "Beliebt",
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
    title: "MagSafe-Kartenhalter mit Standfunktion",
    benefit: "Hält Karten sicher, magnetisch, mit Standfunktion.",
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
    title: "Magnetische Handyhalterung fürs Auto",
    benefit: "Fester Halt am Lüftungsgitter, einfache Montage.",
    image: pMount,
    badge: "Magnethalter",
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
    title: "Powerbank 10.000 mAh mit Display und USB-C",
    benefit: "Schlank, schnell, mit Display und USB-C PD.",
    image: pPb1,
    badge: "10.000 mAh",
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
    title: "USB-C Autoladegerät, 30 W",
    benefit: "Lädt zwei Geräte gleichzeitig im Auto.",
    image: pCar,
    badge: "30 W",
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
    title: "Schlanke Powerbank, 10.000 mAh",
    benefit: "Leicht und handlich, ideal für den Alltag.",
    image: pPb2,
    badge: "Schlank",
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
    title: "Matte Schutzhülle für Samsung Galaxy S24",
    benefit: "Mattes Finish, griffig, angenehm leicht.",
    image: pSamsung,
    badge: "Galaxy S24",
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
    benefit: "Stoßfest mit Karabiner – perfekt für unterwegs.",
    image: pAirpods,
    badge: "Earbuds",
    badgeGradient: "from-violet-400 to-indigo-500",
    rating: 4.5,
    reviews: "1.842",
    price: "9,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "samsung",
  },
  {
    id: "spigen-glas-tr",
    title: "Displayschutzglas für iPhone 16 Pro mit Montagerahmen",
    benefit: "Kristallklarer 9H-Schutz inklusive Montagerahmen.",
    image: pScreen,
    badge: "Schutzglas",
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
    title: "Displayschutzfolie für Samsung Galaxy S24, 2er-Pack",
    benefit: "Mit Fingerabdrucksensor kompatibel, blasenfreie Montage.",
    image: pScreen,
    badge: "2er-Pack",
    badgeGradient: "from-blue-400 to-indigo-500",
    rating: 4.6,
    reviews: "4.108",
    price: "8,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "display",
  },
  {
    id: "magsafe-charger",
    title: "Kabelloses MagSafe-Ladegerät, 15 W",
    benefit: "Magnetisch, schnell, kabelloses Laden.",
    image: pCharger,
    badge: "Kabellos",
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
    title: "Transparente Schutzhülle für iPhone 15",
    benefit: "Transparent, vergilbungsfrei, MagSafe-kompatibel.",
    image: pCase,
    badge: "Transparent",
    badgeGradient: "from-pink-400 to-rose-500",
    rating: 4.6,
    reviews: "4.910",
    price: "14,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "iphone",
  },
  {
    id: "airpods-case",
    title: "Silikonhülle für kabellose Earbuds",
    benefit: "Rutschfest, mit Karabiner, in vielen Farben.",
    image: pAirpods,
    badge: "Earbuds",
    badgeGradient: "from-slate-400 to-zinc-500",
    rating: 4.5,
    reviews: "2.310",
    price: "8,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "airpods",
  },
  {
    id: "watch-band",
    title: "Sportarmband für Smartwatch",
    benefit: "Atmungsaktiv, langlebig, in verschiedenen Größen.",
    image: pWatch,
    badge: "Apple Watch",
    badgeGradient: "from-violet-400 to-purple-500",
    rating: 4.7,
    reviews: "6.218",
    price: "12,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "watch",
  },
  {
    id: "gift-set",
    title: "Tech-Geschenkbox für Smartphone-Fans",
    benefit: "Ladegerät, Kabel und Halterung – schön verpackt.",
    image: pGift,
    badge: "Geschenkset",
    badgeGradient: "from-pink-500 to-red-500",
    rating: 4.8,
    reviews: "812",
    price: "29,99 €",
    amazonUrl: "#", // TODO: Amazon-Link hier einfügen
    category: "gifts",
  },

  // === Zusätzliche Produkte – mindestens 8 pro Kategorie ===
  // TODO: alle amazonUrl: "#" durch echte Amazon-Affiliate-Links ersetzen

  // iPhone
  { id: "iphone-leder-case", title: "Leder-Schutzhülle für iPhone 16 Pro", benefit: "Hochwertiges Echtleder mit edler Optik.", image: pCase, badge: "Premium", badgeGradient: "from-amber-500 to-orange-600", rating: 4.6, reviews: "1.205", price: "29,99 €", oldPrice: "39,99 €", features: ["MagSafe", "Kratzschutz"], amazonUrl: "#", category: "iphone" },
  { id: "iphone-silikon-case", title: "Silikon-Schutzhülle für iPhone 15 Pro", benefit: "Soft-Touch-Oberfläche, angenehm in der Hand.", image: pCase, badge: "Soft-Touch", badgeGradient: "from-pink-400 to-fuchsia-500", rating: 4.5, reviews: "3.412", price: "12,99 €", features: ["MagSafe", "Kantenschutz"], amazonUrl: "#", category: "iphone" },
  { id: "iphone-clear-case", title: "Transparente Schutzhülle für iPhone 14", benefit: "Vergilbungsfrei und besonders dünn.", image: pCase, badge: "Transparent", badgeGradient: "from-sky-400 to-cyan-500", rating: 4.5, reviews: "2.870", price: "9,99 €", features: ["Transparent", "Ultradünn"], amazonUrl: "#", category: "iphone" },
  { id: "iphone-bumper", title: "Bumper-Schutzrahmen für iPhone 16", benefit: "Maximaler Kantenschutz im minimalistischen Design.", image: pCase, badge: "Bumper-Rahmen", badgeGradient: "from-zinc-500 to-slate-600", rating: 4.4, reviews: "612", price: "13,99 €", features: ["Kantenschutz"], amazonUrl: "#", category: "iphone" },
  { id: "iphone-wallet", title: "Wallet-Hülle für iPhone 15", benefit: "Mit Kartenfach und magnetischer Befestigung.", image: pWallet, badge: "Wallet-Hülle", badgeGradient: "from-emerald-400 to-teal-500", rating: 4.6, reviews: "1.984", price: "22,99 €", features: ["Kartenfach", "MagSafe"], amazonUrl: "#", category: "iphone" },
  { id: "iphone-rugged", title: "Outdoor-Schutzhülle für iPhone 16", benefit: "Sturzfest nach Militärstandard MIL-STD-810.", image: pCase, badge: "Outdoor", badgeGradient: "from-stone-500 to-zinc-700", rating: 4.7, reviews: "2.117", price: "24,99 €", oldPrice: "34,99 €", features: ["Sturzfest", "Kratzschutz"], amazonUrl: "#", category: "iphone" },

  // Samsung
  { id: "samsung-clear-case", title: "Transparente Hülle für Samsung Galaxy S24 Ultra", benefit: "Kristallklar und MagSafe-kompatibel.", image: pSamsung, badge: "Transparent", badgeGradient: "from-sky-400 to-blue-500", rating: 4.6, reviews: "1.512", price: "13,99 €", features: ["Transparent", "Ultradünn"], amazonUrl: "#", category: "samsung" },
  { id: "samsung-wallet", title: "Wallet-Hülle für Samsung Galaxy S24", benefit: "Mit Standfunktion und Kartenfach.", image: pWallet, badge: "Wallet-Hülle", badgeGradient: "from-violet-400 to-indigo-500", rating: 4.5, reviews: "987", price: "19,99 €", features: ["Kartenfach", "Standfunktion"], amazonUrl: "#", category: "samsung" },
  { id: "samsung-rugged", title: "Outdoor-Schutzhülle für Samsung Galaxy S24 Ultra", benefit: "Robuster Rundumschutz für unterwegs.", image: pSamsung, badge: "Outdoor", badgeGradient: "from-stone-500 to-zinc-700", rating: 4.7, reviews: "1.342", price: "22,99 €", oldPrice: "29,99 €", features: ["Sturzfest"], amazonUrl: "#", category: "samsung" },
  { id: "samsung-glas", title: "Displayschutzglas für Samsung Galaxy S24 Ultra", benefit: "9H Härte, Montage mit Schablone.", image: pScreen, badge: "Schutzglas", badgeGradient: "from-cyan-400 to-sky-500", rating: 4.7, reviews: "5.612", price: "12,99 €", features: ["9H Härte"], amazonUrl: "#", category: "samsung" },
  { id: "samsung-charger", title: "Samsung Super Fast Charger, 25 W", benefit: "Original Schnellladegerät mit USB-C.", image: pCharger, badge: "Original", badgeGradient: "from-indigo-500 to-blue-600", rating: 4.8, reviews: "8.220", price: "19,99 €", features: ["Schnellladen"], amazonUrl: "#", category: "samsung" },
  { id: "samsung-cable", title: "Samsung USB-C Kabel, 1,8 m", benefit: "Robust, kompatibel mit allen Galaxy-Modellen.", image: pCable, badge: "Original", badgeGradient: "from-blue-400 to-indigo-500", rating: 4.6, reviews: "4.110", price: "11,99 €", amazonUrl: "#", category: "samsung" },

  // MagSafe
  { id: "magsafe-stand", title: "MagSafe Ladestation, 3-in-1", benefit: "3-in-1 für Smartphone, Smartwatch und Earbuds.", image: pCharger, badge: "3-in-1", badgeGradient: "from-purple-500 to-fuchsia-500", rating: 4.7, reviews: "2.984", price: "39,99 €", oldPrice: "59,99 €", features: ["MagSafe", "3-in-1"], amazonUrl: "#", category: "magsafe" },
  { id: "magsafe-ring", title: "MagSafe-Adapterring, universal", benefit: "Macht jede Hülle MagSafe-kompatibel.", image: pCase, badge: "Universal", badgeGradient: "from-pink-400 to-rose-500", rating: 4.4, reviews: "1.221", price: "7,99 €", features: ["MagSafe", "Universal"], amazonUrl: "#", category: "magsafe" },
  { id: "magsafe-powerbank", title: "MagSafe Powerbank, 10.000 mAh", benefit: "Magnetisch andocken, kabellos laden.", image: pPb1, badge: "MagSafe", badgeGradient: "from-fuchsia-500 to-purple-600", rating: 4.6, reviews: "3.120", price: "34,99 €", oldPrice: "49,99 €", features: ["MagSafe", "Kabellos"], amazonUrl: "#", category: "magsafe" },
  { id: "magsafe-mount-car", title: "MagSafe Autohalterung", benefit: "Starke Magneten, einfache Lüftungs-Befestigung.", image: pMount, badge: "Auto", badgeGradient: "from-sky-400 to-blue-500", rating: 4.7, reviews: "2.014", price: "18,99 €", features: ["MagSafe", "Auto"], amazonUrl: "#", category: "magsafe" },
  { id: "magsafe-grip", title: "MagSafe-Griff mit Standfunktion", benefit: "Besserer Halt mit klappbarem Ständer.", image: pWallet, badge: "Griff", badgeGradient: "from-rose-400 to-pink-500", rating: 4.5, reviews: "920", price: "14,99 €", features: ["MagSafe", "Standfunktion"], amazonUrl: "#", category: "magsafe" },
  { id: "magsafe-puck", title: "Kabelloses MagSafe-Ladegerät, 15 W", benefit: "Kompakt, magnetisch, 15 W Ladeleistung.", image: pCharger, badge: "15 W", badgeGradient: "from-purple-500 to-pink-500", rating: 4.6, reviews: "1.760", price: "21,99 €", features: ["MagSafe", "15 W"], amazonUrl: "#", category: "magsafe" },

  // Display
  { id: "display-iphone15", title: "Displayschutzglas für iPhone 15, 2er-Pack", benefit: "Blasenfreie Montage mit Montagehilfe.", image: pScreen, badge: "2er-Pack", badgeGradient: "from-sky-400 to-cyan-500", rating: 4.7, reviews: "6.812", price: "9,99 €", features: ["2er-Pack", "9H Härte"], amazonUrl: "#", category: "display" },
  { id: "display-privacy", title: "Blickschutz-Schutzglas für iPhone 16 Pro", benefit: "Blickschutz – nur Sie sehen Ihr Display.", image: pScreen, badge: "Blickschutz", badgeGradient: "from-slate-500 to-zinc-700", rating: 4.5, reviews: "1.420", price: "14,99 €", features: ["Blickschutz"], amazonUrl: "#", category: "display" },
  { id: "display-matt", title: "Mattes Schutzglas für iPhone 15 Pro", benefit: "Reflexionsarm und fingerabdruckresistent.", image: pScreen, badge: "Mattes Glas", badgeGradient: "from-zinc-400 to-slate-500", rating: 4.6, reviews: "2.018", price: "12,99 €", features: ["Mattes Glas", "Entspiegelt"], amazonUrl: "#", category: "display" },
  { id: "display-folie", title: "Hydrogel-Schutzfolie für Samsung Galaxy S24", benefit: "Selbstheilend, ultradünn, randlose Abdeckung.", image: pScreen, badge: "Schutzfolie", badgeGradient: "from-emerald-400 to-teal-500", rating: 4.3, reviews: "812", price: "7,99 €", features: ["Selbstheilend"], amazonUrl: "#", category: "display" },
  { id: "display-watch", title: "Schutzglas für Apple Watch, 3er-Pack", benefit: "Zuverlässiger Schutz für das Watch-Display.", image: pScreen, badge: "Apple Watch", badgeGradient: "from-violet-400 to-purple-500", rating: 4.6, reviews: "1.215", price: "8,99 €", features: ["3er-Pack"], amazonUrl: "#", category: "display" },
  { id: "display-camera", title: "Kameraschutzglas für iPhone 16 Pro", benefit: "Schützt die Kameralinse vor Kratzern.", image: pScreen, badge: "Kameraschutz", badgeGradient: "from-indigo-400 to-blue-500", rating: 4.5, reviews: "980", price: "9,99 €", features: ["Kameraschutz"], amazonUrl: "#", category: "display" },

  // Charging
  { id: "anker-65w", title: "USB-C GaN-Ladegerät, 65 W", benefit: "Lädt Smartphone, Tablet und Laptop.", image: pCharger, badge: "GaN", badgeGradient: "from-emerald-500 to-teal-600", rating: 4.8, reviews: "12.420", price: "34,99 €", oldPrice: "49,99 €", features: ["GaN", "65 W"], amazonUrl: "#", category: "charging" },
  { id: "anker-mehrfach", title: "USB-C Ladestation mit 4 Anschlüssen", benefit: "Eine Steckdose, vier Geräte gleichzeitig.", image: pCharger, badge: "4 Anschlüsse", badgeGradient: "from-purple-500 to-fuchsia-500", rating: 4.7, reviews: "3.210", price: "44,99 €", features: ["4 Anschlüsse"], amazonUrl: "#", category: "charging" },
  { id: "ugreen-c-c", title: "USB-C auf USB-C Kabel, 2 m (100 W)", benefit: "100 W Power Delivery, robust verarbeitet.", image: pCable, badge: "100 W", badgeGradient: "from-blue-400 to-indigo-500", rating: 4.7, reviews: "8.412", price: "12,99 €", features: ["100 W", "2 m"], amazonUrl: "#", category: "charging" },
  { id: "kabel-3pack", title: "USB-C Kabel, 3er-Pack (1 m / 2 m / 3 m)", benefit: "Drei Längen für jeden Einsatz im Set.", image: pCable, badge: "3er-Pack", badgeGradient: "from-pink-400 to-rose-500", rating: 4.6, reviews: "2.918", price: "14,99 €", features: ["3er-Pack"], amazonUrl: "#", category: "charging" },
  { id: "wireless-pad", title: "Kabelloses Ladepad, 15 W", benefit: "Elegant, schnell, universell einsetzbar.", image: pCharger, badge: "Kabellos", badgeGradient: "from-purple-400 to-pink-500", rating: 4.5, reviews: "1.882", price: "19,99 €", features: ["Kabellos", "15 W"], amazonUrl: "#", category: "charging" },
  { id: "anker-100w", title: "Reise-Ladegerät 100 W mit Wechseladaptern", benefit: "Reise-Ladegerät mit Wechseladaptern.", image: pCharger, badge: "Reise-Set", badgeGradient: "from-amber-400 to-orange-500", rating: 4.7, reviews: "1.420", price: "59,99 €", oldPrice: "79,99 €", features: ["100 W", "Reise-Set"], amazonUrl: "#", category: "charging" },

  // Powerbanks
  { id: "anker-pb-20k", title: "Powerbank 20.000 mAh mit Schnellladen", benefit: "Große Kapazität für mehrere Tage unterwegs.", image: pPb1, badge: "20.000 mAh", badgeGradient: "from-emerald-500 to-teal-600", rating: 4.8, reviews: "9.221", price: "39,99 €", oldPrice: "59,99 €", features: ["20.000 mAh", "USB-C PD"], amazonUrl: "#", category: "powerbanks" },
  { id: "anker-nano", title: "Nano-Powerbank mit USB-C Stecker", benefit: "Direkt am Smartphone andocken, ohne Kabel.", image: pPb2, badge: "Nano", badgeGradient: "from-pink-500 to-purple-500", rating: 4.6, reviews: "3.120", price: "27,99 €", features: ["Kompakt", "USB-C"], amazonUrl: "#", category: "powerbanks" },
  { id: "iniu-mini", title: "Mini-Powerbank, 5.000 mAh", benefit: "Kreditkartengröße, passt in jede Tasche.", image: pPb2, badge: "Mini", badgeGradient: "from-cyan-400 to-sky-500", rating: 4.6, reviews: "2.014", price: "14,99 €", features: ["Mini", "Slim"], amazonUrl: "#", category: "powerbanks" },
  { id: "baseus-pb-fast", title: "Powerbank 20.000 mAh mit 65 W Ausgang", benefit: "Lädt sogar Laptops mit voller Leistung.", image: pPb1, badge: "65 W", badgeGradient: "from-fuchsia-500 to-purple-600", rating: 4.7, reviews: "1.918", price: "59,99 €", oldPrice: "79,99 €", features: ["65 W", "Laptop"], amazonUrl: "#", category: "powerbanks" },
  { id: "solar-pb", title: "Solar-Powerbank, 26.800 mAh", benefit: "Outdoor-tauglich mit integriertem Solarpanel.", image: pPb1, badge: "Solar", badgeGradient: "from-amber-400 to-yellow-500", rating: 4.4, reviews: "1.420", price: "34,99 €", features: ["Solar", "Outdoor"], amazonUrl: "#", category: "powerbanks" },
  { id: "wireless-pb", title: "Kabellose Powerbank, 10.000 mAh", benefit: "Kabellos oder per USB-C aufladen.", image: pPb2, badge: "Kabellos", badgeGradient: "from-purple-500 to-pink-500", rating: 4.5, reviews: "1.110", price: "24,99 €", features: ["Kabellos", "10.000 mAh"], amazonUrl: "#", category: "powerbanks" },

  // Car
  { id: "car-cd-mount", title: "Handyhalterung für den CD-Schacht", benefit: "Diskret im CD-Schacht montiert.", image: pMount, badge: "CD-Schacht", badgeGradient: "from-slate-500 to-zinc-700", rating: 4.5, reviews: "1.120", price: "14,99 €", features: ["CD-Schacht"], amazonUrl: "#", category: "car" },
  { id: "car-dashboard", title: "Armaturenbrett-Halterung, 360°", benefit: "Saugnapf mit besonders festem Halt.", image: pMount, badge: "360°", badgeGradient: "from-blue-400 to-indigo-500", rating: 4.6, reviews: "2.612", price: "16,99 €", features: ["360°", "Saugnapf"], amazonUrl: "#", category: "car" },
  { id: "car-charger-fast", title: "USB-C Autoladegerät 45 W mit Power Delivery", benefit: "Schnellladen auch unterwegs im Auto.", image: pCar, badge: "45 W", badgeGradient: "from-orange-400 to-red-500", rating: 4.7, reviews: "3.410", price: "14,99 €", features: ["45 W", "USB-C PD"], amazonUrl: "#", category: "car" },
  { id: "car-magsafe", title: "MagSafe Autohalterung mit kabellosem Laden", benefit: "Magnetisch andocken und kabellos laden.", image: pMount, badge: "MagSafe", badgeGradient: "from-purple-500 to-pink-500", rating: 4.6, reviews: "1.812", price: "29,99 €", oldPrice: "39,99 €", features: ["MagSafe", "Kabellos"], amazonUrl: "#", category: "car" },
  { id: "car-fm", title: "FM-Transmitter mit Bluetooth 5.0", benefit: "Musik und Anrufe im älteren Autoradio.", image: pCar, badge: "Bluetooth 5.0", badgeGradient: "from-sky-400 to-cyan-500", rating: 4.4, reviews: "5.120", price: "19,99 €", features: ["Bluetooth"], amazonUrl: "#", category: "car" },
  { id: "car-organizer", title: "Auto-Organizer für die Mittelkonsole", benefit: "Ordnung für Kabel und Kleinkram.", image: pMount, badge: "Organizer", badgeGradient: "from-amber-400 to-orange-500", rating: 4.5, reviews: "812", price: "12,99 €", amazonUrl: "#", category: "car" },
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
  { id: "airpods", name: "Earbuds Zubehör", image: pAirpods, gradient: "from-slate-100 to-zinc-100", slug: "/amazon-picks" },
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
    title: "Earbuds Zubehör: Was lohnt sich wirklich?",
    text: "Cases, Aufsätze und mehr im Vergleich.",
    image: pAirpods,
    gradient: "from-slate-50 via-zinc-50 to-gray-50",
  },
];
