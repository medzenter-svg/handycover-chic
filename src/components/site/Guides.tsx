import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { guides } from "@/data/products";

export function Guides() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="flex items-center gap-2 text-xl font-extrabold">
          <BookOpen className="h-5 w-5 text-primary" />
          Ratgeber & Kaufberatung
        </h2>
        <Link
          to="/ratgeber"
          className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-primary hover:underline"
        >
          Alle Ratgeber ansehen <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((g) => (
          <Link
            key={g.id}
            to={g.url}
            className={`group flex h-[110px] items-center gap-2.5 rounded-2xl border border-border/60 bg-gradient-to-br ${g.gradient} p-2.5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card`}
          >
            <div className="grid h-[74px] w-[74px] shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5 shadow-soft">
              <img
                src={g.image}
                alt={g.title}
                width={148}
                height={148}
                className="h-[62px] w-[62px] object-contain object-center"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-2 text-[11.5px] font-bold leading-snug text-foreground">
                {g.title}
              </h3>
              <p className="mt-0.5 line-clamp-1 text-[10.5px] text-foreground/70">{g.text}</p>
              <span className="mt-0.5 inline-block text-[10px] font-semibold text-primary">
                Zum Ratgeber →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
