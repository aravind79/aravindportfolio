import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "WEB DEVELOPMENT",
    description: "Modern, fast, and SEO/AEO-friendly websites built to scale your business and generate leads.",
    details: [
      "Custom Websites, E-commerce, Shopify, Wordpress, WooCommerce, Webflow",
      "High-converting Landing Pages",
      "Full-stack Web Applications",
      "SEO, GEO/AEO & Performance Optimization"
    ]
  },
  {
    title: "APP DEVELOPMENT",
    description: "Custom mobile and web applications designed for performance, usability, and growth.",
    details: [
      "Cross-platform Mobile Apps (React Native)",
      "Progressive Web Apps (PWA)",
      "UI/UX Design & Prototyping",
      "Backend Integration & APIs"
    ]
  },
  {
    title: "WHATSAPP AUTOMATION",
    description: "Automate customer interactions, lead capture, and follow-ups using WhatsApp to save time.",
    details: [
      "Custom WhatsApp Bot Development",
      "Lead Generation & Qualification Bots",
      "Automated Customer Support",
      "CRM & Payment Integration"
    ]
  },
  {
    title: "RAPID MVP DEVELOPMENT",
    description: "Turn your idea into a working product quickly with a lean, scalable MVP built for validation.",
    details: [
      "Lean Product Strategy",
      "Rapid Prototyping (2-4 weeks)",
      "MVP Launch & User Testing",
      "Scalable Tech Stack Selection"
    ]
  }
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-[#F1EFF0]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-display leading-tight text-gray-900 mb-6"
            >
              Services I Am<br/>Providing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              I build high-performance digital products that help businesses grow faster. From websites to automation and MVPs, I focus on speed, scalability, and real results.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-8 py-3 rounded-full font-bold text-sm tracking-wider bg-gradient-to-r from-[#b062ff] via-[#fd7969] to-[#ffa858] text-white shadow-lg hover:shadow-xl transition-shadow text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH
            </motion.a>
          </div>
          <div className="lg:w-2/3">
            <div className="flex flex-col">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => toggleAccordion(index)}
                    className="group relative flex items-center justify-between py-8 cursor-pointer"
                  >
                    <div className="pr-8">
                      <h3 className={`text-xl md:text-2xl font-bold font-display transition-colors duration-300 ${activeIndex === index ? 'text-[#fd7969]' : 'text-gray-900 group-hover:text-[#fd7969]'}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 max-w-xl">
                        {service.description}
                      </p>
                    </div>
                    <div className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-[#fd7969] rotate-180' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                      <ChevronDown className={`w-5 h-5 transition-colors ${activeIndex === index ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                              <div className="w-6 h-6 rounded-full bg-[#fd7969]/10 flex items-center justify-center">
                                <Check className="w-3.5 h-3.5 text-[#fd7969]" />
                              </div>
                              <span className="text-sm font-medium text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
