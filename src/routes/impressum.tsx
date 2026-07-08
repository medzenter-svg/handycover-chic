import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | HandyCover" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-12">
        <section className="mx-auto max-w-[900px] px-4 pt-8 sm:px-6">
          <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
            <h1 className="text-2xl font-extrabold text-foreground">Impressum</h1>

            <div className="mt-5 space-y-4 text-[13.5px] leading-relaxed text-muted-foreground">

              <div>
                <p className="font-semibold text-foreground">Diensteanbieter</p>
                <p className="mt-1">
                  HandyCover<br />
                  Crusiusstr. 1<br />
                  80538 München<br />
                  Deutschland
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Kontakt</p>
                <p className="mt-1">
                  E-Mail:{" "}
                  <a href="mailto:tk@handycover.com" className="text-primary hover:underline">
                    tk@handycover.com
                  </a>
                </p>
              </div>

              <div className="border-t border-border/60 pt-4">
                <p className="font-semibold text-foreground">Hinweis zu Affiliate-Links</p>
                <p className="mt-1">
                  Diese Website nimmt am Amazon-Partnerprogramm teil. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.
                  Weitere Informationen findest du auf unserer{" "}
                  <a href="/affiliate-hinweis" className="text-primary hover:underline">Affiliate-Hinweis-Seite</a>.
                </p>
              </div>

              <div className="border-t border-border/60 pt-4">
                <p className="font-semibold text-foreground">Haftungsausschluss</p>
                <p className="mt-1">
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Für externe Links übernehmen wir keine Haftung; für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ),
});
