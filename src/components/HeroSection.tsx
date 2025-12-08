import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile.jpeg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card glow-border px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-foreground">CREATIVE</span>
              <br />
              <span className="gradient-text text-glow">DEVELOPER</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Crafting immersive digital experiences through innovative design
              and cutting-edge technology
            </motion.p>

            <motion.div
              className="flex items-center gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#contact" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="glass-card glow-border w-12 h-12 rounded-full flex items-center justify-center hover-glow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </motion.div>

            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          >
            {/* Animated rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute rounded-full border border-primary/20"
                  style={{
                    width: 300 + ring * 60,
                    height: 300 + ring * 60,
                  }}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 20 + ring * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Glow effect */}
            <div className="absolute w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute w-60 h-60 bg-accent/20 rounded-full blur-2xl translate-x-10 translate-y-10" />

            {/* Image container */}
            <motion.div
              className="relative z-10 floating"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glow-border glass-card p-2">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card glow-border px-4 py-2 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="font-display text-sm font-bold gradient-text">5+ Years</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass-card glow-border px-4 py-2 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span className="font-display text-sm font-bold gradient-text">50+ Projects</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </section>
  );
};
