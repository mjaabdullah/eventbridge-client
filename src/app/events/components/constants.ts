import type { EventFilters, SortOption } from "./types";

export const CATEGORY_OPTIONS = [
  { id: "all", label: "All Categories" },
  { id: "music", label: "Music" },
  { id: "technology", label: "Technology" },
  { id: "business", label: "Business" },
  { id: "sports", label: "Sports" },
  { id: "arts", label: "Arts & Culture" },
  { id: "food", label: "Food & Drink" },
  { id: "health", label: "Health & Wellness" },
  { id: "education", label: "Education" },
] as const;

export const LOCATION_OPTIONS = [
  { id: "all", label: "All Locations" },
  { id: "dhaka", label: "Dhaka" },
  { id: "chittagong", label: "Chittagong" },
  { id: "sylhet", label: "Sylhet" },
  { id: "khulna", label: "Khulna" },
  { id: "rajshahi", label: "Rajshahi" },
  { id: "online", label: "Online" },
] as const;

export const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: "date_desc", label: "Event Date (Newest First)" },
  { id: "price_asc", label: "Ticket Price (Low to High)" },
  { id: "price_desc", label: "Ticket Price (High to Low)" },
];

export const DEFAULT_PAGE_SIZE = 6;

export const DEFAULT_FILTERS: EventFilters = {
  search: "",
  category: "all",
  location: "all",
  sort: "date_desc",
  page: 1,
};
