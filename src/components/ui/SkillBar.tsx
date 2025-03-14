
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  color?: string;
  className?: string;
}

const SkillBar = ({ name, level, color = "bg-accent-blue", className }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(level);
          }, 100);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);

  return (
    <div className={cn("mb-4", className)} ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="text-text-primary font-medium">{name}</span>
        <span className="text-text-secondary text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
