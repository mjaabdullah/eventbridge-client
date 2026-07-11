import type { IconType } from "react-icons";
import {
  FaBolt,
  FaCalendarDays,
  FaChartLine,
  FaGlobe,
  FaShieldHalved,
  FaTicket,
} from "react-icons/fa6";

export interface AboutFeature {
  icon: IconType;
  title: string;
  description: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export const features: AboutFeature[] = [
  {
    icon: FaCalendarDays,
    title: "Easy Event Creation",
    description:
      "Build and publish a polished event page in minutes — no design or technical skills required.",
  },
  {
    icon: FaTicket,
    title: "Seamless Ticketing & Registration",
    description:
      "Sell tickets or manage free RSVPs with a checkout flow attendees can complete in seconds.",
  },
  {
    icon: FaBolt,
    title: "Real-Time Attendee Management",
    description:
      "Track registrations, check-ins, and attendee lists live, from any device, as your event unfolds.",
  },
  {
    icon: FaShieldHalved,
    title: "Secure & Reliable",
    description:
      "Attendee data and payments are protected with industry-standard encryption and secure infrastructure.",
  },
  {
    icon: FaChartLine,
    title: "Powerful Analytics",
    description:
      "Understand ticket sales, attendance trends, and engagement without exporting a single spreadsheet.",
  },
  {
    icon: FaGlobe,
    title: "Built for Every Event Size",
    description:
      "From an intimate workshop to a multi-day conference, EventBridge scales alongside your event.",
  },
];

export const stats: AboutStat[] = [
  { value: "12,000+", label: "Events Hosted" },
  { value: "3,500+", label: "Active Organizers" },
  { value: "850K+", label: "Attendees Reached" },
  { value: "45+", label: "Countries Represented" },
];
