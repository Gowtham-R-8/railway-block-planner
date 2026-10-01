import {
  BarChart3,
  FileText,
  Download,
  TrendingUp
} from "lucide-react";

import Navbar from "../../components/Navbar";
import UserSidebar from "../../components/UserSidebar";

import { mockMaintenance } from "../../data/mockMaintenance";
import { getCurrentUser } from "../../services/authService";

function UserReports() {
  const user = getCurrentUser();

  const requests = mockMaintenance.filter(
    (item) =>
      item.department === user?.department
  );

  const total = requests.length;

  const completed = requests.filter(
    (item) => item.status === "Completed"
  ).length;

  const approved = requests.filter(
    (item) => item.status === "Approved"
  ).length;

  const pending = requests.filter(
    (item) => item.status === "Pending"
  ).length;

  const completionRate =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        );


  return (
    <div className="app-layout">

      <UserSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">

          <div className="page-header">

            <div>

              <span className="page-eyebrow">
                ANALYTICS
              </span>

              <h1>
                My Reports
              </h1>

              <p>
                Maintenance and block planning
                performance for your department.
              </p>

            </div>


            <button className="secondary-button">

              <Download size={18} />

              Export Report

            </button>

          </div>


          {/* METRICS */}

          <div className="stats-grid">

            <div className="report-metric">

              <FileText size={23} />

              <span>
                Total Requests
              </span>

              <strong>
                {total}
              </strong>

            </div>


            <div className="report-metric">

              <TrendingUp size={23} />

              <span>
                Completion Rate
              </span>

              <strong>
                {completionRate}%
              </strong>

            </div>


            <div className="report-metric">

              <BarChart3 size={23} />

              <span>
                Approved Blocks
              </span>

              <strong>
                {approved}
              </strong>

            </div>


            <div className="report-metric">

              <FileText size={23} />

              <span>
                Pending
              </span>

              <strong>
                {pending}
              </strong>

            </div>

          </div>


          {/* REPORT */}

          <section className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  Department Performance
                </h2>

                <p>
                  Maintenance request summary
                </p>

              </div>

            </div>


            <div className="report-bars">

              <div className="report-bar-row">

                <span>
                  Pending Requests
                </span>

                <div className="report-bar">

                  <div
                    style={{
                      width: `${
                        total
                          ? (pending / total) *
                            100
                          : 0
                      }%`
                    }}
                  />

                </div>

                <strong>
                  {pending}
                </strong>

              </div>


              <div className="report-bar-row">

                <span>
                  Approved Requests
                </span>

                <div className="report-bar">

                  <div
                    style={{
                      width: `${
                        total
                          ? (approved / total) *
                            100
                          : 0
                      }%`
                    }}
                  />

                </div>

                <strong>
                  {approved}
                </strong>

              </div>


              <div className="report-bar-row">

                <span>
                  Completed Requests
                </span>

                <div className="report-bar">

                  <div
                    style={{
                      width: `${
                        total
                          ? (completed / total) *
                            100
                          : 0
                      }%`
                    }}
                  />

                </div>

                <strong>
                  {completed}
                </strong>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default UserReports;