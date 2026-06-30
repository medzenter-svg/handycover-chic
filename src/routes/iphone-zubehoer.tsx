import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/iphone-zubehoer")({
  head: () => ({
    meta: [
      { title: "iPhone Zubehör – HandyCover" },
      { name: "description", content: "Hüllen, Ladegeräte und mehr für dein iPhone – kuratiert und direkt bei Amazon verfügbar." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="iPhone Zubehör"
      description="Hochwertige Hüllen, MagSafe-Zubehör und Ladegeräte für dein iPhone – sorgfältig ausgewählt."
      category="iphone"
    />
  ),
});
