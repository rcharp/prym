import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const ClearwaterPage = () => {
  useSEO({
    title: "Property Services Clearwater FL | PricedRight Yards & More",
    description: "Professional property preservation services in Clearwater FL. Yard care, post eviction cleanup, tree services & more. Fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/areas/clearwater",
  });

  return (
    <ServiceAreaPage
      city="Clearwater, FL"
      tagline="Your Property Preservation Partner"
      intro="We offer reliable and professional property services in Clearwater, FL. From landscape maintenance to rental turnovers and vacant property care, our experienced team has you covered."
    />
  );
};

export default ClearwaterPage;
