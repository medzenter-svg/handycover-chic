import { Star, ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="relative h-[112px] overflow-hidden bg-gradient-to-br from-white to-muted">
        <span
          className={`absolute left-2 top-2 z-10 rounded-full bg-gradient-to-r ${p.badgeGradient} px-2 py-[2px] text-[8.5px] font-bold uppercase tracking-wide text-white shadow-soft`}
        >
          {p.badge}
        </span>
        <img
          src={p.image}
          alt={p.title}
          width={280}
          height={280}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-2.5">
        <h3 className="line-clamp-2 min-h-[2.1rem] text-[11.5px] font-bold leading-snug">
          {p.title}
        </h3>

        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
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

        <div className="flex items-baseline gap-1.5">
          <span className="text-[14px] font-extrabold text-gradient-brand">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[10px] text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        <a
          href={p.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-auto inline-flex h-7 items-center justify-center gap-1 rounded-full bg-gradient-brand text-[10.5px] font-semibold text-white shadow-glow transition hover:opacity-95"
        >
          Bei Amazon ansehen
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}
