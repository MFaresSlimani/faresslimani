
import { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "./ui/AnimatedText";
import ProjectCard from "./ui/ProjectCard";

interface ProjectsProps {
  className?: string;
}

const Projects = ({ className }: ProjectsProps) => {
  const [activeFilter, setActiveFilter] = useState<"all" | "ai" | "flutter">("all");

  const projects = [
    {
      title: "BNG Optica",
      description: "Optical glasses selling app built with Flutter and Firebase",
      tags: ["Flutter", "Firebase", "E-commerce"],
      image: "/placeholder.svg",
      category: "flutter",
    },
    {
      title: "SOS Learning",
      description: "Educational platform for medicine students with interactive lessons",
      tags: ["Flutter", "Education", "Medicine"],
      image: "/placeholder.svg",
      category: "flutter",
    },
    {
      title: "CRAFTY",
      description: "Service provider platform connecting customers with skilled professionals",
      tags: ["Flutter", "Firebase", "Web", "Mobile"],
      image: "/placeholder.svg",
      category: "flutter",
    },
    {
      title: "Printzilla",
      description: "Mobile app for generating and printing receipts using thermal printers",
      tags: ["Flutter", "Hardware Integration", "Bluetooth"],
      image: "/placeholder.svg",
      category: "flutter",
    },
    {
      title: "Locky",
      description: "Mobile door lock control system with web interface",
      tags: ["Flutter", "IoT", "Web", "Security"],
      image: "/placeholder.svg",
      category: "flutter",
    },
    {
      title: "Algerian Sign Language 3D Avatar",
      description: "Research on 3D representation of Algerian sign language",
      tags: ["Computer Vision", "3D Modeling", "Accessibility"],
      image: "/placeholder.svg",
      category: "ai",
    },
    {
      title: "TensorFlow Neural Networks",
      description: "Deep learning models for image classification and object detection",
      tags: ["TensorFlow", "Deep Learning", "Computer Vision"],
      image: "/placeholder.svg",
      category: "ai",
    },
    {
      title: "NLP Text Analysis",
      description: "Natural language processing tools for text analysis and classification",
      tags: ["NLP", "Python", "NLTK"],
      image: "/placeholder.svg",
      category: "ai",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={cn("section-padding bg-surface-1", className)}>
      <div className="container mx-auto">
        <AnimatedText text="My Projects" className="section-title text-center" />
        <AnimatedText
          text="Selected works showcasing my skills and expertise"
          className="section-subtitle text-center mx-auto"
          delay={200}
        />

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-surface-2 rounded-lg">
            <button
              onClick={() => setActiveFilter("all")}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                activeFilter === "all"
                  ? "bg-white shadow-sm text-accent-blue"
                  : "text-text-secondary hover:bg-white/50"
              )}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("ai")}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                activeFilter === "ai"
                  ? "bg-white shadow-sm text-accent-indigo"
                  : "text-text-secondary hover:bg-white/50"
              )}
            >
              AI Research
            </button>
            <button
              onClick={() => setActiveFilter("flutter")}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                activeFilter === "flutter"
                  ? "bg-white shadow-sm text-accent-blue"
                  : "text-text-secondary hover:bg-white/50"
              )}
            >
              Flutter Apps
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              category={project.category as "ai" | "flutter" | "other"}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
