"use client";

import { useRef, useState } from "react";
import { Check, Clipboard } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface Props extends React.HTMLAttributes<HTMLPreElement> {}

export function Pre({ ...props }: Props) {
  const preRef = useRef<HTMLPreElement | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent;

    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <ScrollArea
      className="border border-neutral-200 rounded-md p-4 not-prose"
      viewportClassName="max-h-[400px]"
    >
      <pre ref={preRef} {...props} />

      <ScrollBar orientation="horizontal" />

      <button
        className="absolute top-4 right-4 cursor-pointer bg-white p-1 rounded-sm border border-neutral-200"
        onClick={handleClickCopy}
      >
        {isCopied ? (
          <Check size={16} className="text-green-500" />
        ) : (
          <Clipboard size={16} />
        )}
      </button>
    </ScrollArea>
  );
}
