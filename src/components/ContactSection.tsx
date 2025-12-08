import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@example.com" },
    { icon: Phone, label: "Phone", value: "+1 234 567 890" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-16 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block font-display text-sm tracking-widest text-primary mb-4">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Let's Work <span className="gradient-text text-glow">Together</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind? Let's create something extraordinary together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Feel free to reach out for collaborations or just a friendly hello.
                I'm always excited to work on interesting projects!
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 md:gap-4 group"
                >
                  <div className="glass-card glow-border w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs md:text-sm text-muted-foreground block">{item.label}</span>
                    <span className="font-semibold text-sm md:text-base">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              className="relative p-6 md:p-8 glass-card glow-border rounded-2xl md:rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="absolute top-0 left-0 w-16 md:w-20 h-16 md:h-20 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-accent/10 rounded-full blur-2xl" />
              <p className="font-display text-base md:text-lg relative z-10">
                "Great design is not just what it looks like, but how it works."
              </p>
              <span className="text-muted-foreground text-xs md:text-sm mt-3 md:mt-4 block relative z-10">
                — Steve Jobs
              </span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-5 md:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-sm md:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 md:py-4 rounded-xl font-display font-bold text-base md:text-lg flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};