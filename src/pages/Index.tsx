import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientProjectsSection } from "@/components/ClientProjectsSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#F1EFF0] text-[#111] overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <Marquee />
        <ServicesSection />
        <ClientProjectsSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
