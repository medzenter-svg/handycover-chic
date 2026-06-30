import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/amazon-picks")({
  head: () => ({
    meta: [
      { title: "Amazon Picks – HandyCover" },
      { name: "description", content: "Unsere besten Amazon-Empfehlungen aus allen Kategorien." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Amazon Picks"
      description="Unsere persönliche Auswahl der besten Smartphone-Accessoires auf Amazon – alle Kategorien auf einen Blick."
    />
  ),
});
