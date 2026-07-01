import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [
    { title: "Impressum | HandyCover" },
    { name: "robots", content: "noindex, follow" },
  ]}),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-12">
        <section className="mx-auto max-w-[900px] px-4 pt-8 sm:px-6">
          <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
            <h1 className="text-2xl font-extrabold text-foreground">Impressum</h1>
            <div className="mt-5 space-y-4 text-[13.5px] leading-relaxed text-muted-foreground">
              <p>Angaben gemäß § 5 TMG</p>
              <p><strong className="text-foreground">HandyCover</strong><br />
              [Vorname Nachname]<br />
              [Straße Hausnummer]<br />
              [PLZ Ort]<br />
              Deutschland</p>
              <p><strong className="text-foreground">Kontakt:</strong><br />
              E-Mail: [kontakt@handycover.de]</p>
              <p><strong className="text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
              [Vorname Nachname], [Adresse]</p>
              <p className="text-[12px]">Bitte ersetze die Platzhalter in eckigen Klammern durch deine tatsächlichen Angaben.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ),
});
