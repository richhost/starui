import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { PolkaDotMask } from "@/registry/polka-dot-mask";
import Image from "next/image";

export function Header() {
  return (
    <div className="sticky z-20 top-0 bg-white/20 backdrop-blur-md border-b border-neutral-200 border-dashed">
      <PolkaDotMask />

      <header
        className="max-w-screen-2xl mx-auto px-5 md:px-10 h-14
        2xl:border-x border-neutral-200 border-dashed
      flex items-center justify-between relative z-10"
      >
        <div className="hidden 2xl:block absolute size-2 border left-0 bottom-0 rotate-45 -translate-x-1/2 translate-y-1/2 bg-white border-neutral-300"></div>
        <div className="hidden 2xl:block absolute size-2 border right-0 bottom-0 rotate-45 translate-x-1/2 translate-y-1/2 bg-white border-neutral-300"></div>
        <div className="flex items-center gap-8 text-sm text-neutral-500 font-medium">
          <div className="flex items-center gap-2 text-black">
            <Link
              href="/"
              className="text-lg font-semibold flex items-center gap-2"
            >
              <Image
                className="size-6"
                width={48}
                height={48}
                src="/logo.svg"
                alt="Star UI"
              />
              <span className="font-poppins uppercase">Star UI</span>
              <span className="text-xs font-semibold px-2 py-1 bg-black/5 rounded-md">
                Beta
              </span>
            </Link>
          </div>

          <Link href="/docs/components" className="hover:text-black">
            Components
          </Link>
        </div>
        <a
          href="https://github.com/richhost/starui"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub className="size-5" />
        </a>
      </header>
    </div>
  );
}
