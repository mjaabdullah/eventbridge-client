import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import type {
  FooterContactInfo,
  FooterLink,
  FooterSocialLink,
} from "@/types/footer-types";

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Explore Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const supportLinks: FooterLink[] = [
  { label: "Help Center", href: "/help" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const socialLinks: FooterSocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/eventbridge",
    icon: FaFacebookF,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/eventbridge",
    icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/eventbridge",
    icon: FaLinkedinIn,
  },
];

export const contactInfo: FooterContactInfo = {
  email: "support@eventbridge.com",
  phone: "+1 (555) 123-4567",
  address: "123 Convention Ave, Suite 400, San Francisco, CA 94103",
};
