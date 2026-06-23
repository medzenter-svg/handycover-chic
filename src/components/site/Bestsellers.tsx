import { Flame, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function Bestsellers() {
  return (
    <section id="bestseller" className="mx-auto max-w-[1400px] px-6 pt-14">
      <div className="flex items-end justify-between gap-4">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold">
          <Flame className="h-6 w-6 text-primary" />
          Bestseller & Top Empfehlungen
        </h2>
        <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          Alle Bestseller ansehen <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
