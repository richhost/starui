import { TextDispersion } from "@/registry/text-dispersion";
import { ArrowUp } from "lucide-react";

export default function TextDispersionDemo() {
  return (
    <div className="p-5 border border-neutral-200 rounded-md bg-white">
      <div className="relative overflow-hidden p-6 rounded-md bg-neutral-900 text-neutral-50 text-3xl uppercase leading-relaxed">
        <h3>Call us</h3>
        <p>10am - 5pm</p>
        <TextDispersion overlay text="+44 7534418418" />
      </div>

      <p className="flex items-center justify-center gap-2 mt-4">
        <ArrowUp size={17} />
        Hover over the number
      </p>
    </div>
  );
}
