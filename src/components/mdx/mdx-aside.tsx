import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.ComponentProps<"aside"> {
  type: "note" | "caution" | "danger";
}

export function MDXAside({ className, type = "note", ...props }: Props) {
  return (
    <aside
      className={cn(
        "p-2 border border-neutral-200 rounded-md",
        {
          "bg-amber-50 border-amber-200 text-amber-800": type === "caution",
        },
        className
      )}
      {...props}
    ></aside>
  );
}
