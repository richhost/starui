import type React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	src: string;
}

export function Iframe({ className, src }: Props) {
	return (
		<div
			className={cn(
				"w-full not-prose h-[400px] rounded-xl p-1 border-neutral-200 relative border not-prose",
				className,
			)}
		>
			<iframe
				title="example"
				src={src}
				className="w-full h-full absolute inset-0 p-1"
			/>
		</div>
	);
}
