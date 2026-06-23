import { Flame, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

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
            Beliebtes Smartphone-Zubehör mit direktem Amazon-Preischeck.
          </p>
        </div>
        <a href="#" className="inline-flex items-center gap-1 text-[12px] font-bold text-primary hover:underline">
          Alle Bestseller ansehen <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
