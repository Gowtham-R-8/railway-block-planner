import {
  LayoutDashboard,
  Wrench,
  Package,
  FileText,
  BrainCircuit,
  CalendarDays,
  CalendarRange,
  BarChart3,
  Users,
  Building2,
  Settings,
  LogOut
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

function AdminSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard
    },
    {
      name: "Maintenance",
      path: "/admin/maintenance",
      icon: Wrench
    },
    {
      name: "Assets",
      path: "/admin/assets",
      icon: Package
    },
    {
      name: "Block Requests",
      path: "/admin/block-requests",
      icon: FileText
    },
    {
      name: "AI Block Planner",
      path: "/admin/block-planner",
      icon: BrainCircuit
    },
    {
      name: "Weekly Plan",
      path: "/admin/weekly-plan",
      icon: CalendarDays
    },
    {
      name: "Monthly Plan",
      path: "/admin/monthly-plan",
      icon: CalendarRange
    },
    {
      name: "Reports",
      path: "/admin/reports",
      icon: BarChart3
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: Users
    },
    {
      name: "Departments",
      path: "/admin/departments",
      icon: Building2
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: Settings
    }
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <img
          src="/railway-logo.png"
          alt="Railway"
        />

        <div>
          <h2>Railway</h2>
          <span>Admin Control</span>
        </div>

      </div>

      <div className="sidebar-section-title">
        ADMIN CONTROL
      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `sidebar-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );

        })}

      </nav>

      <div className="sidebar-bottom">

        <button
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <LogOut size={19} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default AdminSidebar;