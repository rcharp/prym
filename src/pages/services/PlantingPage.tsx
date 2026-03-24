import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const PlantingPage = () => {
  useSEO({
    title: "Planting Services | PricedRight Yards & More",
    description: "Professional planting services for flowers, shrubs, and trees in Tampa Bay. Enhance your landscape today. Call (813) 860-2202.",
    canonical: "https://prym.lovable.app/services/planting",
  });

  return (
    <ServicePage
      title="Planting Services"
      subtitle="A La Carte Service"
      intro="Enhance your property with professional planting services. From seasonal flowers to specimen trees, we select and install plants that thrive in Florida's climate."
      sections={[
        {
          heading: "What We Plant",
          content: [
            "Seasonal flowers and annuals for vibrant color",
            "Shrubs and hedges for privacy and structure",
            "Ornamental trees and palms",
            "Ground cover for erosion control and aesthetics",
            "Native Florida plants for low-maintenance landscapes",
          ],
        },
        {
          heading: "Our Approach",
          content: "We don't just dig and plant. We assess your soil, sunlight, and drainage conditions to recommend plants that will thrive in your specific environment. Proper planting technique and soil preparation ensure your new plants establish quickly and grow strong.",
        },
      ]}
      benefits={{
        heading: "Benefits",
        items: [
          "Expert plant selection for Florida's climate",
          "Proper soil preparation and planting technique",
          "Enhanced curb appeal and property value",
          "Low-maintenance options available",
          "Seasonal color rotations to keep your property fresh",
        ],
      }}
    />
  );
};

export default PlantingPage;
