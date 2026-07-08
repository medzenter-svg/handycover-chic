import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const kategorien = [
  { label: "iPhone Zubehör", to: "/iphone-zubehoer" },
  { label: "Samsung Zubehör", to: "/samsung-zubehoer" },
  { label: "MagSafe Zubehör", to: "/magsafe-zubehoer" },
  { label: "Displayschutz", to: "/displayschutz" },
  { label: "Powerbanks", to: "/powerbanks" },
  { label: "Auto-Zubehör", to: "/auto-zubehoer" },
];

const ratgeber = [
  { label: "Handyhülle kaufen", to: "/ratgeber/welche-handyhuelle-schuetzt-am-besten" },
  { label: "MagSafe Zubehör", to: "/ratgeber/magsafe-zubehoer-was-lohnt-sich" },
  { label: "Panzerglas oder Folie", to: "/ratgeber/panzerglas-oder-schutzfolie" },
  { label: "Powerbank kaufen", to: "/ratgeber/powerbank-kaufen-worauf-achten" },
  { label: "Geschenkideen", to: "/ratgeber/geschenkideen-fuer-tech-fans" },
];

const rechtliches = [
  { label: "Impressum", to: "/impressum" },
  { label: "Datenschutz", to: "/datenschutz" },
  { label: "Affiliate-Hinweis", to: "/affiliate-hinweis" },
  { label: "Kontakt", to: "/kontakt" },
  { label: "Über HandyCover", to: "/ueber-handycover" },
];

export function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-[1400px] px-6 pb-10">
      <div className="overflow-hidden rounded-3xl bg-gradient-footer shadow-card">
        <div className="grid grid-cols-1 items-start gap-7 p-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-12 md:p-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-extrabold">HandyCover</span>
            </div>
            <p className="mt-3 text-[12.5px] leading-relaxed text-foreground/70">
              Unabhängiger Ratgeber für Smartphone-Zubehör. Ausgewählte Produkte mit direktem Amazon-Link und klarer Kaufberatung.
            </p>

          </div>

          <FooterCol title="Kategorien" items={kategorien} />
          <FooterCol title="Ratgeber" items={ratgeber} />
          <FooterCol title="Rechtliches" items={rechtliches} />


        </div>

        {/* Affiliate-Hinweis */}
        <div className="border-t border-border/60 px-8 py-4 md:px-10">
          <p className="text-[11.5px] leading-relaxed text-muted-foreground">
            <strong>Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.</strong>{" "}
            Für dich entstehen durch die Nutzung unserer Affiliate-Links keine zusätzlichen Kosten.{" "}
            Preise und Verfügbarkeit können sich jederzeit ändern. Maßgeblich sind ausschließlich die Angaben auf der jeweiligen Amazon-Produktseite zum Zeitpunkt des Kaufs.
          </p>
        </div>

        {/* Slim bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-border/60 px-8 py-4 text-[11.5px] text-muted-foreground sm:flex-row md:px-10">
          <span>© {new Date().getFullYear()} HandyCover. Alle Rechte vorbehalten.</span>
          <span className="text-center">
            Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Preise und Verfügbarkeit können sich jederzeit ändern.
          </span>
          <Link to="/affiliate-hinweis" className="hover:text-primary">Affiliate-Hinweis</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-[13px] font-bold">{title}</h4>
      <ul className="mt-3 space-y-1.5 text-[12.5px] text-foreground/70">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="hover:text-primary">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
