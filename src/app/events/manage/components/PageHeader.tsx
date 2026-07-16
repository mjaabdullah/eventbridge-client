const PageHeader = () => {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
        Manage Events
      </h1>
      <p className="text-sm text-foreground/60 sm:text-base">
        View and manage all the events you have created.
      </p>
    </div>
  );
};

export default PageHeader;
