import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Wrench,
  TrainFront,
  ClipboardList,
  Route,
  FlaskConical,
  Bell,
  BarChart3,
  LogOut,
  ChevronRight,
} from "lucide-react";

function UserSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Dashboard",
      path: "/user",
      icon: LayoutDashboard,
      end: true,
    },
    {
      label: "Timetable",
      path: "/user/timetable",
      icon: CalendarDays,
    },
    {
      label: "Maintenance Request",
      path: "/user/maintenance-request",
      icon: Wrench,
    },
    {
      label: "Asset Status",
      path: "/user/assets",
      icon: TrainFront,
    },
    {
      label: "My Requests",
      path: "/user/requests",
      icon: ClipboardList,
    },
    {
      label: "Block Plans",
      path: "/user/block-plans",
      icon: Route,
    },
    {
      label: "What-If Simulation",
      path: "/user/simulation",
      icon: FlaskConical,
    },
    {
      label: "Notifications",
      path: "/user/notifications",
      icon: Bell,
    },
    {
      label: "Reports",
      path: "/user/reports",
      icon: BarChart3,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("railway_logged_user");
    localStorage.removeItem("railway_token");

    navigate("/login", { replace: true });
  };

  return (
    <aside className="user-sidebar">
      {/* Logo */}
      <div className="user-sidebar-logo">
        <div className="user-logo-icon">
          <TrainFront size={24} />
        </div>

        <div className="user-logo-text">
          <strong>RAILWAY</strong>
          <span>BLOCK CONTROL</span>
        </div>
      </div>

      {/* Portal title */}
      <div className="user-sidebar-heading">
        <span>USER PORTAL</span>
      </div>

      {/* Navigation */}
      <nav className="user-sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `user-sidebar-link ${
                  isActive ? "user-sidebar-link-active" : ""
                }`
              }
            >
              <Icon size={19} strokeWidth={1.9} />

              <span>{item.label}</span>

              <ChevronRight
                className="user-sidebar-arrow"
                size={16}
              />
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="user-sidebar-bottom">
        <div className="user-system-status">
          <span className="status-dot"></span>

          <div>
            <strong>System Operational</strong>
            <small>AI planning engine ready</small>
          </div>
        </div>

        <button
          type="button"
          className="user-logout-button"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default UserSidebar;