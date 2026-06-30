import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/displayschutz")({
  head: () => ({
    meta: [
      { title: "Displayschutz – HandyCover" },
      { name: "description", content: "Panzerglas und Schutzfolien für iPhone und Samsung." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Displayschutz"
      description="Panzerglas und Folien für ein kristallklares, kratzfestes Display."
      category="display"
    />
  ),
});
