import EventsExplorer from "./components/EventsExplorer";
import PageHeader from "./components/PageHeader";

const ExploreEventsPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <PageHeader />
      <EventsExplorer />
    </main>
  );
};

export default ExploreEventsPage;
