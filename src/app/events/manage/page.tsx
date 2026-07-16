import EventsGrid from "./components/EventsGrid";
import PageHeader from "./components/PageHeader";
import { mockEvents } from "./components/mock-events";

const ManageEventsPage = () => {
  // TODO: Replace mockEvents with events fetched for the logged-in user (createdBy).
  const events = mockEvents;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader />
        <EventsGrid events={events} />
      </div>
    </div>
  );
};

export default ManageEventsPage;
