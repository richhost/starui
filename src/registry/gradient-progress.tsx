"use client";

import { useMemo } from "react";
import useMeasure from "react-use-measure";
import { scale } from "chroma-js";

interface GradientProgressProps {
	gap?: number;
	size?: number;
	height?: number;
	/** any valid CSS color */
	startColor?: string;
	/** any valid CSS color */
	endColor?: string;
	percent?: number;
}

function GradientProgress({
	gap = 4,
	size = 4,
	height = 16,
	startColor = "oklch(0.705 0.213 47.604)",
	endColor = "oklch(0.723 0.219 149.579)",
	percent = 0,
}: GradientProgressProps) {
	const [ref, { width }] = useMeasure();

	const counts = useMemo(() => {
		if (!width) return 0;
		return Math.floor(width / (gap + size));
	}, [width, gap, size]);

	const highlightIndex = useMemo(() => {
		if (!counts) return 0;
		const highlightCount = Math.floor((counts * percent) / 100);
		return Math.min(highlightCount, counts);
	}, [counts, percent]);

	// Create color interpolator using chroma.js
	const colorScale = useMemo(() => {
		return scale([startColor, endColor]).mode("oklch");
	}, [startColor, endColor]);

	return (
		<>
			<div
				ref={ref}
				className="w-full flex items-center justify-between relative"
			>
				{Array.from({ length: counts }).map((_, i) => (
					<span
						key={i}
						style={{
							width: size,
							height,
							backgroundColor:
								i < highlightIndex
									? colorScale(i / (counts - 1 || 1)).css()
									: "var(--color-neutral-200)",
						}}
						className="rounded-full"
					/>
				))}
			</div>
		</>
	);
}

export { GradientProgress };
