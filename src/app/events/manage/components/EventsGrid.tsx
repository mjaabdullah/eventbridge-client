import EventCard from "./EventCard";
import { Event } from "./types";

interface EventsGridProps {
  events: Event[];
}

const EventsGrid = ({ events }: EventsGridProps) => {
  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-secondary/40 px-6 py-20 text-center">
        <h3 className="text-lg font-semibold text-foreground">No events yet</h3>
        <p className="mt-2 max-w-sm text-sm text-foreground/60">
          You haven&apos;t created any events yet. Once you do, they will show
          up here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventsGrid;
