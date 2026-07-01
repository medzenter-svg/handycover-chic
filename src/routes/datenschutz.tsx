import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [
    { title: "Datenschutzerklärung | HandyCover" },
    { name: "robots", content: "noindex, follow" },
  ]}),
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
                <p className="mt-2">Verantwortlich für die Datenverarbeitung auf dieser Website ist: [Dein Name, Adresse, E-Mail]</p>
              </div>
              <div>
                <h2 className="text-[15px] font-bold text-foreground">2. Erhebung und Speicherung personenbezogener Daten</h2>
                <p className="mt-2">Beim Besuch dieser Website werden automatisch technische Informationen übermittelt, die der Browser an den Server sendet. Diese Daten werden nicht dauerhaft gespeichert.</p>
              </div>
              <div>
                <h2 className="text-[15px] font-bold text-foreground">3. Amazon-Partnerlinks</h2>
                <p className="mt-2">Diese Website enthält Links zu Amazon. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Wenn du auf einen Amazon-Link klickst, gelten die Datenschutzbestimmungen von Amazon.</p>
              </div>
              <div>
                <h2 className="text-[15px] font-bold text-foreground">4. Deine Rechte</h2>
                <p className="mt-2">Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner personenbezogenen Daten. Wende dich dazu an: [kontakt@handycover.de]</p>
              </div>
              <p className="text-[12px]">Bitte ersetze die Platzhalter durch deine tatsächlichen Angaben und lass die Datenschutzerklärung rechtlich prüfen.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ),
});
