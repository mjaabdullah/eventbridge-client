import AddEventForm from "./AddEventForm";

const AddEventPage = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8 text-center sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
            New Event
          </span>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
            Create a New Event
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#0F172A]/60 sm:text-base">
            Fill in the details below to publish your event on EventBridge.
          </p>
        </div>

        <AddEventForm />
      </div>
    </main>
  );
};

export default AddEventPage;
