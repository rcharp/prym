import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const DebrisRemovalPage = () => {
  useSEO({
    title: "Debris & Junk Removal | PricedRight Yards & More",
    description: "Professional junk and debris removal from lawns, roofs, garages, sheds, and interiors. Storm cleanup. Fully insured. Call (813) 860-2202.",
    canonical: "https://example.com/services/debris-removal",
  });

  return (
    <ServicePage
      title="Debris & Junk Removal"
      subtitle="Clear It Out. Haul It Away."
      intro="From yard waste and storm debris to full garage, shed, and interior cleanouts — we remove the junk so you don't have to. Fast, affordable, and fully insured service throughout Central Florida."
      sections={[
        {
          heading: "Our Debris & Junk Removal Services",
          content: [
            "Lawn and yard debris removal — branches, leaves, and bulk waste",
            "Roof debris cleanup — after storms or renovation projects",
            "Garage and shed cleanouts — reclaim your space",
            "Interior junk removal — furniture, appliances, and household items",
            "Storm damage cleanup — fast response when you need it most",
            "Responsible disposal and recycling — eco-friendly hauling",
          ],
        },
        {
          heading: "Why Professional Removal Matters",
          content: "Accumulated debris is more than an eyesore — it attracts pests, creates safety hazards, and can lead to code violations. Whether it's storm damage, a property cleanout, or years of buildup, our team handles the heavy lifting so your property stays clean, safe, and compliant.",
        },
      ]}
      benefits={{
        heading: "Benefits of Professional Junk & Debris Removal",
        items: [
          "Save time and effort — no hauling or dump runs on your end",
          "Safety first — we handle heavy, bulky, and hazardous items",
          "Code compliance — avoid fines from debris buildup",
          "Curb appeal — clean properties attract better tenants and buyers",
          "Fully insured — peace of mind on every job",
          "Fast turnaround — same-week service available",
        ],
      }}
    />
  );
};

export default DebrisRemovalPage;
