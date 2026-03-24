import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const ClassicLawnPage = () => {
  useSEO({
    title: "Classic Lawn Maintenance | PricedRight Yards & More",
    description: "Professional classic lawn maintenance including mowing, blowing, weeding, and edging. Affordable and reliable. Call (813) 860-2202.",
    canonical: "https://prym.lovable.app/services/classic-lawn",
  });

  return (
    <ServicePage
      title="Classic Lawn Maintenance"
      subtitle="Our Foundation Program"
      intro="The essentials done right. Our Classic program covers the core lawn care tasks that keep your property looking clean and well-maintained week after week."
      sections={[
        {
          heading: "What's Included",
          content: [
            "Professional mowing — consistent cut height for a healthy, uniform lawn",
            "Blowing — driveways, walkways, and patios cleared of clippings and debris",
            "Weeding — beds and borders kept tidy and weed-free",
            "Edging — clean, defined lines along sidewalks, driveways, and beds",
          ],
        },
        {
          heading: "Perfect For",
          content: "Our Classic program is ideal for homeowners and property managers who want reliable, no-fuss lawn maintenance at an affordable price. Whether it's a single-family home or a rental property, we keep your yard looking sharp on a consistent schedule.",
        },
      ]}
      benefits={{
        heading: "Why Choose Classic",
        items: [
          "Affordable weekly or bi-weekly service",
          "Consistent, reliable scheduling",
          "Professional equipment and trained crew",
          "No contracts — flexible service",
          "Fully insured for your peace of mind",
        ],
      }}
    />
  );
};

export default ClassicLawnPage;
