import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ChevronDown, Sparkles, BookOpen } from "lucide-react";
import { categorySlugs } from "@/data/products";

const nav: { label: string; to: string }[] = [
  { label: "iPhone", to: categorySlugs.iphone },
  { label: "Samsung", to: categorySlugs.samsung },
  { label: "MagSafe Zubehör", to: categorySlugs.magsafe },
  { label: "Displayschutz", to: categorySlugs.display },
  { label: "Ladegeräte & Kabel", to: categorySlugs.charging },
  { label: "Powerbanks", to: categorySlugs.powerbanks },
  { label: "Auto-Zubehör", to: categorySlugs.car },
];

const moreNav = [
  { label: "Earbuds Zubehör", to: "/earbuds-zubehoer" },
  { label: "Smartwatch Zubehör", to: "/smartwatch-zubehoer" },
  { label: "Geschenkideen", to: "/geschenkideen-tech-fans" },
  { label: "Reise-Zubehör", to: "/reise-zubehoer" },
  { label: "Über HandyCover", to: "/ueber-handycover" },
];

export function Header() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/suche?q=${encodeURIComponent(query.trim())}`;
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-6 py-2.5">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src="/favicon.png" alt="HandyCover Logo" className="h-8 w-8 rounded-lg shadow-glow" />
          <span className="uppercase tracking-tight" style={{background: "linear-gradient(135deg, #d4357f, #8b3fd4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontSize: "1.1rem", fontWeight: 900, letterSpacing: "-0.01em"}}>HandyCover.com</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-0 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const isActive = currentPath === item.to || currentPath.startsWith(item.to + "/");
            return (
              <Link
                key={item.to}
                to={item.to}
                className={isActive
                  ? "whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-white transition"
                  : "whitespace-nowrap rounded-full bg-gradient-brand px-3.5 py-1.5 text-[12.5px] font-semibold text-white shadow-glow transition hover:opacity-90"
                }
                style={isActive ? { background: 'linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)', boxShadow: '0 2px 10px rgba(109,40,217,0.5)' } : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="inline-flex items-center gap-0.5 rounded-full bg-gradient-brand px-3.5 py-1.5 text-[12.5px] font-semibold text-white shadow-glow transition hover:opacity-90"
              aria-expanded={moreOpen}
            >
              Mehr <ChevronDown className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full z-50 mt-1 min-w-[180px] rounded-xl border border-border bg-card p-1.5 shadow-card">
                {moreNav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-lg px-3 py-2 text-[12.5px] font-bold text-foreground/75 hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="relative hidden w-[200px] xl:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zubehör suchen..."
              aria-label="Zubehör suchen"
              className="h-9 w-full rounded-full border border-border bg-muted/60 pl-9 pr-4 text-[12.5px] outline-none transition focus:border-primary/50 focus:bg-card"
            />
          </form>
        </div>


      </div>
    </header>
  );
}
