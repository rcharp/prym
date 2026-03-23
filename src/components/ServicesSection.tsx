import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import landscapedHome from "@/assets/services/landscaped-home.webp";
import hedgedLawn from "@/assets/services/hedged-lawn.png";
import palmYardStreet from "@/assets/services/palm-yard-street.png";
import gazeboWaterfront from "@/assets/services/gazebo-waterfront.png";
import lawnCare from "@/assets/gallery/lawn-care.png";

const services = [
  {
    image: landscapedHome,
    title: "Lawn & Landscape Maintenance",
    href: "/services/lawn-landscape",
    features: [
      "Mowing, edging & lawn care",
      "Hedge & shrub trimming",
      "Mulch installation & flower bed care",
      "Seasonal cleanup & maintenance plans",
    ],
  },
  {
    image: palmYardStreet,
    title: "Debris & Junk Removal",
    href: "/services/debris-removal",
    features: [
      "Yard & lawn debris hauling",
      "Roof, garage & shed cleanouts",
      "Interior junk removal & disposal",
      "Storm damage cleanup",
    ],
  },
  {
    image: hedgedLawn,
    title: "Sales & Rental Make-Ready Cleans",
    href: "/services/make-ready",
    features: [
      "Deep cleaning for sale or lease",
      "Carpet & floor restoration",
      "Painting & cosmetic touch-ups",
      "Curb appeal preparation",
    ],
  },
  {
    image: gazeboWaterfront,
    title: "Post Eviction Services",
    href: "/services/post-eviction",
    features: [
      "Full property cleanout & junk removal",
      "Deep cleaning & sanitation",
      "Damage assessment & documentation",
      "Quick turnaround for re-listing",
    ],
  },
  {
    image: lawnCare,
    title: "HomeWatch Services",
    href: "/services/home-watch",
    features: [
      "Regular property inspections",
      "Vacancy monitoring & reporting",
      "Maintenance coordination",
      "Peace of mind for absentee owners",
    ],
  },
];

const ServicesSection = () => {
  const isOdd = services.length % 2 !== 0;
  const lastIndex = services.length - 1;

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-base font-semibold text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Homeowners Across Southwest Florida Trust PricedRight Yards & More
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Complete property preservation and maintenance solutions for homeowners, property managers, and business owners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden card-elevated border border-secondary/30 group${isOdd && i === lastIndex ? " md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto" : ""}`}
              style={{ backgroundColor: "hsl(155 55% 18%)" }}
            >
              <a href={service.href} className="block aspect-[16/9] overflow-hidden cursor-pointer">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">{service.title}</h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-base text-primary-foreground/80">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-base font-semibold text-secondary hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
