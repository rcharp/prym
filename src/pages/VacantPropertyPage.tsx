import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const VacantPropertyPage = () => {
  useSEO({
    title: "Vacant Property Maintenance | PricedRight Yards & More",
    description: "Professional vacant property cleanup and maintenance. Regular inspections, yard upkeep, debris removal. Fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/services/vacant-property",
  });

  return (
    <ServicePage
      title="Vacant Property Maintenance"
      subtitle="Protect Your Investment"
      intro="Junk and tree/yard debris removal for vacant properties. We keep your unoccupied property maintained, secure, and in compliance with local codes throughout Central Florida."
      sections={[
        {
          heading: "Our Vacant Property Services",
          content: [
            "Regular property inspections — monitor condition and identify issues early",
            "Yard maintenance and upkeep — prevent overgrowth and code violations",
            "Junk and debris removal — keep the property clean and presentable",
            "Curb appeal preservation — maintain property value while vacant",
            "Storm preparation and cleanup — protect against Florida weather",
            "Board-up and securing services — prevent unauthorized access",
          ],
        },
        {
          heading: "The Cost of Neglecting Vacant Properties",
          content: "Unattended vacant properties in Florida deteriorate rapidly. Overgrown yards attract code enforcement fines, pests move in, and weather damage goes unnoticed. Regular professional maintenance costs a fraction of the repair bills that come from neglect.",
        },
      ]}
      benefits={{
        heading: "Benefits of Professional Vacant Property Care",
        items: [
          "Avoid code enforcement fines — stay compliant with local regulations",
          "Preserve property value — maintain curb appeal and prevent deterioration",
          "Early problem detection — catch issues before they become expensive",
          "Deter vandalism and squatters — maintained properties attract less trouble",
          "Peace of mind — know your investment is protected",
          "Flexible scheduling — weekly, bi-weekly, or monthly service plans",
        ],
      }}
    />
  );
};

export default VacantPropertyPage;
