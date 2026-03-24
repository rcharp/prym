import { ArrowRight, Check, Star, Crown, Sparkles, Wrench } from "lucide-react";
import { motion } from "framer-motion";

import classicImg from "@/assets/services/hedged-lawn.png";
import premiumImg from "@/assets/services/landscaped-home.webp";
import ultimateImg from "@/assets/services/gazebo-waterfront.png";
import aLaCarteImg from "@/assets/services/palm-yard-street.png";
import moreImg from "@/assets/gallery/property-cleanup.jpg";

const corePrograms = [
  {
    icon: Check,
    tier: "Classic",
    title: "Classic Lawn Maintenance",
    features: ["Mowing", "Blowing", "Weeding", "Edging"],
    popular: false,
    image: classicImg,
  },
  {
    icon: Star,
    tier: "Premium",
    title: "Premium Lawn Maintenance",
    features: ["Everything in Classic", "Weed control", "Leaf control"],
    popular: true,
    image: premiumImg,
  },
  {
    icon: Crown,
    tier: "Ultimate",
    title: "Ultimate Maintenance",
    features: ["Everything in Classic", "Everything in Premium", "Landscape maintenance"],
    popular: false,
    image: ultimateImg,
  },
];

const aLaCarteServices = [
  "Mulch installs",
  "Sod installs",
  "Planting",
  "Tree/shrub cut, removal, or trim",
];

const moreFactorServices = [
  { name: "Pressure Washing", href: "/services/debris-removal" },
  { name: "Gutter Cleaning", href: "/services/debris-removal" },
  { name: "Roof & Yard Leaf/Debris", href: "/services/debris-removal" },
  { name: "Trash Out / Clean-Outs", href: "/services/debris-removal" },
  { name: "Sales & Rental Cleans", href: "/services/make-ready" },
  { name: "Post Eviction Services", href: "/services/post-eviction" },
  { name: "HomeWatch Services", href: "/services/home-watch" },
];

const ServicesSection = () => {
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
            Complete property preservation and maintenance solutions for homeowners, property managers, and business owners. Insured and bonded.
          </p>
        </motion.div>

        {/* Core Programs */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl lg:text-3xl font-bold text-foreground text-center mb-8"
          >
            Our Core Programs
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {corePrograms.map((program, i) => (
              <motion.div
                key={program.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border relative overflow-hidden ${
                  program.popular
                    ? "border-secondary shadow-lg shadow-secondary/20 scale-[1.02]"
                    : "border-secondary/30"
                }`}
                style={{ backgroundColor: "hsl(155 55% 18%)" }}
              >
                {/* Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {program.popular && (
                  <div className="absolute top-2 right-2 bg-secondary text-primary-foreground text-xs font-bold px-3 py-1 rounded-lg z-10">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mb-3">
                    <program.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-primary-foreground mb-1">{program.title}</h4>
                  <p className="text-sm text-primary-foreground/50 mb-4">{program.tier} Tier</p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                        <Check className="w-4 h-4 text-secondary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* A La Carte */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-2xl border border-secondary/30 overflow-hidden md:flex"
            style={{ backgroundColor: "hsl(155 55% 18%)" }}
          >
            <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
              <img
                src={aLaCarteImg}
                alt="A La Carte landscaping services"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:w-3/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground">A La Carte Services</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {aLaCarteServices.map((service) => (
                  <div key={service} className="flex items-center gap-2 text-primary-foreground/80">
                    <Check className="w-4 h-4 text-secondary shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* MORE Factor - Highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl border-2 border-secondary relative overflow-hidden"
          style={{ backgroundColor: "hsl(155 55% 14%)" }}
        >
          <div className="md:flex">
            <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
              <img
                src={moreImg}
                alt="Property cleanup and MORE factor services"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-10 md:w-3/5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-primary-foreground">
                      The <span className="text-secondary">"MORE"</span> Factor
                    </h3>
                    <p className="text-sm text-primary-foreground/60">What sets us apart from the rest</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {moreFactorServices.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors group"
                    >
                      <Check className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-base">{service.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
