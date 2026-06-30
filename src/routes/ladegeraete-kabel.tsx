import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/ladegeraete-kabel")({
  head: () => ({
    meta: [
      { title: "Ladegeräte & Kabel – HandyCover" },
      { name: "description", content: "USB-C Ladegeräte, Lightning-Kabel und schnelle Netzteile." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Ladegeräte & Kabel"
      description="Schnelle Netzteile, MFi-Kabel und kompakte USB-C Ladegeräte für unterwegs."
      category="charging"
    />
  ),
});
