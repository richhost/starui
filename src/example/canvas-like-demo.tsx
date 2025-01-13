import { CanvasLike, CanvasCard } from "@/registry/canvas-like";

export default function CanvasLikeDemo() {
	return (
		<div className="p-6 relative w-full bg-white rounded-lg">
			<CanvasLike className="h-[400px] max-w-max border border-neutral-200 rounded-lg">
				<div
					className="absolute inset-0"
					style={{
						backgroundColor: "#fff",
						opacity: 0.8,
						backgroundImage:
							"linear-gradient(var(--color-slate-100) 1px, transparent 1px), linear-gradient(to right, var(--color-slate-100) 1px, #ffffff 1px)",
						backgroundSize: "20px 20px",
					}}
				/>

				<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					Drag to Explore
				</p>

				<CanvasCard className="absolute top-1/2 rotate-12 left-1/2 w-40 rounded-md -translate-x-80 overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1636777299552-4fbb482b9267?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</CanvasCard>

				<CanvasCard className="absolute top-1/2 left-1/2 w-64 rounded-md overflow-hidden -translate-y-70 -translate-x-1/2">
					<img
						src="https://images.unsplash.com/photo-1542343082-abf84a65aeff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</CanvasCard>

				<CanvasCard className="absolute top-1/2 left-1/2 w-46 rounded-md overflow-hidden -translate-y-40 translate-x-40">
					<img
						src="https://images.unsplash.com/photo-1699787866954-20c4c4f63641?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</CanvasCard>
			</CanvasLike>
		</div>
	);
}
