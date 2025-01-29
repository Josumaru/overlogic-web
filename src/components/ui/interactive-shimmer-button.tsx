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
            "--radius": "20rem",
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
            "--hover-bg": `linear-gradient(to right, ${secondaryColor}, ${primaryColor})`,
          } as React.CSSProperties
        }
        className={cn(
          "group relative md:h-14 h-12 md:w-72 w-40 cursor-pointer overflow-hidden rounded-full border border-background hover:border-primary bg-background text-center font-semibold md:text-lg text-sm",
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
          colorFrom="hsl(var(--background))"
          colorTo="hsl(var(--background))"
          delay={0} 
          className="absolute inset-0" 
        />

        {/* Button text */}
        <span className="inline-block translate-x-1 text-background group-hover:text-background transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight />
        </div>

        {/* Background circle animation */}
        <div className="absolute left-[20%] top-[40%] h-0 w-0 scale-[1] rounded-full bg-background transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-background"></div>
      </button>
    );
  }
);

InteractiveShimmerButton.displayName = "InteractiveShimmerButton";

export default InteractiveShimmerButton;
