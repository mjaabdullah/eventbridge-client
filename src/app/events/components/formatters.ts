/**
 * Truncates a description to roughly 100-120 characters, cutting on a
 * word boundary so text never breaks mid-word.
 */
export const truncateDescription = (
  description: string,
  min = 100,
  max = 120,
): string => {
  const trimmed = description.trim();
  if (trimmed.length <= max) return trimmed;

  const slice = trimmed.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  const safeSlice = lastSpace > min ? slice.slice(0, lastSpace) : slice;

  return `${safeSlice.trim()}…`;
};

export const formatEventDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const formatPrice = (price: number): string => {
  if (!price || isNaN(price) || price <= 0) return "Free";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
    currencyDisplay: "symbol",
    maximumFractionDigits: Number.isInteger(price) ? 0 : 2,
  }).format(price);
};
