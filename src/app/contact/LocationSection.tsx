import { FiMapPin } from "react-icons/fi";

export default function LocationSection() {
  return (
    <section
      aria-labelledby="location-heading"
      className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8"
    >
      <div className="rounded-2xl border border-border bg-secondary p-8 sm:p-10">
        <h2
          id="location-heading"
          className="text-2xl font-semibold text-foreground sm:text-3xl"
        >
          Visit our office
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground/70">
          Stop by our San Francisco office during working hours, or send us a
          message beforehand to schedule a time.
        </p>

        <div
          role="img"
          aria-label="Map placeholder showing the EventBridge office location"
          className="mt-8 flex h-64 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-background sm:h-80"
        >
          <FiMapPin size={28} className="text-primary" aria-hidden="true" />
          <p className="text-sm font-medium text-foreground/70">
            123 Convention Ave, Suite 400, San Francisco, CA 94103
          </p>
          <p className="text-xs text-foreground/50">
            Map integration will be added in a future update
          </p>
        </div>
      </div>
    </section>
  );
}
