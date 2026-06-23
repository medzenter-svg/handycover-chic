import { ArrowRight, BookOpen } from "lucide-react";
import { guides } from "@/data/products";

export function Guides() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-14">
      <div className="flex items-end justify-between gap-4">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold">
          <BookOpen className="h-6 w-6 text-primary" />
          Ratgeber & Kaufberatung
        </h2>
        <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          Alle Ratgeber ansehen <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {guides.map((g) => (
          <a
            key={g.id}
            href="#"
            className={`group flex h-full flex-col rounded-2xl bg-gradient-to-br ${g.gradient} p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card`}
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-card/70 text-2xl shadow-soft backdrop-blur">
              {g.emoji}
            </div>
            <h3 className="mt-4 text-[15px] font-bold leading-snug text-foreground">
              {g.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm text-foreground/70">{g.text}</p>
            <span className="mt-auto pt-4 text-xs font-semibold text-primary opacity-0 transition group-hover:opacity-100">
              Mehr erfahren →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
