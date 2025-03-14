
import { cn } from "@/lib/utils";
import AnimatedText from "./ui/AnimatedText";
import Timeline, { TimelineItem } from "./ui/Timeline";

interface ExperienceProps {
  className?: string;
}

const Experience = ({ className }: ExperienceProps) => {
  const educationItems: TimelineItem[] = [
    {
      title: "PhD in Artificial Intelligence",
      subtitle: "M'Hamed Bougara University",
      date: "Feb 2025 - Present",
      description: "Researching computer vision and deep learning applications.",
      category: "education",
    },
    {
      title: "Master's in System Engineering & Web Technologies",
      subtitle: "Yahia Fares University of Medea",
      date: "Sep 2022 - Jul 2024",
      category: "education",
    },
    {
      title: "Bachelor's in Computer Science",
      subtitle: "Yahia Fares University of Medea",
      date: "Sep 2019 - Jul 2022",
      description: "Information Systems specialization",
      category: "education",
    },
  ];

  const experienceItems: TimelineItem[] = [
    {
      title: "Adjunct Teacher - Operating Systems 2",
      subtitle: "University of Medea",
      date: "Sep 2024 - Present",
      bullets: [
        "Conducted theoretical sessions on Operating Systems",
        "Designed and supervised hands-on C++ practical sessions",
      ],
      category: "experience",
    },
    {
      title: "Programming Teacher",
      subtitle: "Private Schools",
      date: "Feb 2022 - Present",
      bullets: [
        "AI teacher at Benyan Tech",
        "Programming Fundamentals at CTL School",
        "Computer science for juniors at Kafil Al Yateem",
      ],
      category: "experience",
    },
    {
      title: "Flutter Developer",
      subtitle: "Freelance",
      date: "Apr 2022 - Present",
      bullets: [
        "Designed and developed cross-platform mobile applications",
        "Implemented state management and back-end integration",
      ],
      category: "experience",
    },
    {
      title: "CEO & Co-Founder",
      subtitle: "CRAFTY",
      date: "Nov 2022 - Present",
      bullets: [
        "Managed a service-providing platform using Flutter and Firebase",
        "Handled technical aspects and user engagement",
      ],
      category: "experience",
    },
  ];

  const certificationItems: TimelineItem[] = [
    {
      title: "Algerian Sign Language Representation Using 3D Avatar Technology",
      subtitle: "Research Presentation",
      date: "Dec 2024",
      description: "Presented at Nafath Majlis 2024 by MADA, Qatar",
      category: "other",
    },
    {
      title: "Fundamentals of Deep Learning",
      subtitle: "NVIDIA Certification",
      date: "Oct 2022",
      category: "other",
    },
    {
      title: "German B1 Proficiency",
      subtitle: "Goethe Zertificat B1",
      date: "Feb 2023",
      category: "other",
    },
    {
      title: "Implementing QoS for IPv6 and Network Automation",
      subtitle: "ICT Towers Certification",
      date: "Sept 2018",
      category: "other",
    },
  ];

  return (
    <section id="experience" className={cn("section-padding bg-surface-2", className)}>
      <div className="container mx-auto">
        <AnimatedText text="Experience & Education" className="section-title text-center" />
        <AnimatedText
          text="My academic and professional journey"
          className="section-subtitle text-center mx-auto"
          delay={200}
        />

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-10 flex items-center">
            <span className="w-3 h-3 bg-accent-indigo rounded-full mr-2"></span>
            Education
          </h3>
          <Timeline items={educationItems} className="mb-20" />

          <h3 className="text-2xl font-semibold mb-10 flex items-center">
            <span className="w-3 h-3 bg-accent-blue rounded-full mr-2"></span>
            Work Experience
          </h3>
          <Timeline items={experienceItems} className="mb-20" />

          <h3 className="text-2xl font-semibold mb-10 flex items-center">
            <span className="w-3 h-3 bg-accent-teal rounded-full mr-2"></span>
            Certifications & Achievements
          </h3>
          <Timeline items={certificationItems} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
