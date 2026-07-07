import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight, BookOpen } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export type ArticleSection = {
  heading: string;
  content: string;
};

export type ArticleFaq = { q: string; a: string };

type SidebarCard = {
  href: string;
  image: string;
  alt: string;
  label: string;
  title: string;
  subtitle?: string;
  accentColor?: string;
  cardDescription?: string;
};

type Props = {
  title: string;
  description: string;
  intro: string;
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  internalLinks: { label: string; to: string }[];
  publishDate?: string;
  category?: string;
  sidebarCards?: SidebarCard[];
  heroText?: string;
  ctaLabel?: string;
  ctaTo?: string;
};

function FaqBlock({ faqs }: { faqs: ArticleFaq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mt-3 divide-y divide-border/60">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-2.5 text-left"
            aria-expanded={open === i}
          >
            <span className="text-[15px] font-semibold text-foreground">{faq.q}</span>
            <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <p className="pb-3 text-[14px] leading-relaxed text-foreground">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function RatgeberArticle({ title, description, intro, sections, faqs, internalLinks, publishDate, category, sidebarCards, heroText, ctaLabel, ctaTo }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-6">
        {/* HERO */}
        <section className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-violet-100 p-5 shadow-card md:p-7">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-pink-200/70 to-purple-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-200/60 to-indigo-200/40 blur-3xl" />
            <div className={`relative ${sidebarCards && sidebarCards.length > 0 ? 'flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-5' : ''}`}>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-purple-700 shadow-soft ring-1 ring-white">
                  <BookOpen className="h-3.5 w-3.5" /> Ratgeber{category ? ` · ${category}` : ""}
                </span>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                  <span className="text-gradient-brand">{title}</span>
                </h1>
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-foreground/70 md:text-[15px]">
                  {description}
                </p>
                {publishDate && (
                  <p className="mt-1.5 text-[12px] text-muted-foreground">Zuletzt aktualisiert: {publishDate}</p>
                )}
                {heroText && (
                  <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-foreground/80">{heroText}</p>
                )}
              </div>
              {sidebarCards && sidebarCards.length > 0 && (
                <div className="flex shrink-0 flex-col gap-3 self-stretch">
                  {sidebarCards.map((card) => (
                    <a
                      key={card.href}
                      href={card.href}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="group flex w-[420px] flex-1 flex-col items-center justify-between gap-2 rounded-2xl border-2 border-white/80 bg-white/70 p-4 shadow-card backdrop-blur transition hover:border-primary/40 hover:shadow-glow"
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="h-auto w-full max-h-[480px] rounded-xl object-contain flex-1"
                      />
                      <div className="text-center">
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${card.accentColor ?? 'text-purple-600'}`}>{card.label}</p>
                        <p className="mt-0.5 text-[13px] font-extrabold leading-snug text-foreground">{card.title}</p>
                        {card.subtitle && <p className="mt-0.5 text-[11px] text-muted-foreground">{card.subtitle}</p>}
                      </div>
                      <span className="w-full rounded-xl bg-[#4B0082] py-2.5 text-center text-[13px] font-bold text-white shadow transition group-hover:bg-[#3a006b]">Bei Amazon ansehen →</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        <section className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-6">
          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-card md:p-7">
            <p className="text-[15px] leading-relaxed text-foreground">{intro}</p>
            {sections.map((sec, i) => (
              <div key={i} className="mt-5 border-t border-border/60 pt-4">
                <h2 className="text-[17px] font-extrabold text-foreground">{sec.heading}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground">{sec.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        {ctaLabel && ctaTo && (
          <section className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-6">
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-violet-100 p-5 shadow-card text-center md:p-7">
              <Link
                to={ctaTo}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3.5 text-[15px] font-extrabold text-white shadow-glow transition hover:from-pink-600 hover:to-purple-700"
              >
                {ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-6">
          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-card md:p-7">
            <h2 className="text-[17px] font-extrabold text-foreground">Häufige Fragen</h2>
            <FaqBlock faqs={faqs} />
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

        {/* INTERNE VERLINKUNG */}
        <section className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-6">
          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-card md:p-7">
            <h2 className="text-[17px] font-extrabold text-foreground">Passende Kategorien & Ratgeber</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {internalLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-4 py-1.5 text-[12.5px] font-semibold text-foreground/80 transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  {link.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AFFILIATE-HINWEIS */}
        <section className="mx-auto max-w-[1400px] px-4 pt-3 sm:px-6">
          <p className="rounded-xl border border-border/60 bg-muted/40 px-4 py-2.5 text-[12px] leading-relaxed text-muted-foreground">
            <strong>Affiliate-Hinweis:</strong> Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Für Käufer entstehen keine Mehrkosten. Preise und Verfügbarkeit können sich ändern. Maßgeblich sind die Angaben auf der jeweiligen Amazon-Produktseite.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
