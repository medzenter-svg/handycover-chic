import { CheckCircle2, ShoppingBag, Zap, SlidersHorizontal } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CategoryProductCard } from "./CategoryProductCard";
import { products, type CategoryId } from "@/data/products";

type Props = {
  title: string;
  description: string;
  /** Wenn nicht gesetzt, werden alle Produkte angezeigt (z. B. für /amazon-picks). */
  category?: CategoryId;
};

const FILTER_CHIPS = ["MagSafe", "Klar", "Bestseller", "Unter 20 €"];

export function CategoryPage({ title, description, category }: Props) {
  const list = category ? products.filter((p) => p.category === category) : products;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-12">
        {/* HERO */}
        <section className="mx-auto max-w-[1400px] px-4 pt-6 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-violet-100 p-6 shadow-card md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-pink-200/70 to-purple-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-200/60 to-indigo-200/40 blur-3xl" />

            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-purple-700 shadow-soft ring-1 ring-white">
                <Zap className="h-3.5 w-3.5" /> Amazon Affiliate Auswahl
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                <span className="text-gradient-brand">{title}</span>
              </h1>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-foreground/70 md:text-[15px]">
                {description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-semibold text-foreground/80">
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-pink-500" /> Sorgfältig kuratiert
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-fuchsia-500" /> Amazon Preischeck
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-violet-500" /> Schnelle Produktauswahl
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="mx-auto max-w-[1400px] px-4 pt-5 sm:px-6">
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-soft">
            <div className="inline-flex items-center gap-2 text-[13px] font-bold text-foreground">
              <ShoppingBag className="h-4 w-4 text-pink-500" />
              {list.length} Produkte
            </div>
            <div className="mx-1 hidden h-5 w-px bg-border sm:block" />
            <div className="flex flex-wrap gap-1.5">
              {FILTER_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  className="rounded-full border border-border/70 bg-background px-3 py-1 text-[11.5px] font-semibold text-foreground/80 transition hover:border-pink-300 hover:bg-pink-50 hover:text-pink-700"
                >
                  {chip}
                </button>
              ))}
            </div>
            <div className="ml-auto inline-flex items-center gap-2 text-[12.5px] font-semibold text-foreground/80">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              Sortierung:
              <span className="rounded-full bg-muted px-2.5 py-1 text-[11.5px] font-bold text-foreground">
                Empfohlen
              </span>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID */}
        <section className="mx-auto max-w-[1400px] px-4 pt-5 sm:px-6">
          {list.length === 0 ? (
            <div className="rounded-2xl border border-border/60 bg-card p-8 text-center text-sm text-muted-foreground">
              Bald verfügbar – wir kuratieren gerade die besten Produkte für dich.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((p) => (
                <CategoryProductCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
