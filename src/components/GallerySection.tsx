import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import stormDebris from "@/assets/gallery/storm-debris.png";
import lawnMaintenance from "@/assets/gallery/lawn-maintenance.png";
import landscapeGreenery from "@/assets/gallery/landscape-greenery.png";
import palmYard from "@/assets/gallery/palm-yard.png";
import lawnCare from "@/assets/gallery/lawn-care.png";
import treeDebris from "@/assets/gallery/tree-debris.png";
import roofDebris from "@/assets/gallery/roof-debris.jpg";
import roofCleanup from "@/assets/gallery/roof-cleanup.jpg";
import overgrownLot from "@/assets/gallery/overgrown-lot.jpg";
import clearedLot from "@/assets/gallery/cleared-lot.webp";

const galleryImages = [
  { src: lawnMaintenance, alt: "Lawn Maintenance" },
  { src: palmYard, alt: "Palm Tree Yard Care" },
  { src: lawnCare, alt: "Lawn Care Service" },
  { src: stormDebris, alt: "Storm Debris Cleanup" },
  { src: treeDebris, alt: "Tree Debris Removal" },
  { src: landscapeGreenery, alt: "Landscape Greenery" },
];

const beforeAfterPairs = [
  {
    before: roofDebris,
    after: roofCleanup,
    beforeAlt: "Roof covered in debris before cleanup",
    afterAlt: "Clean roof after professional debris removal",
    label: "Roof Debris Cleanup",
  },
  {
    before: overgrownLot,
    after: clearedLot,
    beforeAlt: "Overgrown lot before clearing",
    afterAlt: "Lot after professional clearing",
    label: "Lot Clearing",
  },
];

const GallerySection = () => (
  <section className="py-20 lg:py-28 section-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-primary uppercase tracking-wider">Our Work</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
          See Us In Action
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl overflow-hidden aspect-square border border-border"
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* Before & After Sliders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
          Before & After
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {beforeAfterPairs.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <BeforeAfterSlider
                beforeSrc={pair.before}
                afterSrc={pair.after}
                beforeAlt={pair.beforeAlt}
                afterAlt={pair.afterAlt}
              />
              <p className="text-sm text-muted-foreground mt-3 text-center font-medium">{pair.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link to="/gallery">
          <Button variant="secondary" size="lg" className="group text-lg px-10 py-6 h-auto">
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default GallerySection;
