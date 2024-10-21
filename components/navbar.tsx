import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { navLinks } from "@/config/links";
import { Separator } from "./ui/separator";
import HamburgerMenu from "./hamburger";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="mb-12 flex h-14 flex-row items-center justify-between py-2">
      <span className="mr-auto">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground transition-all hover:text-primary hover:drop-shadow-[0px_0px_12px_rgba(251,191,36,1)]"
        >
          motif
        </Link>
      </span>
      <div className="flex h-full items-center gap-4">
        <div className="sm:hidden">
          <HamburgerMenu />
        </div>
        <div className="hidden h-full items-center gap-4 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground"
            >
              {link.name.toLowerCase()}
            </Link>
          ))}
          <ModeToggle />
          <Separator orientation="vertical" decorative />
          <Button variant="outline">Sign Up</Button>
          <Button>Log In</Button>
        </div>
      </div>
    </nav>
  );
}
