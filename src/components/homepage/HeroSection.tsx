import NextLink from "next/link";
import type { IconType } from "react-icons";
import {
  HiArrowRight,
  HiOutlineCalendarDays,
  HiOutlineSparkles,
  HiOutlineTicket,
  HiOutlineUsers,
} from "react-icons/hi2";
import EventHighlightCard from "./EventHighlightCard";

interface StatItem {
  label: string;
  value: string;
  icon: IconType;
}

const STATS: StatItem[] = [
  { label: "Total Events", value: "1,200+", icon: HiOutlineCalendarDays },
  { label: "Active Organizers", value: "350+", icon: HiOutlineUsers },
  { label: "Happy Attendees", value: "50K+", icon: HiOutlineTicket },
];

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[60vh] w-full items-center overflow-hidden bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:min-h-[70vh] lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="flex flex-col items-start gap-6 text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#ECFEFF] px-3 py-1 text-xs font-medium text-[#7C3AED]">
              <HiOutlineSparkles className="h-3.5 w-3.5" aria-hidden="true" />
              The all-in-one event platform
            </span>

            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.25rem]"
            >
              Discover, Create, and Manage Events That{" "}
              <span className="text-[#7C3AED]">Bring People Together</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#0F172A]/70 sm:text-lg">
              EventBridge helps you find events worth attending and gives organizers the
              tools to plan, publish, and manage them from one simple dashboard. From
              local meetups to large conferences, everything stays organized in one
              place.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <NextLink
                href="/explore-events"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white no-underline outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2"
              >
                Explore Events
                <HiArrowRight className="h-4 w-4" aria-hidden="true" />
              </NextLink>
              <NextLink
                href="/add-event"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#ECFEFF] px-6 py-3 text-sm font-semibold text-[#0F172A] no-underline outline-none transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED] focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2"
              >
                Create Event
              </NextLink>
            </div>
          </div>

          {/* Visual / illustration placeholder */}
          <div className="relative mx-auto w-full max-w-md pb-6 lg:max-w-none">
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-[#ECFEFF] to-white">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F97316]/10" />
              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#7C3AED]/10" />
              <HiOutlineCalendarDays
                className="relative h-28 w-28 text-[#7C3AED] sm:h-32 sm:w-32"
                aria-hidden="true"
              />
              <span className="sr-only">
                Illustration placeholder representing an event calendar
              </span>
            </div>

            <EventHighlightCard />
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 lg:mt-20">
          {STATS.map(({ label, value, icon: Icon }) => (
            <article
              key={label}
              className="flex flex-col items-start gap-2 rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ECFEFF] text-[#7C3AED] sm:h-10 sm:w-10">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </span>
              <p className="text-lg font-bold text-[#0F172A] sm:text-2xl">{value}</p>
              <p className="text-xs text-[#0F172A]/60 sm:text-sm">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
