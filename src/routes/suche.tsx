import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/suche")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string) ?? "",
  }),
  component: SuchePage,
});

function SuchePage() {
  const { q } = Route.useSearch();
  const query = (q ?? "").toLowerCase().trim();

  const results = query
    ? products.filter(
        (p) =>
          p.amazonUrl &&
          p.amazonUrl !== "#" &&
          (p.title.toLowerCase().includes(query) ||
            p.benefit.toLowerCase().includes(query) ||
            p.badge.toLowerCase().includes(query) ||
            (p.features ?? []).some((f) => f.toLowerCase().includes(query)))
      )
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6">
        <h1 className="mb-2 text-2xl font-extrabold text-foreground">
          Suchergebnisse für „{q}"
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          {results.length} Produkt{results.length !== 1 ? "e" : ""} gefunden
        </p>
        {results.length === 0 ? (
          <div className="rounded-2xl border border-border/60 bg-card p-10 text-center text-muted-foreground">
            Keine Produkte gefunden. Versuche einen anderen Suchbegriff.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {results.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
