import { Star } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative h-[150px] overflow-hidden bg-gradient-to-br from-muted to-secondary">
        <span
          className={`absolute left-2.5 top-2.5 z-10 rounded-full bg-gradient-to-r ${p.badgeGradient} px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wide text-white shadow-soft`}
        >
          {p.badge}
        </span>
        <img
          src={p.image}
          alt={p.title}
          width={320}
          height={320}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 min-h-[2.4rem] text-[12.5px] font-bold leading-snug">
          {p.title}
        </h3>

        <div className="mt-1.5 flex items-center gap-1 text-[10.5px] text-muted-foreground">
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-2.5 w-2.5 ${
                  i < Math.round(p.rating) ? "fill-amber-400 text-amber-400" : "text-border"
                }`}
              />
            ))}
          </span>
          <span>({p.reviews})</span>
        </div>

        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="text-[15px] font-extrabold text-gradient-brand">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[10px] text-muted-foreground line-through">UVP {p.oldPrice}</span>
          )}
        </div>

        <a
          href={p.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-auto inline-flex h-8 items-center justify-center rounded-full bg-gradient-brand text-[11px] font-semibold text-white shadow-glow transition hover:opacity-95"
        >
          Bei Amazon ansehen
        </a>
      </div>
    </article>
  );
}
