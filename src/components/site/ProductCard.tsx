import { Star } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-secondary">
        <span
          className={`absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r ${p.badgeGradient} px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-soft`}
        >
          {p.badge}
        </span>
        <img
          src={p.image}
          alt={p.title}
          width={640}
          height={640}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 min-h-[2.6rem] text-sm font-bold leading-snug">
          {p.title}
        </h3>
        <p className="mt-1 line-clamp-2 min-h-[2.4rem] text-xs text-muted-foreground">
          {p.benefit}
        </p>

        <div className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.round(p.rating) ? "fill-amber-400 text-amber-400" : "text-border"
                }`}
              />
            ))}
          </span>
          <span>({p.reviews})</span>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-extrabold text-gradient-brand">{p.price}</span>
          {p.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">UVP {p.oldPrice}</span>
          )}
        </div>

        <a
          href={p.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-gradient-brand text-xs font-semibold text-white shadow-glow transition hover:opacity-95"
        >
          Bei Amazon ansehen
        </a>
      </div>
    </article>
  );
}
