import { BadgeCheck, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Sorgfältig kuratiert",
    text: "Wir ordnen Smartphone-Zubehör nach Alltagstauglichkeit, Design, Schutz und Preis-Leistung ein.",
  },
  {
    icon: ExternalLink,
    title: "Direkt zu Amazon",
    text: "Die empfohlenen Produkte werden über Amazon angezeigt. Kauf, Zahlung und Lieferung erfolgen dort.",
  },
  {
    icon: ShieldCheck,
    title: "Ohne Mehrkosten",
    text: "Unsere Empfehlungen bleiben kostenlos. Bei Käufen über Partnerlinks erhalten wir ggf. eine Provision.",
  },
];

export function TrustAffiliate() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-10">
      <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-pink-50 via-purple-50 to-sky-50 p-5 shadow-card md:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-1 text-[11px] font-bold text-primary shadow-soft">
              <Sparkles className="h-3.5 w-3.5" />
              HandyCover Kaufberatung
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              Schnell das passende Zubehör finden.
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
              HandyCover ist kein eigener Shop. Wir zeigen übersichtlich ausgewählte Smartphone-Accessoires und leiten Sie zur Produktseite bei Amazon weiter.
            </p>
          </div>

          <div className="grid flex-1 gap-3 sm:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/70 bg-card/75 p-4 shadow-soft backdrop-blur">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-[13px] font-extrabold">{title}</h3>
                <p className="mt-1 text-[11.5px] leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
