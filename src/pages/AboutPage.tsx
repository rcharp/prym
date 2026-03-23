import Header from "@/components/Header";
import teamOnSite from "@/assets/gallery/team-on-site.jpg";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Check, Phone, ArrowRight, MapPin } from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModal";
import heroServices from "@/assets/hero-services.jpg";
import ownerPhoto from "@/assets/owner-photo-cropped.jpg";
import useSEO from "@/hooks/useSEO";

const AboutPage = () => {
  const { openQuoteModal } = useQuoteModal();

  useSEO({
    title: "About Us | PricedRight Yards & More",
    description: "Learn about PricedRight Yards & More — a family-owned, fully insured property preservation company serving Central Florida. Call (813) 860-2202.",
    canonical: "https://example.com/about",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-black">
          <img src={heroServices} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500" onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }} />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Who We Are</span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3">About PricedRight Yards & More</h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">Family-owned, fully insured property preservation services you can count on.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img
                  src={ownerPhoto}
                  alt="Kay Tarver, Owner of PricedRight Yards & More"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover object-top"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Meet the Owner</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Hey, I'm Kay Tarver!</h2>
                <p className="text-muted-foreground leading-relaxed">I'm the owner of PricedRight Yards & More, a family-owned and fully insured property services company. With over 20 years of collective experience, we're a small but mighty team committed to being true partners to our customers across Central Florida.</p>
                <p className="text-muted-foreground leading-relaxed">What makes us special is our transparency and the <strong>MORE Factor</strong> we bring to every job — giving our partners an almost one-stop shop for all their property needs. What's important to you regarding your property is equally important to us.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 order-2 lg:order-1">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">What We Do</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground">Comprehensive Property Care</h2>
                <p className="text-primary-foreground/70 leading-relaxed">From lawn & landscape maintenance to debris removal, make-ready cleans, post eviction services, and HomeWatch — we cover it all. Our transparency and the MORE Factor mean you get honest pricing and a true partner for your property needs.</p>
                <ul className="space-y-3">
                  {["Fully insured for your peace of mind", "Family-owned and operated", "Serving Tampa Bay and surrounding counties", "Competitive, transparent pricing", "Comprehensive one-stop property services", "Satisfaction guaranteed on every job"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-primary-foreground/80"><Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                <div className="rounded-2xl shadow-xl w-full aspect-[4/3] bg-white/5 flex items-center justify-center border border-white/10">
                  <div className="text-center text-primary-foreground/50"><p className="font-semibold">Your Work Photo Here</p></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Services</h2>
                <p className="text-muted-foreground mb-6">We offer comprehensive property services across Central Florida.</p>
                <ul className="space-y-3">
                  {[
                    { label: "Lawn & Landscape Maintenance", href: "/services/lawn-landscape" },
                    { label: "Debris & Junk Removal", href: "/services/debris-removal" },
                    { label: "Sales & Rental Make-Ready Cleans", href: "/services/make-ready" },
                    { label: "Post Eviction Services", href: "/services/post-eviction" },
                    { label: "HomeWatch Services", href: "/services/home-watch" },
                  ].map((s) => (
                    <li key={s.href}><a href={s.href} className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"><ArrowRight className="w-4 h-4 text-secondary shrink-0" />{s.label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Areas We Serve</h2>
                <p className="text-muted-foreground mb-6">Proudly serving these communities and beyond. <a href="/contact" className="text-secondary hover:underline">Contact us</a> to see if we cover your area.</p>
                <ul className="space-y-3">
                  {[
                    { label: "Tampa, FL", href: "/areas/tampa" },
                    { label: "St. Petersburg, FL", href: "/areas/st-petersburg" },
                    { label: "Clearwater, FL", href: "/areas/clearwater" },
                    { label: "Bradenton, FL", href: "/areas/bradenton" },
                    { label: "Palmetto, FL", href: "/areas/palmetto" },
                    { label: "Ellenton, FL", href: "/areas/ellenton" },
                  ].map((a) => (
                    <li key={a.href}><a href={a.href} className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"><MapPin className="w-4 h-4 text-secondary shrink-0" />{a.label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
