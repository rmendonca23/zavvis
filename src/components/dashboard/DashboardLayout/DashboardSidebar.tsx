import { useState } from "react";
import { Activity, ChevronLeft, Menu, X } from "lucide-react";
import zavvisLogo from "../../../assets/logo.png"

import { menuGroups } from "./menuConfig";
import DashboardMenuItem from "./DashboardMenuItem";

interface Props {
  activePath: string;
  onNavigate: (path: string) => void;
}

export default function DashboardSidebar({
  activePath,
  onNavigate,
}: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X /> : <Menu />}
      </button>

      <aside
        className={[
          "dashboard-sidebar",
          collapsed ? "collapsed" : "",
          mobileOpen ? "mobile-open" : "",
        ].join(" ")}
      >
        <div className="sidebar-brand">
          <div className="brand-icon">
            <Activity size={21} />
          </div>

          {!collapsed && (
            <div className="brand-text">
              <img src={zavvisLogo} className="zavvisLogo" alt="Zavvis" />
              <small>FINANCE OBSERVABILITY</small>
            </div>
          )}
        </div>

        <div className="workspace-selector">
          <span className="online-dot" />
          {!collapsed && <span>Development Environment</span>}
        </div>

        <nav className="sidebar-navigation">
          {menuGroups.map((group) => (
            <section key={group.title} className="menu-group">
              {!collapsed && (
                <h3 className="menu-group-title">
                  {group.title}
                </h3>
              )}

              {group.items.map((item) => (
                <DashboardMenuItem
                  key={item.path}
                  item={item}
                  active={activePath === item.path}
                  onNavigate={navigate}
                />
              ))}
            </section>
          ))}
        </nav>

        <button
          className="collapse-button"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Collapse sidebar"
        >
          <ChevronLeft
            size={17}
            className={collapsed ? "rotated" : ""}
          />
          {!collapsed && <span>Collapse menu</span>}
        </button>
      </aside>
    </>
  );
}