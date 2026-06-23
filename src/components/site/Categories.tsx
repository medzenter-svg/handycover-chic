import { categories } from "@/data/products";

export function Categories() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-10">
        {categories.map((c) => (
          <a
            key={c.id}
            href="#bestseller"
            className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card xl:flex-col xl:items-center xl:gap-2 xl:p-4 xl:text-center"
          >
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${c.gradient} text-xl xl:h-14 xl:w-14 xl:text-2xl`}
            >
              <span>{c.emoji}</span>
            </div>
            <span className="min-w-0 text-xs font-semibold leading-tight text-foreground xl:text-[13px]">
              {c.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
