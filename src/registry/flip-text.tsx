"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";
import { cn } from "@/lib/utils";

interface FlipTextProps {
  words: string[];
  delay?: number;
  className?: string;
}

export default function FlipText({
  words,
  delay = 3000,
  className,
}: FlipTextProps) {
  const [index, setIndex] = useState(0);

  const max = useMemo(
    () => Math.max(...words.map((word) => word.length)),
    [words]
  );

  const letters = useMemo(() => words[index].split(""), [index]);

  const [ref, { width }] = useMeasure();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % words.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      aria-hidden={true}
      className={cn(
        "inline-block overflow-hidden relative text-nowrap",
        className
      )}
      animate={{ width: width ? width : undefined }}
      transition={{ duration: 0.3 }}
    >
      <span
        ref={ref}
        className="inline-block opacity-0 pointer-events-none absolute"
      >
        {words[index]}
      </span>

      {Array.from({ length: max }).map((_, i) => {
        return (
          <AnimatePresence key={i} mode="wait" initial={false}>
            <motion.span
              key={`${words[index]}-${i}`}
              initial={{ rotateY: "-0.25turn" }}
              animate={{ rotateY: "0turn" }}
              exit={{ rotateY: "0.25turn" }}
              className="inline-block"
              transition={{
                type: "tween",
                delay: 0.1 + i * 0.01,
                duration: 0.1,
              }}
              aria-hidden
            >
              {letters[i] === " " ? "\u00A0" : letters[i]}
            </motion.span>
          </AnimatePresence>
        );
      })}
    </motion.span>
  );
}
