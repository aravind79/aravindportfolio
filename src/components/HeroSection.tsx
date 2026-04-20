import { motion } from "framer-motion";
import heroImage from "@/assets/Gemini_Generated_Image_zyfm0zyfm0zyfm0z (1).png";

const WHATSAPP_NUMBER = "917907021813";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Aravind! I'd like to discuss a project with you.");

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center pt-20 md:pt-24 pb-10"
    >
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-3xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-4 tracking-tight text-[#111]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, <span className="gradient-text">I'm Aravind,</span>
              <br />
              I build systems
              <br />
              that help businesses scale.
            </motion.h1>

            <motion.p
              className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I specialize in web development, app development, WhatsApp automation, and rapid MVP launches helping startups and businesses move faster with reliable, conversion-focused technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm tracking-wider bg-gradient-to-r from-[#b062ff] via-[#fd7969] to-[#ffa858] text-white shadow-lg hover:shadow-xl transition-shadow text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GET IN TOUCH
              </motion.a>
              
              <motion.a
                href="#work"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm tracking-wider border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW ALL WORKS
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[500px] flex items-center justify-center">
              <img 
                src={heroImage} 
                alt="Aravind Portrait" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

