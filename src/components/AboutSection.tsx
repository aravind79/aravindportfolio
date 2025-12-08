import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, Rocket, Store } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Business Analysis",
    description: "Strategic insights & data-driven decisions",
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description: "Custom software solutions that scale",
  },
  {
    icon: Store,
    title: "E-commerce",
    description: "Shopify & WordPress stores that convert",
  },
  {
    icon: Rocket,
    title: "Web Apps",
    description: "Modern, fast & user-friendly applications",
  },
];

const experience = [
  {
    role: "Business Analyst",
    company: "GrowthPlug (acquired by PracticeTek)",
    period: "2021 - Present",
    description: "Driving growth through data analysis and strategic initiatives",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2021 - Present",
    description: "Web Development, SaaS, E-commerce (Shopify/WordPress)",
  },
];

export const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block font-display text-sm tracking-widest text-primary mb-4">
            ABOUT ME
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Passion for <span className="gradient-text text-glow">Excellence</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            I'm Aravind B Nair, a Business Analyst & Full-Stack Developer based in Trivandrum.
            I transform complex business challenges into elegant digital solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card glow-border rounded-2xl p-6 md:p-8"
              >
                <span className="text-xs md:text-sm text-primary font-medium">{exp.period}</span>
                <h3 className="font-display text-lg md:text-xl font-bold mt-2 mb-1">{exp.role}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground/80">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <motion.div
                className="glass-card glow-border rounded-2xl p-6 md:p-8 h-full hover-glow group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 10 }}
                >
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </motion.div>
                <h3 className="font-display text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-20 glass-card glow-border rounded-2xl md:rounded-3xl p-6 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "10+", label: "Technologies" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-glow">
                  {stat.value}
                </span>
                <p className="text-xs md:text-base text-muted-foreground mt-1 md:mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};