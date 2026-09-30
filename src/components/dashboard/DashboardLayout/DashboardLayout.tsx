import { useState, type ReactNode } from "react";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import {
  Activity,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Database,
  Wallet,
  RefreshCw,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  metrics,
  transactions,
  systemServices,
  alerts,
  chartData,
} from "../../../data/mockData";

import "../DashboardLayout/dashboardLayout.css";

const iconMap: Record<string, React.ReactNode> = {
  wallet: <Wallet />,
  activity: <Activity />,
  "check-circle": <CheckCircle2 />,
  "alert-circle": <AlertTriangle />,
  clock: <Clock />,
  database: <Database />,
};

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [activePath, setActivePath] = useState("/dashboard");

  const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/transactions": "Transactions",
    "/system-health": "System Health",
    "/integrations": "Integrations",
    "/reports": "Financial Reports",
    "/audit": "Audit Logs",
    "/alerts": "Alerts",
    "/settings": "Settings",
  };

  return (
    <div className="dashboard-layout">
      <DashboardSidebar
        activePath={activePath}
        onNavigate={setActivePath}
      />

      <main className="dashboard-main">
        <DashboardHeader
          title={pageTitles[activePath] ?? "Dashboard"}
        />


        <main className="main-content">

            <header className="topbar">
            <div>
                <h1>Financial Overview</h1>
                <p>Monitor financial operations and system performance</p>
            </div>

            <div className="topbar-actions">
                <span className="live-badge">
                <span className="pulse-dot" />
                LIVE MONITORING
                </span>
                <button className="icon-button" aria-label="Refresh dashboard">
                <RefreshCw size={18} />
                </button>
                <div className="avatar">AD</div>
            </div>
            </header>

            <section className="metrics-grid">
            {metrics.map((metric) => (
                <div className="metric-card" key={metric.id}>
                <div className="metric-top">
                    <span className="metric-title">{metric.title}</span>
                    <div className="metric-icon">
                    {iconMap[metric.icon]}
                    </div>
                </div>

                <div className="metric-value">{metric.value}</div>

                <div className={`metric-change ${metric.trend}`}>
                    {metric.trend === "up" ? (
                    <ArrowUpRight size={16} />
                    ) : metric.trend === "down" ? (
                    <ArrowDownRight size={16} />
                    ) : null}
                    {metric.change}
                    <span className="change-caption">vs previous period</span>
                </div>
                </div>
            ))}
            </section>

            <section className="content-grid">

            <div className="panel chart-panel">
                <div className="panel-header">
                <div>
                    <h2>Transaction Volume</h2>
                    <p>Financial throughput over the last 24 hours</p>
                </div>
                <span className="period-label">Last 24 hours</span>
                </div>

                <div className="chart-summary">
                <strong>$8.42M</strong>
                <span className="positive">+12.8%</span>
                </div>

                <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.28} />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid stroke="#263244" strokeDasharray="3 3" />

                    <XAxis
                        dataKey="time"
                        stroke="#718096"
                        tickLine={false}
                        axisLine={false}
                    />

                    <YAxis
                        stroke="#718096"
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value / 1000000}M`}
                    />

                    <Tooltip
                        contentStyle={{
                        background: "#172235",
                        border: "1px solid #344256",
                        borderRadius: "10px",
                        color: "#fff",
                        }}
                        formatter={(value) => [
                        `$${Number(value).toLocaleString()}`,
                        "Volume",
                        ]}
                    />

                    <Area
                        type="monotone"
                        dataKey="volume"
                        stroke="#22c55e"
                        strokeWidth={2.5}
                        fill="url(#volumeGradient)"
                    />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
            </div>

            <div className="panel health-panel">
                <div className="panel-header">
                <div>
                    <h2>System Health</h2>
                    <p>Service availability and latency</p>
                </div>
                <span className="health-count">5 services</span>
                </div>

                <div className="service-list">
                {systemServices.map((service) => (
                    <div className="service-row" key={service.id}>
                    <div className="service-info">
                        <span className={`status-dot ${service.status}`} />
                        <div>
                        <strong>{service.name}</strong>
                        <small>{service.uptime}% uptime</small>
                        </div>
                    </div>

                    <div className="service-latency">
                        <strong>{service.latency} ms</strong>
                        <small>Latency</small>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            </section>

            <section className="content-grid bottom-grid">

            <div className="panel transactions-panel">
                <div className="panel-header">
                <div>
                    <h2>Recent Transactions</h2>
                    <p>Latest financial activity</p>
                </div>
                <button className="text-button">View all</button>
                </div>

                <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Customer</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    </thead>

                    <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                        <td className="reference">
                            {transaction.reference}
                        </td>
                        <td>{transaction.customer}</td>
                        <td>{transaction.type}</td>
                        <td className="amount">
                            {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: transaction.currency,
                            }).format(transaction.amount)}
                        </td>
                        <td>
                            <span className={`status-badge ${transaction.status}`}>
                            {transaction.status}
                            </span>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>

            <div className="panel alerts-panel">
                <div className="panel-header">
                <div>
                    <h2>Operational Alerts</h2>
                    <p>Recent events requiring attention</p>
                </div>
                <span className="alert-count">{alerts.length}</span>
                </div>

                <div className="alert-list">
                {alerts.map((alert) => (
                    <div className="alert-item" key={alert.id}>
                    <div className={`alert-icon ${alert.severity}`}>
                        <AlertTriangle size={17} />
                    </div>

                    <div className="alert-content">
                        <strong>{alert.title}</strong>
                        <p>{alert.description}</p>
                        <small>{alert.timestamp}</small>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            </section>

            <footer className="dashboard-footer">
            <span>FinSight Observability</span>
            <span>Demo environment · Synthetic data</span>
            <span>Last updated: 09:45:00 UTC</span>
            </footer>

      </main>


      </main>
    </div>
  );
}