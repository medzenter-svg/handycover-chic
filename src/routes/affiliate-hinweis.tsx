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
            <p className="mt-2 text-[12px] text-muted-foreground">Zuletzt aktualisiert: Juli 2025</p>

            <div className="mt-6 space-y-6 text-[13.5px] leading-relaxed text-muted-foreground">

              {/* Pflichthinweis Amazon */}
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <p className="font-semibold text-foreground">
                  Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.
                </p>
                <p className="mt-1">
                  Für dich entstehen durch die Nutzung unserer Affiliate-Links keine zusätzlichen Kosten.
                </p>
                <p className="mt-1">
                  Preise und Verfügbarkeit können sich jederzeit ändern. Maßgeblich sind ausschließlich die Angaben auf der jeweiligen Amazon-Produktseite zum Zeitpunkt des Kaufs.
                </p>
              </div>

              {/* Was ist ein Affiliate-Link */}
              <div>
                <h2 className="text-[15px] font-bold text-foreground">Was ist ein Affiliate-Link?</h2>
                <p className="mt-2">
                  HandyCover nimmt am Amazon-Partnerprogramm (Amazon Associates) teil. Wenn du auf einen unserer Produktlinks klickst und anschließend bei Amazon einen Kauf tätigst, erhalten wir eine kleine Provision. Diese Provision wird von Amazon gezahlt – nicht von dir. Du zahlst denselben Preis, den du auch ohne unseren Link zahlen würdest.
                </p>
              </div>

              {/* Kennzeichnung */}
              <div>
                <h2 className="text-[15px] font-bold text-foreground">Kennzeichnung auf dieser Website</h2>
                <p className="mt-2">
                  Alle Amazon-Produktlinks auf HandyCover sind Affiliate-Links und werden als solche gekennzeichnet. Du erkennst sie an dem Hinweis <em>„✶ Affiliate-Link"</em> direkt bei der jeweiligen Schaltfläche sowie am Hinweis im Footer dieser Website.
                </p>
              </div>

              {/* Preisangaben */}
              <div>
                <h2 className="text-[15px] font-bold text-foreground">Preisangaben und Aktualität</h2>
                <p className="mt-2">
                  Die auf HandyCover angezeigten Preise wurden zum Zeitpunkt der letzten Prüfung von Amazon übernommen. Da sich Preise bei Amazon jederzeit ändern können, stellen unsere Preisangaben keine verbindlichen Angebote dar. Maßgeblich ist stets der aktuelle Preis, der zum Zeitpunkt des Kaufs auf der jeweiligen Amazon-Produktseite angezeigt wird.
                </p>
                <p className="mt-2">
                  Durchgestrichene Preise (Streichpreise) werden nur dann angezeigt, wenn diese Information von Amazon bereitgestellt wurde. Wir berechnen keine eigenen Rabatte oder Ersparnisse.
                </p>
              </div>

              {/* Redaktionelle Unabhängigkeit */}
              <div>
                <h2 className="text-[15px] font-bold text-foreground">Redaktionelle Unabhängigkeit</h2>
                <p className="mt-2">
                  Unsere Produktauswahl und -empfehlungen basieren auf eigener Recherche nach Kriterien wie Alltagstauglichkeit, Schutz, Material, Kompatibilität, Kundenbewertungen und Preis-Leistungs-Verhältnis. Die Affiliate-Partnerschaft mit Amazon beeinflusst unsere redaktionellen Entscheidungen nicht. Wir empfehlen keine Produkte ausschließlich aufgrund einer höheren Provision.
                </p>
              </div>

              {/* Haftungsausschluss */}
              <div>
                <h2 className="text-[15px] font-bold text-foreground">Haftungsausschluss</h2>
                <p className="mt-2">
                  HandyCover übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der auf Amazon angezeigten Produktinformationen, Preise oder Verfügbarkeiten. Für den Kaufvertrag und die Abwicklung ist ausschließlich Amazon verantwortlich.
                </p>
              </div>

              {/* Kontakt */}
              <div>
                <h2 className="text-[15px] font-bold text-foreground">Fragen?</h2>
                <p className="mt-2">
                  Bei Fragen zu unserer Affiliate-Partnerschaft oder den Preisangaben erreichst du uns über unsere{" "}
                  <a href="/kontakt" className="text-primary hover:underline">Kontaktseite</a>.
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
