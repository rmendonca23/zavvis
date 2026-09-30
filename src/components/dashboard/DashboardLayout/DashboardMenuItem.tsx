import type { MenuItem } from "./menuConfig";

interface Props {
  item: MenuItem;
  active: boolean;
  onNavigate: (path: string) => void;
}

export default function DashboardMenuItem({
  item,
  active,
  onNavigate,
}: Props) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      className={`menu-item ${active ? "active" : ""}`}
      onClick={() => onNavigate(item.path)}
      aria-current={active ? "page" : undefined}
    >
      <Icon size={18} strokeWidth={1.8} />

      <span>{item.label}</span>

      {item.badge && (
        <span className="menu-badge">{item.badge}</span>
      )}
    </button>
  );
}