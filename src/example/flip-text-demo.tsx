import FlipText from "@/registry/flip-text";

export default function FlipTextDemo() {
  return (
    <div className="flex items-center text-4xl">
      <FlipText words={["UI UX", "Product", "Motion"]} delay={2000} />
      <span>{"\u00A0"}Design</span>
    </div>
  );
}
