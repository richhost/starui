"use server";

import { allDocs } from "content-collections";
import React from "react";

export const loadDoc = React.cache(async (slug: string | string[]) => {
	const newSlug = Array.isArray(slug) ? slug.join("/") : slug;
	return allDocs.find(
		(post) => post._meta.path.replaceAll("\\", "/") === `${newSlug}`,
	);
});
