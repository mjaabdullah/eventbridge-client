import { Card } from "@heroui/react";
import type { IconType } from "react-icons";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

interface ContactInfoItem {
  icon: IconType;
  title: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: FiMail,
    title: "Email",
    value: "support@eventbridge.com",
    href: "mailto:support@eventbridge.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: FiMapPin,
    title: "Office Address",
    value: "123 Convention Ave, Suite 400, San Francisco, CA 94103",
  },
  {
    icon: FiClock,
    title: "Working Hours",
    value: "Mon – Fri, 9:00 AM – 6:00 PM (PST)",
  },
];

export default function ContactInfoCards() {
  return (
    <section
      aria-label="Contact information"
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map(({ icon: Icon, title, value, href }) => (
          <Card key={title} className="border border-border bg-background">
            <Card.Content className="flex flex-col gap-4 p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {title}
                </h3>
                {href ? (
                  <a
                    href={href}
                    className="mt-1 block text-sm text-foreground/70 underline-offset-2 hover:text-primary hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-foreground/70">{value}</p>
                )}
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}
