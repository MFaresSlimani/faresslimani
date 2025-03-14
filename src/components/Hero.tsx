
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className={cn(
        "min-h-screen flex flex-col justify-center relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-radial from-surface-1 to-surface-2 z-[-1]" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent-indigo/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div
              className={cn(
                "transform transition-all duration-700 delay-300",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              <p className="text-accent-blue mb-2">Hello, I'm</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <AnimatedText
                text="Mohamed El Fares Slimani"
                delay={400}
                className="mb-2"
              />
              <AnimatedText
                text="AI Researcher & Flutter Developer"
                delay={600}
                className="text-text-secondary text-2xl md:text-3xl font-normal"
              />
            </h1>
            
            <div
              className={cn(
                "transform transition-all duration-700 delay-800",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              <p className="text-text-secondary text-lg mb-6 max-w-xl">
                PhD Student in Artificial Intelligence with expertise in computer vision and 
                machine learning. Experienced Flutter developer crafting beautiful mobile experiences.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors"
                >
                  Get in touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 bg-surface-2 text-text-primary rounded-lg hover:bg-surface-3 transition-colors"
                >
                  View projects
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
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/faresslimani01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-blue transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:faresslimani0@gmail.com"
                  className="text-text-secondary hover:text-accent-blue transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              className={cn(
                "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition-all duration-700",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              <img
                src="/lovable-uploads/e27f2940-b20d-460e-8b57-d906514a386d.png"
                alt="Mohamed El Fares Slimani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-secondary hover:text-accent-blue transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
