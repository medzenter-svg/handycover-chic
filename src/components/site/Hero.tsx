import { Check, ChevronLeft, ChevronRight, Sparkles, Shield, Truck, BadgeCheck, Star, Heart } from "lucide-react";
import heroProducts from "@/assets/hero-products.png";
import pCase from "@/assets/p-case.jpg";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-6">
      <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
        {/* Main hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-7 shadow-card md:p-10">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute right-[18%] top-[8%] h-72 w-72 rounded-full bg-pink/50 blur-3xl" />
          <div className="pointer-events-none absolute right-[2%] top-[40%] h-72 w-72 rounded-full bg-lavender/60 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 bottom-0 h-60 w-60 rounded-full bg-sky/40 blur-3xl" />

          <div className="relative z-10 grid items-center gap-6 md:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card/85 px-3.5 py-1.5 text-[11px] font-semibold text-foreground shadow-soft backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Dein Zubehör. Dein Style.
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.4rem]">
                Alles für dein
                <br />
                <span className="text-gradient-brand">Smartphone.</span>
              </h1>

              <p className="mt-3 text-lg font-semibold text-foreground/80">
                Stilvoll. Praktisch. Ausgewählt.
              </p>
              <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
                Entdecke hochwertiges Smartphone Zubehör, empfohlen von Amazon –
                für mehr Schutz, Komfort und Leistung im Alltag.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href="#bestseller"
                  className="inline-flex h-11 items-center rounded-full bg-gradient-brand px-5 text-[13px] font-semibold text-white shadow-glow transition hover:opacity-95"
                >
                  Zubehör entdecken
                </a>
                <a
                  href="#bestseller"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-card px-5 text-[13px] font-semibold text-foreground shadow-soft transition hover:bg-card/80"
                >
                  <span className="grid h-5 w-5 place-items-center rounded bg-[#FF9900] text-[10px] font-black text-white">a</span>
                  Amazon Picks ansehen
                </a>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2 text-[11.5px] text-muted-foreground sm:grid-cols-4">
                {[
                  { i: BadgeCheck, t: "Amazon Partner" },
                  { i: Shield, t: "Sichere Zahlung" },
                  { i: Truck, t: "Schnelle Lieferung" },
                  { i: Check, t: "Geprüfte Qualität" },
                ].map(({ i: Icon, t }) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-6 z-10 rounded-full bg-gradient-brand px-3.5 py-2 text-[11px] font-bold text-white shadow-glow">
                <span className="inline-flex items-center gap-1.5">
                  <Heart className="h-3 w-3 fill-white" />
                  Für dein<br />Lieblingszubehör!
                </span>
              </div>
              <img
                src={heroProducts}
                alt="Smartphone Hülle, MagSafe Ladegerät, USB‑C Netzteil und Kabel"
                width={1280}
                height={896}
                className="relative z-[1] w-full select-none object-contain drop-shadow-[0_30px_40px_rgba(180,80,140,0.18)]"
              />
            </div>
          </div>
        </div>

        {/* Recommendation card */}
        <aside className="flex flex-col rounded-3xl bg-card p-5 shadow-card md:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold">Empfehlung der Woche</h3>
            <span className="rounded-full bg-purple/30 px-2.5 py-1 text-[10px] font-bold text-foreground">
              Bestseller
            </span>
          </div>

          <div className="mt-4 grid grid-cols-[110px_1fr] gap-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100">
              <img src={pCase} alt="iPhone 16 Pro Hülle" width={440} height={440} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[15px] font-bold leading-snug">
                Spigen Ultra Hybrid Hülle für iPhone 16 Pro
              </h4>
              <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span>(2.654)</span>
              </div>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="text-xl font-extrabold text-gradient-brand">19,99 €</span>
                <span className="text-[11px] text-muted-foreground line-through">UVP 24,99 €</span>
              </div>
            </div>
          </div>

          <ul className="mt-4 space-y-1.5 text-[13px] text-foreground/80">
            {[
              "Kristallklares Design mit optimalem Schutz",
              "Erhöhte Kanten für Display & Kamera",
              "Kompatibel mit MagSafe",
              "Schlank, leicht & langlebig",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto grid grid-cols-1 gap-2 pt-5">
            <a
              href="https://www.amazon.de/?tag=handycover-21"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-brand text-[13px] font-semibold text-white shadow-glow"
            >
              Bei Amazon ansehen
            </a>
            <a
              href="https://www.amazon.de/?tag=handycover-21"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card text-[13px] font-semibold text-foreground hover:bg-muted"
            >
              Preis bei Amazon prüfen
            </a>
          </div>

          <div className="mt-4 flex items-center justify-between text-muted-foreground">
            <div className="flex gap-1.5">
              <span className="h-1.5 w-5 rounded-full bg-primary" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
            </div>
            <div className="flex gap-1.5">
              <button aria-label="Zurück" className="grid h-7 w-7 place-items-center rounded-full border border-border hover:bg-muted">
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button aria-label="Weiter" className="grid h-7 w-7 place-items-center rounded-full border border-border hover:bg-muted">
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
