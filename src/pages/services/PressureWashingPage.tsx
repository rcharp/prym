import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const PressureWashingPage = () => {
  useSEO({
    title: "Pressure Washing | PricedRight Yards & More",
    description: "Professional pressure washing for driveways, sidewalks, patios, and more in Tampa Bay. Call (813) 860-2202.",
    canonical: "https://prym.lovable.app/services/pressure-washing",
  });

  return (
    <ServicePage
      title="Pressure Washing"
      subtitle="The MORE Factor"
      intro="Restore your property's surfaces to like-new condition with professional pressure washing. We clean driveways, sidewalks, patios, pool decks, and more."
      sections={[
        {
          heading: "What We Clean",
          content: [
            "Driveways and garage floors",
            "Sidewalks and walkways",
            "Patios and pool decks",
            "Fences and walls",
            "Exterior building surfaces",
            "Pavers and concrete surfaces",
          ],
        },
        {
          heading: "Why Pressure Washing",
          content: "Florida's humidity breeds mold, mildew, and algae on outdoor surfaces. Regular pressure washing prevents buildup, reduces slip hazards, and keeps your property looking fresh. It's one of the fastest ways to boost your home's curb appeal.",
        },
      ]}
      benefits={{
        heading: "Benefits",
        items: [
          "Instant visual improvement",
          "Removes mold, mildew, and algae buildup",
          "Reduces slip-and-fall hazards",
          "Extends the life of concrete and pavers",
          "Prepares surfaces for painting or sealing",
        ],
      }}
    />
  );
};

export default PressureWashingPage;
