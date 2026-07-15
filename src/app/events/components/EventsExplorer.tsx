"use client";

import { useCallback, useEffect, useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_FILTERS, DEFAULT_PAGE_SIZE } from "./constants";
import EventControls from "./EventControls";
import EventGrid from "./EventGrid";
import EventPagination from "./EventPagination";
import { fetchEvents } from "./fetchEvents";
import type { EventFilters, EventItem, PaginationMeta } from "./types";

const EventsExplorer = () => {
  const [filters, setFilters] = useState<EventFilters>(DEFAULT_FILTERS);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadEvents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchEvents(
          filters,
          DEFAULT_PAGE_SIZE,
          controller.signal,
        );
        setEvents(response.data);
        setPagination(response.pagination);
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : "Something went wrong.");
        setEvents([]);
        setPagination(null);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    const debounceId = setTimeout(loadEvents, 300);

    return () => {
      clearTimeout(debounceId);
      controller.abort();
    };
  }, [filters]);

  // const updateFilters = useCallback((partial: Partial<EventFilters>) => {
  //   setFilters((prev) => ({ ...prev, ...partial, page: 1 }));
  // }, []);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateFilters = useCallback(
    (partial: Partial<EventFilters>) => {
      setFilters((prev) => {
        const updated = { ...prev, ...partial, page: 1 };

        const params = new URLSearchParams(searchParams.toString());

        Object.entries(updated).forEach(([key, value]) => {
          if (value) {
            params.set(key, String(value));
          } else {
            params.delete(key);
          }
        });

        router.push(`?${params.toString()}`);

        return updated;
      });
    },
    [router, searchParams],
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setFilters((prev) => ({ ...prev, page }));

      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(page));
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  return (
    <div className="flex flex-col gap-8">
      <EventControls filters={filters} onChange={updateFilters} />

      <EventGrid events={events} isLoading={isLoading} error={error} />

      {!isLoading && !error && pagination && pagination.totalPages > 1 && (
        <EventPagination
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default EventsExplorer;
