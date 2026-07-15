import type { EventFilters, EventsApiResponse } from "./types";

const SORT_PARAM_MAP: Record<EventFilters["sort"], string> = {
  date_desc: "date_desc",
  price_asc: "price_asc",
  price_desc: "price_desc",
};

export async function fetchEvents(
  filters: EventFilters,
  limit: number,
  signal?: AbortSignal,
): Promise<EventsApiResponse> {
  const params = new URLSearchParams();

  if (filters.search.trim()) params.set("search", filters.search.trim());
  if (filters.category !== "all") params.set("category", filters.category);
  if (filters.location !== "all") params.set("location", filters.location);
  params.set("sort", SORT_PARAM_MAP[filters.sort]);
  params.set("page", String(filters.page));
  params.set("limit", String(limit));

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${baseUrl}/api/events?${params.toString()}`, {
    signal,
  });
  console.log(response, "in fetch fun");
  if (!response.ok) {
    throw new Error("Couldn't load events. Please try again.");
  }

  const payload = (await response.json()) as EventsApiResponse;

  if (!payload.success) {
    throw new Error("Couldn't load events. Please try again.");
  }

  return payload;
}
