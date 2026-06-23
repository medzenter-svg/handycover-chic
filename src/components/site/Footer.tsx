import { Instagram, Youtube, Facebook, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-[1400px] px-6 pb-10">
      <div className="overflow-hidden rounded-3xl bg-gradient-footer shadow-card">
        {/* Single horizontal row */}
        <div className="flex flex-col gap-8 p-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:p-10">
          {/* Brand */}
          <div className="lg:max-w-[240px]">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-extrabold">HandyCover</span>
            </div>
            <p className="mt-3 text-[12.5px] leading-relaxed text-foreground/70">
              Dein Ratgeber für Smartphone Zubehör. Die besten Produkte schnell
              und einfach finden.
            </p>
            <div className="mt-4 flex gap-2">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-8 w-8 place-items-center rounded-full bg-card text-foreground/70 shadow-soft transition hover:text-primary"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <FooterCol
            title="Kategorien"
            items={[
              "iPhone Zubehör",
              "Samsung Zubehör",
              "MagSafe Zubehör",
              "Displayschutz",
              "Ladegeräte & Kabel",
              "Powerbanks",
            ]}
          />
          <FooterCol
            title="Wissenswertes"
            items={["Ratgeber", "Amazon Picks", "Bestseller", "Neuheiten", "Geschenkideen"]}
          />
          <FooterCol
            title="Rechtliches"
            items={["Impressum", "Datenschutz", "Affiliate‑Hinweis", "Kontakt", "Sitemap"]}
          />

          {/* Newsletter */}
          <div className="lg:max-w-[260px]">
            <h4 className="text-[13px] font-bold">Newsletter</h4>
            <p className="mt-2 text-[12.5px] text-foreground/70">
              Keine Deals & Tipps mehr verpassen!
            </p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="E‑Mail‑Adresse"
                className="h-9 min-w-0 flex-1 rounded-full border border-border bg-card px-3 text-[12.5px] outline-none focus:border-primary"
              />
              <button
                type="button"
                className="inline-flex h-9 items-center rounded-full bg-gradient-brand px-3.5 text-[12.5px] font-semibold text-white shadow-glow"
              >
                Anmelden
              </button>
            </form>
            <p className="mt-2 text-[11px] text-muted-foreground">
              Abmeldung jederzeit möglich.
            </p>
          </div>
        </div>

        {/* Slim bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-border/60 px-8 py-4 text-[11.5px] text-muted-foreground sm:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} HandyCover. Alle Rechte vorbehalten.</span>
          <span className="text-center">
            Als Amazon‑Partner verdienen wir an qualifizierten Verkäufen.
          </span>
          <a href="#" className="hover:text-primary">Affiliate‑Hinweis</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[13px] font-bold">{title}</h4>
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
