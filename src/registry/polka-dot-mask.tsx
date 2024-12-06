import React from "react";
import { cn } from "@/lib/utils";

interface PolkaDotMaskProps {
  dotSize?: number;
  gapSize?: number;
  color?: string;
  className?: string;
}

function PolkaDotMask({
  dotSize = 1,
  gapSize = 4,
  color,
  className,
}: PolkaDotMaskProps) {
  return (
    <div
      aria-hidden
      style={
        {
          "--dot-size": `${dotSize}px`,
          "--gap-size": `${gapSize}px`,
          "--color": color,
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-0 [background-size:var(--gap-size)_var(--gap-size)] [background-image:radial-gradient(transparent_var(--dot-size),var(--color,#fff)_var(--dot-size))]",
        className
      )}
    ></div>
  );
}

export { PolkaDotMask };
