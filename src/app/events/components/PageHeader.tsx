const PageHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Explore Events
      </h1>
      <p className="max-w-2xl text-base text-foreground/60">
        Discover concerts, workshops, meetups, and conferences happening
        around you. Search, filter, and sort to find the event that fits
        your plans.
      </p>
    </div>
  );
};

export default PageHeader;
