import { cn } from "@/lib/utils";
import React from "react";

function Root({ className, ...props }: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn(
        "grid [grid-template-areas:'stack'] justify-items-center",
        className
      )}
      {...props}
    />
  );
}

function Card({
  className,
  innerClassName,
  index,
  gapX = 8,
  gapY = 6,
  children,
}: {
  className?: string;
  innerClassName?: string;
  x?: number;
  y?: number;
  index: number;
  gapX?: number;
  gapY?: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={
        {
          "--x": `calc(var(--spacing) * ${index * gapX})`,
          "--y": `calc(var(--spacing) * ${index * gapY})`,
        } as React.CSSProperties
      }
      className={cn(
        "group [grid-area:stack] translate-x-(--x) translate-y-(--y)",
        className
      )}
    >
      <div
        className={cn(
          "group-hover:-translate-y-12 transition duration-500 ease-in-out border-2 border-black/5 rounded-md -skew-y-6 bg-white/10 backdrop-blur-sm relative after:absolute after:-inset-0.5 after:bg-linear-to-r after:from-transparent after:to-white after:pointer-events-none",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

export const LightWeightCards = {
  Root,
  Card,
};
