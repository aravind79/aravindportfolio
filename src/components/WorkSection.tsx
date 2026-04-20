import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Import all project GIFs
import jewelsmuseRental from "@/assets/projects/jewelsmuse-rental.gif";
import myflavFoods from "@/assets/projects/myflav-foods.gif";
import zaashoShopify from "@/assets/projects/zaasho-shopify.gif";
import jewelsmuseShopify from "@/assets/projects/jewelsmuse-shopify.gif";
import mjAdworks from "@/assets/projects/mj-adworks.gif";
import drivingSchool from "@/assets/projects/driving-school.gif";
import pdfTools from "@/assets/projects/pdf-tools.gif";
import clearstatement from "@/assets/projects/clearstatement.gif";
import rentalBilling from "@/assets/projects/rental-billing.gif";
import elkuaBilling from "@/assets/projects/elkua-billing.gif";

const projects = [
  {
    id: 1,
    title: "JewelsMuse Rental Management SaaS",
    role: "Full-stack SaaS Developer | UI/UX Designer",
    description: "Built a custom Rental Management SaaS to automate inventory tracking, customer records, rentals, and revenue reporting. Created modules for Invoices, Inventory, Customers, Calendar, and Reports with real-time insights.",
    tech: ["SaaS Development", "Dashboard UI/UX", "Database Architecture"],
    image: jewelsmuseRental,
    category: "SaaS",
  },
  {
    id: 2,
    title: "MyFlav Foods Business SaaS",
    role: "Full-stack SaaS Developer | UI/UX Designer",
    description: "Developed a custom SaaS platform to automate daily food production workflow and track sales, expenses, credits, and profit in real time. Built modules for Daily Entry, Attendance, Invoicing, and Reports.",
    tech: ["SaaS Development", "Backend Logic", "Responsive Design"],
    image: myflavFoods,
    category: "SaaS",
  },
  {
    id: 3,
    title: "Zaasho Shopify Dropshipping",
    role: "Shopify Developer | Dropshipping Specialist",
    description: "Built a fully functional Shopify dropshipping store with a modern, high-converting layout. Created a premium shopping experience with theme customization and optimized product pages.",
    tech: ["Shopify Development", "E-commerce UI/UX", "Theme Customization"],
    image: zaashoShopify,
    category: "E-commerce",
  },
  {
    id: 4,
    title: "JewelsMuse Shopify Store",
    role: "Shopify Developer | Theme Specialist",
    description: "Developed a premium Shopify website for an imitation jewellery brand. Created an elegant storefront with custom theme modifications and optimized product layouts.",
    tech: ["Shopify Development", "Mobile Optimization", "Product Setup"],
    image: jewelsmuseShopify,
    category: "E-commerce",
  },
  {
    id: 5,
    title: "MJ Adworks Website",
    role: "Front-end & WordPress Developer",
    description: "Built a modern, responsive website to showcase services—web development, SaaS apps, e-commerce, and AI-agent solutions. Clean structure with minimal UI and smooth navigation.",
    tech: ["WordPress Development", "Responsive UI/UX", "Performance Optimization"],
    image: mjAdworks,
    category: "Website",
  },
  {
    id: 6,
    title: "Driving School Website",
    role: "WordPress Developer",
    description: "Designed and developed a responsive WordPress website showcasing courses, pricing, instructors, and booking options. Built custom sections and optimized speed.",
    tech: ["WordPress Development", "Custom Theme", "Local Business"],
    image: drivingSchool,
    category: "Website",
  },
  {
    id: 7,
    title: "Document Alchemist Studio",
    role: "Full-stack Developer",
    description: "Created a browser-based PDF editor supporting merge, split, compress, convert, and annotation features. Built a robust processing engine with clean UI for fast document handling.",
    tech: ["SaaS Application", "PDF Processing", "Web App UI/UX"],
    image: pdfTools,
    category: "SaaS",
  },
  {
    id: 8,
    title: "ClearStatement AI Converter",
    role: "Full-stack Developer | AI Integration",
    description: "Developed an AI-driven tool that extracts data from bank statements and converts it into structured Excel files. Implemented smart parsing and transaction classification.",
    tech: ["AI Integration", "Data Extraction", "Automation"],
    image: clearstatement,
    category: "AI/SaaS",
  },
  {
    id: 9,
    title: "Rental Management & Billing SaaS",
    role: "Full-stack Web & SaaS Developer",
    description: "Built a complete SaaS platform for rental property owners to manage tenants, automate billing, and track payments. Implemented recurring invoices and multi-tenant architecture.",
    tech: ["SaaS Development", "Payment System", "Multi-tenant"],
    image: rentalBilling,
    category: "SaaS",
  },
  {
    id: 10,
    title: "Elkua Global Billing Software",
    role: "Full-stack Developer",
    description: "Developed GST-compliant billing software with inventory management and CRM features. Built for businesses requiring professional invoicing and stock tracking.",
    tech: ["Billing System", "Inventory Management", "CRM"],
    image: elkuaBilling,
    category: "SaaS",
  },
];

const categories = ["All", "SaaS", "E-commerce", "Website", "AI/SaaS"];

export const WorkSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const projectsPerPage = 4;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(0);
  };

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-16 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="inline-block font-display text-sm tracking-widest text-primary mb-4">
            PORTFOLIO
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Featured <span className="gradient-text text-glow">Projects</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Real projects showcasing SaaS development, e-commerce solutions, and custom web applications
          </p>
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
              onClick={() => handleCategoryChange(category)}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {paginatedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
            >
              <motion.div
                className="glass-card glow-border rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group h-full"
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Preview with GIF */}
                <div className="relative aspect-video overflow-hidden bg-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <motion.div
                      className="glass-card glow-border px-6 py-3 rounded-full flex items-center gap-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">View Details</span>
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 md:top-4 right-3 md:right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 md:p-6 lg:p-8">
                  <span className="text-xs md:text-sm text-primary font-medium block mb-2">
                    {project.role}
                  </span>
                  <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground"
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

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-8 md:mt-12"
          >
            <motion.button
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="glass-card glow-border w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: currentPage === 0 ? 1 : 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </motion.button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentPage === i 
                      ? "bg-primary w-6 md:w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="glass-card glow-border w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: currentPage === totalPages - 1 ? 1 : 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};