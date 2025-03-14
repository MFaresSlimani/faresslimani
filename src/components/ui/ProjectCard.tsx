
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  className?: string;
  category?: "ai" | "flutter" | "other";
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  github,
  demo,
  className,
  category = "other",
}: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const categoryColors = {
    ai: "bg-accent-indigo",
    flutter: "bg-accent-blue",
    other: "bg-accent-teal",
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card overflow-hidden hover-lift",
        "opacity-0 translate-y-4 transition-all duration-700",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className={`text-xs px-2 py-1 rounded-full text-white ${categoryColors[category]}`}>
            {category === "ai" ? "AI" : category === "flutter" ? "Flutter" : "Other"}
          </div>
        </div>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-surface-2 text-text-secondary px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-blue transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={20} />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-blue transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
