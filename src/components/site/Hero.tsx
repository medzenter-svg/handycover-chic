import { Check, Sparkles, Shield, Truck, BadgeCheck } from "lucide-react";
import heroProducts from "@/assets/hero-products-brand.jpg";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-6">
      <div className="grid gap-5">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-card md:p-10">
          <div className="relative z-10 grid items-center gap-6 md:grid-cols-[1fr_1.55fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card/85 px-3.5 py-1.5 text-[11px] font-semibold text-foreground shadow-soft backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Dein Zubehör. Dein Style.
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.4rem]">
                Smartphone-Zubehör,
                <br />
                <span className="text-gradient-brand">das wirklich passt.</span>
              </h1>

              <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
                Ausgewählte Handyhüllen, MagSafe-Zubehör, Displayschutz, Ladegeräte und praktische Gadgets – mit direktem Amazon-Preischeck und klarer Kaufberatung.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href="#bestseller"
                  className="inline-flex h-11 items-center rounded-full bg-gradient-brand px-5 text-[13px] font-semibold text-white shadow-glow transition hover:opacity-95"
                >
                  Zubehör entdecken
                </a>
                <a
                  href="/amazon-picks"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-card px-5 text-[13px] font-semibold text-foreground shadow-soft transition hover:bg-card/80"
                >
                  <span className="grid h-5 w-5 place-items-center rounded bg-[#FF9900] text-[10px] font-black text-white">a</span>
                  Amazon Picks ansehen
                </a>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2 text-[11.5px] text-muted-foreground sm:grid-cols-4">
                {[
                  { i: BadgeCheck, t: "Sorgfältig ausgewählt" },
                  { i: Shield, t: "Direkt zu Amazon" },
                  { i: Truck, t: "Preischeck möglich" },
                  { i: Check, t: "Keine Mehrkosten" },
                ].map(({ i: Icon, t }) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <a
                href="https://amzn.to/4p6oLec"
                target="_blank"
                rel="nofollow sponsored noopener"
                className="group mx-auto flex w-full max-w-xs flex-col items-center justify-center gap-3 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-card to-purple/10 p-5 shadow-card transition hover:border-primary/60 hover:shadow-glow"
              >
                <img
                  src="/assets/products/samsung-ladestation-s26-3in1-new.jpg"
                  alt="Induktive Ladestation Samsung S26 Ultra 3 in 1 Galaxy Watch Buds3"
                  className="h-48 w-auto rounded-xl object-contain shadow-card"
                />
                <div className="text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Empfehlung der Woche</p>
                  <h3 className="mt-1.5 text-lg font-extrabold leading-snug tracking-tight text-foreground">
                    Induktive Ladestation für Samsung S26 Ultra
                  </h3>
                  <p className="mt-1 text-[12.5px] text-muted-foreground">
                    3 in 1 – Galaxy S26/S25/S24/Z Flip 7, Watch 8/7/Ultra/6/5, Buds3/3 Pro
                  </p>
                </div>
                <span className="inline-flex h-8 w-full items-center justify-center rounded-full bg-[#4B0082] px-4 text-[11px] font-bold text-white shadow transition group-hover:bg-[#3a006b]">
                  Bei Amazon ansehen →
                </span>
                <p className="text-[10px] text-muted-foreground">*Affiliate-Link – keine Mehrkosten für dich</p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
