import React from "react";
import { motion } from "motion/react";
import { Select } from "@base-ui-components/react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const exampleData = [
  "ChatGPT 4o",
  "ChatGPT 4o-mini",
  "ChatGPT 4-turbo",
  "ChatGPT o1",
  "ChatGPT o1-mini",
];

function generateLetters(value: string) {
  const letterCount = new Map<string, number>();
  return value.split("").map((letter) => {
    const count = letterCount.get(letter) || 0;
    const key = `${letter}-${count}`;
    letterCount.set(letter, count + 1);
    return { letter, key };
  });
}

function SelectModel() {
  return (
    <Select.Root defaultValue={exampleData[0]} alignItemToTrigger={false}>
      <Select.Trigger className="relative flex h-10 items-center justify-between gap-3 text-sm rounded-md pr-3 pl-3.5 select-none hover:bg-neutral-100 focus-visible:outline-none focus-visible:-outline-offset-1 active:bg-neutral-100 data-[popup-open]:bg-neutral-100">
        <Select.Value placeholder="Select Model">
          {(value) => (
            <>
              <span className="sr-only">{value}</span>
              {generateLetters(value).map(({ letter, key }) => (
                <motion.span
                  aria-hidden
                  key={key}
                  layoutId={key}
                  className="inline-block"
                  transition={{ type: "spring", bounce: 0.35 }}
                >
                  {letter.trim() || "\u00A0"}
                </motion.span>
              ))}
            </>
          )}
        </Select.Value>
        <Select.Icon className="flex">
          <ChevronDown className="size-4" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner className="outline-none" sideOffset={8}>
          <Select.Popup className="group origin-[var(--transform-origin)] rounded-md bg-white py-1 shadow-lg outline outline-neutral-200 transition-[transform,scale,opacity] data-[ending-style]:scale-100 data-[ending-style]:opacity-100 data-[ending-style]:transition-none data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none">
            {exampleData.map((item) => (
              <SelectItem value={item} key={item}>
                {item}
              </SelectItem>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<typeof Select.Item>) {
  return (
    <Select.Item
      className={cn(
        "grid min-w-[var(--anchor-width)] cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900",
        className
      )}
      {...props}
    >
      <Select.ItemIndicator className="col-start-1">
        <Check className="size-3" />
      </Select.ItemIndicator>
      <Select.ItemText className="col-start-2">{children}</Select.ItemText>
    </Select.Item>
  );
}

export { SelectModel };
