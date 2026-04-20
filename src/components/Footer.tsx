import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#F1EFF0] py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-md">
            <h2 className="text-2xl font-bold font-display text-gray-900">
              Portfolio
            </h2>
            <div className="mt-4 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group">
              <Mail className="w-4 h-4 text-[#fd7969]" />
              <a href="mailto:bizbyaravind@gmail.com" className="text-sm font-medium">bizbyaravind@gmail.com</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-8">
            <div className="flex items-center gap-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Home</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Services</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Contact</a>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/aravind-b-nair-135820196?" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center relative group"
                title="LinkedIn"
              >
                <div className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-br from-[#b062ff] via-[#fd7969] to-[#ffa858] mask-border">
                  <div className="bg-[#F1EFF0] w-full h-full rounded-full"></div>
                </div>
                <Linkedin className="w-4 h-4 text-gray-700 z-10 group-hover:text-[#fd7969] transition-colors" />
              </a>
              <a 
                href="mailto:bizbyaravind@gmail.com" 
                className="w-10 h-10 rounded-full flex items-center justify-center relative group"
                title="Email Me"
              >
                <div className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-br from-[#b062ff] via-[#fd7969] to-[#ffa858] mask-border">
                  <div className="bg-[#F1EFF0] w-full h-full rounded-full"></div>
                </div>
                <Mail className="w-4 h-4 text-gray-700 z-10 group-hover:text-[#fd7969] transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/bizbyaravind?igsh=ZWRja3U0bWJvdXNo" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center relative group"
              >
                <div className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-br from-[#b062ff] via-[#fd7969] to-[#ffa858] mask-border">
                  <div className="bg-[#F1EFF0] w-full h-full rounded-full"></div>
                </div>
                <Instagram className="w-4 h-4 text-gray-700 z-10 group-hover:text-[#fd7969] transition-colors" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
