import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
export const Route = createFileRoute("/affiliate-hinweis")({
  head: () => ({ meta: [
    { title: "Affiliate-Hinweis | HandyCover" },
    { name: "description", content: "Informationen zu Affiliate-Links und Amazon-Partnerschaft auf HandyCover." },
    { name: "robots", content: "index, follow" },
  ]}),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-12">
        <section className="mx-auto max-w-[900px] px-4 pt-8 sm:px-6">
          <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
            <h1 className="text-2xl font-extrabold text-foreground">Affiliate-Hinweis</h1>
            <div className="mt-5 space-y-4 text-[13.5px] leading-relaxed text-muted-foreground">
              <p>HandyCover nimmt am Amazon-Partnerprogramm teil. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen, wenn Nutzer über unsere Links Produkte bei Amazon kaufen.</p>
              <p><strong className="text-foreground">Für Käufer entstehen dabei keine Mehrkosten.</strong> Der Preis, den du bei Amazon zahlst, ist derselbe, ob du über unseren Link oder direkt zu Amazon gehst.</p>
              <p>Unsere Produktempfehlungen basieren auf eigener Recherche und Auswahl nach Kriterien wie Alltagstauglichkeit, Schutz, Material, Kompatibilität, Bewertungen und Preis-Leistung. Die Partnerschaft mit Amazon beeinflusst unsere Empfehlungen nicht.</p>
              <p>Preise und Verfügbarkeit der verlinkten Produkte können sich ändern. Maßgeblich sind stets die aktuellen Angaben auf der jeweiligen Amazon-Produktseite.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ),
});
