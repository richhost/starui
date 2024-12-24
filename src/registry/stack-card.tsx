import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StackCard extends React.ComponentPropsWithRef<"div"> {
  cards: React.ReactNode[];
}

function StackCard({ cards, className, ...props }: StackCard) {
  const [current, setCurrent] = useState(0);

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <div className="relative">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={false}
            className={cn(
              index > 0 && "absolute bottom-0 left-0 w-full",
              current < index && "pointer-events-none"
            )}
            animate={{
              opacity: index <= current ? 1 : 0,
              y: (index - current) * 28,
              scale: 1 + (index - current) * 0.08,
            }}
          >
            {card}
          </motion.div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-5">
        <button
          className="bg-neutral-950 text-white rounded-full p-2 disabled:bg-neutral-400 disabled:cursor-not-allowed active:scale-90 transition-transform disabled:active:scale-100"
          disabled={current === 0}
          onClick={() => setCurrent((prev) => prev - 1)}
        >
          <ArrowLeft size={20} />
        </button>
        <button
          className="bg-neutral-950 text-white rounded-full p-2 disabled:bg-neutral-400 disabled:cursor-not-allowed active:scale-90 transition-transform disabled:active:scale-100"
          disabled={current === cards.length - 1}
          onClick={() => setCurrent((prev) => prev + 1)}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export { StackCard };
