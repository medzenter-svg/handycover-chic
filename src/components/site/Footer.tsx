import { Instagram, Music2, Heart, Pin, Sparkles, Layers, Lightbulb, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-gradient-footer">
      <div className="mx-auto max-w-[1400px] px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-extrabold">HandyCover</span>
            </div>
            <p className="mt-4 text-sm text-foreground/70">
              Dein Ratgeber für Smartphone Zubehör. Wir helfen dir, die besten
              Produkte schnell und einfach zu finden.
            </p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Music2, Heart, Pin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-card text-foreground/70 shadow-soft transition hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            icon={<Layers className="h-4 w-4 text-primary" />}
            title="Kategorien"
            items={[
              "iPhone Zubehör",
              "Samsung Zubehör",
              "MagSafe Zubehör",
              "Displayschutz",
              "Ladegeräte & Kabel",
              "Powerbanks",
              "Auto‑Halterungen",
              "Alle Kategorien",
            ]}
          />
          <FooterCol
            icon={<Lightbulb className="h-4 w-4 text-primary" />}
            title="Wissenswertes"
            items={["Ratgeber", "Amazon Picks", "Bestseller", "Neuheiten", "Geschenkideen"]}
          />
          <FooterCol
            icon={<ShieldCheck className="h-4 w-4 text-primary" />}
            title="Rechtliches"
            items={["Impressum", "Datenschutz", "Affiliate‑Hinweis", "Kontakt", "Sitemap"]}
          />

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold">Newsletter</h4>
            <p className="mt-2 text-sm text-foreground/70">
              Keine Deals & Tipps mehr verpassen!
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Deine E‑Mail‑Adresse"
                className="h-11 min-w-0 flex-1 rounded-full border border-border bg-card px-4 text-sm outline-none focus:border-primary"
              />
              <button
                type="button"
                className="inline-flex h-11 items-center rounded-full bg-gradient-brand px-5 text-sm font-semibold text-white shadow-glow"
              >
                Anmelden
              </button>
            </form>
            <p className="mt-3 text-[11px] text-muted-foreground">
              Abmeldung jederzeit möglich.
            </p>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div className="mt-12 rounded-2xl border border-border/60 bg-card/60 p-5 text-center text-sm text-foreground/70 backdrop-blur">
          <p className="font-semibold text-foreground">
            Als Amazon‑Partner verdienen wir an qualifizierten Verkäufen.
          </p>
          <p className="mt-2 text-[13px]">
            Unsere Empfehlungen bleiben für Sie kostenlos. Bei Käufen über
            Partnerlinks, z. B. bei Amazon, erhalten wir ggf. eine Provision –
            ohne Mehrkosten für Sie.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} HandyCover. Alle Rechte vorbehalten.</span>
          <span>Made with 💜 for smartphone lovers.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-lg bg-card shadow-soft">{icon}</div>
        <h4 className="text-sm font-bold">{title}</h4>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-foreground/70">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-primary">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
