import { Link } from "@tanstack/react-router";
import { Smartphone, Magnet, Shield, Car, Zap, BatteryCharging, Gift, Plane } from "lucide-react";

const items = [
  { icon: Smartphone, label: "Ich brauche Schutz fürs Handy", to: "/iphone-zubehoer" },
  { icon: Magnet, label: "Ich suche MagSafe Zubehör", to: "/magsafe-zubehoer" },
  { icon: Shield, label: "Ich brauche Displayschutz", to: "/displayschutz" },
  { icon: Car, label: "Ich suche Zubehör fürs Auto", to: "/auto-zubehoer" },
  { icon: Zap, label: "Ich brauche Ladegeräte & Kabel", to: "/ladegeraete-kabel" },
  { icon: BatteryCharging, label: "Ich suche eine Powerbank", to: "/powerbanks" },
  { icon: Gift, label: "Ich suche Geschenkideen", to: "/geschenkideen-tech-fans" },
  { icon: Plane, label: "Ich brauche Zubehör für Reisen", to: "/reise-zubehoer" },
];

export function AccessoryFinder() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pt-10 sm:px-5">
      <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
        <div className="max-w-xl">
          <h2 className="text-xl font-extrabold tracking-tight text-foreground">
            Finde dein passendes Zubehör in 30 Sekunden
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
            Wähle aus, wofür du Zubehör suchst – HandyCover führt dich direkt zur passenden Kategorie oder Kaufberatung.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {items.map(({ icon: Icon, label, to }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center gap-2.5 rounded-2xl border border-border/70 bg-background px-3 py-4 text-center text-[12.5px] font-semibold text-foreground transition hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="leading-snug">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
