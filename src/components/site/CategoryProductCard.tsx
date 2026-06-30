import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

function neutralHint(p: Product): string {
  if (p.category === "iphone" || p.category === "magsafe") return "Für iPhone";
  if (p.category === "samsung") return "Für Samsung";
  if (p.category === "display") return "Klare Sicht";
  if (p.category === "charging") return "Schnellladen";
  if (p.category === "powerbanks") return "Mobile Power";
  if (p.category === "car") return "Für unterwegs";
  if (p.category === "watch") return "Für Smartwatch";
  if (p.category === "airpods") return "Für Earbuds";
  return "Top Zubehör";
}

export function CategoryProductCard({ p }: { p: Product }) {
  const chips = (p.features && p.features.length > 0 ? p.features : [p.badge]).slice(0, 3);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition hover:border-foreground/20 hover:shadow-[0_22px_50px_-28px_rgba(15,23,42,0.4)]">
      {/* Image area */}
      <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#f4f5f7] to-[#e7eaf0] p-5 sm:h-[260px]">
        <span className="absolute left-3 top-3 z-10 rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-slate-800 ring-1 ring-slate-200 backdrop-blur">
          {chips[0]}
        </span>
        {p.oldPrice && (
          <span className="absolute right-3 top-3 z-10 rounded-md bg-slate-900 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-white">
            Sale
          </span>
        )}
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="relative z-[1] h-[82%] w-[82%] object-contain object-center drop-shadow-[0_18px_24px_rgba(15,23,42,0.22)] transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 px-5 pb-5 pt-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          {neutralHint(p)}
        </span>

        <h3 className="line-clamp-2 min-h-[2.6rem] text-[15px] font-bold leading-snug text-foreground">
          {p.title}
        </h3>

        <p className="line-clamp-2 min-h-[2.4rem] text-[12.5px] leading-snug text-muted-foreground">
          {p.benefit}
        </p>

        {chips.length > 1 && (
          <div className="flex flex-wrap gap-1.5">
            {chips.slice(1).map((f) => (
              <span
                key={f}
                className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[10.5px] font-medium text-foreground/75"
              >
                {f}
              </span>
            ))}
          </div>
        )}

        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-[20px] font-extrabold text-foreground">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[12px] text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        {/* TODO: Amazon-Link wird zentral in src/data/products.ts via `amazonUrl` gepflegt */}
        <a
          href={p.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-auto inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-4 text-[13px] font-semibold text-white transition hover:bg-slate-800"
        >
          Auf Amazon ansehen
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
