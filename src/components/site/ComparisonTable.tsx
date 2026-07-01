import { Link } from "@tanstack/react-router";

const rows = [
  {
    category: "Handyhüllen",
    suitable: "Alltag, Schutz, Design",
    criteria: "Stoßschutz, Kameraschutz, Material",
    recommendation: "MagSafe- oder Schutzhülle",
    link: "/iphone-zubehoer",
  },
  {
    category: "Displayschutz",
    suitable: "Schutz vor Kratzern & Stürzen",
    criteria: "Glasstärke, Härtegrad, Passform",
    recommendation: "Panzerglas",
    link: "/displayschutz",
  },
  {
    category: "MagSafe Zubehör",
    suitable: "iPhone-Nutzer",
    criteria: "Magnetstärke, Kompatibilität",
    recommendation: "MagSafe-Hülle oder Ladegerät",
    link: "/magsafe-zubehoer",
  },
  {
    category: "Powerbanks",
    suitable: "Reise, Arbeit, Notfall",
    criteria: "Kapazität, USB-C, Ladeleistung",
    recommendation: "Kompakte Powerbank",
    link: "/powerbanks",
  },
  {
    category: "Auto-Zubehör",
    suitable: "Navigation & Laden im Auto",
    criteria: "Halterung, Magnet, Stabilität",
    recommendation: "Magnetische Handyhalterung",
    link: "/auto-zubehoer",
  },
  {
    category: "Geschenkideen",
    suitable: "Technik-Fans",
    criteria: "Nutzen, Design, Preis",
    recommendation: "Zubehör-Set oder Gadget",
    link: "/geschenkideen-tech-fans",
  },
];

export function ComparisonTable() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pt-10 sm:px-5">
      <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
        <h2 className="text-xl font-extrabold tracking-tight text-foreground">
          Zubehör schnell vergleichen
        </h2>
        <p className="mt-2 text-[13.5px] text-muted-foreground">
          Welche Kategorie passt zu deinen Bedürfnissen?
        </p>
        {/* Desktop-Tabelle */}
        <div className="mt-6 hidden overflow-x-auto md:block">
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
              {rows.map((row) => (
                <tr key={row.category} className="border-b border-border/40 last:border-0">
                  <td className="py-3 pr-4 font-semibold text-foreground">
                    <Link to={row.link} className="hover:text-primary hover:underline">
                      {row.category}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-muted-foreground">{row.suitable}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{row.criteria}</td>
                  <td className="py-3 text-foreground/80">{row.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile: gestapelte Karten */}
        <div className="mt-5 grid gap-3 md:hidden">
          {rows.map((row) => (
            <Link
              key={row.category}
              to={row.link}
              className="rounded-xl border border-border/60 bg-background p-4"
            >
              <p className="text-[13px] font-bold text-foreground">{row.category}</p>
              <p className="mt-1 text-[12px] text-muted-foreground">
                <span className="font-medium text-foreground/70">Für: </span>{row.suitable}
              </p>
              <p className="mt-0.5 text-[12px] text-muted-foreground">
                <span className="font-medium text-foreground/70">Achten auf: </span>{row.criteria}
              </p>
              <p className="mt-1 text-[12px] font-semibold text-primary">{row.recommendation} →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
