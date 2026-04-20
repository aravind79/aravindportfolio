import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "917907021813";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Aravind! I have an awesome project idea. Let's discuss!");

export const CallToActionSection = () => {
  return (
    <section className="py-24 bg-[#111]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-white max-w-2xl leading-tight"
          >
            Have An Awesome Project Idea? Let's Discuss
          </motion.h2>
          
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#b062ff] via-[#fd7969] to-[#ffa858] flex items-center justify-center flex-shrink-0 cursor-pointer shadow-[0_0_50px_rgba(253,121,105,0.3)] hover:shadow-[0_0_80px_rgba(253,121,105,0.5)] transition-all"
          >
            <span className="text-white font-bold text-base md:text-xl tracking-wide text-center px-4">Start Project</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
