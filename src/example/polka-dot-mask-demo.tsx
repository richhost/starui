import { Smile } from "lucide-react";
import { PolkaDotMask } from "@/registry/polka-dot-mask";

export default function PolkaDotMaskDemo() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex items-center overflow-hidden px-6 py-4 gap-3 lg:gap-5 rounded-full bg-black text-orange-600">
        <Smile className="relative z-10 size-8 lg:size-14" />

        <div className="text-3xl lg:text-6xl font-medium uppercase">smile</div>
        <PolkaDotMask
          color="#431407"
          gapSize={2}
          dotSize={1}
          className="pointer-events-none"
        />
      </div>
    </div>
  );
}
