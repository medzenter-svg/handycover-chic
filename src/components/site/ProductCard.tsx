import { Star } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="relative flex h-[140px] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-white to-muted/60 p-3">
        <span
          className={`absolute left-2 top-2 z-10 rounded-full bg-gradient-to-r ${p.badgeGradient} px-1.5 py-[2px] text-[8.5px] font-bold uppercase tracking-wide text-white shadow-soft`}
        >
          {p.badge}
        </span>
        <img
          src={p.image}
          alt={p.title}
          width={240}
          height={240}
          loading="lazy"
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1 px-2.5 py-2">
        <h3 className="line-clamp-2 min-h-[1.95rem] text-[11px] font-semibold leading-snug text-foreground">
          {p.title}
        </h3>

        <div className="flex items-center gap-1 text-[9.5px] text-muted-foreground">
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
          <span className="text-[13px] font-extrabold text-gradient-brand">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[9.5px] text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        <a
          href={p.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-1 inline-flex h-6 items-center justify-center rounded-full bg-gradient-brand text-[10px] font-semibold text-white shadow-glow transition hover:opacity-95"
        >
          Bei Amazon ansehen
        </a>
      </div>
    </article>
  );
}
