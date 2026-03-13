import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const LakelandPage = () => {
  useSEO({
    title: "Property Services Lakeland FL | PricedRight Yards & More",
    description: "Trusted property preservation services in Lakeland FL. Yard maintenance, tree services, rental cleans & more. Fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/areas/lakeland",
  });

  return (
    <ServiceAreaPage
      city="Lakeland, FL"
      tagline="Your Property Care Experts"
      intro="We offer reliable and professional property services in Lakeland, FL. Whether you need yard maintenance, shrub and tree care, or complete property turnovers, our team delivers quality work at fair prices."
    />
  );
};

export default LakelandPage;
