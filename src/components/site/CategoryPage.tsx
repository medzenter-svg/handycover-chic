import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProductCard } from "./ProductCard";
import { products, type CategoryId } from "@/data/products";

type Props = {
  title: string;
  description: string;
  /** Wenn nicht gesetzt, werden alle Produkte angezeigt (z. B. für /amazon-picks). */
  category?: CategoryId;
};

export function CategoryPage({ title, description, category }: Props) {
  const list = category ? products.filter((p) => p.category === category) : products;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-10">
        <section className="mx-auto max-w-[1400px] px-6 pt-8">
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-card md:p-8">
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              <span className="text-gradient-brand">{title}</span>
            </h1>
            <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 pt-6 sm:px-5">
          {list.length === 0 ? (
            <div className="rounded-2xl border border-border/60 bg-card p-8 text-center text-sm text-muted-foreground">
              Bald verfügbar – wir kuratieren gerade die besten Produkte für dich.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {list.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
