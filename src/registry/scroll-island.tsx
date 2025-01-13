"use client";

import {
	MotionConfig,
	AnimatePresence,
	motion,
	useScroll,
	useMotionValueEvent,
} from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { Fragment, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollIsland() {
	const [open, setOpen] = useState(false);
	const { scrollYProgress } = useScroll();
	const [percent, setPercent] = useState(0);
	const [titleEls, setTitleEls] = useState<HTMLElement[]>([]);
	const [currentTitle, setCurrentTitle] = useState(exampleData[0].title);

	const setupTitles = useCallback((node: HTMLDivElement) => {
		if (node) {
			const titleEls = Array.from(node.querySelectorAll("h2"));
			setTitleEls(titleEls);
		}
	}, []);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setPercent(Math.floor(latest * 100));
		titleEls.forEach((el, index) => {
			const top = el.getBoundingClientRect().top;
			if (top >= 0 && top < 32) {
				setCurrentTitle(exampleData[index].title ?? "");
			}
		});
	});

	return (
		<div className="relative max-w-md mx-auto pb-40" ref={setupTitles}>
			<MotionConfig transition={{ type: "spring", bounce: 0.3 }}>
				<AnimatePresence>
					{open && <Overlay onClick={() => setOpen(false)} />}
				</AnimatePresence>

				<main className="text-balance">
					{exampleData.map((item) => (
						<Fragment key={item.title}>
							<h2 id={item.title} className="text-xl font-semibold pt-8">
								{item.title}
							</h2>
							<p className="my-4">{item.content}</p>
						</Fragment>
					))}
				</main>

				<motion.div
					className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-neutral-50 z-10 overflow-hidden"
					initial={false}
					style={{ borderRadius: 22 }}
					animate={{ width: open ? 320 : 260, height: open ? "auto" : 44 }}
				>
					<ol className="px-4 pt-4" style={{ paddingBlockEnd: 44 }}>
						{exampleData.map((item) => (
							<motion.li
								key={item.title}
								className={cn(
									"list-inside list-decimal transition-[filter] text-neutral-300",
									open ? "blur-none" : "blur-sm",
								)}
							>
								<a
									href={`#${item.title}`}
									className="h-7 inline-flex items-center"
									onClick={() => setOpen(false)}
								>
									{item.title}
								</a>
							</motion.li>
						))}
					</ol>

					<button
						type="button"
						onClick={() => setOpen(!open)}
						style={{ height: 44 }}
						className="pl-2 pr-4 absolute inset-x-0 bottom-0 bg-inherit flex items-center justify-between gap-2"
					>
						<span className="flex grow min-w-0 items-center gap-1">
							<svg className="size-7 -rotate-90 shrink-0" viewBox="0 0 100 100">
								<circle
									cx="50"
									cy="50"
									r="35"
									strokeWidth="15"
									fill="none"
									className="stroke-neutral-500"
								/>
								<motion.circle
									cx="50"
									cy="50"
									r="35"
									strokeWidth="15"
									strokeDashoffset="0"
									fill="none"
									pathLength="1"
									style={{ pathLength: scrollYProgress }}
									className="stroke-neutral-50"
									strokeLinecap="round"
								/>
							</svg>

							<span className="truncate">{currentTitle}</span>
						</span>

						<span>{percent}%</span>
					</button>
				</motion.div>
			</MotionConfig>
		</div>
	);
}

function Overlay(props: HTMLMotionProps<"div">) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
			className="fixed inset-0 z-10 bg-white/50 backdrop-blur"
			{...props}
		/>
	);
}

const exampleData = [
	{
		id: "Tailwind CSS",
		title: "Tailwind CSS",
		content: `Tailwind CSS is an open-source CSS framework. Unlike other frameworks, like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.
 
For example, in other traditional systems, there would be a class message-warning that would apply a yellow background color and bold text. To achieve this result in Tailwind, one would have to apply a set of classes created by the library: bg-yellow-300 and font-bold.
 
As of 5 August 2024, Tailwind CSS has over 81,000 stars on GitHub.`,
	},
	{
		id: "Features",
		title: "Features",
		content:
			"Due to the difference in basic concepts in relation to other traditional CSS frameworks such as Bootstrap, it is important to know the philosophy from which Tailwind was created, as well as its basic usage. ",
	},
	{
		id: "Utility classes",
		title: "Utility classes",
		content:
			"The utility-first concept refers to the main differentiating feature of Tailwind.[8] Instead of creating classes around components (button, panel, menu, textbox ...), classes are built around a specific style element (yellow color, bold font, very large text, center element...). Each of these classes is called utility classes. ",
	},
	{
		id: "Variants",
		title: "Variants",
		content: `Tailwind offers the possibility to apply a utility class only in some situations through media queries, which is called a variant. The main use of variants is to design a responsive interface for various screen sizes. There are also variants for the different states an element can have, such as hover: for when hovered, focus: when keyboard selected or active: when in use, or when the browser or operating system has dark mode enabled.
 
Variants have two parts: the condition to be met and the class that is applied if the condition is met. For example, the variant md:bg-yellow-400 will apply the class bg-yellow-400 if the screen size is at least the value defined for md.
 
Tailwind CSS is developed using JavaScript, runs via Node.js, and installs with environment package managers like npm or yarn.`,
	},
	{
		id: "Settings and themes",
		title: "Settings and themes",
		content:
			"It is possible to configure the utility classes and variants that Tailwind offers through a configuration file usually named tailwind.config.js. In the configuration, one can set the values of the utility classes, such as the color-palette or the sizes between elements for margins.",
	},
	{
		id: "Versions",
		title: "Versions",
		content:
			"Tailwind CSS uses semantic versioning to identify its version compatibility. ",
	},
];
