import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Ist HandyCover ein eigener Shop?",
    a: "Nein. HandyCover ist kein eigener Online-Shop. Wir zeigen ausgewählte Smartphone-Zubehör-Produkte und leiten direkt zur jeweiligen Produktseite bei Amazon weiter.",
  },
  {
    q: "Entstehen beim Kauf zusätzliche Kosten?",
    a: "Nein. Beim Kauf über unsere Partnerlinks entstehen für Käufer keine Mehrkosten. Wir können jedoch eine Provision erhalten.",
  },
  {
    q: "Sind die Preise immer aktuell?",
    a: "Preise und Verfügbarkeit können sich bei Amazon ändern. Deshalb empfehlen wir, den aktuellen Preis direkt auf Amazon zu prüfen.",
  },
  {
    q: "Wie wählt HandyCover Produkte aus?",
    a: "Wir achten auf Alltagstauglichkeit, Schutz, Material, Kompatibilität, Bewertungen und Preis-Leistung.",
  },
  {
    q: "Warum führt der Button zu Amazon?",
    a: "HandyCover arbeitet als Ratgeber- und Empfehlungsseite. Der Kauf selbst erfolgt direkt bei Amazon.",
  },
  {
    q: "Kann ich Produkte vergleichen?",
    a: "Ja. Wir ergänzen Vergleichstabellen, Kategorien und Ratgeber, damit Nutzer Produkte schneller einschätzen können.",
  },
];

export function HomeFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-[1280px] px-4 pt-10 pb-6 sm:px-5">
      <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
        <h2 className="text-xl font-extrabold tracking-tight text-foreground">
          Häufige Fragen zu HandyCover
        </h2>
        <div className="mt-6 divide-y divide-border/60">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[14px] font-semibold text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="pb-4 text-[13px] leading-relaxed text-muted-foreground">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
        {/* FAQ Schema strukturierte Daten */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
