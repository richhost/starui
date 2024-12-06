import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { rehypePrettyCode, type Options } from "rehype-pretty-code";

const docs = defineCollection({
  name: "docs",
  directory: "src/content/docs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [codeImport, remarkGfm],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "github-light",
          } satisfies Options,
        ],
      ],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [docs],
});
