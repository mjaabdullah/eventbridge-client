import type { FooterSocialLink } from "@/types/footer-types";

interface SocialLinksProps {
  links: FooterSocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="flex items-center gap-3" aria-label="EventBridge on social media">
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit EventBridge on ${label}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
