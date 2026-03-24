import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const MakeReadyPage = () => {
  useSEO({
    title: "Sales & Rental Make-Ready Cleans | PricedRight Yards & More",
    description: "Professional make-ready cleaning for sales and rentals. Deep cleaning, painting, carpet restoration, curb appeal. Call (813) 860-2202.",
    canonical: "https://example.com/services/make-ready",
  });

  return (
    <ServicePage
      title="Sales & Rental Make-Ready Cleans"
      subtitle="Get Properties Market-Ready Fast"
      intro="Whether you're listing a home for sale or turning over a rental, our make-ready services handle everything — deep cleaning, painting, carpet restoration, and curb appeal — so the property shows at its best."
      sections={[
        {
          heading: "Our Make-Ready Services",
          content: [
            "Deep cleaning — every surface cleaned to like-new condition",
            "Carpet cleaning and floor restoration — remove stains and odors",
            "Painting and cosmetic touch-ups — fresh walls for a fresh start",
            "Appliance cleaning — ovens, refrigerators, dishwashers",
            "Exterior cleanup — yard work, pressure washing, curb appeal",
            "Coordinated turnover — cleaning, repairs, and yard work in one visit",
          ],
        },
        {
          heading: "For Realtors, Property Managers & Landlords",
          content: "Every day a property sits vacant or unsold is lost revenue. Our streamlined make-ready process handles everything in a single coordinated effort so your property is market-ready in days, not weeks. We work with realtors, property managers, and landlords across Central Florida.",
        },
      ]}
      benefits={{
        heading: "Benefits of Professional Make-Ready Services",
        items: [
          "Minimize vacancy time — faster turnovers mean more income",
          "Attract quality buyers and tenants — clean properties sell and rent faster",
          "One vendor for everything — cleaning, cosmetic repairs, and yard work",
          "Consistent quality — same high standards on every property",
          "Before and after documentation — photos provided",
          "Competitive pricing — services priced right for your budget",
        ],
      }}
    />
  );
};

export default MakeReadyPage;
