import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const TreeShrubPage = () => {
  useSEO({
    title: "Tree & Shrub Services | PricedRight Yards & More",
    description: "Professional tree and shrub cutting, removal, and trimming in Tampa Bay. Fully insured. Call (813) 860-2202.",
    canonical: "https://prym.lovable.app/services/tree-shrub",
  });

  return (
    <ServicePage
      title="Tree & Shrub Services"
      subtitle="A La Carte Service"
      intro="Professional tree and shrub cutting, removal, and trimming to keep your property safe, healthy, and looking great. Fully insured for your peace of mind."
      sections={[
        {
          heading: "Our Tree & Shrub Services",
          content: [
            "Tree trimming and canopy shaping",
            "Shrub and hedge trimming for clean lines",
            "Small tree removal and stump grinding",
            "Dead branch and hazard limb removal",
            "Storm damage cleanup and emergency service",
            "Palm tree trimming and frond removal",
          ],
        },
        {
          heading: "Safety & Insurance",
          content: "Tree work requires skill, proper equipment, and insurance. Our crew is trained in safe tree care practices and we carry full liability insurance. Whether it's routine trimming or removing a hazardous tree, you can trust us to handle it safely and professionally.",
        },
      ]}
      benefits={{
        heading: "Benefits",
        items: [
          "Improved safety — remove hazardous branches and trees",
          "Better curb appeal with properly shaped trees and shrubs",
          "Healthier growth through professional pruning",
          "Storm preparation — reduce risk of falling limbs",
          "Fully insured and bonded",
        ],
      }}
    />
  );
};

export default TreeShrubPage;
