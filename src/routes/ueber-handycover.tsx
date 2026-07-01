import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/ueber-handycover")({
  head: () => ({
    meta: [
      { title: "Über HandyCover – Smartphone Zubehör Ratgeber" },
      { name: "description", content: "HandyCover ist ein unabhängiger Smartphone-Zubehör-Ratgeber mit direkten Amazon-Links und klarer Kaufberatung." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-12">
        <section className="mx-auto max-w-[1400px] px-4 pt-6 sm:px-6">
          <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Über HandyCover
            </h1>
            <div className="mt-5 max-w-2xl space-y-4 text-[14px] leading-relaxed text-muted-foreground">
              <p>HandyCover ist ein unabhängiger Smartphone-Zubehör-Ratgeber. Wir zeigen ausgewählte Produkte aus Bereichen wie Handyhüllen, Displayschutz, MagSafe, Ladegeräte, Powerbanks, Auto-Zubehör und Geschenkideen.</p>
              <p>Unser Ziel ist es, Nutzern die Suche nach passendem Zubehör zu erleichtern. Statt unübersichtlicher Produktlisten setzen wir auf klare Kategorien, kurze Kaufberatung, Vergleichstabellen und direkte Links zur jeweiligen Produktseite bei Amazon.</p>
              <p>HandyCover ist kein eigener Online-Shop. Der Kauf erfolgt direkt über Amazon. Als Amazon-Partner können wir an qualifizierten Verkäufen verdienen. Für Käufer entstehen dadurch keine Mehrkosten.</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Sorgfältig ausgewählte Produkte",
                "Direkte Amazon-Links",
                "Klare Kaufberatung",
                "Keine Mehrkosten für Käufer",
                "Vergleichstabellen & Ratgeber",
                "Regelmäßig aktualisiert",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-[13px] font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/" className="inline-flex h-10 items-center rounded-full bg-gradient-brand px-5 text-[13px] font-semibold text-white shadow-glow">
                Zur Startseite
              </Link>
              <Link to="/ratgeber" className="inline-flex h-10 items-center rounded-full border border-border bg-card px-5 text-[13px] font-semibold text-foreground hover:bg-muted">
                Zum Ratgeber
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ),
});
