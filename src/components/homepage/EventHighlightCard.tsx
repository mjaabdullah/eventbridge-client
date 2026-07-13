"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@heroui/react";
import { HiOutlineCalendarDays } from "react-icons/hi2";

interface HighlightEvent {
  title: string;
  meta: string;
}

const HIGHLIGHTS: HighlightEvent[] = [
  { title: "Tech Summit 2026", meta: "Aug 14 · San Francisco" },
  { title: "Music Fest Weekend", meta: "Sep 02 · Austin" },
  { title: "Startup Founders Meetup", meta: "Sep 20 · New York" },
  { title: "Design Conference", meta: "Oct 05 · Seattle" },
];

const EventHighlightCard = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const rotate = setInterval(() => {
      setIsVisible(false);

      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
        setIsVisible(true);
      }, 250);
    }, 3500);

    return () => clearInterval(rotate);
  }, []);

  const current = HIGHLIGHTS[index];

  return (
    <Card
      role="status"
      aria-live="polite"
      className="absolute -bottom-6 left-6 w-64 rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-lg sm:left-8"
    >
      <CardContent className="flex items-center gap-3 p-0">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ECFEFF] text-[#7C3AED]">
          <HiOutlineCalendarDays className="h-5 w-5" aria-hidden="true" />
        </span>
        <div
          className={`min-w-0 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="truncate text-xs font-medium uppercase tracking-wide text-[#7C3AED]">
            Trending now
          </p>
          <p className="truncate text-sm font-semibold text-[#0F172A]">{current.title}</p>
          <p className="truncate text-xs text-[#0F172A]/60">{current.meta}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventHighlightCard;
