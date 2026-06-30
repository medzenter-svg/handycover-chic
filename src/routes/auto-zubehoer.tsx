import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/auto-zubehoer")({
  head: () => ({
    meta: [
      { title: "Auto-Zubehör – HandyCover" },
      { name: "description", content: "Halterungen, Autoladegeräte und Zubehör für dein Smartphone im Auto." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Auto-Zubehör"
      description="Magnetische Halterungen und schnelle Autoladegeräte – sicher und praktisch."
      category="car"
    />
  ),
});
