import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: [
    { title: "Kontakt | HandyCover" },
    { name: "robots", content: "noindex, follow" },
  ]}),
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-12">
        <section className="mx-auto max-w-[900px] px-4 pt-8 sm:px-6">
          <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
            <h1 className="text-2xl font-extrabold text-foreground">Kontakt</h1>
            <div className="mt-5 space-y-4 text-[13.5px] leading-relaxed text-muted-foreground">
              <p>Bei Fragen, Anmerkungen oder Hinweisen zu Produkten oder Inhalten auf HandyCover kannst du uns gerne kontaktieren.</p>
              <p><strong className="text-foreground">E-Mail:</strong> [kontakt@handycover.de]</p>
              <p className="text-[12px]">Bitte ersetze den Platzhalter durch deine tatsächliche E-Mail-Adresse.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ),
});
