import { SpotlightCard, Spotlight } from "@/registry/spotlight-card";

export default function SpotlightCardDemo() {
  return (
    <SpotlightCard className="p-10 rounded-md border text-4xl font-bold bg-[#303033] text-white border-neutral-100">
      <Spotlight className="from-[#56C261] from-0% to-40% w-100 h-100" />

      <h3 className="relative z-10">Hover Me</h3>
    </SpotlightCard>
  );
}
