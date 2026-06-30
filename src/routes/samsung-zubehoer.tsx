import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/samsung-zubehoer")({
  head: () => ({
    meta: [
      { title: "Samsung Zubehör – HandyCover" },
      { name: "description", content: "Zubehör für Samsung Galaxy: Hüllen, Displayschutz, Ladegeräte und mehr." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Samsung Zubehör"
      description="Stilvolles Zubehör für dein Samsung Galaxy – kuratiert und auf Amazon erhältlich."
      category="samsung"
    />
  ),
});
