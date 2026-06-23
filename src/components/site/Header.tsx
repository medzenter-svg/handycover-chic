import { Search, Heart, ShoppingBag, Sparkles } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-6 py-4">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">HandyCover</span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {nav.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition hover:bg-accent hover:text-foreground"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition hover:bg-accent hover:text-foreground"
          >
            Mehr ▾
          </a>
        </nav>

        <div className="relative hidden flex-1 max-w-xs lg:block xl:flex-none">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Suche nach Zubehör..."
            className="h-11 w-full rounded-full border border-border bg-muted/60 pl-11 pr-4 text-sm outline-none transition focus:border-primary/50 focus:bg-card"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="grid h-10 w-10 place-items-center rounded-full text-foreground/70 transition hover:bg-accent">
            <Heart className="h-5 w-5" />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full text-foreground/70 transition hover:bg-accent">
            <ShoppingBag className="h-5 w-5" />
          </button>
          <a
            href="#bestseller"
            className="hidden h-11 items-center gap-2 rounded-full bg-gradient-brand px-5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 sm:inline-flex"
          >
            <Sparkles className="h-4 w-4" />
            Amazon Picks
          </a>
        </div>
      </div>
    </header>
  );
}
