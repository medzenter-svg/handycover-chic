import { Search, Heart, ShoppingBag, ChevronDown, Sparkles, User } from "lucide-react";

const nav = [
  "iPhone Zubehör",
  "Samsung Zubehör",
  "MagSafe Zubehör",
  "Displayschutz",
  "Ladegeräte & Kabel",
  "Powerbanks",
  "Auto‑Halterungen",
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center gap-5 px-6 py-3">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
            <Sparkles className="h-4.5 w-4.5 text-white" />
          </div>
          <span className="text-lg font-extrabold tracking-tight">HandyCover</span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-full px-2.5 py-1.5 text-[13px] font-medium text-foreground/75 transition hover:bg-accent hover:text-foreground"
            >
              {item}
            </a>
          ))}
          <button className="inline-flex items-center gap-0.5 rounded-full px-2.5 py-1.5 text-[13px] font-medium text-foreground/75 hover:bg-accent">
            Mehr <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </nav>

        <div className="relative hidden w-[220px] md:block">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Suche nach Zubehör..."
            className="h-10 w-full rounded-full border border-border bg-muted/60 pl-10 pr-4 text-[13px] outline-none transition focus:border-primary/50 focus:bg-card"
          />
        </div>

        <div className="flex items-center gap-1">
          <button aria-label="Wunschliste" className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 transition hover:bg-accent">
            <Heart className="h-4.5 w-4.5" />
          </button>
          <button aria-label="Merkliste" className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 transition hover:bg-accent">
            <ShoppingBag className="h-4.5 w-4.5" />
          </button>
          <a
            href="#bestseller"
            className="ml-1 inline-flex h-10 items-center gap-1.5 rounded-full bg-gradient-brand px-4 text-[13px] font-semibold text-white shadow-glow transition hover:opacity-95"
          >
            <User className="h-4 w-4" />
            Amazon Picks
          </a>
        </div>
      </div>
    </header>
  );
}
