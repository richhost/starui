"use client";

import { cn } from "@/lib/utils";
import { NAVIGATION_CONFIG } from "@/shared/navigation-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <div className="space-y-4">
      {NAVIGATION_CONFIG.map((group) => (
        <div key={group.name} className="space-y-1">
          <h4 className="font-semibold">{group.name}</h4>
          <ul
            key={group.name}
            className="space-y-1 text-sm font-medium text-stone-500"
          >
            {group.items.map((item) => (
              <li
                key={item.name}
                className={cn(pathname === item.path && "text-green-500")}
              >
                <Link href={item.path} className="h-7 inline-flex items-center">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
