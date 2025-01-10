import Link from "next/link";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import React from "react";
import { FancyButton } from "@/registry/fancy-button";
import { LightWeightCards } from "@/registry/lightweight-cards";
import { NeumorphismBox } from "@/registry/neumorphism-box";

export function Hero() {
  return (
    <main
      className="min-h-[calc(--spacing(-14)+100vh)] flex flex-col
      items-center justify-center gap-10 py-10"
    >
      <div>
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center rounded-full justify-center
           border border-neutral-200 px-2 py-1"
          >
            <span className="mr-2 border-r pr-2 border-neutral-200">🎉</span>
            <p className="text-sm font-medium">New releases every week</p>
          </div>
        </div>

        <h1 className="text-4xl lg:text-6xl text-balance font-poppins font-bold text-center">
          Today, it's StarUI.
          <br />
          Tomorrow, it's yours!
        </h1>

        <p className="text-center text-balance mx-auto max-w-lg mt-10">
          Create beautiful, customizable website designs using{" "}
          <strong>Tailwind CSS v4</strong> and <strong>Motion React</strong>{" "}
          components. Just copy, paste, and tweak.
        </p>
      </div>

      <LightWeightCards.Root className="-translate-x-10">
        {cards.flatMap((item, index) => (
          <LightWeightCards.Card key={index} index={index} className="min-w-64">
            <div className="p-5">
              <span className="block mb-4">{item.icon}</span>
              <h3>{item.title}</h3>
            </div>
          </LightWeightCards.Card>
        ))}
      </LightWeightCards.Root>

      <NeumorphismBox className="mt-24 p-3 rounded-md">
        <FancyButton className="p-0 rounded-md bg-neutral-700">
          <Link href="/docs/components" className="px-4 py-2 inline-block">
            <span>Browse component</span>
          </Link>
        </FancyButton>
      </NeumorphismBox>
    </main>
  );
}

const cards = [
  {
    icon: <SiTypescript className="text-[#3178c6]" />,
    title: "Typescript",
  },
  {
    icon: <SiReact className="text-[#087ea4]" />,
    title: "React",
  },
  {
    icon: <MotionIcon />,
    title: "Motion React",
  },
  {
    icon: <SiTailwindcss className="text-[#38bdf8]" />,
    title: "Tailwind CSS v4",
  },
];

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
