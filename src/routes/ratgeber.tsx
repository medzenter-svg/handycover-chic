import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BookOpen, ArrowRight } from "lucide-react";

const articles = [
  { title: "Welche Handyhülle schützt am besten?", desc: "Stoßschutz, Kameraschutz, Material und Passform im Überblick.", to: "/ratgeber/welche-handyhuelle-schuetzt-am-besten" },
  { title: "MagSafe Zubehör: Was lohnt sich wirklich?", desc: "Ladegeräte, Halterungen, Wallets und Powerbanks für iPhone-Nutzer.", to: "/ratgeber/magsafe-zubehoer-was-lohnt-sich" },
  { title: "Panzerglas oder Schutzfolie: Was ist besser?", desc: "Vergleich der beiden Displayschutz-Varianten mit Kaufberatung.", to: "/ratgeber/panzerglas-oder-schutzfolie" },
  { title: "Powerbank kaufen: Worauf achten?", desc: "Kapazität, USB-C, Schnellladen und praktische Tipps.", to: "/ratgeber/powerbank-kaufen-worauf-achten" },
  { title: "Handyhalterung fürs Auto: Magnetisch oder Klemme?", desc: "Vergleich der wichtigsten Halterungstypen für sicheres Fahren.", to: "/ratgeber/handyhalterung-auto-magnetisch-oder-klemme" },
  { title: "Geschenkideen für Tech-Fans", desc: "Praktische Smartphone-Zubehör-Ideen für jeden Anlass.", to: "/ratgeber/geschenkideen-fuer-tech-fans" },
  { title: "Wasserdichte Handyhülle: Wann lohnt sie sich?", desc: "Für Strand, Pool und Outdoor – worauf du achten solltest.", to: "/ratgeber/wasserdichte-handyhuelle" },
  { title: "USB-C Ladegerät: Wie viel Watt braucht man?", desc: "Schnellladen, Power Delivery und die richtige Watt-Zahl.", to: "/ratgeber/usb-c-ladegeraet-wieviel-watt" },
];

export const Route = createFileRoute("/ratgeber")({
  head: () => ({
    meta: [
      { title: "Smartphone Zubehör Ratgeber – Kaufberatung & Tipps | HandyCover" },
      { name: "description", content: "Ratgeber zu Handyhüllen, MagSafe, Displayschutz, Powerbanks, Ladegeräten, Auto-Zubehör und Geschenkideen." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-12">
        <section className="mx-auto max-w-[1400px] px-4 pt-6 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-violet-100 p-6 shadow-card md:p-10">
            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-purple-700 shadow-soft ring-1 ring-white">
                <BookOpen className="h-3.5 w-3.5" /> Kaufberatung & Tipps
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                <span className="text-gradient-brand">Smartphone Zubehör Ratgeber</span>
              </h1>
              <p className="mt-3 text-[14px] leading-relaxed text-foreground/70">
                Praktische Kaufberatung, Vergleiche und Tipps zu Handyhüllen, MagSafe, Displayschutz, Powerbanks, Ladegeräten, Auto-Zubehör und Geschenkideen.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-[1400px] px-4 pt-7 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {articles.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="flex flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition hover:border-primary/30"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpen className="h-4.5 w-4.5 text-primary" />
                </div>
                <h2 className="mt-3 text-[14px] font-bold leading-snug text-foreground">{a.title}</h2>
                <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-muted-foreground">{a.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-primary">
                  Zum Ratgeber <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ),
});
