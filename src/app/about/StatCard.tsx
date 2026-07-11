import { Card } from "@heroui/react";

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <Card className="border border-border bg-background text-center">
      <Card.Content>
        <p className="text-3xl font-bold text-primary sm:text-4xl">
          {value}
        </p>
        <p className="mt-2 text-sm text-foreground/70">{label}</p>
      </Card.Content>
    </Card>
  );
}
