import { cn } from "@/lib/utils";
import React from "react";

interface FancyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function FancyButton({ className, children, ...props }: FancyButtonProps) {
  return (
    <button
      className={cn(
        "group px-4 py-1 rounded-lg font-medium bg-linear-to-b from-neutral-700 to-neutral-800 text-neutral-50 shadow-md shadow-black/15 border border-neutral-900 inset-shadow-[0_1px_0px_0px] inset-shadow-white/60 active:inset-shadow-none transition",
        className
      )}
      {...props}
    >
      <span className="block transform-3d group-active:translate-y-px">
        {children}
      </span>
    </button>
  );
}

export { FancyButton };
