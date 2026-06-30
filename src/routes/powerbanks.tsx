import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/powerbanks")({
  head: () => ({
    meta: [
      { title: "Powerbanks – HandyCover" },
      { name: "description", content: "Powerbanks mit großer Kapazität für unterwegs." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Powerbanks"
      description="Kompakte und leistungsstarke Powerbanks für dein Smartphone unterwegs."
      category="powerbanks"
    />
  ),
});
