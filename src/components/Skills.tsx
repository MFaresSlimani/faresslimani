
import { cn } from "@/lib/utils";
import AnimatedText from "./ui/AnimatedText";
import SkillBar from "./ui/SkillBar";

interface SkillsProps {
  className?: string;
}

const Skills = ({ className }: SkillsProps) => {
  const aiSkills = [
    { name: "TensorFlow", level: 90 },
    { name: "Computer Vision", level: 85 },
    { name: "Deep Learning", level: 88 },
    { name: "NLP", level: 75 },
    { name: "Data Visualization", level: 80 },
    { name: "sklearn", level: 92 },
  ];

  const mobileSkills = [
    { name: "Flutter/Dart", level: 95 },
    { name: "Firebase", level: 85 },
    { name: "State Management", level: 90 },
    { name: "UI/UX Design", level: 88 },
    { name: "App Architecture", level: 83 },
    { name: "Cross-platform Development", level: 92 },
  ];

  const otherSkills = [
    { name: "Python", level: 90 },
    { name: "C++", level: 80 },
    { name: "Java", level: 75 },
    { name: "Linux System", level: 78 },
    { name: "Git & Version Control", level: 85 },
    { name: "LaTeX", level: 92 },
  ];

  return (
    <section id="skills" className={cn("section-padding bg-surface-2", className)}>
      <div className="container mx-auto">
        <AnimatedText text="My Skills" className="section-title text-center" />
        <AnimatedText
          text="Expertise across research, development, and technical domains"
          className="section-subtitle text-center mx-auto"
          delay={200}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-accent-indigo rounded-full mr-2"></span>
              AI & Research
            </h3>
            <div className="space-y-6">
              {aiSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color="bg-accent-indigo"
                  className="delay-100"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-accent-blue rounded-full mr-2"></span>
              Mobile Development
            </h3>
            <div className="space-y-6">
              {mobileSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color="bg-accent-blue"
                  className="delay-200"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-accent-teal rounded-full mr-2"></span>
              Other Technical Skills
            </h3>
            <div className="space-y-6">
              {otherSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color="bg-accent-teal"
                  className="delay-300"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Arabic</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 ml-1 rounded-full bg-accent-blue"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>English</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 ml-1 rounded-full ${
                        i < 5 ? "bg-accent-blue" : "bg-surface-3"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>German</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 ml-1 rounded-full ${
                        i < 3 ? "bg-accent-blue" : "bg-surface-3"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>French</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 ml-1 rounded-full ${
                        i < 4 ? "bg-accent-blue" : "bg-surface-3"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Turkish</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 ml-1 rounded-full ${
                        i < 1 ? "bg-accent-blue" : "bg-surface-3"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Office & Design Skills</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-accent-blue mr-2">•</span>
                <span>MS Office Suite (Word, Excel, PowerPoint)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-blue mr-2">•</span>
                <span>Adobe Illustrator for graphic design</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-blue mr-2">•</span>
                <span>LaTeX for academic writing</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-blue mr-2">•</span>
                <span>Data visualization tools (matplotlib, seaborn)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-blue mr-2">•</span>
                <span>Infographic design for presentations</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-blue mr-2">•</span>
                <span>Google Workspace applications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
