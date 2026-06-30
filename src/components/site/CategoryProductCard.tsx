import { Star, Sparkles } from "lucide-react";
import type { Product } from "@/data/products";

export function CategoryProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-card-hover">
      {/* Image area */}
      <div className="relative flex h-[230px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdf2f8] via-[#faf5ff] to-[#eef2ff] p-4 sm:h-[260px]">
        {/* decorative circle */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[78%] w-[78%] rounded-full bg-white/70 shadow-[0_20px_60px_-20px_rgba(168,85,247,0.35)] ring-1 ring-white/80" />
        </div>

        <span
          className={`absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${p.badgeGradient} px-2.5 py-1 text-[10.5px] font-extrabold uppercase tracking-wide text-primary-foreground shadow-soft`}
        >
          <Sparkles className="h-3 w-3" />
          {p.badge}
        </span>

        {p.oldPrice && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2 py-0.5 text-[10.5px] font-bold text-pink-600 shadow-soft ring-1 ring-pink-100">
            Sale
          </span>
        )}

        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="relative z-[1] h-[78%] w-[78%] object-contain object-center drop-shadow-[0_18px_22px_rgba(80,40,120,0.18)] transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
        <h3 className="line-clamp-2 min-h-[2.6rem] text-[14px] font-extrabold leading-snug text-foreground">
          {p.title}
        </h3>

        <p className="line-clamp-2 min-h-[2.4rem] text-[12.5px] leading-snug text-muted-foreground">
          {p.benefit}
        </p>

        {p.features && p.features.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {p.features.slice(0, 3).map((f) => (
              <span
                key={f}
                className="rounded-full bg-muted px-2 py-0.5 text-[10.5px] font-semibold text-foreground/80"
              >
                {f}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.round(p.rating) ? "fill-amber-400 text-amber-400" : "text-border"
                }`}
              />
            ))}
          </span>
          <span className="font-semibold text-foreground/80">{p.rating.toFixed(1)}</span>
          <span>({p.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-[18px] font-extrabold text-gradient-brand">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[12px] text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        {/* TODO: Amazon-Link wird zentral in src/data/products.ts via `amazonUrl` gepflegt */}
        <div className="mt-auto flex flex-col gap-1.5 pt-2">
          <a
            href={p.amazonUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-brand px-3 text-[12.5px] font-bold text-primary-foreground shadow-glow transition hover:opacity-95"
          >
            Bei Amazon ansehen
          </a>
          <a
            href={p.amazonUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex h-9 items-center justify-center rounded-full border border-border bg-card px-3 text-[12px] font-semibold text-foreground transition hover:bg-muted"
          >
            Preis prüfen
          </a>
        </div>
      </div>
    </article>
  );
}
