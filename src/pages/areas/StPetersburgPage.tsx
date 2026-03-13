import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const StPetersburgPage = () => {
  useSEO({
    title: "Property Services St. Petersburg FL | PricedRight Yards & More",
    description: "Expert property preservation services in St. Petersburg FL. Yard maintenance, post eviction cleanup, tree services & more. Fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/areas/st-petersburg",
  });

  return (
    <ServiceAreaPage
      city="St. Petersburg, FL"
      tagline="Your Trusted Property Service Team"
      intro="We offer reliable and professional property services in St. Petersburg, FL. From yard maintenance to post eviction cleanup and vacant property care, our experienced team is here to help."
    />
  );
};

export default StPetersburgPage;
