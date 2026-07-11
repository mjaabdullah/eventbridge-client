import type { IconType } from "react-icons";
import { Card } from "@heroui/react";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="border border-border bg-background">
      <Card.Header>
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <Card.Title className="mt-4 text-base font-semibold text-foreground">
          {title}
        </Card.Title>
        <Card.Description className="mt-2 text-sm leading-relaxed text-foreground/70">
          {description}
        </Card.Description>
      </Card.Header>
    </Card>
  );
}
