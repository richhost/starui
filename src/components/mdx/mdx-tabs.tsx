"use client";

import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";

interface TabsProps {
	items: string[];
	children?: React.ReactNode;
}

function Tabs({ items = ["Preview", "Code"], children }: TabsProps) {
	return (
		<TabsPrimitive.Root defaultValue={items[0]}>
			<TabsPrimitive.List className="relative z-0 flex items-center gap-4 font-medium mb-4">
				{items.map((item) => (
					<TabsPrimitive.Tab
						key={item}
						value={item}
						className="h-10 flex items-center justify-center px-2 text-sm data-selected:text-black"
					>
						{item}
					</TabsPrimitive.Tab>
				))}
				<TabsPrimitive.Indicator className="absolute -z-[1] top-1/2 left-0 h-8 w-[var(--active-tab-width)] -translate-y-1/2 translate-x-[var(--active-tab-left)] bg-neutral-200/60 rounded-sm transition-all" />
			</TabsPrimitive.List>
			{children}
		</TabsPrimitive.Root>
	);
}

function Tab(props: React.ComponentProps<typeof TabsPrimitive.Panel>) {
	return <TabsPrimitive.Panel {...props} />;
}

export { Tabs, Tab };
