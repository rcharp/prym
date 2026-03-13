import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const PostEvictionPage = () => {
  useSEO({
    title: "Post Eviction Services | PricedRight Yards & More",
    description: "Professional post eviction cleanup. Property cleanout, junk removal, deep cleaning. Get your rental rent-ready fast. Call (813) 668-3219.",
    canonical: "https://example.com/services/post-eviction",
  });

  return (
    <ServicePage
      title="Post Eviction Services"
      subtitle="Fast Property Turnaround"
      intro="After an eviction, getting your property rent-ready quickly is crucial. We provide comprehensive post eviction cleanup services including junk removal, deep cleaning, and yard restoration throughout Central Florida."
      sections={[
        {
          heading: "Our Post Eviction Services",
          content: [
            "Complete property cleanout — furniture, trash, and personal items removed",
            "Junk hauling and disposal — responsible waste removal",
            "Deep cleaning and sanitation — every surface cleaned and disinfected",
            "Yard cleanup and restoration — overgrown landscapes brought back to life",
            "Minor repairs and touch-ups — patch holes, fix fixtures",
            "Damage documentation — photos and reports for your records",
          ],
        },
        {
          heading: "Why Speed Matters",
          content: "Every day your rental sits vacant costs you money. Our efficient post-eviction process gets properties turned around quickly so you can start generating rental income again. We understand the urgency and work to minimize your vacancy time.",
        },
      ]}
      benefits={{
        heading: "Why Choose PricedRight for Post Eviction Cleanup",
        items: [
          "Fast turnaround — we understand time is money",
          "One-stop shop — cleanout, cleaning, and yard work in one visit",
          "Fully insured — protecting you and your property",
          "Documentation provided — before and after photos for your records",
          "Experience with property managers — we know what landlords need",
          "Competitive pricing — services that are priced right",
        ],
      }}
    />
  );
};

export default PostEvictionPage;
