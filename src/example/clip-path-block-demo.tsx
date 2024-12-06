import { ClipPathBlock } from "@/registry/clip-path-block";

export default function ClipPathBlockDemo() {
  return (
    <div className="p-5">
      <ClipPathBlock
        text="Security that scales with you."
        className="text-2xl lg:text-4xl"
      />
    </div>
  );
}
