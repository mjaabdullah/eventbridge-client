"use client";

import { Button, FieldError, Label, ListBox, Select } from "@heroui/react";
import { useState } from "react";
import FormField from "./FormField";

interface EventFormData {
  title: string;
  description: string;
  category: string;
  location: string;
  eventDate: string;
  eventTime: string;
  ticketPrice: string;
  organizerName: string;
  image: string;
}

type EventFormErrors = Partial<Record<keyof EventFormData, string>>;

const CATEGORY_OPTIONS = [
  "Music",
  "Business",
  "Technology",
  "Sports",
  "Education",
  "Workshop",
  "Festival",
  "Charity",
];

const INITIAL_FORM_DATA: EventFormData = {
  title: "",
  description: "",
  category: "",
  location: "",
  eventDate: "",
  eventTime: "",
  ticketPrice: "",
  organizerName: "",
  image: "",
};

const isValidUrl = (value: string) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

const validateForm = (formData: EventFormData): EventFormErrors => {
  const errors: EventFormErrors = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!formData.title.trim()) errors.title = "Event title is required.";
  if (!formData.description.trim())
    errors.description = "Description is required.";
  if (!formData.category) errors.category = "Please select a category.";
  if (!formData.location.trim()) errors.location = "Location is required.";

  if (!formData.eventDate) {
    errors.eventDate = "Event date is required.";
  } else {
    const selectedDate = new Date(formData.eventDate);
    if (selectedDate < today) {
      errors.eventDate = "Event date cannot be in the past.";
    }
  }

  if (!formData.eventTime) errors.eventTime = "Event time is required.";

  if (!formData.ticketPrice.trim()) {
    errors.ticketPrice = "Ticket price is required.";
  } else if (
    Number.isNaN(Number(formData.ticketPrice)) ||
    Number(formData.ticketPrice) <= 0
  ) {
    errors.ticketPrice = "Ticket price must be a positive number.";
  }

  if (!formData.organizerName.trim())
    errors.organizerName = "Organizer name is required.";

  if (!formData.image.trim()) {
    errors.image = "Event image URL is required.";
  } else if (!isValidUrl(formData.image)) {
    errors.image = "Please enter a valid URL.";
  }

  return errors;
};

const AddEventForm = () => {
  const [formData, setFormData] = useState<EventFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<EventFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof EventFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    console.log(formData, "in form");
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-5">
        <FormField
          id="title"
          label="Event Title"
          value={formData.title}
          onChange={(value) => updateField("title", value)}
          error={errors.title}
          placeholder="e.g. Tech Innovation Summit 2026"
        />

        <FormField
          id="description"
          label="Description"
          value={formData.description}
          onChange={(value) => updateField("description", value)}
          error={errors.description}
          placeholder="Tell attendees what this event is about..."
          multiline
          rows={5}
        />

        <Select
          selectedKey={formData.category || null}
          onSelectionChange={(key) => updateField("category", String(key))}
          isRequired
          isInvalid={!!errors.category}
          className="flex flex-col gap-1.5"
        >
          <Label className="text-sm font-medium text-[#0F172A]">Category</Label>
          <Select.Trigger className="flex w-full items-center justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-sm text-[#0F172A] outline-none transition-colors focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20">
            <Select.Value className="text-[#0F172A] data-[placeholder]:text-[#0F172A]/40" />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover className="w-[--trigger-width] rounded-lg border border-[#E2E8F0] bg-white p-1 shadow-md">
            <ListBox>
              {CATEGORY_OPTIONS.map((option) => (
                <ListBox.Item
                  key={option}
                  id={option}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm text-[#0F172A] outline-none data-[focused]:bg-[#ECFEFF] data-[selected]:font-medium data-[selected]:text-[#7C3AED]"
                >
                  {option}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
          {errors.category && (
            <FieldError className="text-xs font-medium text-red-500">
              {errors.category}
            </FieldError>
          )}
        </Select>

        <FormField
          id="location"
          label="Location"
          value={formData.location}
          onChange={(value) => updateField("location", value)}
          error={errors.location}
          placeholder="e.g. Dhaka Convention Hall"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            id="eventDate"
            label="Event Date"
            type="date"
            value={formData.eventDate}
            onChange={(value) => updateField("eventDate", value)}
            error={errors.eventDate}
          />

          <FormField
            id="eventTime"
            label="Event Time"
            type="time"
            value={formData.eventTime}
            onChange={(value) => updateField("eventTime", value)}
            error={errors.eventTime}
          />
        </div>

        <FormField
          id="ticketPrice"
          label="Ticket Price"
          type="number"
          value={formData.ticketPrice}
          onChange={(value) => updateField("ticketPrice", value)}
          error={errors.ticketPrice}
          placeholder="e.g. 499"
          min="0"
          step="0.01"
        />

        <FormField
          id="organizerName"
          label="Organizer Name"
          value={formData.organizerName}
          onChange={(value) => updateField("organizerName", value)}
          error={errors.organizerName}
          placeholder="e.g. Bridge Events Co."
        />

        <FormField
          id="image"
          label="Event Image URL"
          type="url"
          value={formData.image}
          onChange={(value) => updateField("image", value)}
          error={errors.image}
          placeholder="https://example.com/event-banner.jpg"
        />
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Button
          type="button"
          onPress={handleReset}
          isDisabled={isSubmitting}
          className="rounded-lg border border-[#E2E8F0] bg-[#ECFEFF] px-5 py-2.5 text-sm font-medium text-[#0F172A] outline-none transition-colors hover:bg-[#ECFEFF]/70 focus-visible:ring-2 focus-visible:ring-[#7C3AED]/40 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reset
        </Button>
        <Button
          type="submit"
          isDisabled={isSubmitting}
          className="rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-medium text-white outline-none transition-colors hover:bg-[#7C3AED]/90 focus-visible:ring-2 focus-visible:ring-[#7C3AED]/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default AddEventForm;
