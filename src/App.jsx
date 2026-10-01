import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";

import {
  ArrowRight,
  Play,
  TrainFront,
  ShieldCheck,
  Wrench,
  Radio,
  Activity,
  Route as RouteIcon,
  User,
  Lock,
  ChevronLeft,
} from "lucide-react";

import "./App.css";

/* =========================================================
   ADMIN DASHBOARD
========================================================= */

function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("railway_logged_user");
    localStorage.removeItem("railway_token");
    navigate("/login", { replace: true });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#061826",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1>Railway Admin Dashboard</h1>

      <p>
        Welcome to the Railway Block Planning Control Center.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div className="feature-card">
          <h3>24</h3>
          <p>Active Assets</p>
        </div>

        <div className="feature-card">
          <h3>08</h3>
          <p>Today's Blocks</p>
        </div>

        <div className="feature-card">
          <h3>96%</h3>
          <p>Asset Availability</p>
        </div>
      </div>

      <button
        onClick={logout}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          background: "#ff9418",
          color: "#fff",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}


/* =========================================================
   PROTECTED ROUTE
========================================================= */

function ProtectedRoute({ children, role }) {
  const storedUser = localStorage.getItem("railway_logged_user");

  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  let user;

  try {
    user = JSON.parse(storedUser);
  } catch {
    localStorage.removeItem("railway_logged_user");
    localStorage.removeItem("railway_token");

    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


/* =========================================================
   HOME PAGE
========================================================= */

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">

      {/* NAVBAR */}

      <header className="navbar">

        <Link to="/" className="brand">

          <div className="brand-logo">
            <TrainFront size={28} />
          </div>

          <div className="brand-text">
            <div className="brand-title">
              RAILWAY
            </div>

            <div className="brand-subtitle">
              BLOCK CONTROL
            </div>
          </div>

        </Link>


        <nav className="navigation">
          <a href="#platform">Platform</a>
          <a href="#technology">Technology</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#how-it-works">How it works</a>
        </nav>


        <div className="nav-buttons">

          <button
            className="sign-in"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>

          <button
            className="control-button"
            onClick={() => navigate("/login")}
          >
            Enter Control Center
            <ArrowRight size={18} />
          </button>

        </div>

      </header>


      {/* HERO */}

      <section className="hero" id="platform">

        <div className="hero-grid"></div>


        <div className="hero-left">

          <div className="eyebrow">
            <span className="green-dot"></span>
            INTELLIGENT RAILWAY OPERATIONS
          </div>


          <h1>
            <span>Plan every block.</span>

            <span className="orange">
              Move every train.
            </span>

            <span>
              Protect every
              <br />
              window.
            </span>
          </h1>


          <p className="hero-description">
            AI-powered railway block management for safer
            maintenance planning, intelligent prioritization
            and conflict-free operations.
          </p>


          <div className="hero-actions">

            <button
              className="primary-button"
              onClick={() => navigate("/login")}
            >
              Enter Control Center
              <ArrowRight size={20} />
            </button>


            <a
              href="#how-it-works"
              className="secondary-button"
            >
              <Play
                size={14}
                fill="currentColor"
              />
              See how it works
            </a>

          </div>


          <div className="system-status">

            <span className="green-dot"></span>

            <strong>
              SYSTEMS OPERATIONAL
            </strong>

            <span className="vertical-line"></span>

            <span>
              AI planning engine ready
            </span>

          </div>

        </div>


        {/* RAILWAY VISUAL */}

        <div className="railway-visual">

          <div className="live-network">
            <span className="green-dot"></span>
            LIVE NETWORK
          </div>


          <div className="coordinates">
            19°07′ N&nbsp;&nbsp;&nbsp;72°52′ E
          </div>


          <div className="blue-glow"></div>


          {/* TRACK ONE */}

          <div className="track track-one">

            <div className="rail rail-top"></div>
            <div className="rail rail-bottom"></div>
            <div className="rail-sleepers"></div>

            <div className="train train-a">
              <div className="train-front"></div>
              <div className="train-window"></div>
              <div className="train-light"></div>
            </div>

          </div>


          {/* TRACK TWO */}

          <div className="track track-two">

            <div className="rail rail-top"></div>
            <div className="rail rail-bottom"></div>
            <div className="rail-sleepers"></div>

            <div className="train train-b">
              <div className="train-front"></div>
              <div className="train-window"></div>
              <div className="train-light"></div>
            </div>

          </div>


          {/* ORANGE TRACK */}

          <div className="orange-track">
            <div className="orange-rail orange-rail-one"></div>
            <div className="orange-rail orange-rail-two"></div>
            <div className="orange-sleepers"></div>
          </div>


          {/* SIGNALS */}

          <div className="signal signal-green-one">
            <span></span>
          </div>

          <div className="signal signal-green-two">
            <span></span>
          </div>

          <div className="signal signal-orange">
            <span></span>
          </div>

          <div className="signal signal-red">
            <span></span>
          </div>


          {/* CENTRAL NODE */}

          <div className="network-card central">

            <div className="card-status green"></div>

            <div>
              <strong>CENTRAL</strong>
              <small>CONTROL NODE</small>
            </div>

          </div>


          {/* BLOCK */}

          <div className="network-card block">

            <div className="card-status orange-dot"></div>

            <div>
              <strong>BLOCK 217-A</strong>
              <small>MAINTENANCE WINDOW</small>
            </div>

          </div>


          {/* TRACK CLEAR */}

          <div className="network-card track-clear">

            <div className="card-status green"></div>

            <div>
              <strong>TRACK CLEAR</strong>
              <small>OPERATIONAL</small>
            </div>

          </div>


          {/* MAINTENANCE */}

          <div className="network-card maintenance">

            <div className="maintenance-icon">
              <Wrench size={16} />
            </div>

            <div>
              <strong>MAINTENANCE</strong>
              <small>BLOCK ACTIVE</small>
            </div>

          </div>


          <div className="node node-blue"></div>
          <div className="node node-green"></div>
          <div className="node node-orange"></div>

        </div>

      </section>


      {/* CAPABILITIES */}

      <section
        className="section"
        id="capabilities"
      >

        <div className="section-label">
          PLATFORM CAPABILITIES
        </div>

        <h2>
          One platform for
          <span>
            {" "}intelligent railway operations.
          </span>
        </h2>

        <p className="section-description">
          Replace decentralized manual planning with a
          centralized intelligent system designed to improve
          maintenance coordination and train service availability.
        </p>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <Activity size={23} />
            </div>

            <h3>
              AI-Powered Planning
            </h3>

            <p>
              Automatically prioritize maintenance requests
              using asset condition, operational importance,
              urgency and maintenance requirements.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <RouteIcon size={23} />
            </div>

            <h3>
              Intelligent Block Optimization
            </h3>

            <p>
              Combine compatible maintenance activities into
              optimized blocks while reducing conflicts with
              railway operations.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <ShieldCheck size={23} />
            </div>

            <h3>
              Conflict-Free Operations
            </h3>

            <p>
              Identify conflicts between maintenance work,
              train movements and infrastructure availability.
            </p>

          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}

      <section
        className="technology"
        id="technology"
      >

        <div>

          <div className="section-label">
            INTELLIGENT TECHNOLOGY
          </div>

          <h2>
            AI that understands
            <span>
              {" "}railway operations.
            </span>
          </h2>

          <p>
            Our planning engine analyzes maintenance
            requirements, asset condition, train schedules
            and operational constraints to create efficient
            block plans.
          </p>

        </div>


        <div className="stats">

          <div className="stat">
            <strong>96%</strong>
            <span>Asset Availability</span>
          </div>

          <div className="stat">
            <strong>24</strong>
            <span>Active Assets</span>
          </div>

          <div className="stat">
            <strong>08</strong>
            <span>Today's Blocks</span>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section
        className="section"
        id="how-it-works"
      >

        <div className="section-label">
          HOW IT WORKS
        </div>

        <h2>
          From request to
          <span>
            {" "}optimized block.
          </span>
        </h2>


        <div className="steps">

          <div className="step">
            <b>01</b>
            <h3>Request</h3>
            <p>
              Departments submit maintenance requirements.
            </p>
          </div>

          <div className="step">
            <b>02</b>
            <h3>Analyze</h3>
            <p>
              AI evaluates assets, schedules and constraints.
            </p>
          </div>

          <div className="step">
            <b>03</b>
            <h3>Optimize</h3>
            <p>
              The system generates the best available block.
            </p>
          </div>

          <div className="step">
            <b>04</b>
            <h3>Approve</h3>
            <p>
              Railway controllers review and approve the plan.
            </p>
          </div>

        </div>

      </section>


      {/* CONTROL CENTER */}

      <section className="control-center">

        <Radio size={35} />

        <h2>
          Ready to plan smarter?
        </h2>

        <p>
          Enter the railway control center and start
          managing maintenance blocks intelligently.
        </p>

        <button
          className="primary-button"
          onClick={() => navigate("/login")}
        >
          Enter Control Center
          <ArrowRight size={20} />
        </button>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-brand">
          <strong>RAILWAY</strong>
          <span>BLOCK CONTROL</span>
        </div>

        <div>
          AI-Powered Automatic Block Planning System
        </div>

        <div>
          © 2026 Railway Block Planner
        </div>

      </footer>

    </div>
  );
}


/* =========================================================
   LOGIN SELECTION
========================================================= */

function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-page">

      <div className="login-background"></div>

      <div className="login-container">

        <div className="login-brand">

          <div className="login-logo">
            <TrainFront size={34} />
          </div>

          <div>
            <div className="login-brand-title">
              RAILWAY
            </div>

            <div className="login-brand-subtitle">
              BLOCK CONTROL
            </div>
          </div>

        </div>


        <div className="login-card">

          <button
            className="back-button"
            onClick={() => navigate("/")}
          >
            <ChevronLeft size={17} />
            Back to home
          </button>


          <div className="login-icon">
            <Lock size={25} />
          </div>


          <h1>
            Welcome back
          </h1>


          <p className="login-description">
            Select your access portal to continue
            to the railway block planning system.
          </p>


          <button
            className="login-option"
            onClick={() => navigate("/login/user")}
          >

            <div className="option-icon">
              <User size={22} />
            </div>

            <div className="option-text">
              <strong>User Login</strong>
              <span>
                Department engineers and staff
              </span>
            </div>

            <ArrowRight size={19} />

          </button>


          <button
            className="login-option"
            onClick={() => navigate("/login/admin")}
          >

            <div className="option-icon admin-icon">
              <ShieldCheck size={22} />
            </div>

            <div className="option-text">
              <strong>Admin Login</strong>
              <span>
                Railway planning administration
              </span>
            </div>

            <ArrowRight size={19} />

          </button>


          <div className="login-footer">
            Secure Railway Operations Portal
          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   USER LOGIN
========================================================= */

function UserLogin() {

  const navigate = useNavigate();

  const [employeeId, setEmployeeId] =
    useState("ENG1024");

  const [password, setPassword] =
    useState("1234");

  const [error, setError] =
    useState("");


  const handleLogin = (e) => {

    e.preventDefault();

    setError("");

    if (
      employeeId.trim().toUpperCase() === "ENG1024" &&
      password === "1234"
    ) {

      const user = {
        id: "ENG1024",
        name: "Rajesh Kumar",
        department: "Engineering",
        role: "user",
      };

      localStorage.setItem(
        "railway_logged_user",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "railway_token",
        "user-demo-token"
      );

      navigate("/user", { replace: true });

    } else {

      setError("Invalid Employee ID or password.");

    }

  };


  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-brand">

          <div className="login-logo">
            <User size={30} />
          </div>

          <div>
            <div className="login-brand-title">
              RAILWAY
            </div>

            <div className="login-brand-subtitle">
              USER PORTAL
            </div>
          </div>

        </div>


        <div className="login-card">

          <button
            className="back-button"
            onClick={() => navigate("/login")}
          >
            <ChevronLeft size={17} />
            Back
          </button>


          <h1>
            User Login
          </h1>


          <p className="login-description">
            Login to access maintenance requests,
            assets and block plans.
          </p>


          <form onSubmit={handleLogin}>

            <div className="form-group">

              <label>
                Employee ID
              </label>

              <input
                type="text"
                value={employeeId}
                onChange={(e) =>
                  setEmployeeId(e.target.value)
                }
                placeholder="Enter employee ID"
              />

            </div>


            <div className="form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter password"
              />

            </div>


            {error && (
              <div
                style={{
                  color: "#ff6b6b",
                  marginBottom: "15px",
                }}
              >
                {error}
              </div>
            )}


            <button
              type="submit"
              className="login-submit"
            >
              Sign in
              <ArrowRight size={18} />
            </button>

          </form>


          <div className="demo-login">
            Demo User: ENG1024 / 1234
          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   ADMIN LOGIN
========================================================= */

function AdminLogin() {

  const navigate = useNavigate();

  const [adminId, setAdminId] =
    useState("ADMIN001");

  const [password, setPassword] =
    useState("admin123");

  const [error, setError] =
    useState("");


  const handleLogin = (e) => {

    e.preventDefault();

    setError("");

    const validAdmin =
      (
        adminId.trim().toUpperCase() === "ADMIN001" &&
        password === "admin123"
      ) ||
      (
        adminId.trim().toUpperCase() === "ADMIN002" &&
        password === "admin123"
      );


    if (!validAdmin) {

      setError(
        "Invalid Admin ID or password."
      );

      return;
    }


    const admin = {
      id: adminId.trim().toUpperCase(),
      name:
        adminId.trim().toUpperCase() === "ADMIN001"
          ? "System Administrator"
          : "Planning Officer",
      role: "admin",
    };


    localStorage.setItem(
      "railway_logged_user",
      JSON.stringify(admin)
    );


    localStorage.setItem(
      "railway_token",
      "admin-demo-token"
    );


    // IMPORTANT:
    // Redirect after successful login
    navigate("/admin", {
      replace: true,
    });

  };


  return (
    <div className="login-page">

      <div className="login-container">

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


        <div className="login-card">

          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/login")}
          >
            <ChevronLeft size={17} />
            Back
          </button>


          <div className="login-icon">
            <ShieldCheck size={25} />
          </div>


          <h1>
            Admin Login
          </h1>


          <p className="login-description">
            Railway planning administration portal.
          </p>


          <form onSubmit={handleLogin}>

            <div className="form-group">

              <label>
                Admin ID
              </label>

              <input
                type="text"
                value={adminId}
                onChange={(e) =>
                  setAdminId(e.target.value)
                }
                placeholder="Enter admin ID"
                autoComplete="username"
              />

            </div>


            <div className="form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter password"
                autoComplete="current-password"
              />

            </div>


            {error && (
              <div
                style={{
                  color: "#ff6b6b",
                  marginBottom: "15px",
                  padding: "10px",
                  borderRadius: "8px",
                  background:
                    "rgba(239,68,68,0.12)",
                }}
              >
                {error}
              </div>
            )}


            <button
              type="submit"
              className="login-submit"
            >
              Login
              <ArrowRight size={18} />
            </button>

          </form>


          <div className="demo-login">
            Demo Admin: ADMIN001 / admin123
          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   APP ROUTER
========================================================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* USER LOGIN */}

        <Route
          path="/login/user"
          element={<UserLogin />}
        />


        {/* ADMIN LOGIN */}

        <Route
          path="/login/admin"
          element={<AdminLogin />}
        />


        {/* USER DASHBOARD */}

        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <div
                style={{
                  padding: "40px",
                  minHeight: "100vh",
                  background: "#061826",
                  color: "white",
                }}
              >
                <h1>
                  Railway User Dashboard
                </h1>

                <p>
                  Welcome to the Railway Block Planning System.
                </p>
              </div>
            </ProtectedRoute>
          }
        />


        {/* ADMIN DASHBOARD */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />


        {/* UNKNOWN URL */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;