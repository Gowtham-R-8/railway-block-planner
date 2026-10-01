import React, { useState } from "react";
import {
  ClipboardList,
  Eye,
  CheckCircle2,
  XCircle,
  Search,
  MapPin,
  CalendarDays,
  Clock3,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";
import StatusBadge from "../../components/StatusBadge";
import PriorityBadge from "../../components/PriorityBadge";
import Modal from "../../components/Modal";

import { mockMaintenance } from "../../data/mockMaintenance";

function BlockRequests() {
  const [requests, setRequests] = useState(mockMaintenance);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [selectedRequest, setSelectedRequest] = useState(null);

  const departments = [
    "All",
    ...new Set(mockMaintenance.map((item) => item.department)),
  ];

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.id?.toLowerCase().includes(search.toLowerCase()) ||
      request.section?.toLowerCase().includes(search.toLowerCase()) ||
      request.department?.toLowerCase().includes(search.toLowerCase());

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
                BLOCK MANAGEMENT
              </div>

              <h1>Block Requests</h1>

              <p>
                Review, approve and manage maintenance block requests
                submitted by railway departments.
              </p>
            </div>

          </div>


          {/* Statistics */}
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
                  {
                    requests.filter(
                      (item) => item.status === "Pending"
                    ).length
                  }
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
                  {
                    requests.filter(
                      (item) => item.status === "Approved"
                    ).length
                  }
                </div>

                <div className="stat-subtitle">
                  Ready for planning
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
                  {
                    requests.filter(
                      (item) => item.priority === "Critical"
                    ).length
                  }
                </div>

                <div className="stat-subtitle">
                  Highest priority work
                </div>
              </div>

              <div className="stat-icon warning">
                <XCircle size={21} />
              </div>

            </div>

          </div>


          {/* Filters */}
          <div className="dashboard-card">

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >

              <div
                className="search-box"
                style={{ flex: 1 }}
              >

                <Search size={16} />

                <input
                  type="text"
                  placeholder="Search request, section or department..."
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


          {/* Requests Table */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>
                <h2>
                  Maintenance Block Requests
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
                    <th>Section</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredRequests.length === 0 ? (

                    <tr>
                      <td
                        colSpan="9"
                        className="empty-table"
                      >
                        No block requests found.
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
                          {request.section}
                        </td>

                        <td>
                          {request.date}
                        </td>

                        <td>
                          {request.startTime ||
                            request.time ||
                            "-"}
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

                            {request.status ===
                              "Pending" && (
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
                                  <CheckCircle2
                                    size={15}
                                  />
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
                                  <XCircle
                                    size={15}
                                  />
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

        </main>

      </div>


      {/* Request Details Modal */}
      {selectedRequest && (

        <Modal
          title={`Request ${selectedRequest.id}`}
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

              <ClipboardList size={20} />

              <div>
                <strong>
                  Maintenance Block Request
                </strong>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "11px",
                    marginTop: "3px",
                  }}
                >
                  Submitted by{" "}
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
              <strong>Section</strong>
              <span>
                {selectedRequest.section}
              </span>
            </div>

            <div>
              <strong>Asset</strong>
              <span>
                {selectedRequest.asset || "-"}
              </span>
            </div>

            <div>
              <strong>Date</strong>
              <span>
                <CalendarDays
                  size={13}
                  style={{
                    verticalAlign: "middle",
                    marginRight: "4px",
                  }}
                />
                {selectedRequest.date}
              </span>
            </div>

            <div>
              <strong>Time</strong>
              <span>
                <Clock3
                  size={13}
                  style={{
                    verticalAlign: "middle",
                    marginRight: "4px",
                  }}
                />
                {selectedRequest.startTime ||
                  selectedRequest.time ||
                  "-"}
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

            <div>
              <strong>Location</strong>
              <span>
                <MapPin
                  size={13}
                  style={{
                    verticalAlign: "middle",
                    marginRight: "4px",
                  }}
                />
                {selectedRequest.location ||
                  selectedRequest.section ||
                  "-"}
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


          {/* Modal Actions */}
          {selectedRequest.status === "Pending" && (

            <div
              className="form-actions"
              style={{ marginTop: "20px" }}
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

export default BlockRequests;