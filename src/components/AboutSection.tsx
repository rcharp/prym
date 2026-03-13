import { MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-base font-semibold text-primary uppercase tracking-wider">About Us</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
            Family Owned. Fully Insured.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We're a small, family owned and operated lawn & landscape business offering MORE than just lawn and landscape services to residents, land/home owners, and businesses within the communities we serve. Collectively, we have over 20 years in the business and are fully insured for your peace of mind.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            What sets us apart is our transparency and what we call the <strong>MORE Factor</strong> — helping our partners with an almost one-stop shop for all their property needs. When you choose PricedRight Yards & More, you're getting a team that's invested in your property's success and your complete satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Address</div>
                <div className="text-base font-semibold text-foreground">2304 4th Ave E, Palmetto, FL 34221</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+18136683219" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                  (813) 668-3219
                </a>
              </div>
           </div>
          </div>
          <a href="/about" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all mt-2">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-muted flex items-center justify-center" style={{ height: 450 }}>
            <div className="text-center text-muted-foreground p-8">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">Your Google Map Here</p>
              <p className="text-sm mt-2">Replace with your business location embed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
