
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  bullets?: string[];
  icon?: React.ReactNode;
  category?: "education" | "experience" | "other";
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-surface-3 transform md:-translate-x-1/2"></div>

      {/* Items */}
      <div className="relative">
        {items.map((item, index) => (
          <TimelineEntry
            key={`${item.title}-${index}`}
            item={item}
            index={index}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

interface TimelineEntryProps {
  item: TimelineItem;
  index: number;
  isLast: boolean;
}

const TimelineEntry = ({ item, index, isLast }: TimelineEntryProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const entryRef = useRef<HTMLDivElement>(null);

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

    if (entryRef.current) {
      observer.observe(entryRef.current);
    }

    return () => {
      if (entryRef.current) {
        observer.unobserve(entryRef.current);
      }
    };
  }, []);

  const categoryColors = {
    education: "bg-accent-indigo",
    experience: "bg-accent-blue",
    other: "bg-accent-teal",
  };

  return (
    <div
      ref={entryRef}
      className={cn(
        "flex flex-col md:flex-row md:even:flex-row-reverse items-start md:items-center gap-8 mb-12",
        "opacity-0 translate-y-4 transition-all duration-700",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      {/* Dot */}
      <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full border-4 border-surface-1 bg-accent-blue transform md:-translate-x-1/2 z-10"></div>

      {/* Date (mobile only) */}
      <div className="ml-8 md:hidden text-sm text-text-tertiary">{item.date}</div>

      {/* Content */}
      <div className="flex-1 ml-8 md:ml-0 md:px-6">
        <div className="glass-card p-6">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="hidden md:block text-sm text-text-tertiary">{item.date}</div>
          </div>
          <div
            className={`text-sm px-2 py-1 rounded-full text-white inline-block mb-2 ${
              categoryColors[item.category || "other"]
            }`}
          >
            {item.subtitle}
          </div>
          {item.description && <p className="text-text-secondary mb-3">{item.description}</p>}
          {item.bullets && item.bullets.length > 0 && (
            <ul className="text-text-secondary space-y-1">
              {item.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-accent-blue">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
