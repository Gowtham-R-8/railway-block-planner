import React, { useMemo, useState } from "react";
import {
  Users as UsersIcon,
  Search,
  Eye,
  UserPlus,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";
import Modal from "../../components/Modal";

import { mockUsers } from "../../data/mockUsers";

function Users() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);

  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    department: "Engineering",
    designation: "",
    role: "user",
  });

  const allUsers = useMemo(() => {
    return [
      ...(mockUsers.users || []).map((user) => ({
        ...user,
        role: "user",
      })),
      ...(mockUsers.admins || []).map((user) => ({
        ...user,
        role: "admin",
      })),
    ];
  }, []);

  const filteredUsers = allUsers.filter((user) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      user.id?.toLowerCase().includes(searchText) ||
      user.name?.toLowerCase().includes(searchText) ||
      user.department?.toLowerCase().includes(searchText) ||
      user.designation?.toLowerCase().includes(searchText);

    const matchesRole =
      roleFilter === "All" ||
      user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const userCount = allUsers.filter(
    (user) => user.role === "user"
  ).length;

  const adminCount = allUsers.filter(
    (user) => user.role === "admin"
  ).length;

  const handleAddUser = (event) => {
    event.preventDefault();

    if (
      !newUser.id ||
      !newUser.name ||
      !newUser.designation
    ) {
      return;
    }

    alert(
      `User ${newUser.name} added successfully.`
    );

    setNewUser({
      id: "",
      name: "",
      department: "Engineering",
      designation: "",
      role: "user",
    });

    setShowAddUser(false);
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
                USER MANAGEMENT
              </div>

              <h1>Users</h1>

              <p>
                Manage railway users, administrators and
                department access.
              </p>
            </div>

            <button
              className="primary-button"
              onClick={() => setShowAddUser(true)}
            >
              <UserPlus size={16} />
              Add User
            </button>

          </div>


          {/* Statistics */}
          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Total Users
                </div>

                <div className="stat-value">
                  {allUsers.length}
                </div>

                <div className="stat-subtitle">
                  Registered accounts
                </div>

              </div>

              <div className="stat-icon">
                <UsersIcon size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Railway Users
                </div>

                <div className="stat-value">
                  {userCount}
                </div>

                <div className="stat-subtitle">
                  Department users
                </div>

              </div>

              <div className="stat-icon info">
                <UserRound size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Administrators
                </div>

                <div className="stat-value">
                  {adminCount}
                </div>

                <div className="stat-subtitle">
                  Management accounts
                </div>

              </div>

              <div className="stat-icon warning">
                <ShieldCheck size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Active Accounts
                </div>

                <div className="stat-value">
                  {allUsers.length}
                </div>

                <div className="stat-subtitle">
                  Currently available
                </div>

              </div>

              <div className="stat-icon success">
                <UserRound size={21} />
              </div>

            </div>

          </div>


          {/* Search / Filter */}
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
                  placeholder="Search ID, name, department..."
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                />

              </div>


              <select
                className="filter-select"
                value={roleFilter}
                onChange={(event) =>
                  setRoleFilter(event.target.value)
                }
              >
                <option value="All">
                  All Roles
                </option>

                <option value="user">
                  Railway User
                </option>

                <option value="admin">
                  Administrator
                </option>
              </select>

            </div>

          </div>


          {/* Users Table */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  User Directory
                </h2>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#64748b",
                    fontSize: "11px",
                  }}
                >
                  {filteredUsers.length} account(s) found
                </p>

              </div>

            </div>


            <div className="table-container">

              <table className="data-table">

                <thead>

                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Role</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>

                </thead>


                <tbody>

                  {filteredUsers.length === 0 ? (

                    <tr>

                      <td
                        colSpan="7"
                        className="empty-table"
                      >
                        No users found.
                      </td>

                    </tr>

                  ) : (

                    filteredUsers.map((user) => (

                      <tr key={`${user.role}-${user.id}`}>

                        <td>
                          <strong>
                            {user.id}
                          </strong>
                        </td>

                        <td>
                          {user.name}
                        </td>

                        <td>
                          {user.department || "-"}
                        </td>

                        <td>
                          {user.designation || "-"}
                        </td>

                        <td>

                          <span className="type-pill">

                            {user.role === "admin"
                              ? "Administrator"
                              : "Railway User"}

                          </span>

                        </td>

                        <td>
                          {user.location ||
                            user.division ||
                            "-"}
                        </td>

                        <td>

                          <button
                            className="action-btn icon-action"
                            title="View User"
                            onClick={() =>
                              setSelectedUser(user)
                            }
                          >
                            <Eye size={15} />
                          </button>

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


      {/* User Details Modal */}
      {selectedUser && (

        <Modal
          title="User Details"
          onClose={() =>
            setSelectedUser(null)
          }
        >

          <div className="request-summary">

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >

              <div className="request-icon">

                {selectedUser.role === "admin" ? (
                  <ShieldCheck size={20} />
                ) : (
                  <UserRound size={20} />
                )}

              </div>

              <div>

                <strong>
                  {selectedUser.name}
                </strong>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "11px",
                    marginTop: "3px",
                  }}
                >
                  {selectedUser.role === "admin"
                    ? "Administrator"
                    : "Railway User"}
                </div>

              </div>

            </div>

          </div>


          <div className="details-grid">

            <div>
              <strong>User ID</strong>
              <span>
                {selectedUser.id}
              </span>
            </div>

            <div>
              <strong>Name</strong>
              <span>
                {selectedUser.name}
              </span>
            </div>

            <div>
              <strong>Department</strong>
              <span>
                {selectedUser.department || "-"}
              </span>
            </div>

            <div>
              <strong>Designation</strong>
              <span>
                {selectedUser.designation || "-"}
              </span>
            </div>

            <div>
              <strong>Role</strong>
              <span>
                {selectedUser.role === "admin"
                  ? "Administrator"
                  : "Railway User"}
              </span>
            </div>

            <div>
              <strong>Division</strong>
              <span>
                {selectedUser.division ||
                  selectedUser.location ||
                  "-"}
              </span>
            </div>

            <div className="details-full">

              <strong>
                Account Status
              </strong>

              <span className="active-status">
                ● Active
              </span>

            </div>

          </div>

        </Modal>

      )}


      {/* Add User Modal */}
      {showAddUser && (

        <Modal
          title="Add New User"
          onClose={() =>
            setShowAddUser(false)
          }
        >

          <form
            onSubmit={handleAddUser}
            className="auth-form"
          >

            <div className="form-group">

              <label>
                User ID
              </label>

              <input
                className="normal-input"
                type="text"
                placeholder="Example: ENG4021"
                value={newUser.id}
                onChange={(event) =>
                  setNewUser({
                    ...newUser,
                    id: event.target.value,
                  })
                }
                required
              />

            </div>


            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                className="normal-input"
                type="text"
                placeholder="Enter full name"
                value={newUser.name}
                onChange={(event) =>
                  setNewUser({
                    ...newUser,
                    name: event.target.value,
                  })
                }
                required
              />

            </div>


            <div className="form-grid">

              <div className="form-group">

                <label>
                  Department
                </label>

                <select
                  className="normal-select"
                  value={newUser.department}
                  onChange={(event) =>
                    setNewUser({
                      ...newUser,
                      department: event.target.value,
                    })
                  }
                >

                  <option>
                    Engineering
                  </option>

                  <option>
                    Traction Distribution
                  </option>

                  <option>
                    Signal & Telecom
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Role
                </label>

                <select
                  className="normal-select"
                  value={newUser.role}
                  onChange={(event) =>
                    setNewUser({
                      ...newUser,
                      role: event.target.value,
                    })
                  }
                >

                  <option value="user">
                    Railway User
                  </option>

                  <option value="admin">
                    Administrator
                  </option>

                </select>

              </div>

            </div>


            <div className="form-group">

              <label>
                Designation
              </label>

              <input
                className="normal-input"
                type="text"
                placeholder="Example: Section Engineer"
                value={newUser.designation}
                onChange={(event) =>
                  setNewUser({
                    ...newUser,
                    designation: event.target.value,
                  })
                }
                required
              />

            </div>


            <div className="form-actions">

              <button
                type="button"
                className="secondary-button"
                onClick={() =>
                  setShowAddUser(false)
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="primary-button"
              >
                <UserPlus size={15} />
                Add User
              </button>

            </div>

          </form>

        </Modal>

      )}

    </div>
  );
}

export default Users;