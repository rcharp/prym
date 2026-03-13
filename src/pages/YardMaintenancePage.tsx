import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const YardMaintenancePage = () => {
  useSEO({
    title: "Lawn & Landscape Maintenance | PricedRight Yards & More",
    description: "Professional lawn care and landscape maintenance. Mowing, edging, trimming, mulching, and seasonal cleanup. Fully insured. Call (813) 668-3219.",
    canonical: "https://example.com/services/lawn-landscape",
  });

  return (
    <ServicePage
      title="Lawn & Landscape Maintenance"
      subtitle="Keep Your Property Pristine"
      intro="Professional mowing, edging, hedge trimming, mulch installation, and seasonal cleanup to keep your lawn and landscape looking its best. We serve homeowners, property managers, and businesses throughout Central Florida."
      sections={[
        {
          heading: "Our Lawn & Landscape Services",
          content: [
            "Mowing and edging — crisp, clean cuts every time",
            "Hedge and shrub trimming — maintain shape and curb appeal",
            "Mulch installation — protect plants and enhance flower beds",
            "Weed control and bed maintenance — keep landscaping tidy",
            "Seasonal cleanup — spring prep, fall cleanup, and storm debris",
            "Customized maintenance plans — weekly, bi-weekly, or monthly",
          ],
        },
        {
          heading: "Why Regular Maintenance Matters",
          content: "A well-maintained lawn and landscape protects your property value, prevents code violations, and creates a welcoming environment. In Florida's fast-growing climate, regular professional maintenance is essential to stay ahead of overgrowth and keep your property looking its best year-round.",
        },
      ]}
      benefits={{
        heading: "Benefits of Professional Lawn & Landscape Care",
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
