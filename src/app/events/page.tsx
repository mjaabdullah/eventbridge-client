import { Suspense } from "react";
import EventCardSkeleton from "./components/EventCardSkeleton";
import EventsExplorer from "./components/EventsExplorer";
import PageHeader from "./components/PageHeader";

const ExploreEventsPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <PageHeader />
      <Suspense fallback={<EventCardSkeleton />}>
        <EventsExplorer />
      </Suspense>
    </main>
  );
};

export default ExploreEventsPage;
