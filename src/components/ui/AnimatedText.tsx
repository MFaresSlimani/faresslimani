
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

const AnimatedText = ({ text, className, once = true, delay = 0 }: AnimatedTextProps) => {
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true);
          }, delay);
          
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [once, delay]);

  return (
    <div ref={textRef} className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "transform transition-transform duration-700 ease-out",
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default AnimatedText;
