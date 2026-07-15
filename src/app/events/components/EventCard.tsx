import { Card, Chip, buttonVariants } from "@heroui/react";
import Link from "next/link";

import {
  formatEventDate,
  formatPrice,
  truncateDescription,
} from "./formatters";
import type { EventItem } from "./types";

interface EventCardProps {
  event: EventItem;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl p-0">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-brand-secondary">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute left-3 top-3">
          <Chip size="sm" color="accent" variant="soft">
            {event.category}
          </Chip>
        </div>
      </div>

      <Card.Content className="flex flex-1 flex-col gap-3 p-4">
        <Card.Title className="line-clamp-2 text-base leading-snug">
          {event.title}
        </Card.Title>

        <Card.Description className="line-clamp-3 flex-1 text-sm text-foreground">
          {truncateDescription(event.description)}
        </Card.Description>

        <div className="flex flex-col gap-1 text-sm text-foreground/60">
          <span>📍 {event.location}</span>
          <span>🗓️ {formatEventDate(event.eventDate)}</span>
        </div>

        <span className="text-base font-semibold text-brand-accent">
          {formatPrice(event.ticketPrice)}
        </span>

        <Link
          href={`/events/details/${event._id}`}
          className={`${buttonVariants({ variant: "outline", size: "sm" })} w-full justify-center`}
        >
          View Details
        </Link>
      </Card.Content>
    </Card>
  );
};

export default EventCard;
