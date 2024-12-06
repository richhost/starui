import { cn } from "@/lib/utils";
import React from "react";

interface FancyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function FancyButton({ className, ...props }: FancyButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer px-4 py-1 rounded-md bg-amber-500 font-medium text-white shadow-md shadow-black/15 ring-1 ring-amber-600/90 inset-shadow-xs inset-shadow-white/25 active:inset-shadow-white/90 transition inset-ring inset-ring-white/15",
        className
      )}
      {...props}
    />
  );
}

export { FancyButton };
