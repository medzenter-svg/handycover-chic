import { Star } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex h-full min-h-[330px] flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="relative flex h-[160px] items-center justify-center overflow-hidden bg-[#f7f7fa] p-3">
        <span
          className={`absolute left-2.5 top-2.5 z-10 rounded-full bg-gradient-to-r ${p.badgeGradient} px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-primary-foreground shadow-soft`}
        >
          {p.badge}
        </span>
        <img
          src={p.image}
          alt={p.title}
          width={260}
          height={260}
          loading="lazy"
          className="h-[128px] w-[128px] object-contain object-center transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col px-3.5 pb-3.5 pt-2.5">
        <h3 className="line-clamp-2 min-h-[2.5rem] text-[13px] font-extrabold leading-snug text-foreground">
          {p.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 min-h-[2.3rem] text-[12.5px] leading-snug text-muted-foreground">
          {p.benefit}
        </p>

        <div className="mt-2 flex items-center gap-1.5 text-[12px] text-muted-foreground">
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
          <span>({p.reviews})</span>
        </div>


        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="text-[16px] font-extrabold text-gradient-brand">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[11px] text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        <a
          href={p.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-auto inline-flex h-9 items-center justify-center rounded-full bg-gradient-brand px-3 text-[12px] font-bold text-primary-foreground shadow-glow transition hover:opacity-95"
        >
          Bei Amazon ansehen
        </a>
      </div>
    </article>
  );
}
