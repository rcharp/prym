import { Percent, CreditCard, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import offersBg from "@/assets/offers-bg.png";

const offers = [
  {
    icon: Percent,
    title: "Competitive Pricing Guaranteed",
    description: "Our services are priced right — fair, transparent pricing with no hidden fees or surprises.",
  },
  {
    icon: CreditCard,
    title: "Free Estimates on All Services",
    description: "Get a free, no-obligation estimate for any property service. We'll come to you!",
  },
  {
    icon: Search,
    title: "Free Property Assessment",
    description: "We'll assess your property's needs and provide a detailed plan. Schedule yours today!",
  },
];

const SpecialOffers = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${offersBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mt-3">
            Special Offers & Benefits
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              onClick={openQuoteModal}
              className="rounded-2xl p-8 card-elevated border border-secondary/30 text-center backdrop-blur-sm cursor-pointer transition-shadow hover:shadow-xl"
              style={{ backgroundColor: "hsla(155, 55%, 18%, 0.8)" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <offer.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary-foreground mb-3">{offer.title}</h3>
              <p className="text-base text-primary-foreground/70 leading-relaxed">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
