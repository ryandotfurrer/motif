import { ModeToggle } from "./mode-toggle";
import { navLinks } from "@/config/links";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="mb-12 flex flex-row items-center justify-between py-2">
      <span className="mr-auto">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground transition-all duration-300 hover:text-primary hover:drop-shadow-[0px_0px_12px_rgba(251,191,36,1)]"
        >
          motif
        </Link>
      </span>
      <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
}
