import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const PremiumLawnPage = () => {
  useSEO({
    title: "Premium Lawn Maintenance | PricedRight Yards & More",
    description: "Premium lawn maintenance with weed control, leaf control, and everything in our Classic program. Call (813) 860-2202.",
    canonical: "https://prym.lovable.app/services/premium-lawn",
  });

  return (
    <ServicePage
      title="Premium Lawn Maintenance"
      subtitle="Our Most Popular Program"
      intro="Everything in Classic, plus weed and leaf control for a truly polished yard. Our Premium program is our most popular choice for homeowners who want their property to stand out."
      sections={[
        {
          heading: "What's Included",
          content: [
            "Everything in Classic — mowing, blowing, weeding, and edging",
            "Weed control — targeted treatment to keep weeds from taking over",
            "Leaf control — seasonal leaf removal and cleanup to maintain a clean yard",
          ],
        },
        {
          heading: "The Premium Difference",
          content: "Florida's climate means weeds and leaves are a year-round challenge. Our Premium program goes beyond basic maintenance to actively manage these issues, so your lawn always looks its best. It's the most popular choice for a reason — maximum curb appeal with minimal hassle.",
        },
      ]}
      benefits={{
        heading: "Why Choose Premium",
        items: [
          "Most popular program — best value for comprehensive care",
          "Year-round weed management keeps your lawn healthy",
          "Seasonal leaf control prevents buildup and damage",
          "All the benefits of Classic, plus more",
          "No contracts — upgrade or downgrade anytime",
          "Fully insured and bonded",
        ],
      }}
    />
  );
};

export default PremiumLawnPage;
