"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/config/links";
import { ModeToggle } from "./mode-toggle";

type MenuItem = {
  name: string;
  href?: string;
};

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
  return <a className="block py-2">{item.name}</a>;
};

export default function HamburgerMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="p-4">
        <nav className="flex h-full flex-col py-4 text-right">
          <div className="space-y-4">
            {navLinks.map((item) => (
              <MenuItemComponent key={item.name} item={item} />
            ))}
            <ModeToggle />
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <Button>Sign Up</Button>
            <Button variant="outline">Log In</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
