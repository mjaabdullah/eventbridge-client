import { Button, Card } from "@heroui/react";
import type { Metadata } from "next";
import Link from "next/link";

import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";
import { features, stats } from "./about";

export const metadata: Metadata = {
  title: "About | EventBridge",
  description:
    "Learn what EventBridge is, why it exists, and how it helps organizers plan and run events from one platform.",
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* 1. Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            About EventBridge
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            EventBridge is an all-in-one event management platform that helps
            organizers create, promote, and run events, while giving attendees a
            simple way to discover and register for the ones that matter to
            them.
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Our Story
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/70">
          <p>
            EventBridge started with a simple observation: organizing an event
            usually means juggling a spreadsheet for registrations, a separate
            tool for ticket sales, a group chat for updates, and a slide deck
            for the schedule. Small details slip through the cracks, and
            organizers end up spending more time managing tools than managing
            their event.
          </p>
          <p>
            We built EventBridge to close that gap. It brings event creation,
            ticketing, attendee management, and reporting into one connected
            workspace, so organizers can focus on the event itself, not the
            logistics of running five different apps at once.
          </p>
        </div>
      </section>

      {/* 3. Our Mission & Vision */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="border border-border bg-background">
              <Card.Header>
                <Card.Title className="text-xl font-semibold text-foreground">
                  Our Mission
                </Card.Title>
                <Card.Description className="mt-3 text-sm leading-relaxed text-foreground/70">
                  To give every organizer — from a 20-person meetup to a
                  5,000-person conference — the tools to plan, promote, and run
                  their event from a single dashboard.
                </Card.Description>
              </Card.Header>
            </Card>

            <Card className="border border-border bg-background">
              <Card.Header>
                <Card.Title className="text-xl font-semibold text-foreground">
                  Our Vision
                </Card.Title>
                <Card.Description className="mt-3 text-sm leading-relaxed text-foreground/70">
                  A world where discovering and attending great events is as
                  effortless as creating them, with organizers and attendees
                  meeting on one connected platform.
                </Card.Description>
              </Card.Header>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Why Choose EventBridge */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Why Choose EventBridge
        </h2>
        <p className="mt-3 max-w-2xl text-base text-foreground/70">
          Everything organizers need to run an event well, in one place.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* 5. Platform Statistics */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Platform Statistics
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 sm:py-20 lg:px-10">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Ready to bring your next event to life?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-foreground/70">
          Join organizers who plan, promote, and manage their events on
          EventBridge — or find your next event to attend.
        </p>
        <div className="mt-8">
          <Button
            variant="primary"
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
          >
            <Link href="/events">Explore Events</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
