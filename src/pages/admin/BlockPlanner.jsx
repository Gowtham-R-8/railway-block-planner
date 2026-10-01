import React, { useState } from "react";
import {
  Brain,
  Sparkles,
  CalendarDays,
  Clock3,
  TrainFront,
  Wrench,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";
import PriorityBadge from "../../components/PriorityBadge";
import StatusBadge from "../../components/StatusBadge";

import { mockBlocks } from "../../data/mockBlocks";
import { mockMaintenance } from "../../data/mockMaintenance";

function BlockPlanner() {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const [plan, setPlan] = useState([]);

  const generatePlan = () => {
    setGenerating(true);
    setGenerated(false);

    setTimeout(() => {
      const sortedBlocks = [...mockBlocks].sort((a, b) => {
        const priorityOrder = {
          Critical: 1,
          High: 2,
          Medium: 3,
          Low: 4,
        };

        return (
          (priorityOrder[a.priority] || 5) -
          (priorityOrder[b.priority] || 5)
        );
      });

      setPlan(sortedBlocks);
      setGenerating(false);
      setGenerated(true);
    }, 1500);
  };

  const totalRequests = mockMaintenance.length;

  const criticalRequests = mockMaintenance.filter(
    (item) => item.priority === "Critical"
  ).length;

  const totalBlocks = plan.length || mockBlocks.length;

  const totalDuration = (plan.length ? plan : mockBlocks).reduce(
    (sum, block) => sum + Number(block.duration || 0),
    0
  );

  return (
    <div className="app-layout">

      <AdminSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">

          {/* Header */}
          <div className="page-header">

            <div>
              <div className="page-eyebrow">
                AI PLANNING ENGINE
              </div>

              <h1>AI Block Planner</h1>

              <p>
                Generate an optimized railway maintenance block plan
                using priority, duration and operational constraints.
              </p>
            </div>

            <button
              className="ai-button"
              onClick={generatePlan}
              disabled={generating}
            >
              {generating ? (
                <>
                  <Loader2
                    size={16}
                    className="spin"
                  />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  Generate AI Plan
                </>
              )}
            </button>

          </div>


          {/* AI Banner */}
          <div className="ai-planner-banner">

            <div className="ai-banner-icon">
              <Brain size={25} />
            </div>

            <div>
              <h2>
                Intelligent Automatic Block Planning
              </h2>

              <p>
                The planning engine prioritizes critical maintenance,
                reduces conflicts and improves block utilization.
              </p>
            </div>

            <div className="ai-status">
              ● AI ENGINE READY
            </div>

          </div>


          {/* Statistics */}
          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-card-content">
                <div className="stat-title">
                  Maintenance Requests
                </div>

                <div className="stat-value">
                  {totalRequests}
                </div>

                <div className="stat-subtitle">
                  Requests available for planning
                </div>
              </div>

              <div className="stat-icon">
                <Wrench size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">
                <div className="stat-title">
                  Critical Requests
                </div>

                <div className="stat-value">
                  {criticalRequests}
                </div>

                <div className="stat-subtitle">
                  High priority maintenance
                </div>
              </div>

              <div className="stat-icon warning">
                <Clock3 size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">
                <div className="stat-title">
                  Planned Blocks
                </div>

                <div className="stat-value">
                  {totalBlocks}
                </div>

                <div className="stat-subtitle">
                  Optimized block slots
                </div>
              </div>

              <div className="stat-icon success">
                <CalendarDays size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">
                <div className="stat-title">
                  Block Duration
                </div>

                <div className="stat-value">
                  {totalDuration}
                </div>

                <div className="stat-subtitle">
                  Total planned minutes
                </div>
              </div>

              <div className="stat-icon info">
                <TrainFront size={21} />
              </div>

            </div>

          </div>


          {/* Planner Content */}
          <div className="dashboard-grid">

            {/* Plan */}
            <div className="dashboard-card">

              <div className="card-header">

                <div>
                  <h2>
                    {generated
                      ? "AI Generated Block Plan"
                      : "Current Block Plan"}
                  </h2>

                  <p
                    style={{
                      margin: "5px 0 0",
                      color: "#64748b",
                      fontSize: "11px",
                    }}
                  >
                    {generated
                      ? "Blocks have been ordered according to maintenance priority."
                      : "Generate an AI plan to optimize the current requests."}
                  </p>
                </div>

                {generated && (
                  <span className="generated-label">
                    AI GENERATED
                  </span>
                )}

              </div>


              {generating ? (

                <div className="planner-loading">

                  <div className="loading-spinner"></div>

                  <p>
                    AI engine is analyzing maintenance requests...
                  </p>

                  <div className="planner-progress">
                    <div></div>
                  </div>

                  <small>
                    Checking priorities, duration and conflicts
                  </small>

                </div>

              ) : (

                <div className="table-container">

                  <table className="data-table">

                    <thead>

                      <tr>
                        <th>Block ID</th>
                        <th>Section</th>
                        <th>Department</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Priority</th>
                        <th>Status</th>
                      </tr>

                    </thead>

                    <tbody>

                      {(plan.length ? plan : mockBlocks).map(
                        (block) => (

                          <tr key={block.id}>

                            <td>
                              <strong>
                                {block.id}
                              </strong>
                            </td>

                            <td>
                              {block.section}
                            </td>

                            <td>
                              {block.department}
                            </td>

                            <td>
                              {block.date}
                            </td>

                            <td>
                              {block.duration} min
                            </td>

                            <td>
                              <PriorityBadge
                                priority={block.priority}
                              />
                            </td>

                            <td>
                              <StatusBadge
                                status={block.status}
                              />
                            </td>

                          </tr>

                        )
                      )}

                    </tbody>

                  </table>

                </div>

              )}

            </div>


            {/* Planner Score */}
            <div className="dashboard-card">

              <div className="card-header">
                <h2>Optimization Score</h2>
              </div>

              <div className="planner-score">

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "11px",
                    marginBottom: "5px",
                  }}
                >
                  Current planning efficiency
                </div>

                <strong>
                  {generated ? "94%" : "82%"}
                </strong>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "10px",
                    marginTop: "5px",
                  }}
                >
                  {generated
                    ? "Optimized by AI"
                    : "Before optimization"}
                </div>

              </div>


              <div className="planner-principles">

                <div>
                  <strong>01</strong>
                  <br />
                  Critical work first
                </div>

                <div>
                  <strong>02</strong>
                  <br />
                  Avoid block conflicts
                </div>

                <div>
                  <strong>03</strong>
                  <br />
                  Maximize utilization
                </div>

              </div>

            </div>

          </div>


          {/* Planning Order */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <h2>
                  Recommended Planning Order
                </h2>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#64748b",
                    fontSize: "11px",
                  }}
                >
                  Maintenance blocks ranked by operational importance.
                </p>
              </div>

            </div>

            <div className="plan-order">

              {(plan.length ? plan : mockBlocks)
                .slice(0, 5)
                .map((block) => (

                  <div key={block.id}>

                    <strong>
                      {block.id}
                    </strong>

                    <div
                      style={{
                        color: "#64748b",
                        fontSize: "11px",
                        marginTop: "3px",
                      }}
                    >
                      {block.section} •{" "}
                      {block.department} •{" "}
                      {block.duration} minutes
                    </div>

                  </div>

                ))}

            </div>

          </div>


          {/* AI Explanation */}
          {generated && (

            <div className="dashboard-card">

              <div className="card-header">

                <h2>
                  AI Planning Result
                </h2>

              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "15px",
                  background: "#f0fdf4",
                  borderRadius: "9px",
                  color: "#166534",
                }}
              >

                <CheckCircle2
                  size={20}
                  style={{ flexShrink: 0 }}
                />

                <div>

                  <strong>
                    Block plan generated successfully
                  </strong>

                  <p
                    style={{
                      margin: "5px 0 0",
                      fontSize: "11px",
                      lineHeight: "1.6",
                    }}
                  >
                    The current prototype prioritizes critical and
                    high-priority maintenance work before lower-priority
                    requests. The production version will send these
                    requests to the Python AI and OR-Tools optimization
                    engine.
                  </p>

                </div>

              </div>

            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default BlockPlanner;