import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Check, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroServices from "@/assets/hero-services.jpg";
import { useQuoteModal } from "@/components/QuoteModal";

interface ServiceAreaPageProps {
  city: string;
  tagline: string;
  intro: string;
}

const services = [
  {
    title: "Yard & Landscape Maintenance",
    href: "/services/yard-maintenance",
    items: [
      "Weed pulling, trimming, mulching, and debris removal",
      "Lawn care and landscape cleanup",
      "Regular maintenance schedules available",
    ],
  },
  {
    title: "Post Eviction Services",
    href: "/services/post-eviction",
    items: [
      "Full property cleanout and junk removal",
      "Deep cleaning and sanitation",
      "Quick turnaround for re-listing",
    ],
  },
  {
    title: "Vacant Property Maintenance",
    href: "/services/vacant-property",
    items: [
      "Regular property inspections and upkeep",
      "Yard maintenance and curb appeal preservation",
      "Debris removal and weatherization",
    ],
  },
  {
    title: "Shrub & Tree Services",
    href: "/services/tree-services",
    items: [
      "Professional shrub trimming and shaping",
      "Tree pruning, limb removal, and stump grinding",
      "Overgrowth clearing and removal",
    ],
  },
  {
    title: "Rental Cleans & Make Ready",
    href: "/services/rental-cleans",
    items: [
      "Move-out deep cleaning and carpet restoration",
      "Painting, touch-ups, and minor repairs",
      "Property-ready-for-tenant preparation",
    ],
  },
];

const ServiceAreaPage = ({ city, tagline, intro }: ServiceAreaPageProps) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-black">
          <img
            src={heroServices}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
            onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Service Area</span>
              </div>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground">
                Property Services in {city}
              </h1>
              <p className="text-xl text-primary-foreground/80 mt-3 font-medium">{tagline}</p>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">{intro}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="tel:+18136683219"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 transition-colors"
                  style={{ borderRadius: "10px" }}
                >
                  <Phone className="w-5 h-5" />
                  (813) 668-3219
                </a>
                <button
                  onClick={openQuoteModal}
                  className="px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#f59e0b", color: "#fff", borderRadius: "10px" }}
                >
                  Get Free Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Property Services We Provide in {city}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-8 border border-secondary/30"
                  style={{ backgroundColor: "hsl(155 55% 18%)" }}
                >
                  <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-primary-foreground/80">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all"
                  >
                    Learn More →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Link */}
        <section className="py-12 lg:py-16 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <p className="text-muted-foreground text-lg">
              Want to know who you're working with? <a href="/about" className="text-secondary font-semibold hover:underline">Meet our team</a> — family-owned and fully insured. You can also <a href="/gallery" className="text-secondary font-semibold hover:underline">browse our work gallery</a> to see recent projects.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative overflow-hidden bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Need Property Services in {city}?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              <a href="/contact" className="text-secondary hover:underline">Contact us</a> today. We're your trusted local property preservation experts serving {city} and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18136683219"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 transition-colors"
                style={{ borderRadius: "10px" }}
              >
                <Phone className="w-5 h-5" />
                (813) 668-3219
              </a>
              <button
                onClick={openQuoteModal}
                className="px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#f59e0b", color: "#fff", borderRadius: "10px" }}
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceAreaPage;
