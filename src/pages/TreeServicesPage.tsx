import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const TreeServicesPage = () => {
  useSEO({
    title: "Shrub & Tree Services | PricedRight Yards & More",
    description: "Professional shrub trimming, tree pruning, stump grinding, and removal. Fully insured. Serving Central FL. Call (813) 860-2202.",
    canonical: "https://example.com/services/tree-services",
  });

  return (
    <ServicePage
      title="Shrub & Tree Services"
      subtitle="Expert Care for Your Landscape"
      intro="From professional shrub trimming to tree pruning and removal, we keep your landscape healthy, safe, and looking its best. Fully insured service throughout Central Florida."
      sections={[
        {
          heading: "Our Tree & Shrub Services",
          content: [
            "Shrub trimming and shaping — maintain clean, professional hedges",
            "Tree pruning and limb removal — promote health and safety",
            "Stump grinding and removal — eliminate tripping hazards and eyesores",
            "Overgrowth clearing — reclaim neglected areas of your property",
            "Storm damage cleanup — fallen limb and debris removal",
            "Hurricane preparation trimming — reduce storm risk",
          ],
        },
        {
          heading: "Why Professional Tree Care Matters",
          content: "Improper trimming can damage trees, promote disease, and even make them more dangerous in storms. Our experienced team knows the right techniques for Florida's tree species, ensuring healthy growth and structural integrity. Plus, tree work can be dangerous — leave it to insured professionals.",
        },
      ]}
      benefits={{
        heading: "Benefits of Professional Tree & Shrub Care",
        items: [
          "Safety — reduce risk of falling branches and storm damage",
          "Property value — well-maintained trees add significant value",
          "Curb appeal — shaped shrubs and pruned trees look professional",
          "Plant health — proper trimming promotes strong, healthy growth",
          "Fully insured — protection for you and your property",
          "Expert knowledge — we know Florida's native and ornamental species",
        ],
      }}
    />
  );
};

export default TreeServicesPage;
