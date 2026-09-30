import {
  LayoutDashboard,
  ArrowLeftRight,
  Activity,
  Landmark,
  ChartNoAxesCombined,
  ShieldCheck,
  Settings,
  Bell,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface MenuItem {
  label: string;
  path: string;
  icon: LucideIcon;
  badge?: string;
}

export interface MenuGroup {
  title: string;
  items: MenuItem[];
}

export const menuGroups: MenuGroup[] = [
  {
    title: "OVERVIEW",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "FINANCE OPERATIONS",
    items: [
      {
        label: "Transactions",
        path: "/transactions",
        icon: ArrowLeftRight,
      },
      {
        label: "System Health",
        path: "/system-health",
        icon: Activity,
      },
      {
        label: "Integrations",
        path: "/integrations",
        icon: Landmark,
      },
      {
        label: "Financial Reports",
        path: "/reports",
        icon: ChartNoAxesCombined,
      },
    ],
  },
  {
    title: "GOVERNANCE",
    items: [
      {
        label: "Audit Logs",
        path: "/audit",
        icon: ShieldCheck,
      },
      {
        label: "Alerts",
        path: "/alerts",
        icon: Bell,
        badge: "5",
      },
      {
        label: "Settings",
        path: "/settings",
        icon: Settings,
      },
    ],
  },
];