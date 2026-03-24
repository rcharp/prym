import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const PalmettoPag = () => {
  useSEO({
    title: "Property Services Palmetto FL | PricedRight Yards & More",
    description: "Professional property services in Palmetto FL. Lawn maintenance, debris removal, make-ready cleans & more. Family owned, fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/areas/palmetto",
  });

  return (
    <ServiceAreaPage
      city="Palmetto, FL"
      tagline="Your Local Property Service Partner"
      intro="Based right here in Palmetto, we offer reliable and professional property services to homeowners, property managers, and businesses. From lawn maintenance to debris removal and make-ready cleans, our experienced team is ready to help."
    />
  );
};

export default PalmettoPag;
