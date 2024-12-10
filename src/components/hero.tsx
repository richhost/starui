import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import React from "react";
import { FancyButton } from "@/registry/fancy-button";

export function Hero() {
  return (
    <div className="flex flex-col items-center gap-5 mt-16 md:mt-30">
      <p className="flex text-sm font-medium items-center mb-8 px-3 py-1 rounded-full border border-neutral-200">
        <span className="pr-2 border-r border-neutral-200">🎉</span>
        <span className="ml-2">New releases every week</span>
      </p>

      <h1 className="text-4xl md:text-6xl text-balance text-center font-bold">
        Craft Stunning Websites with Beautiful Components
      </h1>
      <p className="md:text-xl md:max-w-xl text-center">
        Transform your website with beautiful, customizable{" "}
        <strong>Tailwind CSS v4</strong> and <strong>Motion React</strong>{" "}
        components. Copy, paste, and tweak to create designs that truly shine.
      </p>

      <div className="mt-8 flex flex-wrap gap-10 w-full justify-center">
        <FancyButton className="p-0 from-green-500 to-green-500 ring-green-600 font-semibold">
          <Link
            href="/docs"
            className="flex items-center gap-1 px-4 py-2 group"
          >
            Browser Components
            <ChevronRight className="group-hover:translate-x-1 transition-transform size-4 md:size-5" />
          </Link>
        </FancyButton>

        <div className="flex items-center justify-center gap-4">
          <SiTailwindcss />
          <MotionIcon />
          <SiReact />
          <SiTypescript />
        </div>
      </div>
    </div>
  );
}

function MotionIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 41 14"
      width={32}
      {...props}
    >
      <title>Motion React</title>
      <path
        d="M 15.481 0 L 7.38 13.988 L 0 13.988 L 6.325 3.066 C 7.306 1.372 9.753 0 11.791 0 Z M 33.579 3.497 C 33.579 1.566 35.231 0 37.269 0 C 39.307 0 40.959 1.566 40.959 3.497 C 40.959 5.428 39.307 6.994 37.269 6.994 C 35.231 6.994 33.579 5.428 33.579 3.497 Z M 16.865 0 L 24.245 0 L 16.144 13.988 L 8.764 13.988 Z M 25.581 0 L 32.961 0 L 26.636 10.922 C 25.655 12.615 23.208 13.988 21.17 13.988 L 17.48 13.988 Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
