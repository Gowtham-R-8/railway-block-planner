import { Bell, UserCircle } from "lucide-react";
import { getCurrentUser, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="navbar">

      <div className="navbar-left">
        <div className="navbar-title">
          Railway Block Planner
        </div>
      </div>

      <div className="navbar-right">

        <button className="icon-button">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="navbar-user">
          <UserCircle size={32} />

          <div className="navbar-user-info">
            <strong>
              {user?.name || "Guest"}
            </strong>

            <span>
              {user?.designation || "Railway Operations"}
            </span>
          </div>
        </div>

        {user && (
          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </header>
  );
}

export default Navbar;