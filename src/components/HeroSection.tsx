import { motion } from "framer-motion";
import heroImage from "@/assets/Gemini_Generated_Image_zyfm0zyfm0zyfm0z (1).png";

const WHATSAPP_NUMBER = "917907021813";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Aravind! I'd like to discuss a project with you.");

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#F1EFF0] flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#b062ff]/10 via-[#fd7969]/10 to-[#ffa858]/10 border border-[#fd7969]/20 mb-6"
            >
              <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#b062ff] via-[#fd7969] to-[#ffa858] tracking-wider uppercase">
                Expert Developer & Automation Specialist
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-4 tracking-tight text-[#111]"
            >
              Hello, I'm <span className="gradient-text">Aravind</span>. I build Scalable <span className="italic font-normal">Digital Products</span> that grow your business.
            </motion.h1>

            <motion.p
              className="text-gray-600 text-base md:text-lg mb-10 max-w-xl leading-relaxed"
            >
              I help startups and businesses scale through high-performance <span className="font-semibold text-gray-900">Web & App Development</span>, <span className="font-semibold text-gray-900">WhatsApp Automation</span>, and <span className="font-semibold text-gray-900">Rapid MVP</span> launches. 
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#b062ff] via-[#fd7969] to-[#ffa858] text-white font-bold text-lg shadow-[0_10px_30px_-10px_rgba(253,121,105,0.4)] hover:shadow-[0_15px_35px_-10px_rgba(253,121,105,0.6)] transition-all flex items-center justify-center gap-2"
              >
                Let's Talk
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-gray-900 text-gray-900 font-bold text-lg hover:bg-gray-900 hover:text-white transition-all text-center"
              >
                View Works
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex-shrink-0"
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
