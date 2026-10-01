import {
  Building2,
  Users,
  Wrench,
  FileText,
  Plus,
  ArrowRight
} from "lucide-react";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";
import Modal from "../../components/Modal";

const initialDepartments = [
  {
    id: 1,
    code: "ENG",
    name: "Engineering",
    description:
      "Track, bridge, level crossing and civil infrastructure maintenance.",
    staff: 42,
    requests: 12,
    blocks: 9,
    status: "Active"
  },

  {
    id: 2,
    code: "TRD",
    name: "Traction Distribution",
    description:
      "Overhead equipment and traction power infrastructure.",
    staff: 31,
    requests: 8,
    blocks: 6,
    status: "Active"
  },

  {
    id: 3,
    code: "S&T",
    name: "Signal & Telecom",
    description:
      "Railway signalling and telecommunication systems.",
    staff: 28,
    requests: 7,
    blocks: 5,
    status: "Active"
  }
];

function Departments() {
  const [departments, setDepartments] =
    useState(initialDepartments);

  const [showModal, setShowModal] =
    useState(false);


  return (
    <div className="app-layout">

      <AdminSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">

          {/* HEADER */}

          <div className="page-header">

            <div>

              <span className="page-eyebrow">
                ORGANIZATION
              </span>

              <h1>
                Departments
              </h1>

              <p>
                Manage railway departments and
                their planning activities.
              </p>

            </div>


            <button
              className="primary-button"
              onClick={() =>
                setShowModal(true)
              }
            >

              <Plus size={18} />

              Add Department

            </button>

          </div>


          {/* DEPARTMENT CARDS */}

          <div className="department-management-grid">

            {departments.map(
              (department) => (

                <section
                  className="department-management-card"
                  key={department.id}
                >

                  <div className="department-card-top">

                    <div className="department-large-icon">
                      <Building2 size={26} />
                    </div>

                    <div>

                      <span className="department-code">
                        {department.code}
                      </span>

                      <h2>
                        {department.name}
                      </h2>

                    </div>

                  </div>


                  <p className="department-description">
                    {department.description}
                  </p>


                  <div className="department-metrics">

                    <div>

                      <Users size={18} />

                      <span>
                        Staff
                      </span>

                      <strong>
                        {department.staff}
                      </strong>

                    </div>


                    <div>

                      <FileText size={18} />

                      <span>
                        Requests
                      </span>

                      <strong>
                        {department.requests}
                      </strong>

                    </div>


                    <div>

                      <Wrench size={18} />

                      <span>
                        Blocks
                      </span>

                      <strong>
                        {department.blocks}
                      </strong>

                    </div>

                  </div>


                  <div className="department-card-footer">

                    <span className="active-status">
                      ● {department.status}
                    </span>

                    <button className="text-button">

                      Manage

                      <ArrowRight size={16} />

                    </button>

                  </div>

                </section>

              )
            )}

          </div>


          {/* COORDINATION */}

          <section className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  Cross-Department Coordination
                </h2>

                <p>
                  Departments contributing to the
                  centralized block planning process.
                </p>

              </div>

              <Building2 size={23} />

            </div>


            <div className="coordination-flow">

              <div className="coordination-node">

                <Building2 size={25} />

                <strong>
                  Engineering
                </strong>

                <span>
                  Track & Civil
                </span>

              </div>


              <div className="coordination-line">
                →
              </div>


              <div className="coordination-node">

                <Building2 size={25} />

                <strong>
                  TRD
                </strong>

                <span>
                  Traction
                </span>

              </div>


              <div className="coordination-line">
                →
              </div>


              <div className="coordination-node">

                <Building2 size={25} />

                <strong>
                  S&T
                </strong>

                <span>
                  Signalling & Telecom
                </span>

              </div>


              <div className="coordination-line">
                →
              </div>


              <div className="coordination-node ai-node">

                <Building2 size={25} />

                <strong>
                  AI Planner
                </strong>

                <span>
                  Central Optimization
                </span>

              </div>

            </div>

          </section>


          {/* ADD DEPARTMENT MODAL */}

          <Modal
            isOpen={showModal}
            onClose={() =>
              setShowModal(false)
            }
            title="Add Department"
          >

            <form
              onSubmit={(event) => {

                event.preventDefault();

                setShowModal(false);

              }}
            >

              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Department Code
                  </label>

                  <input
                    className="normal-input"
                    type="text"
                    placeholder="Example: ENG"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Department Name
                  </label>

                  <input
                    className="normal-input"
                    type="text"
                    placeholder="Department name"
                    required
                  />

                </div>

              </div>


              <div className="form-group">

                <label>
                  Description
                </label>

                <textarea
                  className="normal-textarea"
                  rows="4"
                  placeholder="Department description"
                  required
                />

              </div>


              <div className="form-actions">

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    setShowModal(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  <Plus size={17} />
                  Add Department
                </button>

              </div>

            </form>

          </Modal>

        </main>

      </div>

    </div>
  );
}

export default Departments;