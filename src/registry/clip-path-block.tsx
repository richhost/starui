"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

function ClipPathBlock({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const motionY = useMotionValue(100);
  const springY = useSpring(motionY, {
    stiffness: 1000,
    damping: 50,
    mass: 1,
  });
  const motionClipPath = useMotionTemplate`inset(${springY}% 0 0 0)`;
  const top = useMotionTemplate`${springY}%`;

  const moveHandler = useCallback((e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = Math.max(
      0,
      Math.min(100, ((e.clientY - rect.top) / rect.height) * 100)
    );
    motionY.set(y);
  }, []);

  const resetHandler = useCallback(() => {
    motionY.set(50);
  }, []);

  return (
    <motion.div
      className={cn(
        "relative text-4xl font-bold max-w-sm p-10 flex items-center justify-center border border-neutral-200 bg-white",
        className
      )}
      onPointerEnter={moveHandler}
      onPointerMove={moveHandler}
      onPointerLeave={resetHandler}
      onViewportEnter={() => motionY.set(50)}
      viewport={{ once: true }}
    >
      <div className="absolute -top-px -left-px size-4 border-t border-l border-green-500" />
      <div className="absolute -top-px -right-px size-4 border-t border-r border-green-500" />
      <div className="absolute -bottom-px -left-px size-4 border-b border-l border-green-500" />
      <div className="absolute -bottom-px -right-px size-4 border-b border-r border-green-500" />

      <motion.div
        className="absolute inset-0 bg-linear-to-b/oklch from-green-300 to-green-50"
        style={{
          clipPath: motionClipPath,
        }}
      />

      <motion.div
        className="h-0.5 absolute left-0 right-0 -translate-y-1/2 bg-green-500"
        style={{ top }}
      />

      <h3>{text}</h3>
      <motion.div
        className="absolute inset-0 p-10 flex items-center justify-center select-none pointer-events-none text-white [text-shadow:_-1px_-1px_0_var(--color-green-600),_-1px_1px_0_var(--color-green-600),_1px_-1px_0_var(--color-green-600),_1px_1px_0_var(--color-green-600)]"
        aria-hidden
        style={{
          clipPath: motionClipPath,
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}

export { ClipPathBlock };
