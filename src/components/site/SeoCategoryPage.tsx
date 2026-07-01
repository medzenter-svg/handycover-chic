import { useState } from "react";
import { CheckCircle2, ShoppingBag, Zap, SlidersHorizontal, ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CategoryProductCard } from "./CategoryProductCard";
import { products, type CategoryId } from "@/data/products";

export type FaqItem = { q: string; a: string };
export type ComparisonRow = { category: string; suitable: string; criteria: string; recommendation: string };
export type InternalLink = { label: string; to: string };

type Props = {
  title: string;
  h1: string;
  description: string;
  intro: string;
  buyingGuide: string;
  faqs: FaqItem[];
  comparisonRows?: ComparisonRow[];
  internalLinks?: InternalLink[];
  category?: CategoryId;
  affiliateNote?: string;
};

const FILTER_CHIPS = ["MagSafe", "Bestseller", "Unter 20 €", "Schutz"];

function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-8 sm:px-6">
      <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
        <h2 className="text-lg font-extrabold text-foreground">Häufige Fragen</h2>
        <div className="mt-5 divide-y divide-border/60">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-3.5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[13.5px] font-semibold text-foreground">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <p className="pb-4 text-[13px] leading-relaxed text-muted-foreground">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}

export function SeoCategoryPage({
  title,
  h1,
  description,
  intro,
  buyingGuide,
  faqs,
  comparisonRows,
  internalLinks,
  category,
  affiliateNote,
}: Props) {
  const allProducts = category
    ? products.filter((p) => p.category === category && p.amazonUrl && p.amazonUrl !== "#")
    : products.filter((p) => p.amazonUrl && p.amazonUrl !== "#");

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
                <span className="text-gradient-brand">{h1}</span>
              </h1>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-foreground/70 md:text-[15px]">
                {description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-semibold text-foreground/80">
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-pink-500" /> Sorgfältig ausgewählt
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-fuchsia-500" /> Direkt zu Amazon
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-violet-500" /> Keine Mehrkosten
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO INTRO TEXT */}
        <section className="mx-auto max-w-[1400px] px-4 pt-7 sm:px-6">
          <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
            <h2 className="text-lg font-extrabold text-foreground">{title}</h2>
            <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{intro}</p>
            <div className="mt-5 border-t border-border/60 pt-5">
              <h3 className="text-[14px] font-bold text-foreground">Kaufberatung</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{buyingGuide}</p>
            </div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="mx-auto max-w-[1400px] px-4 pt-5 sm:px-6">
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-soft">
            <div className="inline-flex items-center gap-2 text-[13px] font-bold text-foreground">
              <ShoppingBag className="h-4 w-4 text-pink-500" />
              {allProducts.length} Produkte
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
          {allProducts.length === 0 ? (
            <div className="rounded-2xl border border-border/60 bg-card p-8 text-center text-sm text-muted-foreground">
              Bald verfügbar – wir kuratieren gerade die besten Produkte für dich.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {allProducts.map((p) => (
                <CategoryProductCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </section>

        {/* VERGLEICHSTABELLE */}
        {comparisonRows && comparisonRows.length > 0 && (
          <section className="mx-auto max-w-[1400px] px-4 pt-8 sm:px-6">
            <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
              <h2 className="text-lg font-extrabold text-foreground">Schnellvergleich</h2>
              <div className="mt-5 hidden overflow-x-auto md:block">
                <table className="w-full border-collapse text-[13px]">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="py-2.5 pr-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Kategorie</th>
                      <th className="py-2.5 pr-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Geeignet für</th>
                      <th className="py-2.5 pr-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Worauf achten?</th>
                      <th className="py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Empfehlung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.category} className="border-b border-border/40 last:border-0">
                        <td className="py-3 pr-4 font-semibold text-foreground">{row.category}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{row.suitable}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{row.criteria}</td>
                        <td className="py-3 text-foreground/80">{row.recommendation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 grid gap-3 md:hidden">
                {comparisonRows.map((row) => (
                  <div key={row.category} className="rounded-xl border border-border/60 bg-background p-4">
                    <p className="text-[13px] font-bold text-foreground">{row.category}</p>
                    <p className="mt-1 text-[12px] text-muted-foreground"><span className="font-medium text-foreground/70">Für: </span>{row.suitable}</p>
                    <p className="mt-0.5 text-[12px] text-muted-foreground"><span className="font-medium text-foreground/70">Achten auf: </span>{row.criteria}</p>
                    <p className="mt-1 text-[12px] font-semibold text-primary">{row.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <FaqSection faqs={faqs} />

        {/* INTERNE VERLINKUNG */}
        {internalLinks && internalLinks.length > 0 && (
          <section className="mx-auto max-w-[1400px] px-4 pt-8 sm:px-6">
            <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
              <h2 className="text-lg font-extrabold text-foreground">Passende Ratgeber & Kategorien</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {internalLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-4 py-2 text-[12.5px] font-semibold text-foreground/80 transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  >
                    {link.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* AFFILIATE-HINWEIS */}
        <section className="mx-auto max-w-[1400px] px-4 pt-6 sm:px-6">
          <p className="rounded-xl border border-border/60 bg-muted/40 px-5 py-3 text-[12px] leading-relaxed text-muted-foreground">
            <strong>Affiliate-Hinweis:</strong> {affiliateNote ?? "Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Für Käufer entstehen keine Mehrkosten. Preise und Verfügbarkeit können sich ändern. Maßgeblich sind die Angaben auf der jeweiligen Amazon-Produktseite."}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
