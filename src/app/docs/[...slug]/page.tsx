import { notFound } from "next/navigation";
import { loadDoc } from "@/helpers/load-doc";
import { Mdx } from "@/components/mdx/mdx-components";
import { NAVIGATION_CONFIG } from "@/shared/navigation-config";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export const generateMetadata = async ({ params }: Props) => {
  const slug = await (await params).slug;
  const doc = await loadDoc(slug);
  return {
    title: doc?.title,
  };
};

export const generateStaticParams = async () => {
  return NAVIGATION_CONFIG.flatMap((group) => {
    return group.items.map((item) => ({
      slug: (item.path.startsWith("/")
        ? item.path.substring(1)
        : item.path
      ).split("/"),
    }));
  });
};

export default async function Page({ params }: Props) {
  const slug = await (await params).slug;
  const doc = await loadDoc(slug);

  if (!doc) {
    notFound();
  }

  return (
    <>
      <h1>{doc.title}</h1>
      <Mdx code={doc.mdx} />
    </>
  );
}
