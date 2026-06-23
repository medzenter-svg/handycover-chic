import { categories } from "@/data/products";

export function Categories() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-8">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10">
        {categories.map((c) => (
          <a
            key={c.id}
            href="#bestseller"
            className="group flex h-[78px] items-center gap-2.5 rounded-2xl border border-border/60 bg-card px-2.5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card xl:flex-col xl:items-center xl:justify-center xl:gap-1 xl:px-2 xl:h-[120px]"
          >
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br ${c.gradient}`}
            >
              <img src={c.image} alt="" width={120} height={120} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <span className="min-w-0 text-[11.5px] font-semibold leading-tight text-foreground xl:text-center">
              {c.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
