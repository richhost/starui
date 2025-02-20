"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Code, Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";

const data = [
  {
    id: "one",
    icon: <Sparkles className="size-5 text-neutral-400" />,
    title: "What is Star UI?",
    content:
      "Star UI is a powerful React animation component library that allows you to create smooth, interactive animations with minimal code. It provides a simple API for creating complex animations and transitions.",
  },
  {
    id: "two",
    icon: <Code className="size-5 text-neutral-500" />,
    title: "How do I get started?",
    content: `Head to the “Quick start” guide in the docs. If you’ve used unstyled libraries before, you’ll feel at home.`,
  },
  {
    id: "three",
    icon: <Heart className="size-5 text-neutral-500" />,
    title: "Can I use it for my project?",
    content: "Of course! Star UI is free and open source.",
  },
];

function FAQSpring() {
  const [value, setValue] = useState("");
  const currentIndex = useMemo(() => {
    return data.findIndex((item) => item.id === value);
  }, [value]);

  const getRadius = (id: string, index: number) => {
    const dataLength = data.length;
    const radius = "--radius-lg";
    const isStart = index === 0;
    const isEnd = index === dataLength - 1;
    const isExpended = id === value;
    const isPrev = index === currentIndex - 1;
    const isNext = index === currentIndex + 1;

    if (!value) {
      if (isStart) return `var(${radius}) var(${radius}) 0 0`;
      if (isEnd) return `0 0 var(${radius}) var(${radius})`;
      return "0 0 0 0";
    } else {
      if (isExpended || (isPrev && isStart) || (isNext && isEnd)) {
        return `var(${radius})`;
      }
      if (isNext) return `var(${radius}) var(${radius}) 0 0`;
      if (isPrev) return `0 0 var(${radius}) var(${radius}`;
    }
  };

  const getMargin = (id: string, index: number) => {
    const dataLength = data.length;
    const isExpended = id === value;
    const isStart = index === 0;
    const isEnd = index === dataLength - 1;
    const margin = "calc(var(--spacing) * 5)";
    if (isExpended && isEnd) {
      return `${margin} 0`;
    }
    if (isExpended && isStart) {
      return `0 ${margin}`;
    }
    if (isExpended && !isStart && !isEnd) {
      return margin;
    }
  };

  return (
    <div className="max-w-sm w-full">
      {data.map((item, index) => (
        <motion.div
          initial={false}
          key={item.id}
          className={cn(
            "bg-white border-x border-neutral-200 overflow-hidden transition",
            {
              "border-t":
                index === 0 || value === item.id || currentIndex + 1 === index,
              "border-b":
                index === data.length - 1 ||
                value === item.id ||
                currentIndex - 1 === index,
            }
          )}
          animate={{
            borderRadius: getRadius(item.id, index),
            marginBlock: getMargin(item.id, index),
          }}
          transition={{
            type: "spring",
          }}
        >
          <h3>
            <button
              onClick={() => {
                setValue(value === item.id ? "" : item.id);
              }}
              className="font-medium cursor-pointer px-3 py-2 w-full flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.title}
              </div>
              <ChevronDown
                className={cn("size-4 transition-transform", {
                  "rotate-180": value === item.id,
                })}
              />
            </button>
          </h3>

          <AnimatePresence>
            {value === item.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm"
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
              >
                <p className="pb-3 px-3">{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export { FAQSpring };
