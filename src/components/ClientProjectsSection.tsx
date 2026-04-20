import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import jewelsmuseShopify from "@/assets/projects/jewelsmuse-shopify.gif";
import zaashoShopify from "@/assets/projects/zaasho-shopify.gif";
import clearstatement from "@/assets/projects/clearstatement.gif";
import drivingSchool from "@/assets/projects/driving-school.gif";
import elkuaBilling from "@/assets/projects/elkua-billing.gif";
import jewelsmuseRental from "@/assets/projects/jewelsmuse-rental.gif";
import mjAdworks from "@/assets/projects/mj-adworks.gif";
import myflavFoods from "@/assets/projects/myflav-foods.gif";
import pdfTools from "@/assets/projects/pdf-tools.gif";
import rentalBilling from "@/assets/projects/rental-billing.gif";

// New Projects
import sarthadb from "@/assets/projects/sarthadb.gif";
import sbswp from "@/assets/projects/sbswp.gif";
import qorbcustom from "@/assets/projects/qorbcustom.gif";
import idrwp from "@/assets/projects/idrwp.gif";
import deshkojlisting from "@/assets/projects/deshkojlisting.gif";
import elkbillingsaas from "@/assets/projects/elkbillingsaas.gif";
import moacustom from "@/assets/projects/moacustom.gif";
import sarthalp from "@/assets/projects/sarthalp.gif";

export const projects = [
  { 
    image: sarthadb, 
    title: "Sartha DB", 
    description: "Comprehensive School SaaS platform designed for efficient school management and database tracking.",
    isRecent: true
  },
  { 
    image: sbswp, 
    title: "SBS Google Ads LP", 
    description: "High-converting, result-oriented WordPress landing page specifically optimized for SBS Google Ads campaigns.",
    isRecent: true
  },
  { 
    image: qorbcustom, 
    title: "QORB Custom", 
    description: "Tailor-made professional website for a creative web agency, featuring advanced design elements.",
    isRecent: true
  },
  { 
    image: idrwp, 
    title: "IDR Google Ads LP", 
    description: "Strategic, conversion-focused landing page built on WordPress for IDR's marketing initiatives.",
    isRecent: true
  },
  { 
    image: deshkojlisting, 
    title: "DeshKhoj Listing", 
    description: "A specialized custom web application built for business listings and directory services.",
    isRecent: true
  },
  { 
    image: elkbillingsaas, 
    title: "Elk Billing SaaS", 
    description: "GST-compliant cloud invoicing software built for rapid and accurate financial management.",
    isRecent: true
  },
  { 
    image: moacustom, 
    title: "MOA Custom LP", 
    description: "Custom-designed landing page optimized for high performance in Google Ads conversion tracking.",
    isRecent: true
  },
  { 
    image: sarthalp, 
    title: "Sartha SaaS LP", 
    description: "Premium landing page designed for a school-based SaaS product, focusing on lead generation.",
    isRecent: true
  },
  { 
    image: jewelsmuseShopify, 
    title: "JewelsMuse Shopify", 
    description: "A luxury jewelry store built on Shopify with a focus on high-end aesthetics and conversion." 
  },
  { 
    image: zaashoShopify, 
    title: "Zaasho Shopify", 
    description: "Modern fashion e-commerce platform with custom features and a clean, responsive design." 
  },
  { 
    image: clearstatement, 
    title: "ClearStatement", 
    description: "Financial tracking and statement analysis tool with intuitive data visualization." 
  },
  { 
    image: drivingSchool, 
    title: "Driving School System", 
    description: "Management system for driving schools, handling student registrations and scheduling." 
  },
  { 
    image: elkuaBilling, 
    title: "Elkua Billing", 
    description: "Cloud-based billing and invoicing solution for small to medium-sized businesses." 
  },
  { 
    image: jewelsmuseRental, 
    title: "JewelsMuse Rental", 
    description: "Specialized rental platform for luxury jewelry with integrated booking management." 
  },
  { 
    image: mjAdworks, 
    title: "MJ Adworks", 
    description: "Marketing and advertising portfolio showcasing multi-channel campaign results." 
  },
  { 
    image: myflavFoods, 
    title: "MyFlav Foods", 
    description: "Food delivery and ordering system with a vibrant UI and seamless checkout." 
  },
  { 
    image: pdfTools, 
    title: "PDF Tools", 
    description: "Utility application for PDF manipulation and conversion with rapid processing." 
  },
  { 
    image: rentalBilling, 
    title: "Rental Billing", 
    description: "Automated billing system for property and asset rental businesses." 
  },
];

export const ClientProjectsSection = () => {
  // Duplicate projects for seamless marquee
  const allProjects = [...projects, ...projects];

  return (
    <section id="work" className="py-24 bg-[#f8f8f8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-display text-center text-gray-900"
        >
          My Client Projects
        </motion.h2>
      </div>

      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap flex py-4">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex py-4">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 flex justify-center">
        <motion.a
          href="/works"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group flex items-center gap-2 px-10 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl"
        >
          See all works
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mx-4 w-[300px] md:w-[450px] flex-shrink-0 cursor-pointer group">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
            {project.isRecent && (
              <div className="absolute top-4 left-4 z-20 bg-primary text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                Recent Work
              </div>
            )}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
          <h3 className="mt-4 text-lg font-bold font-display text-gray-900 group-hover:text-primary transition-colors flex items-center gap-2">
            {project.title}
            {project.isRecent && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
          </h3>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] rounded-3xl overflow-hidden border-none p-0 bg-white">
        <div className="aspect-[16/10] w-full relative overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold font-display text-gray-900 mb-2">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};
