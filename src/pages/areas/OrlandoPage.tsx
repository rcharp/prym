import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const OrlandoPage = () => {
  useSEO({
    title: "Property Services Orlando FL | PricedRight Yards & More",
    description: "Expert property preservation services in Orlando FL. Yard maintenance, vacant property care, tree services & more. Fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/areas/orlando",
  });

  return (
    <ServiceAreaPage
      city="Orlando, FL"
      tagline="Your Trusted Property Care Team"
      intro="We offer reliable and professional property services in Orlando, FL. Whether you need yard cleanup, post eviction services, or ongoing property maintenance, our team delivers quality work at competitive prices."
    />
  );
};

export default OrlandoPage;
