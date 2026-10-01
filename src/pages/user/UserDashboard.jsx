import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Gauge,
  MapPin,
  Play,
  Route,
  ShieldCheck,
  TrainFront,
  Wrench,
  Zap,
} from "lucide-react";

import UserSidebar from "../../components/UserSidebar";

function UserDashboard() {
  const navigate = useNavigate();

  const [trainPositions, setTrainPositions] = useState({
    train1: 8,
    train2: 42,
    train3: 72,
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  /*
   * Simulated live train movement.
   * This runs entirely in the frontend for demonstration.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());

      setTrainPositions((previous) => ({
        train1: previous.train1 >= 92 ? 8 : previous.train1 + 0.8,
        train2: previous.train2 >= 92 ? 8 : previous.train2 + 0.55,
        train3: previous.train3 >= 92 ? 8 : previous.train3 + 0.35,
      }));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return currentTime.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="user-dashboard-layout">
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <UserSidebar />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="user-dashboard-main">
        {/* Header */}

        <header className="user-dashboard-header">
          <div>
            <div className="dashboard-eyebrow">
              <span className="live-dot"></span>
              USER CONTROL CENTER
            </div>

            <h1>Railway Operations Dashboard</h1>

            <p>
              Monitor trains, maintenance blocks and infrastructure
              availability in real time.
            </p>
          </div>

          <div className="dashboard-time">
            <Clock3 size={17} />

            <div>
              <span>LIVE TIME</span>
              <strong>{formatTime()}</strong>
            </div>
          </div>
        </header>

        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <section className="user-stat-grid">
          <div className="user-stat-card">
            <div className="user-stat-icon blue">
              <TrainFront size={23} />
            </div>

            <div>
              <span>Active Trains</span>
              <strong>12</strong>
              <small>Currently operating</small>
            </div>
          </div>

          <div className="user-stat-card">
            <div className="user-stat-icon orange">
              <Wrench size={23} />
            </div>

            <div>
              <span>Active Blocks</span>
              <strong>08</strong>
              <small>Maintenance windows</small>
            </div>
          </div>

          <div className="user-stat-card">
            <div className="user-stat-icon green">
              <CheckCircle2 size={23} />
            </div>

            <div>
              <span>Asset Availability</span>
              <strong>96%</strong>
              <small>Network availability</small>
            </div>
          </div>

          <div className="user-stat-card">
            <div className="user-stat-icon purple">
              <Activity size={23} />
            </div>

            <div>
              <span>Requests</span>
              <strong>04</strong>
              <small>Pending review</small>
            </div>
          </div>
        </section>

        {/* =====================================================
            LIVE RAILWAY MONITOR
        ====================================================== */}

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <div className="section-label">
                <span className="live-dot"></span>
                LIVE NETWORK
              </div>

              <h2>Railway Traffic Monitor</h2>

              <p>
                Real-time visualization of train movement across the
                maintenance corridor.
              </p>
            </div>

            <div className="network-status">
              <span className="status-circle"></span>
              Network Operational
            </div>
          </div>

          <div className="railway-monitor">
            {/* Top labels */}

            <div className="monitor-location start">
              <MapPin size={15} />
              MAS
            </div>

            <div className="monitor-location middle">
              <MapPin size={15} />
              AJJ
            </div>

            <div className="monitor-location end">
              <MapPin size={15} />
              AVD
            </div>

            {/* Track 1 */}

            <div className="rail-track track-one">
              <div className="rail-line"></div>

              <div className="rail-sleepers"></div>

              <div
                className="moving-train train-one"
                style={{
                  left: `${trainPositions.train1}%`,
                }}
              >
                <TrainFront size={27} />
                <span>12603</span>
              </div>

              <div className="signal green-signal signal-one"></div>

              <div className="block-marker block-orange block-one">
                BLOCK 217-A
              </div>
            </div>

            {/* Track 2 */}

            <div className="rail-track track-two">
              <div className="rail-line"></div>

              <div className="rail-sleepers"></div>

              <div
                className="moving-train train-two"
                style={{
                  left: `${trainPositions.train2}%`,
                }}
              >
                <TrainFront size={27} />
                <span>12635</span>
              </div>

              <div className="signal green-signal signal-two"></div>

              <div className="block-marker block-blue block-two">
                CLEAR
              </div>
            </div>

            {/* Track 3 */}

            <div className="rail-track track-three">
              <div className="rail-line"></div>

              <div className="rail-sleepers"></div>

              <div
                className="moving-train train-three"
                style={{
                  left: `${trainPositions.train3}%`,
                }}
              >
                <TrainFront size={27} />
                <span>12642</span>
              </div>

              <div className="signal red-signal signal-three"></div>

              <div className="block-marker block-red block-three">
                MAINTENANCE
              </div>
            </div>

            {/* Stations */}

            <div className="station station-mas">
              <span></span>
              MAS
            </div>

            <div className="station station-ajj">
              <span></span>
              AJJ
            </div>

            <div className="station station-trl">
              <span></span>
              TRL
            </div>

            <div className="station station-avd">
              <span></span>
              AVD
            </div>
          </div>

          {/* Monitor footer */}

          <div className="monitor-footer">
            <div>
              <span className="legend-dot train-legend"></span>
              Train Movement
            </div>

            <div>
              <span className="legend-dot block-legend"></span>
              Maintenance Block
            </div>

            <div>
              <span className="legend-dot clear-legend"></span>
              Track Clear
            </div>

            <div className="monitor-updated">
              <Activity size={15} />
              Updating live
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK ACTIONS
        ====================================================== */}

        <section className="dashboard-section">
          <div className="section-heading compact">
            <div>
              <div className="section-label">OPERATIONS</div>

              <h2>Quick Actions</h2>
            </div>
          </div>

          <div className="quick-action-grid">
            <button
              className="quick-action-card"
              onClick={() => navigate("/user/timetable")}
            >
              <div className="quick-action-icon blue">
                <CalendarDays size={24} />
              </div>

              <div>
                <strong>Timetable & Corridor</strong>

                <span>
                  Provide timetable and corridor availability
                </span>
              </div>

              <ArrowRight size={19} />
            </button>

            <button
              className="quick-action-card"
              onClick={() =>
                navigate("/user/maintenance-request")
              }
            >
              <div className="quick-action-icon orange">
                <Wrench size={24} />
              </div>

              <div>
                <strong>Submit Maintenance Request</strong>

                <span>
                  Create a new maintenance requirement
                </span>
              </div>

              <ArrowRight size={19} />
            </button>

            <button
              className="quick-action-card"
              onClick={() => navigate("/user/simulation")}
            >
              <div className="quick-action-icon purple">
                <Play size={24} />
              </div>

              <div>
                <strong>What-If Simulation</strong>

                <span>
                  Test different planning scenarios
                </span>
              </div>

              <ArrowRight size={19} />
            </button>

            <button
              className="quick-action-card"
              onClick={() => navigate("/user/block-plans")}
            >
              <div className="quick-action-icon green">
                <Route size={24} />
              </div>

              <div>
                <strong>View Block Plans</strong>

                <span>
                  Check approved and upcoming blocks
                </span>
              </div>

              <ArrowRight size={19} />
            </button>
          </div>
        </section>

        {/* =====================================================
            WORKFLOW
        ====================================================== */}

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <div className="section-label">PLANNING WORKFLOW</div>

              <h2>Maintenance Block Process</h2>

              <p>
                Track your maintenance request from submission to
                execution.
              </p>
            </div>
          </div>

          <div className="workflow-grid">
            <div className="workflow-step completed">
              <div className="workflow-number">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>Submit Request</strong>
                <span>Maintenance requirement submitted</span>
              </div>
            </div>

            <div className="workflow-line"></div>

            <div className="workflow-step completed">
              <div className="workflow-number">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>AI Risk Analysis</strong>
                <span>Priority and duration calculated</span>
              </div>
            </div>

            <div className="workflow-line"></div>

            <div className="workflow-step active">
              <div className="workflow-number">
                <Gauge size={18} />
              </div>

              <div>
                <strong>Conflict Detection</strong>
                <span>Checking train compatibility</span>
              </div>
            </div>

            <div className="workflow-line"></div>

            <div className="workflow-step">
              <div className="workflow-number">
                <ShieldCheck size={18} />
              </div>

              <div>
                <strong>Approval</strong>
                <span>Controller reviews final plan</span>
              </div>
            </div>

            <div className="workflow-line"></div>

            <div className="workflow-step">
              <div className="workflow-number">
                <Zap size={18} />
              </div>

              <div>
                <strong>Execution</strong>
                <span>Block published and executed</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LOWER GRID
        ====================================================== */}

        <div className="dashboard-two-column">
          {/* Maintenance Requests */}

          <section className="dashboard-panel">
            <div className="panel-heading">
              <div>
                <span className="section-label">
                  MAINTENANCE
                </span>

                <h2>My Requests</h2>
              </div>

              <button
                onClick={() => navigate("/user/requests")}
              >
                View All
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="request-list">
              <div className="request-item">
                <div className="request-status high">
                  HIGH
                </div>

                <div className="request-info">
                  <strong>Track Renewal — TRK-001</strong>

                  <span>
                    Chennai – Arakkonam · 4 hours
                  </span>
                </div>

                <span className="request-state pending">
                  Pending
                </span>
              </div>

              <div className="request-item">
                <div className="request-status medium">
                  MED
                </div>

                <div className="request-info">
                  <strong>OHE Inspection — OHE-234</strong>

                  <span>
                    AJJ – TRL · 2 hours
                  </span>
                </div>

                <span className="request-state approved">
                  Approved
                </span>
              </div>

              <div className="request-item">
                <div className="request-status low">
                  LOW
                </div>

                <div className="request-info">
                  <strong>Signal Check — SIG-045</strong>

                  <span>
                    TRL – AVD · 90 minutes
                  </span>
                </div>

                <span className="request-state planned">
                  Planned
                </span>
              </div>
            </div>
          </section>

          {/* Alerts */}

          <section className="dashboard-panel">
            <div className="panel-heading">
              <div>
                <span className="section-label">
                  LIVE ALERTS
                </span>

                <h2>Operational Updates</h2>
              </div>
            </div>

            <div className="alert-list">
              <div className="alert-item warning">
                <div className="alert-icon">
                  <AlertTriangle size={19} />
                </div>

                <div>
                  <strong>Maintenance block approaching</strong>

                  <span>
                    Block 217-A begins at 23:30 on TRL–AVD.
                  </span>
                </div>
              </div>

              <div className="alert-item success">
                <div className="alert-icon">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <strong>Track section cleared</strong>

                  <span>
                    MAS–AJJ section is available for operations.
                  </span>
                </div>
              </div>

              <div className="alert-item info">
                <div className="alert-icon">
                  <Activity size={19} />
                </div>

                <div>
                  <strong>AI planning engine ready</strong>

                  <span>
                    New block requests can be analyzed.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <footer className="user-dashboard-footer">
          <span>
            Railway Block Planning System
          </span>

          <span>
            AI Planning Engine • System Operational
          </span>

          <span>
            © 2026 Railway
          </span>
        </footer>
      </main>
    </div>
  );
}

export default UserDashboard;