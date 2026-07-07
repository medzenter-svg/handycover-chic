import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

type CardCopy = {
  label: string;
  hint: string;
  button: string;
};

function getCardCopy(p: Product): CardCopy {
  const cat = p.category;

  if (cat === "iphone") {
    return {
      label: "iPhone Zubehör",
      hint: "Bitte prüfe auf Amazon, ob dein genaues iPhone-Modell verfügbar ist.",
      button: "Modell auf Amazon wählen",
    };
  }
  if (cat === "magsafe") {
    return {
      label: "MagSafe Zubehör",
      hint: "Für ausgewählte iPhone-Modelle verfügbar. Kompatibilität auf Amazon prüfen.",
      button: "Bei Amazon ansehen",
    };
  }
  if (cat === "samsung") {
    return {
      label: "Samsung Zubehör",
      hint: "Bitte prüfe auf Amazon, ob dein genaues Samsung-Modell verfügbar ist.",
      button: "Modell auf Amazon wählen",
    };
  }
  if (cat === "display") {
    return {
      label: "Displayschutz",
      hint: "Bitte prüfe auf Amazon, ob dein genaues Smartphone-Modell verfügbar ist.",
      button: "Variante auf Amazon prüfen",
    };
  }
  if (cat === "charging" || cat === "ladegeraete") {
    return {
      label: "Ladegeräte & Kabel",
      hint: "Bitte achte auf Anschluss, Leistung und Gerätekompatibilität.",
      button: "Bei Amazon ansehen",
    };
  }
  if (cat === "powerbanks") {
    return {
      label: "Powerbanks",
      hint: "Bitte achte auf Anschluss, Leistung und Gerätekompatibilität.",
      button: "Bei Amazon ansehen",
    };
  }
  if (cat === "car") {
    return {
      label: "Auto-Zubehör",
      hint: "Bitte prüfe Details, Varianten und Kompatibilität direkt auf Amazon.",
      button: "Bei Amazon ansehen",
    };
  }
  if (cat === "audio" || cat === "earbuds" || cat === "airpods") {
    return {
      label: "Earbuds Zubehör",
      hint: "Bitte prüfe Details, Varianten und Kompatibilität direkt auf Amazon.",
      button: "Modell auf Amazon wählen",
    };
  }
  if (cat === "watch") {
    return {
      label: "Smartwatch Zubehör",
      hint: "Bitte prüfe Details, Varianten und Kompatibilität direkt auf Amazon.",
      button: "Modell auf Amazon wählen",
    };
  }
  // Fallback
  return {
    label: "Top Zubehör",
    hint: "Bitte prüfe Details, Varianten und Kompatibilität direkt auf Amazon.",
    button: "Bei Amazon ansehen",
  };
}

function shortLabel(p: Product): string {
  if (p.features && p.features.length > 0) return p.features[0];
  return p.badge;
}

export function ProductCard({ p }: { p: Product }) {
  const copy = getCardCopy(p);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card">
      {/* Image */}
      <div className="relative flex h-[242px] items-center justify-center overflow-hidden bg-white p-3">
        <span className="absolute left-2.5 top-2.5 z-10 rounded-md bg-white/90 px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-slate-800 ring-1 ring-slate-200 backdrop-blur">
          {shortLabel(p)}
        </span>
        {p.oldPrice && (
          <span className="absolute right-2.5 top-2.5 z-10 rounded-md bg-[#4B0082] px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-white">
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
          {copy.label}
        </span>
        <h3 className="mt-1 line-clamp-2 min-h-[2.5rem] text-[13.5px] font-bold leading-snug text-foreground">
          {p.title}
        </h3>
        <p className="mt-1 line-clamp-2 min-h-[2.2rem] text-[12px] leading-snug text-muted-foreground">
          {p.benefit}
        </p>

        {/* Affiliate-Hinweis */}
        <p className="mt-1.5 text-[10.5px] leading-snug text-muted-foreground/70 italic">
          {copy.hint}
        </p>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-[17px] font-extrabold text-foreground">{p.price}</span>
          {p.oldPrice && (
            <span className="text-[11.5px] text-muted-foreground line-through">{p.oldPrice}</span>
          )}
        </div>

        <a
          href={p.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          aria-label={`${p.title} – ${copy.button}`}
          className="mt-auto inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-[#4B0082] px-3 text-[12.5px] font-semibold text-white transition hover:bg-[#3a006b]"
        >
          {copy.button}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
