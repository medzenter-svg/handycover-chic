import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/affiliate-hinweis")({
  head: () => ({
    meta: [
      { title: "Affiliate-Hinweis | HandyCover" },
      {
        name: "description",
        content:
          "Informationen zu Affiliate-Links, Amazon-Partnerschaft und Preistransparenz auf HandyCover.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-12">
        <section className="mx-auto max-w-[900px] px-4 pt-8 sm:px-6">
          <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
            <h1 className="text-2xl font-extrabold text-foreground">Affiliate-Hinweis</h1>

            <div className="mt-6 space-y-5 text-[13.5px] leading-relaxed text-muted-foreground">

              {/* Pflichthinweis – hervorgehoben */}
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <p className="font-semibold text-foreground">
                  Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.
                </p>
              </div>

              <p>
                HandyCover verwendet sogenannte Affiliate-Links. Einige Links auf dieser Website führen zu Angeboten von Amazon.
              </p>

              <p>
                Wenn ein Nutzer über einen entsprechend gekennzeichneten Affiliate-Link zu Amazon gelangt und dort einen qualifizierten Kauf tätigt, können wir eine Provision erhalten. Für den Nutzer entstehen dadurch <strong className="text-foreground">keine zusätzlichen Kosten</strong>.
              </p>

              <p>
                Die Kaufabwicklung, der Kaufvertrag, die Zahlung, Lieferung, Rückgabe, Gewährleistung und der Kundenservice erfolgen ausschließlich über den jeweiligen Anbieter beziehungsweise Amazon.
              </p>

              <p>
                Preise und Verfügbarkeit können sich jederzeit ändern. Maßgeblich sind ausschließlich die Angaben auf der verlinkten Amazon-Produktseite zum Zeitpunkt des Kaufs.
              </p>

              <p>
                Auf HandyCover angezeigte Preise dienen der Orientierung. Sie werden regelmäßig geprüft, können aber seit der letzten Überprüfung geändert worden sein.
              </p>

              <p>
                Produktempfehlungen werden redaktionell ausgewählt. Eine Affiliate-Partnerschaft bedeutet nicht, dass jedes verlinkte Produkt automatisch empfohlen oder garantiert wird.
              </p>

              <p>
                Die genaue Modellkompatibilität, Produktbeschreibung, Lieferbarkeit und den aktuellen Endpreis muss der Nutzer vor dem Kauf auf Amazon prüfen.
              </p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ),
});
