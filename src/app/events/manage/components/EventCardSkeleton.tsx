const EventCardSkeleton = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="h-44 w-full animate-pulse bg-secondary" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="h-4 w-3/4 animate-pulse rounded bg-secondary" />
        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-secondary" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-secondary" />
          <div className="h-3 w-1/2 animate-pulse rounded bg-secondary" />
        </div>
        <div className="mt-auto flex gap-3 pt-4">
          <div className="h-9 flex-1 animate-pulse rounded-lg bg-secondary" />
          <div className="h-9 flex-1 animate-pulse rounded-lg bg-secondary" />
        </div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;
