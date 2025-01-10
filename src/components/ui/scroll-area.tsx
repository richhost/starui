import React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui-components/react/scroll-area";
import { cn } from "@/lib/utils";

const ScrollArea = ({
  children,
  className,
  viewportClassName,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root> & {
  viewportClassName?: string;
}) => (
  <ScrollAreaPrimitive.Root
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className={cn("", viewportClassName)}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollBar orientation="horizontal" />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);

const ScrollBar = ({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) => (
  <ScrollAreaPrimitive.Scrollbar
    orientation={orientation}
    className={cn(
      "m-1 flex rounded bg-neutral-200 opacity-0 transition-opacity delay-300 [[data-hovering],[data-scrolling]]:opacity-100 [[data-hovering],[data-scrolling]]:delay-0 [[data-hovering],[data-scrolling]]:duration-75",
      orientation === "vertical" && "justify-center w-1 hover:w-2",
      orientation === "horizontal" && "items-center h-1 hover:h-2",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Thumb className="data-[orientation=vertical]:w-full data-[orientation='horizontal']:h-full rounded bg-neutral-400" />
  </ScrollAreaPrimitive.Scrollbar>
);

export { ScrollArea, ScrollBar };
