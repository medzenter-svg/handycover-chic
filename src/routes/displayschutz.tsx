import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/displayschutz")({
  head: () => ({
    meta: [
      { title: "Displayschutz – HandyCover" },
      { name: "description", content: "Displayschutzglas und Schutzfolien für iPhone und Samsung." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Displayschutz"
      description="9H-Schutzglas und Folien für ein kristallklares, kratzfestes Display."
      category="display"
    />
  ),
});
