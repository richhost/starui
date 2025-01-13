import { AroundText } from "@/registry/around-text";
import { ArrowUpIcon } from "lucide-react";

const exampleText =
	'Tailwind CSS is an open-source CSS framework. Unlike other frameworks, like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.';

const spans = exampleText.split(" ").map((word, index) => {
	return (
		<span
			className="inline-block transition-transform ease-spring duration-500"
			key={index}
		>
			{word}
			{index - 1 === exampleText.split(" ").length - 1 ? "" : "\u00A0"}
		</span>
	);
});

export default function AroundTextDemo() {
	return (
		<div className="p-5 xl:p-10 bg-white">
			<AroundText className="relative">{spans.map((item) => item)}</AroundText>
			<div className="flex items-center justify-center text-3xl font-bold gap-4 mt-8">
				Hover
				<ArrowUpIcon className="size-8" strokeWidth="3" />
			</div>
		</div>
	);
}
