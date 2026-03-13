import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const SarasotaPage = () => {
  useSEO({
    title: "Property Services Sarasota FL | PricedRight Yards & More",
    description: "Professional property preservation services in Sarasota FL. Yard care, tree services, rental cleans & more. Fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/areas/sarasota",
  });

  return (
    <ServiceAreaPage
      city="Sarasota, FL"
      tagline="Your Property Preservation Experts"
      intro="We offer reliable and professional property services in Sarasota, FL. From yard maintenance to post eviction cleanup and rental turnovers, our experienced team delivers quality results at prices that are right."
    />
  );
};

export default SarasotaPage;
