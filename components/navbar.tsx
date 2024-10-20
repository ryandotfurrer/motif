import { navLinks } from "@/config/links";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between py-2">
      <span className="mr-auto">
        <Link href="/" className="text-xl font-bold tracking-tight">
          motif
        </Link>
      </span>
      <div className="flex items-center gap-4">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.name.toLowerCase()}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </nav>
  );
}
