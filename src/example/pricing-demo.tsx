import { Zap, Crown, BriefcaseBusiness } from "lucide-react";
import { Pricing, PricingCard } from "@/registry/pricing";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const fakeData = [
  {
    icon: <Zap className="size-6" />,
    name: "Personal",
    description: "Billed annually",
    price: 9,
    annualPrice: 5,
    features: [
      { content: "Access to all features" },
      { content: "Access to all features" },
      { content: "Access to all features", disabled: true },
      { content: "Access to all features", disabled: true },
      { content: "Access to all features", disabled: true },
    ],
    link: "#",
  },
  {
    icon: <Crown className="size-6" />,
    name: "Starter",
    description: "Billed annually",
    price: 15,
    annualPrice: 9,
    popular: true,
    features: [
      { content: "Access to all features" },
      { content: "Access to all features" },
      { content: "Access to all features" },
      { content: "Access to all features" },
      { content: "Access to all features", disabled: true },
    ],
    link: "#",
  },
  {
    icon: <BriefcaseBusiness className="size-6" />,
    name: "Business",
    description: "Billed annually",
    price: 25,
    annualPrice: 19,
    features: [
      { content: "Access to all features" },
      { content: "Access to all features" },
      { content: "Access to all features" },
      { content: "Access to all features" },
      { content: "Access to all features" },
    ],
    link: "#",
  },
];

export default function PricingDemo() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="w-full h-full bg-white rounded-md p-10">
      <div className="flex items-center gap-2 justify-center font-bold text-neutral-900 mb-10">
        <span className={cn(annual && "text-neutral-500")}>Monthly</span>
        <div
          className={cn(
            "w-10 px-0.5 h-5 rounded-full bg-neutral-200 flex items-center cursor-pointer transition-colors",
            annual ? "justify-end bg-neutral-900" : "justify-start"
          )}
          onClick={() => setAnnual(!annual)}
        >
          <motion.div
            layout
            className="size-4 rounded-full bg-white"
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
          />
        </div>
        <span className={cn(!annual && "text-neutral-500")}>Annual</span>
      </div>

      <Pricing>
        {fakeData.map((item, index) => (
          <PricingCard key={index} {...item} annual={annual} />
        ))}
      </Pricing>
    </div>
  );
}
