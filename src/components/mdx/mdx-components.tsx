import { MDXContent } from "@content-collections/mdx/react";
import { ComponentPreview } from "./component-preview";
import { Pre } from "./pre";
import { MDXAside } from "./mdx-aside";
import { Tab, Tabs } from "./mdx-tabs";

interface MdxProps {
  code: string;
}

const COMPONENTS = {
  ComponentPreview,
  pre: Pre,
  Aside: MDXAside,
  Tabs,
  Tab,
};

export function Mdx({ code }: MdxProps) {
  return <MDXContent code={code} components={COMPONENTS} />;
}
