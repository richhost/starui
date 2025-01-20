import type React from "react";
import { useEffect, useRef } from "react";

export function WordGalaxy({
	distanceScale,
	maxMovement,
	...props
}: {
	distanceScale?: number;
	maxMovement?: number;
} & React.ComponentPropsWithoutRef<"div">) {
	const container = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		let instance: WordGalaxyFactory;
		if (container.current) {
			instance = new WordGalaxyFactory(
				container.current,
				distanceScale,
				maxMovement,
			);
		}
		return () => instance.destroy();
	}, []);

	return <div ref={container} {...props} />;
}

type Position = { x: number; y: number };

export class WordGalaxyFactory {
	private container: HTMLElement;
	private elements: HTMLElement[] = [];
	private elementsPosition: Position[] = [];
	private pointerPosition: Position | null = null;
	private resizeObserver?: ResizeObserver;
	private rafId?: ReturnType<typeof requestAnimationFrame>;
	private distanceScale = 200;
	private maxMovement = 100;

	constructor(
		container: HTMLElement | string,
		distanceScale = 200,
		maxMovement = 100,
	) {
		if (!container) throw new Error("container is required");
		if (typeof container === "string") {
			const target = document.querySelector(container);
			if (!(target instanceof HTMLElement))
				throw new Error("container is not HTMLElement");
			this.container = target;
		} else {
			this.container = container;
		}
		this.distanceScale = distanceScale ?? 200;
		this.maxMovement = maxMovement ?? 100;
		this.container.style.touchAction = "none";
		this.getElements();
		this.addListeners();
		this.rafId = requestAnimationFrame(this.animate);
	}

	private getElements = () => {
		this.elements = Array.from(this.container.children).filter(
			(item) => item instanceof HTMLElement,
		);
	};

	private updateElementsPosition = () => {
		const containerRect = this.container.getBoundingClientRect();
		this.elementsPosition = this.elements.map((element) => {
			const { x, y, width, height } = element.getBoundingClientRect();
			return {
				x: x - containerRect.x + width * 0.5,
				y: y - containerRect.y + height * 0.5,
			};
		});
	};

	private observeContainer = () => {
		this.resizeObserver =
			this.resizeObserver || new ResizeObserver(this.updateElementsPosition);
		this.resizeObserver.observe(this.container);
	};

	private updatePointerPosition = (event: PointerEvent) => {
		this.pointerPosition = this.pointerPosition || { x: 0, y: 0 };
		const { x, y } = this.container.getBoundingClientRect();
		this.pointerPosition.x = event.x - x;
		this.pointerPosition.y = event.y - y;
	};

	private resetPointerPosition = () => {
		this.pointerPosition = null;
	};

	private addListeners = () => {
		this.observeContainer();
		this.container.addEventListener("pointermove", this.updatePointerPosition);
		this.container.addEventListener("pointerleave", this.resetPointerPosition);
	};

	private removeListeners = () => {
		this.resizeObserver?.disconnect();
		this.container.removeEventListener(
			"pointermove",
			this.updatePointerPosition,
		);
		this.container.removeEventListener(
			"pointerleave",
			this.resetPointerPosition,
		);
		this.rafId && cancelAnimationFrame(this.rafId);
	};

	private animate = () => {
		if (!this.pointerPosition) {
			for (let i = 0; i < this.elements.length; i++) {
				this.elements[i].style.transform = "";
			}
		} else {
			for (let i = 0; i < this.elements.length; i++) {
				const { x, y } = this.elementsPosition[i];
				const { x: px, y: py } = this.pointerPosition;
				const dx = px - x;
				const dy = py - y;
				const distance = Math.sqrt(dx ** 2 + dy ** 2);
				const scale = Math.max(0, 1 - distance / this.distanceScale);

				const moveX = (-dx / distance) * scale * this.maxMovement;
				const moveY = (-dy / distance) * scale * this.maxMovement;

				this.elements[i].style.transform = `translate(${moveX}px, ${moveY}px)`;
			}
		}

		this.rafId = requestAnimationFrame(this.animate);
	};

	destroy = () => this.removeListeners();
}
