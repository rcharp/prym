import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const GutterCleaningPage = () => {
  useSEO({
    title: "Gutter Cleaning | PricedRight Yards & More",
    description: "Professional gutter cleaning services in Tampa Bay. Prevent water damage and protect your home. Call (813) 860-2202.",
    canonical: "https://prym.lovable.app/services/gutter-cleaning",
  });

  return (
    <ServicePage
      title="Gutter Cleaning"
      subtitle="The MORE Factor"
      intro="Keep your gutters clear and your home protected. We remove leaves, debris, and buildup to ensure proper water flow and prevent costly damage."
      sections={[
        {
          heading: "Our Gutter Services",
          content: [
            "Complete gutter cleanout — leaves, twigs, and debris removed",
            "Downspout clearing and flushing",
            "Visual inspection for damage or sagging",
            "Debris hauled away — no mess left behind",
            "Before and after documentation",
          ],
        },
        {
          heading: "Why Gutter Maintenance Matters",
          content: "Clogged gutters cause water overflow that damages your foundation, siding, and landscaping. In Florida's heavy rain seasons, functioning gutters are critical. Regular cleaning prevents expensive water damage and protects your investment.",
        },
      ]}
      benefits={{
        heading: "Benefits",
        items: [
          "Prevents foundation and water damage",
          "Protects landscaping from overflow",
          "Extends gutter system lifespan",
          "Reduces pest nesting in clogged gutters",
          "Peace of mind during storm season",
        ],
      }}
    />
  );
};

export default GutterCleaningPage;
