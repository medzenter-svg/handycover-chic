import { Flame, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function Bestsellers() {
  return (
    <section id="bestseller" className="mx-auto max-w-[1400px] px-6 pt-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="flex items-center gap-2 text-xl font-extrabold">
          <Flame className="h-5 w-5 text-primary" />
          Bestseller & Top Empfehlungen
        </h2>
        <a href="#" className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-primary hover:underline">
          Alle Bestseller ansehen <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
