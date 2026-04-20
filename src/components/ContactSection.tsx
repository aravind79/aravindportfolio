import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "917907021813";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Hi Aravind! My name is ${formData.name}. 
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#F1EFF0]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold font-display text-gray-900 tracking-tight uppercase"
          >
            Let's Build Something <span className="gradient-text">Great</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4"
          >
            Have a project in mind? Fill out the form below and it will send a direct message to my WhatsApp.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">YOUR NAME</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:border-[#fd7969] focus:bg-white focus:ring-0 transition-all outline-none text-gray-900"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">YOUR EMAIL</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:border-[#fd7969] focus:bg-white focus:ring-0 transition-all outline-none text-gray-900"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-bold text-gray-700 ml-1">SERVICE INTERESTED IN</label>
              <select
                required
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:border-[#fd7969] focus:bg-white focus:ring-0 transition-all outline-none text-gray-900 appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="WhatsApp Automation">WhatsApp Automation</option>
                <option value="MVP Development">Rapid MVP Development</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">YOUR MESSAGE</label>
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:border-[#fd7969] focus:bg-white focus:ring-0 transition-all outline-none text-gray-900 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-5 rounded-full bg-gradient-to-r from-[#b062ff] via-[#fd7969] to-[#ffa858] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <span className="flex items-center justify-center gap-3">
                SEND MESSAGE
                <Send className="w-5 h-5" />
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};