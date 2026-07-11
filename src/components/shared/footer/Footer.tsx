import { Link, Separator } from "@heroui/react";

import FooterLinkColumn from "./FooterLinkColumn";
import SocialLinks from "./SocialLinks";
import { contactInfo, quickLinks, socialLinks, supportLinks } from "./footer";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const telHref = contactInfo.phone.replace(/[^+\d]/g, "");

  return (
    <footer className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Section 1: Brand */}
          <div>
            <span className="text-xl font-bold text-foreground">
              Event<span className="text-primary">Bridge</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/70">
              EventBridge is an all-in-one platform for discovering, creating,
              and managing events. From intimate meetups to large-scale
              conferences, we help organizers and attendees connect with ease.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <FooterLinkColumn title="Quick Links" links={quickLinks} />

          {/* Section 3: Support */}
          <FooterLinkColumn title="Support" links={supportLinks} />

          {/* Section 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-foreground/70">
              <p>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-foreground/70 hover:text-primary"
                >
                  {contactInfo.email}
                </Link>
              </p>
              <p>
                <Link
                  href={`tel:${telHref}`}
                  className="text-sm text-foreground/70 hover:text-primary"
                >
                  {contactInfo.phone}
                </Link>
              </p>
              <p>{contactInfo.address}</p>
            </address>

            <div className="mt-5">
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-border" />

        <p className="text-center text-sm text-foreground/60">
          © {currentYear} EventBridge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
