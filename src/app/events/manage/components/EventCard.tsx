import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock, FiMapPin, FiTag, FiUser } from "react-icons/fi";
import DeleteEventDialog from "./DeleteEventDialog";
import { Event } from "./types";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-44 w-full overflow-hidden bg-secondary">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          <FiTag className="size-3" />
          {event.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="line-clamp-1 text-base font-semibold text-foreground">
          {event.title}
        </h3>

        <div className="flex flex-col gap-2 text-sm text-foreground/60">
          <div className="flex items-center gap-2">
            <FiMapPin className="size-4 shrink-0 text-primary" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCalendar className="size-4 shrink-0 text-primary" />
            <span>{event.eventDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="size-4 shrink-0 text-primary" />
            <span>{event.eventTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiUser className="size-4 shrink-0 text-primary" />
            <span className="line-clamp-1">{event.organizerName}</span>
          </div>
        </div>

        <span className="mt-auto text-lg font-semibold text-foreground">
          {event.ticketPrice === 0 ? "Free" : `$${event.ticketPrice}`}
        </span>

        <div className="flex items-center gap-3 pt-1">
          <Link
            href={`/events/${event._id}`}
            className="flex flex-1 items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            View Details
          </Link>
          <DeleteEventDialog eventId={event._id} eventTitle={event.title} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
