import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Mail, href: "#contact" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#home"
            className="font-display text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            PORTFOLIO
          </motion.a>

          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full glass-card glow-border flex items-center justify-center hover-glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-4 h-4 text-primary" />
              </motion.a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
