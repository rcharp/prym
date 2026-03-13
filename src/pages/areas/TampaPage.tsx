import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const TampaPage = () => {
  useSEO({
    title: "Property Services Tampa FL | PricedRight Yards & More",
    description: "Trusted property preservation services in Tampa FL. Yard maintenance, post eviction cleanup, tree services & more. Family owned, fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/areas/tampa",
  });

  return (
    <ServiceAreaPage
      city="Tampa, FL"
      tagline="Your Trusted Property Preservation Partner"
      intro="We offer reliable and professional property services in Tampa, FL. Whether you need yard maintenance, post eviction cleanup, or vacant property care, our experienced team is ready to assist with all your property preservation needs."
    />
  );
};

export default TampaPage;
