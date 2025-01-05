import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(({ text = "Show Case", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn("group relative md:h-14 h-12 md:w-72 w-40 cursor-pointer overflow-hidden rounded-3xl border border-primary hover:border-white bg-white p-2 text-center font-semibold md:text-lg text-sm", className)}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">{text}</span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-zinc-50 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 dark:text-zinc-900">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-0 w-0 scale-[1] rounded-lg bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-gradient-to-r group-hover:from-primary  group-hover:to-secondary dark:bg-gradient-to-r dark:from-primary dark:to-secondary"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
