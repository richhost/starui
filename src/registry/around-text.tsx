"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function AroundText({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const container = React.useRef<HTMLDivElement>(null);
	const children = React.useRef<HTMLElement[]>([]);
	const position = React.useRef<{ x: number; y: number } | null>(null);

	React.useEffect(() => {
		const collection = container.current?.children;
		if (collection) {
			const elements = Array.from(collection).filter(
				(child): child is HTMLElement => child.nodeType === Node.ELEMENT_NODE,
			);
			children.current = elements;
		}
	}, []);

	React.useEffect(() => {
		const pointermove = (e: MouseEvent) => {
			position.current = { x: e.clientX, y: e.clientY };
		};
		const resetPosition = () => {
			position.current = null;
		};

		document.addEventListener("mousemove", pointermove);
		document.addEventListener("mouseleave", resetPosition);

		return () => {
			document.removeEventListener("mousemove", pointermove);
			document.removeEventListener("mouseleave", resetPosition);
		};
	}, []);

	React.useEffect(() => {
		let id = 0;
		const update = () => {
			if (children.current) {
				for (let i = 0; i < children.current.length; i++) {
					if (position.current) {
						const rect = children.current[i].getBoundingClientRect();
						const x = rect.left + rect.width * 0.5;
						const y = rect.top + rect.height * 0.5;

						const distX = position.current.x - x;
						const distY = position.current.y - y;
						const distance = Math.sqrt(distX ** 2 + distY ** 2);

						const maxForce = 100;
						const force = Math.max(0, 1 - distance / 200);
						const moveX = (-distX / distance) * force * maxForce;
						const moveY = (-distY / distance) * force * maxForce;

						children.current[i].style.transform =
							`translate(${moveX}px, ${moveY}px)`;
					} else {
						children.current[i].style.transform = "";
					}
				}
			}

			id = requestAnimationFrame(update);
		};

		requestAnimationFrame(update);

		return () => cancelAnimationFrame(id);
	}, []);

	return <div className={cn("", className)} {...props} ref={container} />;
}
