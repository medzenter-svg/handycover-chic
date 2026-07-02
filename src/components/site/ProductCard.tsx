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
  if (p.category === "audio") return "Für Earbuds";
  if (p.category === "earbuds") return "Für Earbuds";
  if (p.category === "ladegeraete") return "Kabel & Organizer";
  return "Top Zubehör";
}

function shortLabel(p: Product): string {
  if (p.features && p.features.length > 0) return p.features[0];
  return p.badge;
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card">
      {/* Image */}
      <div className="relative flex h-[242px] items-center justify-center overflow-hidden bg-white p-3">
        <span className="absolute left-2.5 top-2.5 z-10 rounded-md bg-white/90 px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-slate-800 ring-1 ring-slate-200 backdrop-blur">
          {shortLabel(p)}
        </span>
        {p.oldPrice && (
          <span className="absolute right-2.5 top-2.5 z-10 rounded-md bg-slate-900 px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-white">
            Sale
          </span>
        )}
        <img
          src={p.image}
          alt={p.title}
          width={260}
          height={260}
          loading="lazy"
          className="h-[200px] w-[200px] object-contain object-center transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          {neutralHint(p)}
        </span>
        <h3 className="mt-1 line-clamp-2 min-h-[2.5rem] text-[13.5px] font-bold leading-snug text-foreground">
          {p.title}
        </h3>
        <p className="mt-1 line-clamp-2 min-h-[2.2rem] text-[12px] leading-snug text-muted-foreground">
          {p.benefit}
        </p>

        <div className="mt-2.5 flex items-baseline gap-2">
          <span className="text-[17px] font-extrabold text-foreground">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[11.5px] text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        {/* TODO: Amazon-Link wird zentral in src/data/products.ts via `amazonUrl` gepflegt */}
        <a
          href={p.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          aria-label={`${p.title} – Preis auf Amazon prüfen`}
          className="mt-auto inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 pt-3 text-[12.5px] font-semibold text-white transition hover:bg-slate-800"
        >
          Preis auf Amazon prüfen
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
