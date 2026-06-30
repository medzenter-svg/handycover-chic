import { Link } from "@tanstack/react-router";
import { Search, Heart, Bookmark, ChevronDown, Sparkles, User } from "lucide-react";
import { categorySlugs } from "@/data/products";

const nav: { label: string; to: string }[] = [
  { label: "iPhone Zubehör", to: categorySlugs.iphone },
  { label: "Samsung Zubehör", to: categorySlugs.samsung },
  { label: "MagSafe Zubehör", to: categorySlugs.magsafe },
  { label: "Displayschutz", to: categorySlugs.display },
  { label: "Ladegeräte & Kabel", to: categorySlugs.charging },
  { label: "Powerbanks", to: categorySlugs.powerbanks },
  { label: "Auto‑Zubehör", to: categorySlugs.car },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-6 py-2.5">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand shadow-glow">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-base font-extrabold tracking-tight">HandyCover</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-0 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-2 py-1.5 text-[12.5px] font-medium text-foreground/75 transition hover:bg-accent hover:text-foreground"
              activeProps={{ className: "rounded-full px-2 py-1.5 text-[12.5px] font-semibold text-foreground bg-accent" }}
            >
              {item.label}
            </Link>
          ))}
          <button className="inline-flex items-center gap-0.5 rounded-full px-2 py-1.5 text-[12.5px] font-medium text-foreground/75 hover:bg-accent">
            Mehr <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </nav>

        <div className="relative hidden w-[200px] xl:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Zubehör suchen..."
            className="h-9 w-full rounded-full border border-border bg-muted/60 pl-9 pr-4 text-[12.5px] outline-none transition focus:border-primary/50 focus:bg-card"
          />
        </div>

        <div className="flex items-center gap-1">
          <button aria-label="Wunschliste" className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 transition hover:bg-accent">
            <Heart className="h-4 w-4" />
          </button>
          <button aria-label="Merkliste" className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 transition hover:bg-accent">
            <Bookmark className="h-4 w-4" />
          </button>
          <Link
            to="/amazon-picks"
            className="ml-1 inline-flex h-9 items-center gap-1.5 rounded-full bg-gradient-brand px-3.5 text-[12.5px] font-semibold text-white shadow-glow transition hover:opacity-95"
          >
            <User className="h-3.5 w-3.5" />
            Amazon Picks
          </Link>
        </div>
      </div>
    </header>
  );
}
