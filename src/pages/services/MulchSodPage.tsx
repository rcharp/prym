import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const MulchSodPage = () => {
  useSEO({
    title: "Mulch & Sod Installs | PricedRight Yards & More",
    description: "Professional mulch and sod installation services in the Tampa Bay area. Transform your yard today. Call (813) 860-2202.",
    canonical: "https://prym.lovable.app/services/mulch-sod",
  });

  return (
    <ServicePage
      title="Mulch & Sod Installs"
      subtitle="A La Carte Service"
      intro="Transform your landscape beds and lawn with professional mulch and sod installation. Whether you need to refresh your beds or replace damaged turf, we've got you covered."
      sections={[
        {
          heading: "Our Mulch & Sod Services",
          content: [
            "Mulch installation — pine bark, cypress, rubber, and decorative options",
            "Bed preparation — clearing old mulch, weeding, and leveling",
            "Sod installation — St. Augustine, Bahia, Zoysia, and more",
            "Soil preparation and grading for new sod",
            "Removal and replacement of dead or damaged turf",
          ],
        },
        {
          heading: "Why Mulch & Sod Matter",
          content: "Fresh mulch protects your plants, retains moisture, and gives your landscape a polished look. Quality sod installation transforms bare or damaged areas into a lush, green lawn. In Florida's climate, both are essential for maintaining a healthy, attractive property.",
        },
      ]}
      benefits={{
        heading: "Benefits",
        items: [
          "Instant curb appeal improvement",
          "Moisture retention reduces watering needs",
          "Weed suppression in landscape beds",
          "Erosion control on slopes and bare areas",
          "Professional installation ensures long-lasting results",
        ],
      }}
    />
  );
};

export default MulchSodPage;
