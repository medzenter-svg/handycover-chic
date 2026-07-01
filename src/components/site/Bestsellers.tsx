import { Flame, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

// Nur Produkte mit echten Amazon-Links anzeigen
const activeProducts = products.filter((p) => p.amazonUrl && p.amazonUrl !== "#");

// Kategoriereihenfolge für logische Gruppierung
const categoryOrder = ["iphone", "samsung", "magsafe", "display", "charging", "powerbanks", "car", "watch", "airpods"];

const sortedProducts = [...activeProducts].sort((a, b) => {
  const ai = categoryOrder.indexOf(a.category);
  const bi = categoryOrder.indexOf(b.category);
  return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
});

export function Bestsellers() {
  return (
    <section id="bestseller" className="mx-auto max-w-[1280px] px-4 pt-7 sm:px-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-extrabold">
            <Flame className="h-4 w-4 text-primary" />
            Bestseller & Top Empfehlungen
          </h2>
          <p className="mt-1 text-[12px] text-muted-foreground">
            Beliebtes Smartphone-Zubehör mit direktem Amazon-Link, klaren Vorteilen und praktischer Kaufberatung.
          </p>
        </div>
        <a href="#" className="inline-flex items-center gap-1 text-[12px] font-bold text-primary hover:underline">
          Alle Bestseller ansehen <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
        Unsere Bestseller-Auswahl hilft dir, schnell beliebtes Zubehör für iPhone, Samsung und andere Smartphones zu finden. Statt endloser Suche zeigen wir kompakte Empfehlungen für Schutz, MagSafe, Displayschutz, Ladegeräte, Powerbanks und Auto-Zubehör.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
        {sortedProducts.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
