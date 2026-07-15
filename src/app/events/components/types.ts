export interface EventItem {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  eventDate: string; // ISO date string
  ticketPrice: number;
}

export interface PaginationMeta {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface EventsApiResponse {
  success: boolean;
  data: EventItem[];
  pagination: PaginationMeta;
}

export type SortOption = "date_desc" | "price_asc" | "price_desc";

export interface EventFilters {
  search: string;
  category: string; // "all" or a category id
  location: string; // "all" or a location id
  sort: SortOption;
  page: number;
}
