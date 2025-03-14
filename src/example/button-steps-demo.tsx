import { ButtonSteps } from "@/registry/button-steps";

export default function ButtonStepsDemo() {
  return (
    <div>
      <ButtonSteps
        steps={4}
        className="px-4 py-1.5 bg-amber-300 rounded-sm font-medium"
      >
        LIKE STAR UI
      </ButtonSteps>
    </div>
  );
}
