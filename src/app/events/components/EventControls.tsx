"use client";

import { Label, ListBox, SearchField, Select } from "@heroui/react";

import { CATEGORY_OPTIONS, LOCATION_OPTIONS, SORT_OPTIONS } from "./constants";
import type { EventFilters, SortOption } from "./types";

interface EventControlsProps {
  filters: EventFilters;
  onChange: (partial: Partial<EventFilters>) => void;
}

const EventControls = ({ filters, onChange }: EventControlsProps) => {
  return (
    <section
      aria-label="Search, filter and sort events"
      className="rounded-2xl border border-border bg-brand-secondary/50 p-4 sm:p-5"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-1.5">
          <Label>Search</Label>
          <SearchField
            aria-label="Search events by title"
            value={filters.search}
            onChange={(value) => onChange({ search: value })}
          >
            <SearchField.Group className="bg-background">
              <SearchField.SearchIcon />
              <SearchField.Input placeholder="Search by event title..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Category</Label>
          <Select
            aria-label="Filter by category"
            value={filters.category}
            onChange={(value) =>
              onChange({ category: value ? String(value) : "all" })
            }
          >
            <Select.Trigger className="bg-background placeholder:text-red-500">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {CATEGORY_OPTIONS.map((option) => (
                  <ListBox.Item
                    key={option.id}
                    id={option.id}
                    textValue={option.label}
                  >
                    {option.label}
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Location</Label>
          <Select
            aria-label="Filter by location"
            value={filters.location}
            onChange={(value) =>
              onChange({ location: value ? String(value) : "all" })
            }
          >
            <Select.Trigger className="bg-background">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {LOCATION_OPTIONS.map((option) => (
                  <ListBox.Item
                    key={option.id}
                    id={option.id}
                    textValue={option.label}
                  >
                    {option.label}
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Sort By</Label>
          <Select
            aria-label="Sort events"
            value={filters.sort}
            onChange={(value) =>
              onChange({ sort: (value as SortOption) ?? "date_desc" })
            }
          >
            <Select.Trigger className="bg-background">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {SORT_OPTIONS.map((option) => (
                  <ListBox.Item
                    key={option.id}
                    id={option.id}
                    textValue={option.label}
                  >
                    {option.label}
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default EventControls;
