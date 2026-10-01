import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";

const ADMIN_USERS = [
  {
    id: "ADMIN001",
    password: "admin123",
    name: "System Administrator",
    role: "admin",
  },
  {
    id: "ADMIN002",
    password: "admin123",
    name: "Planning Officer",
    role: "admin",
  },
];

function AdminLogin() {
  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("ADMIN001");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const admin = ADMIN_USERS.find(
      (user) =>
        user.id.toLowerCase() === adminId.trim().toLowerCase() &&
        user.password === password
    );

    if (!admin) {
      setError("Invalid Admin ID or password.");
      return;
    }

    // Save logged-in admin
    const loggedUser = {
      id: admin.id,
      name: admin.name,
      role: "admin",
    };

    localStorage.setItem(
      "railway_logged_user",
      JSON.stringify(loggedUser)
    );

    localStorage.setItem("railway_token", "admin-demo-token");

    // Redirect to admin dashboard
    navigate("/admin", { replace: true });
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* BRAND */}
        <div className="login-brand">

          <div className="login-logo admin-logo">
            <ShieldCheck size={30} />
          </div>

          <div>
            <div className="login-brand-title">
              RAILWAY
            </div>

            <div className="login-brand-subtitle">
              ADMIN CONTROL
            </div>
          </div>

        </div>


        {/* LOGIN CARD */}
        <div className="login-card">

          {/* BACK */}
          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/login")}
          >
            <ArrowLeft size={16} />
            Back
          </button>


          {/* ICON */}
          <div className="login-icon">
            <ShieldCheck size={28} />
          </div>


          <h1>Admin Login</h1>

          <p className="login-description">
            Railway planning administration portal.
          </p>


          <form onSubmit={handleLogin}>

            {/* ADMIN ID */}
            <div className="form-group">

              <label htmlFor="adminId">
                Admin ID
              </label>

              <input
                id="adminId"
                type="text"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                placeholder="Enter Admin ID"
                autoComplete="username"
              />

            </div>


            {/* PASSWORD */}
            <div className="form-group">

              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
              />

            </div>


            {/* ERROR */}
            {error && (
              <div
                style={{
                  marginBottom: "15px",
                  padding: "12px",
                  borderRadius: "8px",
                  background: "rgba(239,68,68,0.12)",
                  border: "1px solid rgba(239,68,68,0.35)",
                  color: "#ff8b8b",
                  fontSize: "13px",
                }}
              >
                {error}
              </div>
            )}


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-submit"
            >
              Login
              <ArrowRight size={18} />
            </button>

          </form>


          {/* DEMO LOGIN */}
          <div className="demo-login">
            Demo Admin: ADMIN001 / admin123
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;