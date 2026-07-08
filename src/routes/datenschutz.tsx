import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | HandyCover" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-12">
        <section className="mx-auto max-w-[900px] px-4 pt-8 sm:px-6">
          <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
            <h1 className="text-2xl font-extrabold text-foreground">Datenschutzerklärung</h1>

            <div className="mt-5 space-y-5 text-[13.5px] leading-relaxed text-muted-foreground">

              <div>
                <h2 className="text-[15px] font-bold text-foreground">1. Verantwortliche Stelle</h2>
                <p className="mt-2">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  HandyCover<br />
                  Crusiusstr. 1<br />
                  80538 München<br />
                  Deutschland<br />
                  E-Mail:{" "}
                  <a href="mailto:tk@handycover.com" className="text-primary hover:underline">
                    tk@handycover.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-[15px] font-bold text-foreground">2. Erhebung und Speicherung personenbezogener Daten</h2>
                <p className="mt-2">
                  Beim Besuch dieser Website werden automatisch technische Informationen übermittelt, die dein Browser an den Server sendet (sog. Server-Logfiles). Dazu gehören unter anderem Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs sowie die aufgerufene URL. Diese Daten werden ausschließlich zur technischen Bereitstellung der Website verwendet und nicht dauerhaft personenbezogen gespeichert.
                </p>
              </div>

              <div>
                <h2 className="text-[15px] font-bold text-foreground">3. Keine aktive Datenerhebung durch HandyCover</h2>
                <p className="mt-2">
                  HandyCover betreibt kein eigenes Tracking, keine eigene Analyse-Software und keine Newsletter-Funktion. Es werden keine Cookies durch HandyCover gesetzt, die personenbezogene Daten speichern.
                </p>
              </div>

              <div>
                <h2 className="text-[15px] font-bold text-foreground">4. Amazon-Partnerlinks und Drittanbieter</h2>
                <p className="mt-2">
                  Diese Website enthält Affiliate-Links zu Amazon. Wenn du auf einen solchen Link klickst und zu Amazon weitergeleitet wirst, gelten die Datenschutzbestimmungen von Amazon (amazon.de). HandyCover hat keinen Einfluss auf die Datenverarbeitung durch Amazon. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Für dich entstehen keine zusätzlichen Kosten.
                </p>
              </div>

              <div>
                <h2 className="text-[15px] font-bold text-foreground">5. Hosting</h2>
                <p className="mt-2">
                  Diese Website wird über einen externen Hosting-Anbieter bereitgestellt. Im Rahmen des Hostings können technische Zugriffsdaten (z. B. IP-Adresse, Zeitstempel) verarbeitet werden. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website).
                </p>
              </div>

              <div>
                <h2 className="text-[15px] font-bold text-foreground">6. Deine Rechte</h2>
                <p className="mt-2">
                  Du hast nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) sowie das Recht auf Datenübertragbarkeit (Art. 20). Außerdem steht dir ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
                </p>
                <p className="mt-2">
                  Für Anfragen zu deinen Rechten wende dich an:{" "}
                  <a href="mailto:tk@handycover.com" className="text-primary hover:underline">
                    tk@handycover.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-[15px] font-bold text-foreground">7. Aktualität dieser Datenschutzerklärung</h2>
                <p className="mt-2">
                  Diese Datenschutzerklärung kann bei Änderungen der Website oder der Rechtslage aktualisiert werden. Es gilt jeweils die aktuelle Version auf dieser Seite.
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
