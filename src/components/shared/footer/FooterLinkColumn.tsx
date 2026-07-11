import Link from "next/link";

import type { FooterLink } from "@/types/footer-types";

interface FooterLinkColumnProps {
  title: string;
  links: FooterLink[];
}

/**
 * Renders a titled list of navigational links.
 * Uses next/link (instead of the HeroUI Link) so internal routes get
 * proper client-side navigation and prefetching, per App Router best practice.
 */
export default function FooterLinkColumn({
  title,
  links,
}: FooterLinkColumnProps) {
  return (
    <nav aria-label={title}>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
