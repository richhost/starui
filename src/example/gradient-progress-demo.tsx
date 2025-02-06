import { GradientProgress } from "@/registry/gradient-progress";
import { RefreshCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function GradientProgressDemo() {
  const [percent, setPercent] = useState(0);
  const id = useRef<ReturnType<typeof setInterval>>(undefined);

  const start = () => {
    setPercent(0);
    clearInterval(id.current);

    id.current = setInterval(() => {
      setPercent((prev) => {
        if (prev === 100) {
          clearInterval(id.current);
          return 100;
        }
        return prev + 1;
      });
    }, 10);
  };

  useEffect(() => {
    start();

    return () => clearInterval(id.current);
  }, []);

  return (
    <div className="w-full h-full p-5">
      <button
        type="button"
        onClick={start}
        className="absolute top-4 right-4 p-1.5 rounded-md bg-white grid place-items-center border border-neutral-200 cursor-pointer active:bg-neutral-100"
      >
        <RefreshCcw size={16} />
      </button>

      <div className="max-w-sm mx-auto w-full bg-white border border-neutral-100 rounded-md shadow-lg p-10">
        <GradientProgress gap={4} size={3} percent={percent} />
      </div>
    </div>
  );
}
