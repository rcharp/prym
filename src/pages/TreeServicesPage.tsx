import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const HomeWatchPage = () => {
  useSEO({
    title: "HomeWatch Services | PricedRight Yards & More",
    description: "Professional HomeWatch property inspection and monitoring. Vacancy checks, maintenance coordination, peace of mind. Call (813) 668-3219.",
    canonical: "https://example.com/services/home-watch",
  });

  return (
    <ServicePage
      title="HomeWatch Services"
      subtitle="Eyes on Your Property When You Can't Be"
      intro="Whether you're a snowbird, traveling, or managing properties from afar — our HomeWatch services keep a professional eye on your property with regular inspections, detailed reports, and maintenance coordination."
      sections={[
        {
          heading: "Our HomeWatch Services",
          content: [
            "Scheduled property inspections — interior and exterior walkthroughs",
            "Detailed condition reports — photos and notes after every visit",
            "Maintenance monitoring — check for leaks, pests, storm damage, and more",
            "Vendor coordination — schedule repairs and service calls on your behalf",
            "Mail and package management — prevent buildup that signals vacancy",
            "Storm preparation and response — pre- and post-storm property checks",
          ],
        },
        {
          heading: "Peace of Mind for Absentee Owners",
          content: "An unmonitored property in Florida is vulnerable to water damage, pest infestations, mold, and break-ins. Our HomeWatch service catches problems early before they become costly repairs. Whether you're away for a week or a season, we've got your property covered.",
        },
      ]}
      benefits={{
        heading: "Benefits of Professional HomeWatch",
        items: [
          "Early problem detection — catch leaks, pests, and damage before they escalate",
          "Preserve property value — regular monitoring prevents neglect",
          "Insurance compliance — many policies require regular occupancy checks",
          "Deter break-ins — maintained properties attract less trouble",
          "Fully insured — peace of mind on every visit",
          "Flexible scheduling — weekly, bi-weekly, or custom plans",
        ],
      }}
    />
  );
};

export default HomeWatchPage;
