import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-10 2xl:border-x border-dashed border-neutral-200">
      <Hero />

      <div
        className="fixed inset-x-0 aspect-square top-1/2 -z-10 blur-3xl opacity-20 rounded-full"
        style={{
          backgroundImage: "linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)",
        }}
      ></div>
    </div>
  );
}
