"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {}

function SpotlightCard({ className, ...props }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const pointerEventHandler = (e: React.PointerEvent<HTMLDivElement>) => {
    const firstChild = ref.current?.firstElementChild as HTMLDivElement;
    if (!ref.current || !firstChild) return;
    const rect = firstChild.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      className="contents"
      onPointerEnter={pointerEventHandler}
      onPointerMove={pointerEventHandler}
      style={{ "--x": 0, "--y": 0 } as React.CSSProperties}
    >
      <div
        {...props}
        className={cn("relative overflow-hidden group", className)}
      />
    </div>
  );
}

function Spotlight({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none group-hover:scale-100 scale-0 transition-transform absolute -translate-x-1/2 -translate-y-1/2 left-(--x) top-(--y) w-20 h-20 bg-radial-[circle_at_center] from-blue-400 to-transparent to-60%",
        className
      )}
    />
  );
}

export { SpotlightCard, Spotlight };
