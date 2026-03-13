import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import heroRepair from "@/assets/service-repair-stock.jpg";
import heroInstall from "@/assets/service-install-stock.jpg";
import serviceMaintenance from "@/assets/service-maintenance-stock.jpg";
import serviceDuct from "@/assets/service-duct-stock.jpg";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    image: heroRepair,
    title: "Yard & Landscape Maintenance",
    href: "/services/yard-maintenance",
    features: [
      "Expert weed pulling & debris removal",
      "Tree & hedge trimming",
      "Mulch installation & lawn care",
      "Complete yard cleanup services",
    ],
  },
  {
    image: heroInstall,
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
    image: serviceMaintenance,
    title: "Vacant Property Maintenance",
    href: "/services/vacant-property",
    features: [
      "Regular property inspections",
      "Yard upkeep & curb appeal",
      "Junk & debris removal",
      "Weatherization & securing",
    ],
  },
  {
    image: serviceDuct,
    title: "Shrub & Tree Services",
    href: "/services/tree-services",
    features: [
      "Professional shrub trimming & shaping",
      "Tree pruning & limb removal",
      "Stump grinding & removal",
      "Overgrowth clearing",
    ],
  },
  {
    image: heroServices,
    title: "Rental Cleans & Make Ready",
    href: "/services/rental-cleans",
    features: [
      "Move-out deep cleaning",
      "Carpet & floor restoration",
      "Painting & touch-ups",
      "Property-ready-for-tenant preparation",
    ],
  },
];

const ServicesSection = () => (
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
          Homeowners Across Central Florida Trust PricedRight
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
            className="rounded-2xl overflow-hidden card-elevated border border-secondary/30 group"
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

export default ServicesSection;
