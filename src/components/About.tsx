
import { cn } from "@/lib/utils";
import AnimatedText from "./ui/AnimatedText";
import { Briefcase, Cpu, GraduationCap, Languages, Layers, LineChart } from "lucide-react";

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  const infoCards = [
    {
      icon: <GraduationCap className="w-8 h-8 text-accent-blue" />,
      title: "PhD Student",
      description: "Researching AI technologies with focus on computer vision and deep learning",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-accent-blue" />,
      title: "Flutter Developer",
      description: "Building beautiful cross-platform mobile applications with Flutter",
    },
    {
      icon: <Languages className="w-8 h-8 text-accent-blue" />,
      title: "Multilingual",
      description: "Fluent in Arabic, English, German, French and basic Turkish",
    },
    {
      icon: <Cpu className="w-8 h-8 text-accent-blue" />,
      title: "Technical Educator",
      description: "Teaching programming and AI concepts to students of all levels",
    },
    {
      icon: <LineChart className="w-8 h-8 text-accent-blue" />,
      title: "Data Specialist",
      description: "Creating insightful data visualizations and analyses",
    },
    {
      icon: <Layers className="w-8 h-8 text-accent-blue" />,
      title: "System Engineer",
      description: "Designing and implementing complex software systems",
    },
  ];

  return (
    <section id="about" className={cn("section-padding bg-surface-1", className)}>
      <div className="container mx-auto">
        <AnimatedText text="About Me" className="section-title text-center" />
        <AnimatedText
          text="I combine academic research with practical development skills"
          className="section-subtitle text-center mx-auto"
          delay={200}
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <AnimatedText
            text="I'm a PhD student in Artificial Intelligence at M'Hamed Bougara University, focusing on computer vision and deep learning research. Alongside my academic work, I'm an experienced Flutter developer creating cross-platform mobile applications."
            className="text-lg text-text-secondary mb-6"
            delay={300}
          />
          <AnimatedText
            text="With a strong foundation in system engineering and programming, I bridge the gap between theoretical research and practical application development. I enjoy teaching and sharing my knowledge with others, particularly in programming fundamentals and AI concepts."
            className="text-lg text-text-secondary mb-6"
            delay={400}
          />
          <AnimatedText
            text="When I'm not coding or researching, I'm actively involved in community service through organizations like Kafil Al Yateem, providing computer science education to orphaned children."
            className="text-lg text-text-secondary"
            delay={500}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-lift"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-text-secondary">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
