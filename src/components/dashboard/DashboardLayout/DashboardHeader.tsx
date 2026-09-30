import { Bell, Search } from "lucide-react";

interface Props {
  title: string;
}

export default function DashboardHeader({ title }: Props) {
  return (
    <header className="dashboard-header">
      <div>
        <span className="breadcrumb">Workspace /</span>
        <strong>{title}</strong>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <Search size={16} />
          <input placeholder="Search..." aria-label="Search" />
        </div>

        <button className="header-icon" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot" />
        </button>

        <div className="user-profile">
          <span className="avatar">FD</span>
          <div>
            <strong>Finance Demo</strong>
            <small>Administrator</small>
          </div>
        </div>
      </div>
    </header>
  );
}