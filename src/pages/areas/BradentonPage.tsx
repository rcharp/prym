import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const BradentonPage = () => {
  useSEO({
    title: "Property Services Bradenton FL | PricedRight Yards & More",
    description: "Professional property preservation services in Bradenton FL. Yard care, post eviction cleanup, tree services & more. Fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/areas/bradenton",
  });

  return (
    <ServiceAreaPage
      city="Bradenton, FL"
      tagline="Your Trusted Property Preservation Partner"
      intro="We offer reliable and professional property services in Bradenton, FL. Whether you need yard maintenance, post eviction cleanup, or vacant property care, our experienced team delivers quality results."
    />
  );
};

export default BradentonPage;
