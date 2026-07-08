import { Check, Sparkles, Shield, Truck, BadgeCheck, BookOpen } from "lucide-react";
import heroProducts from "@/assets/hero-products-brand.webp";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-2">
      <div className="grid gap-5">

        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-4 shadow-card md:p-6">
          <div className="relative z-10 grid items-center gap-6 md:grid-cols-[1fr_1.55fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card/85 px-3.5 py-1.5 text-[11px] font-semibold text-foreground shadow-soft backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Dein Zubehör. Dein Style.
              </span>

              {/* TOP PICKS – 3 schmale Karten über dem Titel */}
              <div className="mt-5 flex gap-2">
                {[
                  {
                    img: "/assets/products/apple-watch-series-11-gps-cellular-42mm-rosegold-blassrosa.webp",
                    badge: "Apple Watch",
                    title: "Apple Watch S11",
                    price: "499,00 €",
                    href: "https://amzn.to/448j3Pk",
                    gradient: "from-rose-100 to-pink-50",
                  },
                  {
                    img: "/assets/products/airpods-pro3-huelle-silikon-rosenrosa-umhang.webp",
                    badge: "AirPods Pro 3",
                    title: "Silikon Hülle",
                    price: "9,99 €",
                    href: "https://amzn.to/44Hx7iQ",
                    gradient: "from-fuchsia-100 to-pink-50",
                  },
                  {
                    img: "/assets/products/samsung-a15-5g-huelle-glitzer-band-silber.webp",
                    badge: "Samsung",
                    title: "Glitzer Hülle A15",
                    price: "13,29 €",
                    href: "https://amzn.to/3SGJs4c",
                    gradient: "from-violet-100 to-purple-50",
                  },
                ].map(({ img, badge, title, price, href, gradient }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className={`group flex w-[110px] shrink-0 flex-col overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br ${gradient} shadow-card transition hover:border-primary/50 hover:shadow-glow`}
                  >
                    <div className="flex items-center justify-center bg-white/50 px-2 pt-2 pb-1">
                      <img src={img} alt={title} className="h-[72px] w-[72px] object-contain" />
                    </div>
                    <div className="flex flex-col px-2 py-1.5">
                      <span className="mb-0.5 inline-block rounded-full bg-white/80 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-purple-700 leading-tight">{badge}</span>
                      <p className="text-[10px] font-extrabold leading-tight text-foreground line-clamp-2">{title}</p>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-foreground">{price}</span>
                        <span className="rounded-full bg-[#4B0082] px-1.5 py-0.5 text-[8px] font-bold text-white transition group-hover:bg-[#3a006b]">↗</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

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
                  href="/ratgeber"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-brand px-5 text-[13px] font-semibold text-white shadow-glow transition hover:opacity-95"
                >
                  <BookOpen className="h-4 w-4 text-white" />
                  Ratgeber
                </a>
                <a
                  href="/amazon-picks"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-brand px-5 text-[13px] font-semibold text-white shadow-glow transition hover:opacity-95"
                >
                  Amazon Picks
                </a>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2 text-[11.5px] text-muted-foreground sm:grid-cols-4">
                {[
                  { i: BadgeCheck, t: "Sorgfältig ausgewählt", href: "/ratgeber", external: false },
                  { i: Shield, t: "Direkt zu Amazon", href: "https://www.amazon.de", external: true, sponsored: true },
                  { i: Truck, t: "Preischeck möglich", href: "https://www.amazon.de", external: true, sponsored: true },
                  { i: Check, t: "Keine Mehrkosten", href: "/ratgeber", external: false },
                ].map(({ i: Icon, t, href, external, sponsored }) => (
                  <a
                    key={t}
                    href={href}
                    {...(external ? { target: "_blank", rel: sponsored ? "nofollow sponsored noopener" : "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {t}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <a
                href="https://amzn.to/4wvGo9L"
                target="_blank"
                rel="nofollow sponsored noopener"
                className="group flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-card to-purple/10 shadow-card transition hover:border-primary/60 hover:shadow-glow"
              >
                <img
                  src="/assets/products/iphone-huelle-astronaut-design.webp"
                  alt="iPhone Hülle Astronaut Design – für alle iPhone Modelle"
                  className="w-full object-contain"
                />
                <div className="w-full px-4 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Empfehlung der Woche</p>
                  <h3 className="mt-1 text-lg font-extrabold leading-snug tracking-tight text-foreground">
                    iPhone Hülle Astronaut Design
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Für alle iPhone Modelle
                  </p>
                  <p className="mt-1 text-lg font-bold text-foreground">9,99 €</p>
                </div>
                <div className="w-full px-4 pb-4">
                  <span className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#4B0082] px-6 text-[13px] font-bold text-white shadow-lg transition group-hover:bg-[#3a006b]">
                    Bei Amazon ansehen →
                  </span>
                  <p className="mt-2 text-center text-[10px] text-muted-foreground">*Affiliate-Link – keine Mehrkosten für dich</p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
