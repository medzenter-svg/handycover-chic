import { Star } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex h-full min-h-[292px] flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="relative flex h-[150px] items-center justify-center overflow-hidden bg-[#f7f7fa] p-3">
        <span
          className={`absolute left-2 top-2 z-10 rounded-full bg-gradient-to-r ${p.badgeGradient} px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-primary-foreground shadow-soft`}
        >
          {p.badge}
        </span>
        <img
          src={p.image}
          alt={p.title}
          width={260}
          height={260}
          loading="lazy"
          className="h-[122px] w-[122px] object-contain object-center transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-2">
        <h3 className="line-clamp-2 min-h-[2rem] text-[11px] font-extrabold leading-snug text-foreground">
          {p.title}
        </h3>

        <p className="mt-1 line-clamp-2 min-h-[1.7rem] text-[9.5px] leading-snug text-muted-foreground">
          {p.benefit}
        </p>

        <div className="mt-1.5 flex items-center gap-0.5 text-[9px] text-muted-foreground">
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
          <span className="text-[13px] font-extrabold text-gradient-brand">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[9px] text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        <a
          href={p.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-auto inline-flex h-7 items-center justify-center rounded-full bg-gradient-brand px-3 text-[10px] font-bold text-primary-foreground shadow-glow transition hover:opacity-95"
        >
          Bei Amazon ansehen
        </a>
      </div>
    </article>
  );
}
