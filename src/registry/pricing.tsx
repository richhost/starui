"use client";

import React from "react";
import { Check, Star, X } from "lucide-react";
import { motion } from "motion/react";
import NumberFlow from "@number-flow/react";
import { cn } from "@/lib/utils";

interface PricingProps extends React.ComponentPropsWithRef<"div"> {}

interface Feature {
  content: string;
  disabled?: boolean;
}

interface PricingCardProps {
  className?: string;
  popular?: boolean;
  icon: React.ReactNode;
  name: string;
  description: string;
  annual?: boolean;
  price: number;
  annualPrice: number;
  features: Feature[];
  link: string;
}

function Pricing({ className, children, ...props }: PricingProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-5 lg:pt-9 text-neutral-900",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function PricingCard({
  icon,
  className,
  name,
  description,
  features,
  price,
  annualPrice,
  annual = false,
  popular,
  link,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl relative bg-white",
        popular ? "border-2 border-neutral-900" : "border border-neutral-200",
        className
      )}
    >
      {popular && (
        <div className="absolute text-sm font-semibold bg-neutral-900 text-neutral-50 flex items-center gap-2 px-3 pt-2 pb-2 top-5 right-5 rounded-full lg:pb-6 z-10 lg:z-0 lg:rounded-b-none lg:rounded-t-2xl lg:-right-0.5 lg:-top-9">
          <Star size={15} />
          <span>Most popular</span>
        </div>
      )}
      <div className="p-5 bg-inherit lg:z-10 relative rounded-2xl">
        <div className="size-10 bg-neutral-900 grid place-items-center text-white rounded-full">
          {icon}
        </div>

        <h3 className="mt-6 text-xl font-bold">{name}</h3>
        <div className="flex items-center gap-1">
          <NumberFlow
            className="text-5xl font-light"
            prefix="$"
            value={annual ? annualPrice : price}
          />
          <motion.span layout className="text-neutral-500">
            /month
          </motion.span>
        </div>
        <p className="text-neutral-500">{description}</p>

        <a
          href="#"
          className={cn(
            "w-full mt-5 rounded-md h-9 flex items-center justify-center transition-colors",
            popular
              ? "bg-neutral-900 text-white shadow-md hover:bg-neutral-800"
              : "bg-neutral-100 border border-neutral-200 text-neutral-500 hover:bg-neutral-200"
          )}
        >
          Start free trial
        </a>

        <hr className="text-neutral-200 -mx-5 mt-6" />

        <ul className="space-y-2 mt-5 font-medium">
          {features.map((item, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-2",
                item.disabled && "text-neutral-400"
              )}
            >
              <span
                className={cn(
                  "size-4 rounded-full grid place-items-center text-white",
                  item.disabled ? "bg-neutral-400 " : "bg-neutral-900"
                )}
              >
                {item.disabled ? (
                  <X className="size-3" />
                ) : (
                  <Check className="size-3" />
                )}
              </span>
              <span>{item.content}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Pricing, PricingCard };
