import React, { useMemo, useState } from "react";
import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface TextDispersionProps {
  className?: string;
  text: string;
  overlay?: boolean;
}

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function getX(index: number, length: number) {
  const specialValues = {
    0: -0.5,
    [length - 1]: 0.5,
    1: -0.2,
    [length - 2]: 0.2,
  };

  return specialValues[index] !== undefined
    ? specialValues[index]
    : getRandom(-0.1, 0.1);
}
const variants: Variants = {
  enter: ({ index, length }: { index: number; length: number }) => ({
    x: getX(index, length) + "em",
    y: getRandom(-0.5, 0.5) + "em",
    rotateZ: getRandom(-20, 20) + "deg",
    zIndex: 20,
  }),
  leave: {
    x: 0,
    y: 0,
    rotate: 0,
  },
};

function TextDispersion({
  className,
  text = "",
  overlay = false,
}: TextDispersionProps) {
  const letters = useMemo(() => text.split(""), [text]);

  const [enter, setEnter] = useState(false);

  return (
    <>
      <div
        className={cn("cursor-pointer", className)}
        onPointerEnter={() => setEnter(true)}
        onPointerLeave={() => setEnter(false)}
      >
        <span className="sr-only">{text}</span>
        {letters.map((letter, index) => (
          <motion.span
            className="inline-block relative"
            key={`${letter}-${index}`}
            aria-hidden
            custom={{ index, length: letters.length }}
            variants={variants}
            animate={enter ? "enter" : "leave"}
            transition={{
              duration: 0.5,
              ease: [0.455, 0.03, 0.515, 0.955],
            }}
          >
            {letter.trim() || "\u00A0"}
          </motion.span>
        ))}
      </div>
      {overlay && (
        <motion.div
          className="absolute inset-0 pointer-events-none bg-black/60"
          animate={{
            opacity: enter ? 1 : 0,
          }}
        />
      )}
    </>
  );
}

export { TextDispersion, type TextDispersionProps };
