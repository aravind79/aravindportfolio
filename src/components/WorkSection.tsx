import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    tech: ["React", "Node.js", "MongoDB"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Analytics dashboard powered by machine learning insights",
    tech: ["Next.js", "Python", "TensorFlow"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Real-time social platform with chat and live streaming",
    tech: ["React Native", "Firebase", "WebRTC"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description: "Automated portfolio builder with customizable templates",
    tech: ["Vue.js", "GraphQL", "PostgreSQL"],
    color: "from-green-500/20 to-teal-500/20",
  },
];

export const WorkSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="work"
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
            PORTFOLIO
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text text-glow">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my recent work showcasing creativity and technical excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="glass-card glow-border rounded-3xl overflow-hidden cursor-pointer group h-full"
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Preview */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center overflow-hidden`}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, transparent 48%, hsl(var(--primary) / 0.1) 50%, transparent 52%),
                        linear-gradient(-45deg, transparent 48%, hsl(var(--primary) / 0.1) 50%, transparent 52%)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                    animate={hoveredId === project.id ? { x: [0, 20], y: [0, 20] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Project number */}
                  <motion.span
                    className="font-display text-8xl font-bold text-foreground/5 absolute"
                    animate={hoveredId === project.id ? { scale: 1.2, opacity: 0.1 } : {}}
                  >
                    0{project.id}
                  </motion.span>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.button
                      className="glass-card glow-border w-12 h-12 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-primary" />
                    </motion.button>
                    <motion.button
                      className="glass-card glow-border w-12 h-12 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm bg-muted/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
