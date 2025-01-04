import { MobileNav } from "@/components/mobile-nav";
import { Nav } from "@/components/nav";

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/site-background-image.svg')] bg-repeat bg-[size:4px_4px] min-h-svh">
      <div className="max-w-screen-2xl mx-auto grid md:grid-cols-[300px_1fr]">
        <aside className="hidden md:block p-5 md:p-10 h-[calc(100vh-calc(var(--spacing)*16))] sticky top-16 overflow-auto">
          <Nav />
        </aside>

        <div className="p-5 md:p-10 border-x border-transparent md:border-neutral-200 bg-white overflow-x-hidden">
          <article className="prose mx-auto max-w-none prose-neutral">
            {children}
          </article>
          <div className="md:hidden h-16"></div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
