import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { PolkaDotMask } from "@/registry/polka-dot-mask";

export function Header() {
  return (
    <div className="sticky z-20 top-0 bg-white/20 backdrop-blur-md shadow-lg shadow-black/5">
      <PolkaDotMask />

      <header className="max-w-screen-2xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-8 text-sm text-neutral-500 font-medium">
          <div className="flex items-center gap-2 text-black">
            <Link href="/" className="text-lg font-semibold">
              Star UI
            </Link>
            <span className="text-xs font-semibold px-2 py-1 bg-black/5 rounded-md">
              Beta
            </span>
          </div>

          <Link href="/docs/components" className="hover:text-black">
            Components
          </Link>
        </div>
        <MobileNav />
      </header>
    </div>
  );
}
