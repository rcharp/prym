import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const TrashOutPage = () => {
  useSEO({
    title: "Trash Out / Clean-Outs | PricedRight Yards & More",
    description: "Professional trash out and property clean-out services in Tampa Bay. Foreclosures, estates, and more. Call (813) 860-2202.",
    canonical: "https://prym.lovable.app/services/trash-out",
  });

  return (
    <ServicePage
      title="Trash Out / Clean-Outs"
      subtitle="The MORE Factor"
      intro="Complete property clean-out services for foreclosures, estates, rental turnovers, and hoarding situations. We remove everything and leave the property broom-clean."
      sections={[
        {
          heading: "Our Clean-Out Services",
          content: [
            "Foreclosure trash outs — meet bank and servicer requirements",
            "Estate clean-outs — respectful, thorough removal",
            "Rental turnover cleanups",
            "Hoarding situation remediation",
            "Appliance and furniture removal",
            "Garage, shed, and storage area cleanouts",
          ],
        },
        {
          heading: "Professional & Efficient",
          content: "We understand that clean-outs often need to happen quickly. Our team works efficiently to remove all items, debris, and trash, leaving the property broom-clean and ready for its next chapter. We handle disposal responsibly, recycling and donating when possible.",
        },
      ]}
      benefits={{
        heading: "Benefits",
        items: [
          "Fast turnaround for time-sensitive situations",
          "Meets bank and servicer specifications",
          "Responsible disposal and recycling",
          "Before and after photo documentation",
          "Fully insured for liability protection",
        ],
      }}
    />
  );
};

export default TrashOutPage;
