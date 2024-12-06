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
        <Drawer.Content className="fixed max-h-[60%] inset-x-0 bottom-0 z-30 overflow-auto bg-white p-5 rounded-t-xl">
          <Drawer.Title />
          <Nav />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
