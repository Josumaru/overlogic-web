import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./border-beam"; 

interface InteractiveShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const InteractiveShimmerButton = React.forwardRef<HTMLButtonElement, InteractiveShimmerButtonProps>(
  (
    { text = "Button", shimmerColor = "#ffffff", shimmerSize = "0.12em", shimmerDuration = "2s", primaryColor = "#316DF9", secondaryColor = "#31F9D4", className, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": "1.5rem",
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
            "--hover-bg": `linear-gradient(to right, ${secondaryColor}, ${primaryColor})`,
          } as React.CSSProperties
        }
        className={cn(
          "group relative h-14 w-72 cursor-pointer overflow-hidden rounded-3xl border border-white hover:border-primary bg-white text-center font-semibold text-lg dark:border-zinc-800 dark:bg-zinc-950",
          "[border-radius:var(--radius)] [background:var(--bg)] hover:[background:var(--hover-bg)]",
          className
        )}
        {...props}
      >
        {/* BorderBeam animation with white color and border animation */}
        <BorderBeam
          size={100} 
          duration={5} 
          borderWidth={3} 
          colorFrom="#ffffff" 
          colorTo="#ffffff" 
          delay={0} 
          className="absolute inset-0" 
        />

        {/* Button text */}
        <span className="inline-block translate-x-1 text-white transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute text-textTitleColor top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 dark:text-zinc-900">
          <span>{text}</span>
          <ArrowRight />
        </div>

        {/* Background circle animation */}
        <div className="absolute left-[20%] top-[40%] h-0 w-0 scale-[1] rounded-lg bg-background transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-background"></div>
      </button>
    );
  }
);

InteractiveShimmerButton.displayName = "InteractiveShimmerButton";

export default InteractiveShimmerButton;
