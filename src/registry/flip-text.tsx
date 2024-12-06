"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";

interface FlipTextProps {
  words: string[];
  duration?: number;
}

export default function FlipText({ words, duration = 3000 }: FlipTextProps) {
  const [index, setIndex] = useState(0);

  let max = useMemo(
    () => Math.max(...words.map((word) => word.length)),
    [words],
  );

  const letters = useMemo(() => words[index].split(""), [index]);

  const [ref, { width }] = useMeasure();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="flex flex-col">
      <h3 className="text-2xl lg:text-7xl font-semibold flex">
        <motion.span
          aria-hidden={true}
          className="inline-block overflow-hidden relative text-nowrap"
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
                >
                  {letters[i] === " " ? "\u00A0" : letters[i]}
                </motion.span>
              </AnimatePresence>
            );
          })}
        </motion.span>

        <span>{"\u00A0"}Design</span>
      </h3>
    </div>
  );
}
