import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  TrainFront,
  ShieldCheck,
  Wrench,
} from "lucide-react";

function Home() {
  return (
    <div className="railway-home">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="railway-navbar">

        <Link to="/" className="railway-brand">

          <div className="brand-emblem">
            <TrainFront size={27} />
          </div>

          <div className="brand-name">
            <strong>RAILWAY</strong>
            <span>BLOCK CONTROL</span>
          </div>

        </Link>


        <nav className="main-navigation">

          <a href="#platform">
            <span>•</span>
            Platform
          </a>

          <a href="#technology">
            <span>•</span>
            Technology
          </a>

          <a href="#capabilities">
            <span>•</span>
            Capabilities
          </a>

          <a href="#how-it-works">
            <span>•</span>
            How it works
          </a>

        </nav>


        <div className="navbar-actions">

          <Link
            to="/login"
            className="sign-in-button"
          >
            Sign in
          </Link>

          <Link
            to="/login"
            className="control-center-button"
          >
            Enter Control Center
            <ArrowRight size={18} />
          </Link>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <main>

        <section
          className="railway-hero"
          id="platform"
        >

          {/* ================= LEFT CONTENT ================= */}

          <div className="hero-copy">

            <div className="system-label">

              <span className="status-dot"></span>

              <span>
                INTELLIGENT RAILWAY OPERATIONS
              </span>

            </div>


            <h1>

              <span>
                Plan every block.
              </span>

              <span className="orange-text">
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

              <Link
                to="/login"
                className="hero-primary-button"
              >
                Enter Control Center
                <ArrowRight size={20} />
              </Link>


              <a
                href="#how-it-works"
                className="hero-secondary-button"
              >
                <Play size={14} fill="currentColor" />
                See how it works
              </a>

            </div>


            <div className="system-status">

              <span className="status-dot"></span>

              <strong>
                SYSTEMS OPERATIONAL
              </strong>

              <span className="status-divider"></span>

              <span>
                AI planning engine ready
              </span>

            </div>

          </div>


          {/* ================= NETWORK VISUAL ================= */}

          <div className="network-container">

            <div className="network-label">

              <span className="status-dot"></span>

              LIVE NETWORK

            </div>


            <div className="coordinates">
              19°07′ N&nbsp;&nbsp;&nbsp;72°52′ E
            </div>


            {/* ================= TRACK 1 ================= */}

            <div className="rail-track track-one">

              <div className="track-line"></div>

              <div className="track-ties"></div>


              <div className="train train-one">

                <div className="train-body"></div>

                <div className="train-window"></div>

              </div>

            </div>


            {/* ================= TRACK 2 ================= */}

            <div className="rail-track track-two">

              <div className="track-line"></div>

              <div className="track-ties"></div>


              <div className="train train-two">

                <div className="train-body"></div>

                <div className="train-window"></div>

              </div>

            </div>


            {/* ================= MAINTENANCE TRACK ================= */}

            <div className="maintenance-track">

              <div className="maintenance-line"></div>

              <div className="maintenance-ties"></div>

            </div>


            {/* ================= SIGNALS ================= */}

            <div className="signal signal-green signal-1">
              <span></span>
            </div>

            <div className="signal signal-orange signal-2">
              <span></span>
            </div>

            <div className="signal signal-red signal-3">
              <span></span>
            </div>


            {/* ================= CENTRAL LABEL ================= */}

            <div className="network-card central-card">

              <span className="small-green-dot"></span>

              <div>
                <strong>CENTRAL</strong>
                <small>CONTROL NODE</small>
              </div>

            </div>


            {/* ================= BLOCK LABEL ================= */}

            <div className="network-card block-card">

              <span className="small-orange-dot"></span>

              <div>
                <strong>BLOCK 217-A</strong>
                <small>MAINTENANCE WINDOW</small>
              </div>

            </div>


            {/* ================= TRACK CLEAR ================= */}

            <div className="network-card clear-card">

              <span className="small-green-dot"></span>

              <div>
                <strong>TRACK CLEAR</strong>
                <small>OPERATIONAL</small>
              </div>

            </div>


            {/* ================= MAINTENANCE LABEL ================= */}

            <div className="network-card maintenance-card">

              <div className="maintenance-icon">
                <Wrench size={16} />
              </div>

              <div>
                <strong>MAINTENANCE</strong>
                <small>BLOCK ACTIVE</small>
              </div>

            </div>


            {/* ================= GLOW POINTS ================= */}

            <div className="network-glow glow-one"></div>
            <div className="network-glow glow-two"></div>
            <div className="network-glow glow-three"></div>

          </div>

        </section>


        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <section
          className="capabilities-section"
          id="capabilities"
        >

          <div className="section-kicker">
            PLATFORM CAPABILITIES
          </div>

          <h2>
            One intelligent platform for
            <span> every railway block.</span>
          </h2>


          <div className="capability-grid">

            <div className="capability-card">

              <div className="capability-icon">
                <TrainFront size={22} />
              </div>

              <h3>
                Train-Aware Planning
              </h3>

              <p>
                Coordinate maintenance blocks around
                train movements and operational schedules.
              </p>

            </div>


            <div className="capability-card">

              <div className="capability-icon">
                <ShieldCheck size={22} />
              </div>

              <h3>
                Conflict-Free Operations
              </h3>

              <p>
                Detect conflicts between maintenance
                requests before a block is approved.
              </p>

            </div>


            <div className="capability-card">

              <div className="capability-icon">
                <Wrench size={22} />
              </div>

              <h3>
                Smart Maintenance
              </h3>

              <p>
                Combine compatible Engineering, Traction
                and S&T activities into optimized blocks.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            TECHNOLOGY
        ===================================================== */}

        <section
          className="technology-section"
          id="technology"
        >

          <div className="technology-content">

            <div className="section-kicker">
              INTELLIGENT TECHNOLOGY
            </div>

            <h2>
              AI that understands
              <span> railway operations.</span>
            </h2>

            <p>
              The planning engine analyzes maintenance
              requirements, asset condition, operational
              constraints and train movements to generate
              efficient block plans.
            </p>

          </div>


          <div className="technology-stats">

            <div>
              <strong>96%</strong>
              <span>Asset Availability</span>
            </div>

            <div>
              <strong>24</strong>
              <span>Active Assets</span>
            </div>

            <div>
              <strong>08</strong>
              <span>Today's Blocks</span>
            </div>

          </div>

        </section>


        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section
          className="how-section"
          id="how-it-works"
        >

          <div className="section-kicker">
            HOW IT WORKS
          </div>

          <h2>
            From request to
            <span> optimized block.</span>
          </h2>


          <div className="how-grid">

            <div>
              <strong>01</strong>
              <h3>Request</h3>
              <p>
                Departments submit maintenance requirements.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Analyze</h3>
              <p>
                The system evaluates assets and constraints.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Optimize</h3>
              <p>
                AI generates the best available block.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Approve</h3>
              <p>
                Controllers review and approve the plan.
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="railway-footer">

          <div className="footer-brand">
            <strong>RAILWAY</strong>
            <span>BLOCK CONTROL</span>
          </div>

          <span>
            AI-Powered Automatic Block Planning System
          </span>

          <span>
            © 2026 Railway Block Planner
          </span>

        </footer>

      </main>

    </div>
  );
}

export default Home;