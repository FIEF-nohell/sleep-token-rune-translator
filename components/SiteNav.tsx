"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Translator" },
  { href: "/decode", label: "Decode" },
  { href: "/alphabet", label: "Alphabet" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Primary">
      {LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "is-active" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
