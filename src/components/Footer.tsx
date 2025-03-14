
import { cn } from "@/lib/utils";
import { Github, Heart, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("py-12 bg-surface-2 border-t border-surface-3", className)}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-semibold tracking-tight mb-2">
              Mohamed<span className="text-accent-blue">.</span>
            </div>
            <p className="text-text-secondary">
              PhD Student & Flutter Developer
            </p>
          </div>

          <div className="flex gap-6 mb-6 md:mb-0">
            <a
              href="#about"
              className="text-text-secondary hover:text-accent-blue transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-text-secondary hover:text-accent-blue transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-text-secondary hover:text-accent-blue transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-text-secondary hover:text-accent-blue transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-text-secondary hover:text-accent-blue transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/faresS69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-blue transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/faresslimani01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-blue transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:faresslimani0@gmail.com"
              className="text-text-secondary hover:text-accent-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-surface-3 mt-8 pt-8 text-center">
          <p className="text-text-tertiary flex items-center justify-center">
            © {currentYear} Mohamed El Fares Slimani. All rights reserved.
          </p>
          <p className="text-text-tertiary text-sm mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="inline mx-1 text-accent-blue" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
