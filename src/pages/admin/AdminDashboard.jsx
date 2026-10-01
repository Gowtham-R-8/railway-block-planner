import React from "react";
import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  Activity,
  ArrowRight,
  Wrench,
  CalendarDays,
  Brain,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";
import StatCard from "../../components/StatCard";
import StatusBadge from "../../components/StatusBadge";
import PriorityBadge from "../../components/PriorityBadge";

import { mockMaintenance } from "../../data/mockMaintenance";
import { mockBlocks } from "../../data/mockBlocks";

function AdminDashboard() {
  const pendingRequests = mockMaintenance.filter(
    (item) => item.status === "Pending"
  );

  const approvedRequests = mockMaintenance.filter(
    (item) => item.status === "Approved"
  );

  const completedRequests = mockMaintenance.filter(
    (item) => item.status === "Completed"
  );

  const activeBlocks = mockBlocks.filter(
    (item) =>
      item.status === "Approved" ||
      item.status === "AI Scheduled" ||
      item.status === "Under Maintenance"
  );

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Area */}
      <div className="main-area">

        {/* Navbar */}
        <Navbar />

        {/* Page */}
        <main className="page-content">

          {/* Page Header */}
          <div className="page-header">
            <div>
              <div className="page-eyebrow">
                ADMIN CONTROL CENTER
              </div>

              <h1>Dashboard</h1>

              <p>
                Monitor railway maintenance, assets and block planning
                activities.
              </p>
            </div>

            <div className="header-date">
              <CalendarDays size={14} />
              &nbsp; Operations Overview
            </div>
          </div>


          {/* Statistics */}
          <div className="stats-grid">

            <StatCard
              title="Total Requests"
              value={mockMaintenance.length}
              subtitle="Maintenance requests"
              icon={<ClipboardList size={22} />}
            />

            <StatCard
              title="Pending Requests"
              value={pendingRequests.length}
              subtitle="Awaiting approval"
              icon={<Clock3 size={22} />}
              type="warning"
            />

            <StatCard
              title="Approved Requests"
              value={approvedRequests.length}
              subtitle="Ready for planning"
              icon={<CheckCircle2 size={22} />}
              type="success"
            />

            <StatCard
              title="Active Blocks"
              value={activeBlocks.length}
              subtitle="Current planned blocks"
              icon={<Activity size={22} />}
              type="info"
            />

          </div>


          {/* Main Dashboard Grid */}
          <div className="dashboard-grid">

            {/* Recent Requests */}
            <div className="dashboard-card">

              <div className="card-header">
                <h2>Recent Maintenance Requests</h2>

                <a
                  href="/admin/block-requests"
                  className="text-button"
                >
                  View All
                </a>
              </div>

              <div className="request-list">

                {mockMaintenance.slice(0, 5).map((request) => (

                  <div
                    className="request-item"
                    key={request.id}
                  >

                    <div className="request-icon">
                      <Wrench size={18} />
                    </div>

                    <div className="request-details">

                      <strong>
                        {request.id}
                      </strong>

                      <span>
                        {request.department} •{" "}
                        {request.section}
                      </span>

                    </div>

                    <div className="request-status">

                      <PriorityBadge
                        priority={request.priority}
                      />

                    </div>

                    <div className="request-status">

                      <StatusBadge
                        status={request.status}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Quick Actions */}
            <div className="dashboard-card">

              <div className="card-header">
                <h2>Quick Actions</h2>
              </div>

              <div className="quick-actions">

                <a href="/admin/block-planner">
                  <Brain size={18} />
                  <span>AI Block Planner</span>
                </a>

                <a href="/admin/block-requests">
                  <ClipboardList size={18} />
                  <span>Review Requests</span>
                </a>

                <a href="/admin/weekly-plan">
                  <CalendarDays size={18} />
                  <span>Weekly Plan</span>
                </a>

                <a href="/admin/assets">
                  <Activity size={18} />
                  <span>Asset Status</span>
                </a>

              </div>

            </div>

          </div>


          {/* Operational Overview */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <h2>Operational Overview</h2>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#64748b",
                    fontSize: "11px",
                  }}
                >
                  Current railway maintenance and block planning status
                </p>
              </div>

              <a
                href="/admin/reports"
                className="text-button"
              >
                Reports
              </a>

            </div>


            <div className="stats-grid">

              <div className="mini-stat-card">

                <div className="mini-stat-icon">
                  <Clock3 size={18} />
                </div>

                <div>
                  <strong>
                    {pendingRequests.length}
                  </strong>

                  <span>
                    Pending
                  </span>
                </div>

              </div>


              <div className="mini-stat-card">

                <div className="mini-stat-icon">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <strong>
                    {approvedRequests.length}
                  </strong>

                  <span>
                    Approved
                  </span>
                </div>

              </div>


              <div className="mini-stat-card">

                <div className="mini-stat-icon">
                  <Activity size={18} />
                </div>

                <div>
                  <strong>
                    {activeBlocks.length}
                  </strong>

                  <span>
                    Active Blocks
                  </span>
                </div>

              </div>


              <div className="mini-stat-card">

                <div className="mini-stat-icon">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <strong>
                    {completedRequests.length}
                  </strong>

                  <span>
                    Completed
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* Block Plans */}
          <div className="dashboard-card">

            <div className="card-header">

              <h2>
                Upcoming Block Plans
              </h2>

              <a
                href="/admin/weekly-plan"
                className="text-button"
              >
                View Schedule
              </a>

            </div>


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

                  {mockBlocks.slice(0, 5).map((block) => (

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

                  ))}

                </tbody>

              </table>

            </div>

          </div>


          {/* Department Activity */}
          <div className="dashboard-card">

            <div className="card-header">
              <h2>Department Activity</h2>
            </div>

            <div className="department-grid">

              {[
                {
                  name: "Engineering",
                  code: "ENG",
                  requests: mockMaintenance.filter(
                    (x) => x.department === "Engineering"
                  ).length,
                },
                {
                  name: "Traction Distribution",
                  code: "TRD",
                  requests: mockMaintenance.filter(
                    (x) =>
                      x.department === "Traction Distribution"
                  ).length,
                },
                {
                  name: "Signal & Telecom",
                  code: "S&T",
                  requests: mockMaintenance.filter(
                    (x) =>
                      x.department === "Signal & Telecom"
                  ).length,
                },
              ].map((department) => (

                <div
                  className="department-card"
                  key={department.code}
                >

                  <div className="department-card-top">

                    <div className="department-large-icon">
                      <Activity size={20} />
                    </div>

                    <div>
                      <strong>
                        {department.name}
                      </strong>

                      <div className="department-code">
                        {department.code}
                      </div>
                    </div>

                  </div>

                  <p className="department-description">
                    Maintenance and block planning activities
                    for {department.name}.
                  </p>

                  <div className="department-metrics">

                    <div>
                      <strong>
                        {department.requests}
                      </strong>

                      <span>
                        Requests
                      </span>
                    </div>

                    <div>
                      <strong>
                        Active
                      </strong>

                      <span>
                        Status
                      </span>
                    </div>

                  </div>

                  <div className="department-card-footer">

                    <span className="active-status">
                      ● Operational
                    </span>

                    <a
                      href="/admin/departments"
                      className="text-button"
                    >
                      Details <ArrowRight size={12} />
                    </a>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default AdminDashboard;