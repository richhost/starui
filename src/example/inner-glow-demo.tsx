import { InnerGlow } from "@/registry/inner-glow";

export default function InnerGlowDemo() {
  return (
    <div className="grid relative overflow-hidden bg-white rounded-md p-6 aspect-square place-items-center text-3xl font-medium">
      <InnerGlow />
      <p>Inner Glow</p>
    </div>
  );
}
