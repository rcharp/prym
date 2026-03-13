import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const EllentonPage = () => {
  useSEO({
    title: "Property Services Ellenton FL | PricedRight Yards & More",
    description: "Expert property preservation services in Ellenton FL. Yard maintenance, tree services, rental cleans & more. Fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/areas/ellenton",
  });

  return (
    <ServiceAreaPage
      city="Ellenton, FL"
      tagline="Your Property Care Experts"
      intro="We offer reliable and professional property services in Ellenton, FL. From landscape maintenance to post eviction cleanup and rental turnovers, our team is here to help."
    />
  );
};

export default EllentonPage;
