import { motion } from "framer-motion";
import proj1 from "@/assets/proj1.jpeg";
import proj2 from "@/assets/proj2.jpeg";
import proj3 from "@/assets/proj3.jpeg";
import proj4 from "@/assets/proj4.jpeg";
import review1 from "@/assets/review1.jpeg";
import review2 from "@/assets/review2.jpeg";
import review3 from "@/assets/review3.jpeg";

const reviewImages = [
  proj1, proj2, proj3, proj4, review1, review2, review3
];

const scrollingImages = [...reviewImages, ...reviewImages];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#F1EFF0] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-display text-gray-900 tracking-tight uppercase text-center"
        >
          EXPLORE OUR CLIENTS FEEDBACK
        </motion.h2>
      </div>

      <div className="relative flex overflow-hidden w-full group">
        {/* First track */}
        <div className="flex animate-marquee whitespace-nowrap py-4 items-center group-hover:[animation-play-state:paused] w-max">
          {scrollingImages.map((img, index) => (
            <div
              key={`track1-${index}`}
              className="mx-4 flex-shrink-0 w-max h-[180px] md:h-[220px] p-[2px] rounded-2xl bg-gradient-to-br from-[#b062ff] via-[#fd7969] to-[#ffa858]"
            >
              <div className="bg-[#111] h-full w-full p-1 rounded-[14px]">
                <img 
                  src={img} 
                  alt={`Review ${index + 1}`} 
                  className="h-full w-auto object-contain rounded-xl block pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Second track (cloned for seamless looping) */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-4 items-center group-hover:[animation-play-state:paused] w-max">
          {scrollingImages.map((img, index) => (
            <div
              key={`track2-${index}`}
              className="mx-4 flex-shrink-0 w-max h-[180px] md:h-[220px] p-[2px] rounded-2xl bg-gradient-to-br from-[#b062ff] via-[#fd7969] to-[#ffa858]"
            >
              <div className="bg-[#111] h-full w-full p-1 rounded-[14px]">
                <img 
                  src={img} 
                  alt={`Review ${index + 1}`} 
                  className="h-full w-auto object-contain rounded-xl block pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
