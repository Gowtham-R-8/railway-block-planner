import React, { useState } from "react";
import {
  Wrench,
  Search,
  Eye,
  CheckCircle2,
  XCircle,
  Clock3,
  ClipboardList,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";
import StatusBadge from "../../components/StatusBadge";
import PriorityBadge from "../../components/PriorityBadge";
import Modal from "../../components/Modal";

import { mockMaintenance } from "../../data/mockMaintenance";

function Maintenance() {
  const [requests, setRequests] = useState(mockMaintenance);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [selectedRequest, setSelectedRequest] = useState(null);

  const departments = [
    "All",
    ...new Set(mockMaintenance.map((item) => item.department)),
  ];

  const filteredRequests = requests.filter((request) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      request.id?.toLowerCase().includes(searchText) ||
      request.section?.toLowerCase().includes(searchText) ||
      request.department?.toLowerCase().includes(searchText) ||
      request.asset?.toLowerCase().includes(searchText);

    const matchesDepartment =
      department === "All" ||
      request.department === department;

    return matchesSearch && matchesDepartment;
  });

  const updateStatus = (id, status) => {
    setRequests((current) =>
      current.map((request) =>
        request.id === id
          ? { ...request, status }
          : request
      )
    );

    setSelectedRequest(null);
  };

  const pendingCount = requests.filter(
    (item) => item.status === "Pending"
  ).length;

  const approvedCount = requests.filter(
    (item) => item.status === "Approved"
  ).length;

  const completedCount = requests.filter(
    (item) => item.status === "Completed"
  ).length;

  const criticalCount = requests.filter(
    (item) => item.priority === "Critical"
  ).length;

  return (
    <div className="app-layout">

      <AdminSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">

          {/* PAGE HEADER */}
          <div className="page-header">

            <div>
              <div className="page-eyebrow">
                MAINTENANCE MANAGEMENT
              </div>

              <h1>Maintenance Requests</h1>

              <p>
                Monitor and manage maintenance requests from
                Engineering, Traction Distribution and Signal &
                Telecom departments.
              </p>
            </div>

          </div>


          {/* STATISTICS */}
          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Total Requests
                </div>

                <div className="stat-value">
                  {requests.length}
                </div>

                <div className="stat-subtitle">
                  All maintenance requests
                </div>

              </div>

              <div className="stat-icon">
                <ClipboardList size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Pending
                </div>

                <div className="stat-value">
                  {pendingCount}
                </div>

                <div className="stat-subtitle">
                  Awaiting approval
                </div>

              </div>

              <div className="stat-icon warning">
                <Clock3 size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Approved
                </div>

                <div className="stat-value">
                  {approvedCount}
                </div>

                <div className="stat-subtitle">
                  Ready for block planning
                </div>

              </div>

              <div className="stat-icon success">
                <CheckCircle2 size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Critical
                </div>

                <div className="stat-value">
                  {criticalCount}
                </div>

                <div className="stat-subtitle">
                  Highest priority
                </div>

              </div>

              <div className="stat-icon warning">
                <Wrench size={21} />
              </div>

            </div>

          </div>


          {/* FILTERS */}
          <div className="dashboard-card">

            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >

              <div
                className="search-box"
                style={{ flex: 1 }}
              >

                <Search size={16} />

                <input
                  type="text"
                  placeholder="Search request, section, asset..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>


              <select
                className="filter-select"
                value={department}
                onChange={(e) =>
                  setDepartment(e.target.value)
                }
              >

                {departments.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}

              </select>

            </div>

          </div>


          {/* REQUEST TABLE */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  Maintenance Request Register
                </h2>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#64748b",
                    fontSize: "11px",
                  }}
                >
                  {filteredRequests.length} request(s) found
                </p>

              </div>

            </div>


            <div className="table-container">

              <table className="data-table">

                <thead>

                  <tr>
                    <th>Request ID</th>
                    <th>Department</th>
                    <th>Asset</th>
                    <th>Section</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>

                </thead>


                <tbody>

                  {filteredRequests.length === 0 ? (

                    <tr>

                      <td
                        colSpan="9"
                        className="empty-table"
                      >
                        No maintenance requests found.
                      </td>

                    </tr>

                  ) : (

                    filteredRequests.map((request) => (

                      <tr key={request.id}>

                        <td>
                          <strong>
                            {request.id}
                          </strong>
                        </td>

                        <td>
                          {request.department}
                        </td>

                        <td>
                          {request.asset || "-"}
                        </td>

                        <td>
                          {request.section}
                        </td>

                        <td>
                          {request.date}
                        </td>

                        <td>
                          {request.duration || "-"} min
                        </td>

                        <td>
                          <PriorityBadge
                            priority={request.priority}
                          />
                        </td>

                        <td>
                          <StatusBadge
                            status={request.status}
                          />
                        </td>

                        <td>

                          <div className="table-actions">

                            <button
                              className="action-btn icon-action"
                              title="View"
                              onClick={() =>
                                setSelectedRequest(
                                  request
                                )
                              }
                            >
                              <Eye size={15} />
                            </button>


                            {request.status === "Pending" && (
                              <>
                                <button
                                  className="action-btn icon-action approve-icon"
                                  title="Approve"
                                  onClick={() =>
                                    updateStatus(
                                      request.id,
                                      "Approved"
                                    )
                                  }
                                >
                                  <CheckCircle2 size={15} />
                                </button>

                                <button
                                  className="action-btn icon-action reject-icon"
                                  title="Reject"
                                  onClick={() =>
                                    updateStatus(
                                      request.id,
                                      "Rejected"
                                    )
                                  }
                                >
                                  <XCircle size={15} />
                                </button>
                              </>
                            )}

                          </div>

                        </td>

                      </tr>

                    ))

                  )}

                </tbody>

              </table>

            </div>

          </div>


          {/* COMPLETION SUMMARY */}
          <div className="dashboard-card">

            <div className="card-header">

              <h2>
                Maintenance Summary
              </h2>

            </div>

            <div className="performance-grid">

              <div className="performance-item">

                <strong>
                  {pendingCount}
                </strong>

                <span>
                  Pending Requests
                </span>

              </div>


              <div className="performance-item">

                <strong>
                  {approvedCount}
                </strong>

                <span>
                  Approved Requests
                </span>

              </div>


              <div className="performance-item">

                <strong>
                  {completedCount}
                </strong>

                <span>
                  Completed Requests
                </span>

              </div>

            </div>

          </div>

        </main>

      </div>


      {/* DETAILS MODAL */}
      {selectedRequest && (

        <Modal
          title={`Maintenance Request ${selectedRequest.id}`}
          onClose={() =>
            setSelectedRequest(null)
          }
        >

          <div className="request-summary">

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >

              <div className="request-icon">
                <Wrench size={18} />
              </div>

              <div>

                <strong>
                  Maintenance Request
                </strong>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "11px",
                    marginTop: "3px",
                  }}
                >
                  {selectedRequest.department}
                </div>

              </div>

            </div>

          </div>


          <div className="details-grid">

            <div>
              <strong>Request ID</strong>
              <span>{selectedRequest.id}</span>
            </div>

            <div>
              <strong>Department</strong>
              <span>
                {selectedRequest.department}
              </span>
            </div>

            <div>
              <strong>Asset</strong>
              <span>
                {selectedRequest.asset || "-"}
              </span>
            </div>

            <div>
              <strong>Section</strong>
              <span>
                {selectedRequest.section || "-"}
              </span>
            </div>

            <div>
              <strong>Date</strong>
              <span>
                {selectedRequest.date || "-"}
              </span>
            </div>

            <div>
              <strong>Duration</strong>
              <span>
                {selectedRequest.duration || "-"} minutes
              </span>
            </div>

            <div>
              <strong>Priority</strong>
              <span>
                <PriorityBadge
                  priority={selectedRequest.priority}
                />
              </span>
            </div>

            <div>
              <strong>Status</strong>
              <span>
                <StatusBadge
                  status={selectedRequest.status}
                />
              </span>
            </div>

            <div className="details-full">

              <strong>
                Description
              </strong>

              <span>
                {selectedRequest.description ||
                  "No description provided."}
              </span>

            </div>

          </div>


          {/* ACTIONS */}
          {selectedRequest.status === "Pending" && (

            <div
              className="form-actions"
              style={{
                marginTop: "20px",
              }}
            >

              <button
                onClick={() =>
                  updateStatus(
                    selectedRequest.id,
                    "Rejected"
                  )
                }
                style={{
                  background: "#fee2e2",
                  color: "#991b1b",
                }}
              >
                <XCircle
                  size={14}
                  style={{
                    verticalAlign: "middle",
                    marginRight: "5px",
                  }}
                />

                Reject
              </button>


              <button
                onClick={() =>
                  updateStatus(
                    selectedRequest.id,
                    "Approved"
                  )
                }
                style={{
                  background: "#dcfce7",
                  color: "#166534",
                }}
              >
                <CheckCircle2
                  size={14}
                  style={{
                    verticalAlign: "middle",
                    marginRight: "5px",
                  }}
                />

                Approve
              </button>

            </div>

          )}

        </Modal>

      )}

    </div>
  );
}

export default Maintenance;