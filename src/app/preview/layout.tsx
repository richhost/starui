import type React from "react";

export default function PreviewLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div>{children}</div>;
}
