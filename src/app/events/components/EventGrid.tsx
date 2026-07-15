import { DEFAULT_PAGE_SIZE } from "./constants";
import EmptyState from "./EmptyState";
import EventCard from "./EventCard";
import EventCardSkeleton from "./EventCardSkeleton";
import type { EventItem } from "./types";

interface EventGridProps {
  events: EventItem[];
  isLoading: boolean;
  error: string | null;
}

const EventGrid = ({ events, isLoading, error }: EventGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: DEFAULT_PAGE_SIZE }).map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <EmptyState title="Couldn't load events" description={error} />;
  }

  if (events.length === 0) {
    return (
      <EmptyState
        title="No events found"
        description="Try adjusting your search or filters to find what you're looking for."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;
