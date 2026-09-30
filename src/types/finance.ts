export type Status = "healthy" | "warning" | "critical" | "success" | "failed";

export interface Metric {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: string;
}

export interface Transaction {
  id: string;
  reference: string;
  customer: string;
  type: string;
  amount: number;
  currency: string;
  status: Status;
  timestamp: string;
}

export interface SystemService {
  id: string;
  name: string;
  status: Status;
  latency: number;
  uptime: number;
  lastChecked: string;
}

export interface FinanceAlert {
  id: string;
  title: string;
  description: string;
  severity: "critical" | "warning" | "info";
  timestamp: string;
}

export interface ChartPoint {
  time: string;
  volume: number;
  transactions: number;
}