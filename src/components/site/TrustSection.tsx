import { CheckCircle, Shield, Zap, Star, Users, Map } from "lucide-react";

const criteria = [
  {
    icon: CheckCircle,
    title: "Alltagstauglichkeit",
    desc: "Wir achten darauf, ob ein Produkt im täglichen Gebrauch wirklich praktisch ist – durch gute Haptik, einfache Bedienung und sinnvolle Schutzfunktionen.",
  },
  {
    icon: Shield,
    title: "Schutz & Material",
    desc: "Bei Hüllen, Displayschutz und Taschen zählen Stoßschutz, Kameraschutz, Randhöhe, Materialqualität und Verarbeitung.",
  },
  {
    icon: Zap,
    title: "Kompatibilität",
    desc: "Produkte sollen klar zu den passenden Smartphone-Modellen, MagSafe-Systemen, USB-C-Geräten oder Zubehör-Kategorien passen.",
  },
  {
    icon: Star,
    title: "Preis-Leistung",
    desc: "Wir bevorzugen Produkte, bei denen Ausstattung, Qualität und Preis in einem vernünftigen Verhältnis stehen.",
  },
  {
    icon: Users,
    title: "Bewertungen & Beliebtheit",
    desc: "Käuferbewertungen, erkennbare Produktqualität und Nachfrage fließen in die Auswahl ein.",
  },
  {
    icon: Map,
    title: "Nutzungsszenario",
    desc: "Wir sortieren Zubehör nach echten Bedürfnissen: Alltag, Business, Outdoor, Auto, Reise, Geschenk oder Technik-Fans.",
  },
];

export function TrustSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pt-10 sm:px-5">
      <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
        <div className="max-w-2xl">
          <h2 className="text-xl font-extrabold tracking-tight text-foreground">
            So wählen wir Zubehör aus
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
            HandyCover zeigt keine endlosen Produktlisten. Wir kuratieren Zubehör nach praktischen Kriterien, damit Nutzer schneller passende Produkte für Alltag, Reise, Auto, Arbeit oder Geschenkideen finden.
          </p>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-3 rounded-2xl border border-border/60 bg-background p-4">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-foreground">{title}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
