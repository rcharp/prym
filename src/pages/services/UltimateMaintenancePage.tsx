import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const UltimateMaintenancePage = () => {
  useSEO({
    title: "Ultimate Maintenance | PricedRight Yards & More",
    description: "Complete property maintenance including lawn care, weed control, leaf control, and full landscape maintenance. Call (813) 860-2202.",
    canonical: "https://prym.lovable.app/services/ultimate-maintenance",
  });

  return (
    <ServicePage
      title="Ultimate Maintenance"
      subtitle="The Complete Package"
      intro="Our most comprehensive program. Everything in Classic and Premium, plus full landscape maintenance. Sit back and let us handle every aspect of your property's outdoor appearance."
      sections={[
        {
          heading: "What's Included",
          content: [
            "Everything in Classic — mowing, blowing, weeding, and edging",
            "Everything in Premium — weed control and leaf control",
            "Full landscape maintenance — shrub trimming, bed care, and plant health",
            "Seasonal planting and mulch refresh",
            "Property walkthroughs to identify issues early",
          ],
        },
        {
          heading: "Total Property Care",
          content: "The Ultimate program is designed for homeowners who want a truly hands-off experience. We take care of every detail — from the lawn to the landscape beds to the shrubs and trees. Your property stays in top condition year-round without you lifting a finger.",
        },
      ]}
      benefits={{
        heading: "Why Choose Ultimate",
        items: [
          "Complete, all-inclusive property maintenance",
          "Proactive care prevents costly problems",
          "Consistent, professional appearance year-round",
          "Priority scheduling and dedicated crew",
          "No contracts — full flexibility",
          "Fully insured and bonded",
        ],
      }}
    />
  );
};

export default UltimateMaintenancePage;
