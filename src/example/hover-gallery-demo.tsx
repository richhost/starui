import { HoverCard, type HoverCardProps } from "@/registry/hover-gallery";

export default function HoverGalleryDemo() {
	return (
		<div className="h-100">
			<HoverCard cards={exampleData} />
		</div>
	);
}

const exampleData: HoverCardProps["cards"] = [
	{
		name: "UI UX Design",
		left: "https://images.unsplash.com/photo-1732613942657-61684c51eb55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
		top: "https://images.unsplash.com/photo-1732466285965-87c9caa258a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
		right:
			"https://plus.unsplash.com/premium_photo-1731952275307-416815ca7c8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "Frontend",
		left: "https://images.unsplash.com/photo-1732321221818-3bb8fdd9052d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D",
		top: "https://images.unsplash.com/photo-1732229654147-3562920a8e3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Nnx8fGVufDB8fHx8fA%3D%3D",
		right:
			"https://images.unsplash.com/photo-1731570225640-7ddad4231679?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDl8fHxlbnwwfHx8fHw%3D",
	},
	{
		name: "Production",
		left: "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTF8fHxlbnwwfHx8fHw%3D",
		top: "https://images.unsplash.com/photo-1732008278594-3f3272927445?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjd8fHxlbnwwfHx8fHw%3D",
		right:
			"https://images.unsplash.com/photo-1731575115709-d4325615e868?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzl8fHxlbnwwfHx8fHw%3D",
	},
];
