import type { IconType } from "react-icons";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface FooterContactInfo {
  email: string;
  phone: string;
  address: string;
}
