import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "UI/UX Design", level: 88, category: "Design" },
  { name: "Three.js", level: 75, category: "3D" },
];

const categories = ["All", "Frontend", "Backend", "Design", "3D"];

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
      className="relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-display text-sm tracking-widest text-primary mb-4">
            EXPERTISE
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text text-glow">Technologies</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
            >
              <motion.div
                className="glass-card glow-border rounded-2xl p-6 hover-glow group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-display text-lg font-bold group-hover:text-primary transition-colors">
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
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  />
                </div>

                {/* Category tag */}
                <div className="mt-4">
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
