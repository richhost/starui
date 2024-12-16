"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function CanvasLike({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={cn(
        "overflow-hidden flex items-center justify-center",
        className
      )}
      ref={containerRef}
      {...props}
    >
      <div>
        <CanvasLikeCanvas containerRef={containerRef}>
          {children}
        </CanvasLikeCanvas>
      </div>
    </div>
  );
}

function CanvasLikeCanvas({
  className,
  width = 3000,
  height = 3000,
  children,
  containerRef,
}: {
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragMomentum={false}
      className={cn(
        "touch-none select-none cursor-grab relative overflow-hidden will-change-transform",
        className
      )}
      style={{ width, height }}
    >
      {children}
    </motion.div>
  );
}

function CanvasCard({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      drag
      dragElastic={false}
      dragPropagation={false}
      dragMomentum={false}
      className={cn(
        "touch-none select-none cursor-grab hover:shadow-lg active:shadow-lg shadow-none transition-shadow",
        className
      )}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ rotate: -6 }}
    >
      <div className="pointer-events-none">{children}</div>
    </motion.div>
  );
}

export { CanvasLike, CanvasCard };
