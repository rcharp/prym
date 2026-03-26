import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import useSEO from "@/hooks/useSEO";

// Lawn Care & Mowing
import lawnMaintenance from "@/assets/gallery/lawn-maintenance.png";
import palmYard from "@/assets/gallery/palm-yard.png";
import lawnCare from "@/assets/gallery/lawn-care.png";


import sideYardMow from "@/assets/gallery/side-yard-mow.webp";
import openYardMow from "@/assets/gallery/open-yard-mow.webp";
import fencedYardMow from "@/assets/gallery/fenced-yard-mow.webp";
import backyardWide from "@/assets/gallery/backyard-wide.webp";

import palmYardMaintained from "@/assets/gallery/palm-yard-maintained.png";

// Hedge & Shrub Work
import trimmingBush from "@/assets/gallery/trimming-bush.webp";
import hedgedFrontLawn from "@/assets/gallery/hedged-front-lawn.png";
import hedgeOvergrown from "@/assets/gallery/hedge-overgrown.webp";


// Debris & Storm Cleanup
import stormDebris from "@/assets/gallery/storm-debris.png";

import debrisCleanup1 from "@/assets/gallery/debris-cleanup-1.jpg";

import roofDebris from "@/assets/gallery/roof-debris.jpg";
import roofCleanup from "@/assets/gallery/roof-cleanup.jpg";
import roofTreeBefore from "@/assets/gallery/roof-tree-before.png";
import roofTreeAfter from "@/assets/gallery/roof-tree-after.png";

// Property & Landscaping
import landscapeGreenery from "@/assets/gallery/landscape-greenery.png";
import gazeboLawn from "@/assets/gallery/gazebo-lawn.png";
import landscapedHome1 from "@/assets/gallery/landscaped-home-1.webp";
import landscapedHome2 from "@/assets/gallery/landscaped-home-2.webp";


import sideYardClean from "@/assets/gallery/side-yard-clean.webp";

// Cleanout & Junk Removal
import junkRemoval from "@/assets/gallery/junk-removal.jpg";
import overgrownLot from "@/assets/gallery/overgrown-lot.jpg";
import propertyCleanup from "@/assets/gallery/property-cleanup.jpg";
import clearedLot from "@/assets/gallery/cleared-lot.webp";
import woodedLotBefore from "@/assets/gallery/wooded-lot-before.png";
import woodedLotAfter from "@/assets/gallery/wooded-lot-after.png";

// Team
import teamOnSite from "@/assets/gallery/team-on-site.jpg";
import stumpTeam from "@/assets/gallery/stump-team.webp";
import stumpRemoval from "@/assets/gallery/stump-removal.png";
import blowerGazebo from "@/assets/gallery/blower-gazebo.webp";
import rooftopTrees from "@/assets/gallery/rooftop-trees.png";

const categories = [
  { id: "all", label: "All" },
  { id: "lawn", label: "Lawn Care" },
  { id: "hedge", label: "Hedge & Shrub" },
  { id: "debris", label: "Debris & Storm" },
  { id: "landscape", label: "Landscaping" },
  { id: "cleanout", label: "Junk Removal/Cleanout" },
  { id: "team", label: "Team at Work" },
];

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Lawn Care
  { src: lawnMaintenance, alt: "Lawn Maintenance", category: "lawn" },
  { src: palmYard, alt: "Palm Tree Yard Care", category: "lawn" },
  { src: lawnCare, alt: "Lawn Care Service", category: "lawn" },
  
  
  { src: sideYardMow, alt: "Side Yard Mowing", category: "lawn" },
  { src: openYardMow, alt: "Open Yard Mowing", category: "lawn" },
  { src: fencedYardMow, alt: "Fenced Yard Mowing", category: "lawn" },
  { src: backyardWide, alt: "Backyard Maintenance", category: "lawn" },
  
  { src: palmYardMaintained, alt: "Palm Yard Maintained", category: "lawn" },
  // Hedge
  { src: trimmingBush, alt: "Bush Trimming Service", category: "hedge" },
  { src: hedgedFrontLawn, alt: "Hedged Front Lawn", category: "hedge" },
  { src: hedgeOvergrown, alt: "Overgrown Hedge", category: "hedge" },
  // Debris
  { src: stormDebris, alt: "Storm Debris Cleanup", category: "debris" },
  
  
  { src: rooftopTrees, alt: "Rooftop Tree View", category: "debris" },
  // Landscaping
  { src: landscapeGreenery, alt: "Landscape Greenery", category: "landscape" },
  { src: gazeboLawn, alt: "Gazebo Lawn Care", category: "landscape" },
  { src: landscapedHome1, alt: "Landscaped Home", category: "landscape" },
  { src: landscapedHome2, alt: "Landscaped Home Close Up", category: "landscape" },
  { src: sideYardClean, alt: "Side Yard Cleanup", category: "landscape" },
  { src: stumpRemoval, alt: "Stump Grinding", category: "landscape" },
  // Cleanout
  { src: junkRemoval, alt: "Junk Removal", category: "cleanout" },
  { src: debrisCleanup1, alt: "Debris Cleanup", category: "cleanout" },
  { src: propertyCleanup, alt: "Property Cleanup", category: "cleanout" },
  { src: woodedLotBefore, alt: "Wooded Lot Before Clearing", category: "cleanout" },
  { src: woodedLotAfter, alt: "Wooded Lot After Clearing", category: "cleanout" },
  // Team
  { src: teamOnSite, alt: "Team On Site", category: "team" },
  { src: stumpTeam, alt: "Stump Removal Team", category: "team" },
  { src: blowerGazebo, alt: "Leaf Blowing at Gazebo", category: "team" },
];

const beforeAfterPairs = [
  {
    before: roofDebris,
    after: roofCleanup,
    beforeAlt: "Roof with debris before cleanup",
    afterAlt: "Roof after professional cleanup",
    label: "Roof Debris Cleanup",
    category: "debris",
  },
  {
    before: roofTreeBefore,
    after: roofTreeAfter,
    beforeAlt: "Fallen tree on roof before removal",
    afterAlt: "Clear roof after tree removal",
    label: "Roof Tree Removal",
    category: "debris",
  },
  {
    before: debrisCleanup1,
    after: woodedLotBefore,
    beforeAlt: "Property before cleanup",
    afterAlt: "Property after professional cleanup",
    label: "Lot Clearing",
    category: "cleanout",
  },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  useSEO({
    title: "Project Gallery | PricedRight Yards & More",
    description: "Browse photos of our property preservation projects. Yard cleanups, tree services, post eviction work & more.",
    canonical: "https://example.com/gallery",
  });

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const filteredPairs = activeCategory === "all"
    ? beforeAfterPairs
    : beforeAfterPairs.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 lg:pb-28 section-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">Project Gallery</h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Browse photos from our recent property preservation and maintenance projects.</p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Before/After Sliders */}
            {filteredPairs.length > 0 && (
              <div className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Before & After</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPairs.map((pair, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <BeforeAfterSlider
                        beforeSrc={pair.before}
                        afterSrc={pair.after}
                        beforeAlt={pair.beforeAlt}
                        afterAlt={pair.afterAlt}
                      />
                      <p className="text-sm text-muted-foreground mt-2 text-center font-medium">{pair.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Photo Grid — grouped by category */}
            {activeCategory === "all" ? (
              categories.filter(c => c.id !== "all").map((cat) => {
                const catImages = galleryImages.filter(img => img.category === cat.id);
                if (catImages.length === 0) return null;
                return (
                  <div key={cat.id} className="mb-14">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4 border-b border-border pb-2">{cat.label}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {catImages.map((img, i) => (
                        <motion.div
                          key={`${img.alt}-${i}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.02 }}
                          className="rounded-xl overflow-hidden aspect-[4/3] border border-border"
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredImages.map((img, i) => (
                  <motion.div
                    key={`${img.alt}-${i}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    className="rounded-xl overflow-hidden aspect-[4/3] border border-border"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
