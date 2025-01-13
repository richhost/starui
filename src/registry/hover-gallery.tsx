"use client";

import { useCallback, useRef, useState } from "react";

export interface HoverCardProps {
	cards: { name: string; left: string; top: string; right: string }[];
}

function HoverCard({ cards }: HoverCardProps) {
	const ulRef = useRef<HTMLUListElement | null>(null);
	const [index, setIndex] = useState(0);
	const [coordinates, setCoordinates] = useState<{
		top: { x: number; y: number; angle: number };
		left: { x: number; y: number; angle: number };
		right: { x: number; y: number; angle: number };
	}>();

	const handlePointerEnter = useCallback(
		(e: React.PointerEvent<HTMLParagraphElement>, index: number) => {
			if (!ulRef.current) return;
			const ulRect = ulRef.current.getBoundingClientRect();
			const rect = e.currentTarget.getBoundingClientRect();

			const y = rect.top - ulRect.top;
			const coordinates = {
				top: {
					y,
					x: Math.floor(Math.random() * 61) - 30,
					angle: getRandomAngle(),
				},
				left: {
					x: rect.left - ulRect.left,
					y,
					angle: getRandomAngle(),
				},
				right: {
					x: rect.right - ulRect.right,
					y,
					angle: getRandomAngle(),
				},
			};

			setIndex(index);
			setCoordinates(coordinates);
		},
		[cards],
	);

	return (
		<div className="h-full flex items-center justify-center text-5xl">
			<ul
				ref={ulRef}
				className="flex flex-col pointer-events-none items-center font-bold relative group"
			>
				{cards.map((card, index) => (
					<li key={card.name}>
						<p
							className="cursor-pointer pointer-events-auto w-fit uppercase opacity-25 hover:opacity-100 [transition:opacity_0.15s_var(--ease-in-out),scale_0.5s_var(--ease-bounce)] hover:scale-y-110"
							onPointerEnter={(e) => handlePointerEnter(e, index)}
						>
							{card.name}
						</p>
					</li>
				))}

				<img
					src={cards[index].top}
					className="absolute w-40 pointer-events-none scale-0 group-hover:scale-100 group-hover:[transition:scale_0.5s_var(--ease-spring),translate_0.5s_var(--ease-spring),rotate_1s_var(--ease-spring)] [transition:scale_0.2s_var(--ease-in-out)] rounded-md overflow-hidden shadow-xl shadow-black/25"
					style={{
						translate: `calc(${coordinates?.top?.x ?? 0}px) calc(-100% + ${
							(coordinates?.top?.y ?? 0) - 40
						}px)`,
						rotate: `${coordinates?.top?.angle}deg`,
					}}
					alt=""
				/>

				<img
					src={cards[index].left}
					className="absolute left-0 w-40 pointer-events-none scale-0 group-hover:scale-100 group-hover:[transition:scale_0.5s_var(--ease-spring),translate_0.5s_var(--ease-spring),rotate_1s_var(--ease-spring)] [transition:scale_0.2s_var(--ease-in-out)] rounded-md overflow-hidden shadow-xl shadow-black/25"
					style={{
						translate: `calc(-100% + ${
							coordinates?.left?.x ?? 0
						}px - 100px) calc(-50% + ${coordinates?.top?.y ?? 0}px)`,
						rotate: `${coordinates?.left?.angle}deg`,
					}}
					alt=""
				/>

				<img
					src={cards[index].right}
					className="absolute right-0 w-40 pointer-events-none scale-0 group-hover:scale-100 group-hover:[transition:scale_0.5s_var(--ease-spring),translate_0.5s_var(--ease-spring),rotate_1s_var(--ease-spring)] [transition:scale_0.2s_var(--ease-in-out)] rounded-md overflow-hidden shadow-xl shadow-black/25"
					style={{
						translate: `calc(100% + ${
							coordinates?.right?.x ?? 0
						}px + 100px) calc(-50% + ${coordinates?.top?.y ?? 0}px)`,
						rotate: `${coordinates?.right?.angle}deg`,
					}}
					alt=""
				/>
			</ul>
		</div>
	);
}

function getRandomAngle() {
	return Math.floor(Math.random() * 21) - 20;
}

export { HoverCard };
