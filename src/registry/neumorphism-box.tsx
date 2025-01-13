import type React from "react";
import { cn } from "@/lib/utils";

function NeumorphismBox({
	className,
	children,
	...props
}: React.ComponentPropsWithRef<"div">) {
	return (
		<div
			className={cn(
				"relative bg-black/5 p-2 backdrop-blur-sm border border-black/10 rounded-sm inset-shadow-xs inset-shadow-white inset-ring-1 inset-ring-white/15",
				className,
			)}
			{...props}
		>
			<div className="absolute size-1 top-1 left-1 bg-black/20 rounded-full shadow-xs" />
			<div className="absolute size-1 bottom-1 left-1 bg-black/20 rounded-full shadow-xs" />
			<div className="absolute size-1 top-1 right-1 bg-black/20 rounded-full shadow-xs" />
			<div className="absolute size-1 bottom-1 right-1 bg-black/20 rounded-full shadow-xs" />
			{children}
		</div>
	);
}

export { NeumorphismBox };
