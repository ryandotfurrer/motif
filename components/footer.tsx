import { footerLinks } from "@/config/links";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="space-y-4 pt-12">
      <div className="grid space-y-4 md:grid-cols-4 md:space-y-0">
        <div>
          <span className="font-bold text-foreground">General</span>
          <div className="flex flex-col">
            {footerLinks
              .find((link) => link.category === "generalLinks")
              ?.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
          </div>
        </div>
        <div>
          <span className="font-bold text-foreground">Socials</span>
          <div className="flex flex-col">
            {footerLinks
              .find((link) => link.category === "socialLinks")
              ?.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
          </div>
        </div>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Motif | built by{" "}
        <a
          href="https://ryanfurrer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground"
        >
          Ryan Furrer
        </a>
      </p>
    </footer>
  );
}
