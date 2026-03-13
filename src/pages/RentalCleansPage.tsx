import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const RentalCleansPage = () => {
  useSEO({
    title: "Rental Cleans & Make Ready | PricedRight Yards & More",
    description: "Professional rental property cleaning and make ready services. Move-out deep cleaning, painting, repairs. Call (813) 860-2202.",
    canonical: "https://example.com/services/rental-cleans",
  });

  return (
    <ServicePage
      title="Rental Cleans & Make Ready"
      subtitle="Get Units Rent-Ready Fast"
      intro="Minimize vacancy time with our professional make-ready services. From deep cleaning to painting and minor repairs, we get your rental property ready for the next tenant quickly and affordably."
      sections={[
        {
          heading: "Our Rental Clean & Make Ready Services",
          content: [
            "Move-out deep cleaning — every surface cleaned to like-new condition",
            "Carpet cleaning and restoration — remove stains and odors",
            "Painting and touch-ups — fresh walls for a fresh start",
            "Floor cleaning and polishing — tile, hardwood, and vinyl",
            "Appliance cleaning — ovens, refrigerators, dishwashers",
            "Exterior cleanup — yard work, pressure washing, curb appeal",
          ],
        },
        {
          heading: "For Property Managers & Landlords",
          content: "We understand that every day of vacancy is lost revenue. Our streamlined make-ready process handles everything in a single coordinated effort — cleaning, repairs, and yard work — so your property is rent-ready in days, not weeks. We work with property managers across Central Florida and can handle multiple properties simultaneously.",
        },
      ]}
      benefits={{
        heading: "Benefits of Professional Make-Ready Services",
        items: [
          "Minimize vacancy time — faster turnovers mean more rental income",
          "Attract quality tenants — clean, well-maintained properties rent faster",
          "One vendor for everything — cleaning, repairs, and yard work",
          "Consistent quality — same high standards on every property",
          "Documentation — before and after photos provided",
          "Competitive pricing — services priced right for your budget",
        ],
      }}
    />
  );
};

export default RentalCleansPage;
