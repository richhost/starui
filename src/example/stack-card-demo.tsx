import { StackCard } from "@/registry/stack-card";
import { Image } from "lucide-react";

export default function StackCardDemo() {
	return (
		<div className="px-5 py-20">
			<StackCard cards={exampleData} />
		</div>
	);
}

const exampleData = [
	<div
		key="one"
		className="w-80 rounded-md p-5 bg-blue-100 border-2 border-blue-300 space-y-2 shadow-lg shadow-blue-200"
	>
		<p className="text-sm uppercase">Feature #1</p>
		<h3 className="text-lg text-balance font-semibold">
			Introduce a feature and its benefit.
		</h3>
		<div className="aspect-video grid place-items-center bg-neutral-200 rounded-md">
			<Image size={64} className="text-neutral-500" />
		</div>
		<p className="text-sm">
			Explain how the feature provide value and benefit your customers. Keep it
			short and sweet.
		</p>
	</div>,
	<div
		key="tow"
		className="w-80 rounded-md p-5 bg-amber-100 border-2 border-amber-300 space-y-2 shadow-lg shadow-amber-200"
	>
		<p className="text-sm uppercase">Feature #2</p>
		<h3 className="text-lg text-balance font-semibold">
			Introduce a feature and its benefit.
		</h3>
		<div className="aspect-video grid place-items-center bg-neutral-200 rounded-md">
			<Image size={64} className="text-neutral-500" />
		</div>
		<p className="text-sm">
			Explain how the feature provide value and benefit your customers. Keep it
			short and sweet.
		</p>
	</div>,
	<div
		key="three"
		className="w-80 rounded-md p-5 bg-green-100 border-2 border-green-300 space-y-2 shadow-lg shadow-green-200"
	>
		<p className="text-sm uppercase">Feature #3</p>
		<h3 className="text-lg text-balance font-semibold">
			Introduce a feature and its benefit.
		</h3>
		<div className="aspect-video grid place-items-center bg-neutral-200 rounded-md">
			<Image size={64} className="text-neutral-500" />
		</div>
		<p className="text-sm">
			Explain how the feature provide value and benefit your customers. Keep it
			short and sweet.
		</p>
	</div>,
];
