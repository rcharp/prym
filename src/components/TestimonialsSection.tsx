import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import karenImg from "@/assets/testimonial-karen.jpg";
import dorothyImg from "@/assets/testimonial-dorothy.jpg";
import katrinaImg from "@/assets/testimonial-katrina.jpg";
import scottImg from "@/assets/testimonial-scott.jpg";
import georgeImg from "@/assets/testimonial-george.jpg";

const testimonials = [
  {
    text: "I am so happy with the work that was done in my yard. I was at work when they finished and they sent me a video to see the final results. My expectations exceeded. I will absolutely use again and I feel like a weight was lifted off my shoulders having this done. The price was more than fair and they were able to schedule me fast!!! I am so appreciative !! Thank you!!",
    name: "Karen J.",
    rating: 5,
    service: "Lawn Mowing and Trimming",
    date: "Feb 2025",
    image: karenImg,
  },
  {
    text: "Hurricane Milton left our yard a mess! Twigs and leaves were everywhere! They did an excellent job of cleaning up the yard! They were responsive to my inquiry and scheduled me quickly. They worked diligently, were pleasant to deal with, and left my yard looking good. They took all of the mess away. I was so pleased that I recommended them to my daughter to clean up her debris, too. I am very happy!",
    name: "Dorothy G.",
    rating: 5,
    service: "Full Service Lawn Care",
    date: "Oct 2024",
    image: dorothyImg,
  },
  {
    text: "My lawn needed a significant cleanup after moving in a couple weeks ago. PricedRight Yards came and cleared away 20 bags of yard waste, I kid you not! That is an amount I could not have done successfully myself! My backyard looks so much tidier now and I am very grateful for the job they did!",
    name: "Katrina T.",
    rating: 5,
    service: "Full Service Lawn Care",
    date: "Apr 2024",
    image: katrinaImg,
  },
  {
    text: "Responded to my request quickly. Stayed in contact with me and responded to my questions and communications quickly. Cost was fair and quality of work was great. Recommend this service for any yard needs you may have. Mine was raking leaves.",
    name: "Scott C.",
    rating: 5,
    service: "Full Service Lawn Care",
    date: "Apr 2024",
    image: scottImg,
  },
  {
    text: "A family company worked very hard on a hot day and did everything that was asked for. Very pleased with results.",
    name: "George B.",
    rating: 5,
    service: "Gardening",
    date: "Sep 2025",
    image: georgeImg,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Trusted by Dozens of Happy Customers!
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-base text-muted-foreground font-medium">5.0 Rating · 17 Reviews on Thumbtack</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-10 card-elevated border border-border relative"
            >
              <Quote className="w-10 h-10 text-secondary/15 absolute top-8 right-8" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonials[current].rating }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center font-heading font-bold text-secondary text-base">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">{testimonials[current].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[current].service} · {testimonials[current].date}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-secondary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <a
              href="https://www.thumbtack.com/fl/palmetto/lawn-care/pricedright-yards-more/service/512059777267326978"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-secondary hover:underline"
            >
              See All Reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
