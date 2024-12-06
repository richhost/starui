"use client";

import { Drawer } from "vaul";
import { Menu } from "lucide-react";
import { Nav } from "./nav";

export function MobileNav() {
  return (
    <Drawer.Root>
      <Drawer.Trigger className="cursor-pointer md:hidden">
        <Menu size={18} />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="bg-black/40 fixed inset-0 z-30" />
        <Drawer.Content className="fixed flex flex-col max-h-[60svh] inset-x-0 bottom-0 py-6 z-30 bg-white rounded-t-xl">
          <Drawer.Title />
          <div className="overflow-auto px-6">
            <Nav />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
