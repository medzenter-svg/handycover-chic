import { Link } from "@tanstack/react-router";
import { categories } from "@/data/products";

export function Categories() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-6">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10">
        {categories.map((c) => (
          <Link
            key={c.id}
            to={c.slug}
            className={`group flex h-[82px] items-center gap-2.5 rounded-2xl border border-border/60 bg-gradient-to-br ${c.gradient} px-2.5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card xl:h-[112px] xl:flex-col xl:items-center xl:justify-center xl:gap-1.5 xl:px-2`}
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/80 bg-white/85 p-1 shadow-soft">
              <img src={c.image} alt="" width={120} height={120} className="h-10 w-10 object-contain object-center transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
            </div>

            <span className="min-w-0 text-[11.5px] font-extrabold leading-tight text-foreground xl:text-center">
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
