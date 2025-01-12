import { MobileNav } from "@/components/mobile-nav";
import { Nav } from "@/components/nav";

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh">
      <div className="max-w-screen-2xl mx-auto grid md:grid-cols-[300px_1fr] 2xl:border-r border-neutral-200 border-dashed">
        <aside
          className="hidden border-x border-neutral-200 border-dashed md:block p-5 md:p-10 overflow-auto
        h-[calc(100vh-calc(--spacing(14))-1px)] sticky top-[calc(--spacing(14)+1px)] "
        >
          <Nav />
        </aside>

        <div className="p-5 md:p-10 bg-white overflow-x-hidden">
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
