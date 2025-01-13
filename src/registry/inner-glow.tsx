import { cn } from "@/lib/utils";

interface InnerGlowProps extends React.HTMLAttributes<HTMLDivElement> {}

function InnerGlow({ className, ...props }: InnerGlowProps) {
	return (
		<div
			className={cn(
				"absolute -inset-3 border-10 pointer-events-none blur-md [border-image:conic-gradient(from_var(--hue-rotation)_in_hsl_longer_hue,var(--color-red-600),var(--color-red-600))_1] animate-inner-glow",
				className,
			)}
			{...props}
		/>
	);
}

export { InnerGlow };
