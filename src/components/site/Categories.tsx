import { categories } from "@/data/products";

export function Categories() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {categories.map((c) => (
          <a
            key={c.id}
            href="#bestseller"
            className="group flex h-[88px] items-center gap-3 rounded-2xl border border-border/60 bg-card px-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
          >
            <div
              className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br ${c.gradient}`}
            >
              <img src={c.image} alt="" width={120} height={120} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <span className="min-w-0 text-[12.5px] font-semibold leading-tight text-foreground">
              {c.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
