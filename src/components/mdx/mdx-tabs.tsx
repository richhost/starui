"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

interface TabsProps {
  items: string[];
  children?: React.ReactNode;
}

function Tabs({ items = ["Preview", "Code"], children }: TabsProps) {
  return (
    <TabsPrimitive.Root defaultValue={items[0]}>
      <TabsPrimitive.List className="flex items-center gap-4 font-medium mb-4">
        {items.map((item) => (
          <TabsPrimitive.Trigger
            key={item}
            value={item}
            className="border-b-2 border-transparent data-[state='active']:border-b-black"
          >
            {item}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {children}
    </TabsPrimitive.Root>
  );
}

function Tab(props: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content {...props} />;
}

export { Tabs, Tab };
