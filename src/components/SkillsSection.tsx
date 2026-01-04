import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Vite", level: 88, category: "Frontend" },
  { name: "Framer Motion", level: 85, category: "Frontend" },
  { name: "React Router", level: 90, category: "Frontend" },
  { name: "Supabase", level: 90, category: "Backend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "PHP Laravel", level: 85, category: "Backend" },
  { name: "TanStack Query", level: 85, category: "Backend" },
  { name: "Zod", level: 85, category: "Backend" },
  { name: "React Hook Form", level: 90, category: "Backend" },
  { name: "Shopify", level: 92, category: "E-commerce" },
  { name: "WordPress", level: 88, category: "E-commerce" },
];

const categories = ["All", "Frontend", "Backend", "E-commerce"];

export const SkillsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
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
            EXPERTISE
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Skills & <span className="gradient-text text-glow">Technologies</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass-card glow-border text-foreground/70 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              layout
            >
              <motion.div
                className="glass-card glow-border rounded-2xl p-5 md:p-6 hover-glow group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <span className="font-display text-base md:text-lg font-bold group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-display text-sm text-primary">{skill.level}%</span>
                </div>
                
                {/* Progress bar */}
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
                      boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                  />
                </div>

                {/* Category tag */}
                <div className="mt-3 md:mt-4">
                  <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-muted/50">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};