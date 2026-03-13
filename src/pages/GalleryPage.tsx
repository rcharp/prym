import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import useSEO from "@/hooks/useSEO";

import stormDebris from "@/assets/gallery/storm-debris.png";
import lawnMaintenance from "@/assets/gallery/lawn-maintenance.png";
import landscapeGreenery from "@/assets/gallery/landscape-greenery.png";
import palmYard from "@/assets/gallery/palm-yard.png";
import lawnCare from "@/assets/gallery/lawn-care.png";
import treeDebris from "@/assets/gallery/tree-debris.png";
import gazeboLawn from "@/assets/gallery/gazebo-lawn.png";
import rooftopTrees from "@/assets/gallery/rooftop-trees.png";
import stumpRemoval from "@/assets/gallery/stump-removal.png";

const galleryImages = [
  { src: lawnMaintenance, alt: "Lawn Maintenance" },
  { src: palmYard, alt: "Palm Tree Yard Care" },
  { src: lawnCare, alt: "Lawn Care Service" },
  { src: stormDebris, alt: "Storm Debris Cleanup" },
  { src: treeDebris, alt: "Tree Debris Removal" },
  { src: landscapeGreenery, alt: "Landscape Greenery" },
  { src: gazeboLawn, alt: "Gazebo Lawn Care" },
  { src: rooftopTrees, alt: "Rooftop Tree View" },
  { src: stumpRemoval, alt: "Stump Removal" },
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
              {galleryImages.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="rounded-xl overflow-hidden aspect-[4/3] border border-border">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
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
