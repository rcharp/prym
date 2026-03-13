import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does PricedRight Yards & More offer?",
    a: "We offer comprehensive property services including lawn & landscape maintenance, debris & junk removal (from lawns, roofs, garages, sheds, and interiors), sales & rental make-ready cleans, post eviction services, and HomeWatch property monitoring. We're your one-stop shop for all property needs.",
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve Tampa, Sarasota, Orlando, Bradenton, Clearwater, St. Petersburg, Lakeland, Ellenton, Parrish, Palmetto, Lakewood Ranch, Zephyrhills, Dade City, and New Port Richey. We cover Hillsborough, Manatee, Pasco, Pinellas, and Sarasota Counties.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes! PricedRight Yards & More is a fully insured, family-owned company. We carry full liability insurance to protect you and your property, giving you complete peace of mind when we work on your property.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes! We provide free, no-obligation estimates for all of our services. Just give us a call at (813) 668-3219 or fill out our online quote form and we'll get back to you quickly with a fair, competitive price.",
  },
  {
    q: "Do you work with property managers and landlords?",
    a: "Absolutely! We work with homeowners, property owners, property managers, realtors, and business owners. We specialize in make-ready cleans, post-eviction cleanups, HomeWatch monitoring, and debris removal — making us a go-to partner for property management companies.",
  },
  {
    q: "How quickly can you start a project?",
    a: "We pride ourselves on fast response times. For most services, we can schedule within a few days. For urgent needs like post-eviction cleanups or emergency property maintenance, we do our best to accommodate rush requests. Call us to discuss your timeline.",
  },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-primary">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-secondary uppercase tracking-wider">Still Not Sure?</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mt-3">
          Frequently Asked Questions
        </h2>
        <p className="text-primary-foreground/70 mt-4">What else would you like to know?</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-primary-foreground py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/70 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
