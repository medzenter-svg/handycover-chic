import { Instagram, Music2, Heart, Pin, Sparkles, Layers, Lightbulb, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-[1400px] px-6 pb-10">
      <div className="overflow-hidden rounded-3xl bg-gradient-footer shadow-card">
        <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr] lg:p-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                <Sparkles className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="text-lg font-extrabold">HandyCover</span>
            </div>
            <p className="mt-3 text-[13px] text-foreground/70">
              Dein Ratgeber für Smartphone Zubehör. Wir helfen dir, die besten
              Produkte schnell und einfach zu finden.
            </p>
            <div className="mt-4 flex gap-2">
              {[Instagram, Music2, Heart, Pin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-card text-foreground/70 shadow-soft transition hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            icon={<Layers className="h-3.5 w-3.5 text-primary" />}
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
            icon={<Lightbulb className="h-3.5 w-3.5 text-primary" />}
            title="Wissenswertes"
            items={["Ratgeber", "Amazon Picks", "Bestseller", "Neuheiten", "Geschenkideen"]}
          />
          <FooterCol
            icon={<ShieldCheck className="h-3.5 w-3.5 text-primary" />}
            title="Rechtliches"
            items={["Impressum", "Datenschutz", "Affiliate‑Hinweis", "Kontakt", "Sitemap"]}
          />

          <div>
            <h4 className="text-[13px] font-bold">Newsletter</h4>
            <p className="mt-2 text-[13px] text-foreground/70">
              Keine Deals & Tipps mehr verpassen!
            </p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="Deine E‑Mail‑Adresse"
                className="h-10 min-w-0 flex-1 rounded-full border border-border bg-card px-4 text-[13px] outline-none focus:border-primary"
              />
              <button
                type="button"
                className="inline-flex h-10 items-center rounded-full bg-gradient-brand px-4 text-[13px] font-semibold text-white shadow-glow"
              >
                Anmelden
              </button>
            </form>
            <p className="mt-2 text-[11px] text-muted-foreground">
              Abmeldung jederzeit möglich.
            </p>
          </div>
        </div>

        <div className="mx-8 mb-6 rounded-2xl border border-border/60 bg-card/70 p-4 text-center text-[12.5px] text-foreground/70 backdrop-blur lg:mx-10">
          <p className="font-semibold text-foreground">
            Als Amazon‑Partner verdienen wir an qualifizierten Verkäufen.
          </p>
          <p className="mt-1 text-[11.5px]">
            Unsere Empfehlungen bleiben für Sie kostenlos. Bei Käufen über
            Partnerlinks erhalten wir ggf. eine Provision – ohne Mehrkosten für Sie.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-border/60 px-8 py-4 text-[11px] text-muted-foreground sm:flex-row lg:px-10">
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
        <div className="grid h-6 w-6 place-items-center rounded-md bg-card shadow-soft">{icon}</div>
        <h4 className="text-[13px] font-bold">{title}</h4>
      </div>
      <ul className="mt-3 space-y-1.5 text-[12.5px] text-foreground/70">
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
