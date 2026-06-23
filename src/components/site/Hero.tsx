import { Check, ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import pCase from "@/assets/p-case.jpg";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-8">
      <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
        {/* Main hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 shadow-card md:p-12">
          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-xs font-semibold text-foreground shadow-soft backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Dein Zubehör. Dein Style.
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                Alles für dein
                <br />
                <span className="text-gradient-brand">Smartphone.</span>
              </h1>

              <p className="mt-4 text-xl font-semibold text-foreground/80">
                Stilvoll. Praktisch. Ausgewählt.
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Entdecke die besten Hüllen, Ladegeräte, MagSafe Accessoires und
                mehr – sorgfältig ausgewählt und direkt bei Amazon erhältlich.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#bestseller"
                  className="inline-flex h-12 items-center rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
                >
                  Zubehör entdecken
                </a>
                <a
                  href="#bestseller"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-card px-6 text-sm font-semibold text-foreground shadow-soft transition hover:bg-card/80"
                >
                  <span className="grid h-5 w-5 place-items-center rounded bg-[#FF9900] text-[10px] font-black text-white">a</span>
                  Amazon Picks ansehen
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                {["Amazon Partner", "Sichere Zahlung", "Schnelle Lieferung", "Geprüfte Qualität"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImg}
                alt="Smartphone Zubehör: Hülle, Ladegerät und MagSafe"
                width={1280}
                height={960}
                className="w-full rounded-2xl object-cover"
              />
              <div className="absolute -left-2 top-6 rounded-full bg-gradient-brand px-4 py-2 text-xs font-bold text-white shadow-glow">
                Für dein <br /> Liebzubehör!
              </div>
            </div>
          </div>

          {/* decorative blobs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-sky/40 blur-3xl" />
        </div>

        {/* Recommendation card */}
        <aside className="rounded-3xl bg-card p-6 shadow-card md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Empfehlung der Woche</h3>
            <span className="rounded-full bg-purple/30 px-3 py-1 text-[11px] font-bold text-foreground">
              Bestseller
            </span>
          </div>

          <div className="mt-5 grid grid-cols-[120px_1fr] gap-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100">
              <img src={pCase} alt="iPhone 16 Pro Hülle" width={640} height={640} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0">
              <h4 className="text-base font-bold leading-snug">
                Spigen Ultra Hybrid Hülle für iPhone 16 Pro
              </h4>
              <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span>(2.654)</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-gradient-brand">19,99 €</span>
                <span className="text-xs text-muted-foreground line-through">24,99 €</span>
              </div>
            </div>
          </div>

          <ul className="mt-5 space-y-2 text-sm text-foreground/80">
            {[
              "Kristallklares Design mit optimalem Schutz",
              "Erhöhte Kanten für Display & Kamera",
              "Kompatibel mit MagSafe",
              "Schlank, leicht & langlebig",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href="https://www.amazon.de/?tag=handycover-21"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-brand text-sm font-semibold text-white shadow-glow"
            >
              Bei Amazon ansehen
            </a>
            <a
              href="#bestseller"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:bg-muted"
            >
              Alle Hüllen entdecken
            </a>
          </div>

          <div className="mt-5 flex items-center justify-between text-muted-foreground">
            <div className="flex gap-1.5">
              <span className="h-1.5 w-6 rounded-full bg-primary" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
            </div>
            <div className="flex gap-2">
              <button className="grid h-8 w-8 place-items-center rounded-full border border-border hover:bg-muted">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="grid h-8 w-8 place-items-center rounded-full border border-border hover:bg-muted">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
