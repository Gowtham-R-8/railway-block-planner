import React from "react";
import {
  ArrowLeft,
  ShieldCheck,
  UserRound,
  Settings,
  TrainFront,
} from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">

      <div className="login-container">

        {/* LEFT SIDE */}
        <div className="login-info">

          <div className="login-brand">
            <img
              src="/railway-logo.png"
              alt="Railway Logo"
              className="login-logo"
            />

            <span>Railway Block Planner</span>
          </div>

          <div className="login-info-content">

            <div className="login-badge">
              RAILWAY OPERATIONS PLATFORM
            </div>

            <h1>
              Intelligent Block Planning for Indian Railways
            </h1>

            <p>
              Coordinate maintenance activities, optimize railway
              blocks and maximize asset availability using an
              intelligent centralized planning platform.
            </p>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="login-selection">

          <div className="selection-header">

            <h2>
              Select Portal
            </h2>

            <p>
              Choose the portal according to your role.
            </p>

          </div>


          <div className="portal-cards">

            {/* USER PORTAL */}
            <Link
              to="/login/user"
              className="portal-card"
            >

              <div className="portal-icon user-icon">
                <UserRound size={24} />
              </div>

              <div className="portal-content">

                <h3>
                  Railway User
                </h3>

                <p>
                  Submit maintenance requests, check asset status,
                  view block plans and monitor your requests.
                </p>

                <span className="portal-link">
                  User Login →
                </span>

              </div>

            </Link>


            {/* ADMIN PORTAL */}
            <Link
              to="/login/admin"
              className="portal-card"
            >

              <div className="portal-icon admin-icon">
                <ShieldCheck size={24} />
              </div>

              <div className="portal-content">

                <h3>
                  Administrator
                </h3>

                <p>
                  Manage maintenance requests, approve blocks,
                  generate AI plans and monitor operations.
                </p>

                <span className="portal-link">
                  Admin Login →
                </span>

              </div>

            </Link>

          </div>


          {/* SYSTEM FEATURES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
              marginTop: "25px",
            }}
          >

            <div
              style={{
                padding: "12px",
                background: "#f8fafc",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "9px",
                color: "#475569",
                fontSize: "10px",
                fontWeight: "700",
              }}
            >
              <TrainFront size={16} />
              Train-Aware Planning
            </div>

            <div
              style={{
                padding: "12px",
                background: "#f8fafc",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "9px",
                color: "#475569",
                fontSize: "10px",
                fontWeight: "700",
              }}
            >
              <Settings size={16} />
              AI Optimization
            </div>

          </div>


          {/* BACK HOME */}
          <Link
            to="/"
            className="back-home"
          >
            <ArrowLeft
              size={13}
              style={{
                verticalAlign: "middle",
                marginRight: "4px",
              }}
            />

            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;