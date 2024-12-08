"use client";

import { Drawer } from "vaul";
import { Nav } from "./nav";
import { useState } from "react";
import { FancyButton } from "@/registry/fancy-button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const onClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName.toLocaleLowerCase() === "a") {
      setOpen(false);
    }
  };

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <FancyButton className="fixed bottom-6 left-1/2 -translate-x-1/2 text-sm bg-green-500 ring-green-600/90">
          Components
        </FancyButton>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="bg-black/40 fixed inset-0 z-30" />
        <Drawer.Content className="fixed flex flex-col max-h-[60svh] inset-x-0 bottom-0 py-6 z-30 bg-white rounded-t-xl">
          <Drawer.Title />
          <div className="overflow-auto px-6" onPointerUp={onClick}>
            <Nav />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
