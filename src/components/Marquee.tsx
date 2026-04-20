import { motion } from "framer-motion";

const services = [
  "Web Development",
  "App Development",
  "WhatsApp Automation",
  "MVP Launches",
  "UI/UX Design",
  "Web Development",
  "App Development",
  "WhatsApp Automation",
  "MVP Launches",
  "UI/UX Design",
];

export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-gradient-to-r from-[#b062ff] via-[#fd7969] to-[#ffa858] transform -rotate-2 scale-[1.05] shadow-lg z-20 border-y-4 border-white">
      <div className="flex animate-marquee whitespace-nowrap py-4 items-center bg-white w-max">
        {services.map((service, index) => (
          <span key={`track1-${index}`} className="flex items-center text-2xl md:text-3xl font-bold font-display text-gray-900 mx-4">
            {service}
            <span className="text-[#fd7969] mx-8">✦</span>
          </span>
        ))}
      </div>
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-4 items-center bg-white w-max h-full">
        {services.map((service, index) => (
          <span key={`track2-${index}`} className="flex items-center text-2xl md:text-3xl font-bold font-display text-gray-900 mx-4">
            {service}
            <span className="text-[#fd7969] mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
