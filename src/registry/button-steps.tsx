import { cn } from "@/lib/utils";
import React from "react";

interface ButtonStepsProps extends React.ComponentPropsWithRef<"button"> {
  steps?: number;
}

function ButtonSteps({
  className,
  children,
  steps = 4,
  ...props
}: ButtonStepsProps) {
  return (
    <button
      className={cn(
        "relative group active:scale-95 transition-transform",
        className
      )}
      {...props}
    >
      <span className="z-10 relative">{children}</span>
      <span
        className="absolute bg-inherit scale-100 group-focus-within:scale-[1.02] group-hover:scale-[1.02] transition-transform ease-in-out pointer-events-none inset-0 flex justify-evenly rounded-[inherit] border-inherit"
        aria-hidden
      >
        {Array.from({ length: steps }, (_, i) => i).map((i) => (
          <span
            className="w-full opacity-0 bg-white/70 group-hover:animate-button-step group-focus-within:animate-button-step"
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
            key={i}
          />
        ))}
      </span>
    </button>
  );
}

export { ButtonSteps, type ButtonStepsProps };
