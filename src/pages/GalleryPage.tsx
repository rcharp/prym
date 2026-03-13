import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import useSEO from "@/hooks/useSEO";
import { Image } from "lucide-react";

const placeholderImages = [
  "Yard cleanup before & after", "Tree trimming project", "Post eviction cleanout", "Landscape maintenance",
  "Shrub shaping", "Rental make-ready", "Mulch installation", "Debris removal",
  "Property transformation", "Hedge trimming", "Vacant lot cleanup", "Lawn edging",
  "Storm cleanup", "Commercial property", "Stump removal", "Garden bed cleanup",
];

const GalleryPage = () => {
  useSEO({
    title: "Project Gallery | PricedRight Yards & More",
    description: "Browse photos of our property preservation projects. Yard cleanups, tree services, post eviction work & more.",
    canonical: "https://example.com/gallery",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 lg:pb-28 section-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">Project Gallery</h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Browse photos from our recent property preservation and maintenance projects.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {placeholderImages.map((label, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="rounded-xl overflow-hidden aspect-[4/3] bg-muted flex flex-col items-center justify-center gap-3 border border-border">
                  <Image className="w-10 h-10 text-muted-foreground/30" />
                  <span className="text-xs text-muted-foreground/50 font-medium px-4 text-center">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
