import { motion } from "framer-motion";

const stats = [
  { label: "PROJECTS DONE", value: "78+" },
  { label: "EXPERIENCE", value: "5+ Years" },
  { label: "CLIENTS SATISFACTION", value: "100%" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-[#161616] text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left flex flex-col gap-2"
            >
              <h4 className="text-sm font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#b062ff] via-[#fd7969] to-[#ffa858]">
                {stat.label}
              </h4>
              <p className="text-4xl md:text-6xl font-bold font-display">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
