"use client";

import { type AnimationSequence, useAnimate } from "motion/react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const random = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export default function SparklesButton({
	sparklesCount = 20,
}: {
	sparklesCount?: number;
}) {
	const [scope, animate] = useAnimate();

	const onButtonClick = () => {
		const sparklesArray = Array.from({ length: sparklesCount });

		const sparklesReset: AnimationSequence = sparklesArray.map((_, index) => [
			`.sparkle-${index}`,
			{ x: 0, y: 0 },
			{ duration: 0.000001 },
		]);

		const sparklesAnimation: AnimationSequence = sparklesArray.map(
			(_, index) => [
				`.sparkle-${index}`,
				{
					x: random(-100, 100),
					y: random(-100, 100),
					scale: random(1, 2.5),
					opacity: 1,
				},
				{ duration: 0.4, at: "<" },
			],
		);

		const sparklesExit: AnimationSequence = sparklesArray.map((_, index) => [
			`.sparkle-${index}`,
			{ scale: 0, opacity: 0 },
			{ duration: 0.3, at: "<" },
		]);

		animate([
			...sparklesReset,
			["button", { scale: 0.8 }, { duration: 0.1 }],
			["button", { scale: 1 }, { duration: 0.1 }],
			...sparklesAnimation,
			["button", {}, { duration: 0.000001 }],
			...sparklesExit,
		]);
	};

	return (
		<div ref={scope}>
			<button
				type="button"
				onClick={onButtonClick}
				className={cn(
					"relative rounded-full border border-amber-200 bg-amber-100 p-1 group z-10",
				)}
			>
				<div className="h-10 flex items-center justify-center gap-1 px-5 rounded-full border border-amber-500 bg-gradient-to-b from-amber-400 to-amber-500 shadow-md shadow-amber-400 text-white font-semibold group-hover:border-amber-600 group-hover:shadow-transparent transition">
					Button
					<Sparkles size={16} />
				</div>

				<span className="absolute inset-0 block pointer-events-none -z-10">
					{Array.from({ length: sparklesCount }).map((_, index) => (
						<svg
							key={index}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className={`fill-amber-400 size-2 text-amber-400 opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sparkle-${index}`}
						>
							<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
							<path d="M20 3v4" />
							<path d="M22 5h-4" />
							<path d="M4 17v2" />
							<path d="M5 18H3" />
						</svg>
					))}
				</span>
			</button>
		</div>
	);
}
