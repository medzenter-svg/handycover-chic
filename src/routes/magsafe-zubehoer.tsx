import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/magsafe-zubehoer")({
  head: () => ({
    meta: [
      { title: "MagSafe Zubehör – HandyCover" },
      { name: "description", content: "MagSafe Hüllen, Wallets, Ladegeräte und Halterungen im Überblick." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="MagSafe Zubehör"
      description="Magnetisches Zubehör für iPhone – Wallets, Ladegeräte und Halterungen mit MagSafe-Magneten."
      category="magsafe"
    />
  ),
});
