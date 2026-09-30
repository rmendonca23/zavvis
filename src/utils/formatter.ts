export const formatCurrency = (
  amount: number,
  currency = "USD"
) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);

export const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US").format(value);

export const formatPercentage = (value: number) =>
  `${value.toFixed(2)}%`;

export const formatTimestamp = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date(value));