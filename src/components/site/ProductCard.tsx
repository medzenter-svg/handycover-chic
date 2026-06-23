import { Star } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex h-full min-h-[238px] flex-col overflow-hidden rounded-lg border border-border/60 bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="relative flex h-[108px] items-center justify-center overflow-hidden bg-muted/40 p-0">
        <span
          className={`absolute left-1.5 top-1.5 z-10 rounded-full bg-gradient-to-r ${p.badgeGradient} px-1.5 py-[1px] text-[7.5px] font-bold uppercase tracking-wide text-primary-foreground shadow-soft`}
        >
          {p.badge}
        </span>
        <img
          src={p.image}
          alt={p.title}
          width={240}
          height={240}
          loading="lazy"
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1 px-2 py-1.5">
        <h3 className="line-clamp-2 min-h-[1.65rem] text-[10px] font-semibold leading-snug text-foreground">
          {p.title}
        </h3>

        <div className="flex items-center gap-0.5 text-[8.5px] text-muted-foreground">
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-2 w-2 ${
                  i < Math.round(p.rating) ? "fill-amber-400 text-amber-400" : "text-border"
                }`}
              />
            ))}
          </span>
          <span>({p.reviews})</span>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-[11.5px] font-extrabold text-gradient-brand">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[8.5px] text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        <a
          href={p.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-auto inline-flex h-5 items-center justify-center rounded-full bg-gradient-brand px-2 text-[9px] font-semibold text-primary-foreground shadow-glow transition hover:opacity-95"
        >
          Bei Amazon ansehen
        </a>
      </div>
    </article>
  );
}
