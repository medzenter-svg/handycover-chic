import { Link } from "@tanstack/react-router";

const categoryCards = [
  { id: "iphone",      name: "iPhone Zubehör",     slug: "/iphone-zubehoer",    img: "/images/iphone-zubehoer.webp" },
  { id: "samsung",     name: "Samsung Zubehör",    slug: "/samsung-zubehoer",   img: "/images/samsung-zubehoer.webp" },
  { id: "magsafe",     name: "MagSafe Zubehör",    slug: "/magsafe-zubehoer",   img: "/images/magsafe-zubehoer.webp" },
  { id: "display",     name: "Displayschutz",      slug: "/displayschutz",      img: "/images/displayschutz.webp" },
  { id: "ladegeraete", name: "Ladegeräte & Kabel", slug: "/ladegeraete-kabel",  img: "/images/ladegeraete-kabel.webp" },
  { id: "powerbanks",  name: "Powerbanks",         slug: "/powerbanks",         img: "/images/powerbanks.webp" },
  { id: "auto",        name: "Auto-Zubehör",       slug: "/auto-zubehoer",      img: "/images/auto-zubehoer.webp" },
  { id: "earbuds",     name: "Earbuds Zubehör",    slug: "/earbuds-zubehoer",   img: "/images/earbuds-zubehoer.webp" },
  { id: "watch",       name: "Smartwatch Zubehör", slug: "/smartwatch-zubehoer", img: "/images/smartwatch-zubehoer.webp" },
  { id: "gifts",       name: "Tech Gifts",         slug: "/amazon-picks",       img: "/images/tech-gifts.webp" },
];

export function Categories() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-6 sm:px-6">
      {/* Horizontal scroll on mobile, 10-column grid on desktop */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide xl:grid xl:grid-cols-10 xl:overflow-visible xl:pb-0">
        {categoryCards.map((c) => (
          <Link
            key={c.id}
            to={c.slug}
            className="group flex-shrink-0 w-[120px] xl:w-auto transition hover:-translate-y-0.5"
            aria-label={c.name}
          >
            <div className="flex flex-col items-center gap-1.5">
              <img
                src={c.img}
                alt={c.name}
                width={293}
                height={293}
                loading="lazy"
                className="w-full rounded-2xl shadow-sm object-contain bg-white"
                style={{ aspectRatio: "1 / 1" }}
              />
              <span className="text-center text-[11px] font-semibold text-gray-700 leading-tight group-hover:text-pink-500 transition-colors px-1">
                {c.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
