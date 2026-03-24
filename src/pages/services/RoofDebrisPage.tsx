import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const RoofDebrisPage = () => {
  useSEO({
    title: "Roof & Yard Leaf/Debris Removal | PricedRight Yards & More",
    description: "Professional roof and yard debris removal in Tampa Bay. Storm cleanup and regular maintenance. Call (813) 860-2202.",
    canonical: "https://prym.lovable.app/services/roof-debris",
  });

  return (
    <ServicePage
      title="Roof & Yard Leaf/Debris"
      subtitle="The MORE Factor"
      intro="Complete roof and yard debris removal to keep your property clean and safe. From routine leaf cleanup to post-storm debris, we handle it all."
      sections={[
        {
          heading: "What We Handle",
          content: [
            "Roof leaf and debris removal",
            "Yard debris cleanup and hauling",
            "Storm damage debris removal",
            "Fallen branch and limb cleanup",
            "Seasonal leaf removal",
            "Construction debris cleanup",
          ],
        },
        {
          heading: "Protect Your Property",
          content: "Debris on your roof traps moisture, promotes mold growth, and can damage shingles. Yard debris creates pest habitats and fire hazards. Regular cleanup prevents these issues and keeps your property safe, clean, and compliant with local codes.",
        },
      ]}
      benefits={{
        heading: "Benefits",
        items: [
          "Protects roof integrity and prevents leaks",
          "Reduces fire and pest hazards",
          "Maintains code compliance",
          "All debris hauled away",
          "Available for emergency storm cleanup",
        ],
      }}
    />
  );
};

export default RoofDebrisPage;
