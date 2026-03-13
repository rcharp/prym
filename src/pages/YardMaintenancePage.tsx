import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const YardMaintenancePage = () => {
  useSEO({
    title: "Yard & Landscape Maintenance | PricedRight Yards & More",
    description: "Professional yard cleanup and landscape maintenance. Weed pulling, trimming, mulching, debris removal. Fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/services/yard-maintenance",
  });

  return (
    <ServicePage
      title="Yard & Landscape Maintenance"
      subtitle="Keep Your Property Pristine"
      intro="Expert weed pulling, tree/hedge trimming, mulch installation, and debris removal to keep your yard pristine. We serve homeowners, property managers, and business owners throughout Central Florida."
      sections={[
        {
          heading: "Our Yard & Landscape Services",
          content: [
            "Weed pulling and prevention — keep your beds and walkways clean",
            "Tree and hedge trimming — maintain shape and promote healthy growth",
            "Mulch installation — protect plants and enhance curb appeal",
            "Debris removal — leaves, branches, and yard waste hauled away",
            "Lawn edging and mowing — crisp, professional results",
            "Seasonal cleanup — spring prep and fall cleanup services",
          ],
        },
        {
          heading: "Why Regular Maintenance Matters",
          content: "A well-maintained yard isn't just about looks — it protects your property value, prevents code violations, and creates a welcoming environment. In Florida's fast-growing climate, regular maintenance is essential to stay on top of overgrowth and keep your landscaping looking its best.",
        },
      ]}
      benefits={{
        heading: "Benefits of Professional Yard Care",
        items: [
          "Increased property value — well-maintained landscaping adds 5-15% to property value",
          "Code compliance — avoid fines from overgrown lots",
          "Curb appeal — make a great first impression",
          "Save time — focus on what matters while we handle the yard",
          "Consistent results — reliable, scheduled maintenance",
          "Fully insured — peace of mind on every job",
        ],
      }}
    />
  );
};

export default YardMaintenancePage;
