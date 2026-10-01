import {
  CalendarRange,
  BrainCircuit,
  TrendingUp,
  Clock,
  Wrench
} from "lucide-react";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";
import StatusBadge from "../../components/StatusBadge";
import PriorityBadge from "../../components/PriorityBadge";

import { mockBlocks } from "../../data/mockBlocks";

function MonthlyPlan() {

  const totalBlocks =
    mockBlocks.length;

  const totalMinutes =
    mockBlocks.reduce(
      (sum, block) =>
        sum + Number(block.duration),
      0
    );

  const highPriority =
    mockBlocks.filter(
      (block) =>
        block.priority === "High" ||
        block.priority === "Critical"
    ).length;


  return (
    <div className="app-layout">

      <AdminSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">

          <div className="page-header">

            <div>

              <span className="page-eyebrow">
                LONG-TERM PLANNING
              </span>

              <h1>
                Monthly Block Plan
              </h1>

              <p>
                Review the monthly maintenance
                schedule and operational workload.
              </p>

            </div>


            <button className="primary-button">

              <BrainCircuit size={18} />

              Generate Monthly Plan

            </button>

          </div>


          {/* SUMMARY */}

          <div className="stats-grid">

            <div className="mini-stat-card">

              <div className="mini-stat-icon">
                <CalendarRange size={21} />
              </div>

              <div>

                <span>
                  September Blocks
                </span>

                <strong>
                  {totalBlocks}
                </strong>

              </div>

            </div>


            <div className="mini-stat-card">

              <div className="mini-stat-icon">
                <Clock size={21} />
              </div>

              <div>

                <span>
                  Planned Block Time
                </span>

                <strong>
                  {totalMinutes} min
                </strong>

              </div>

            </div>


            <div className="mini-stat-card">

              <div className="mini-stat-icon warning">
                <TrendingUp size={21} />
              </div>

              <div>

                <span>
                  High Priority
                </span>

                <strong>
                  {highPriority}
                </strong>

              </div>

            </div>


            <div className="mini-stat-card">

              <div className="mini-stat-icon">
                <Wrench size={21} />
              </div>

              <div>

                <span>
                  Maintenance Workload
                </span>

                <strong>
                  {Math.round(
                    totalMinutes / 60
                  )} hrs
                </strong>

              </div>

            </div>

          </div>


          {/* MONTHLY VIEW */}

          <section className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  September 2026
                </h2>

                <p>
                  Planned maintenance blocks
                </p>

              </div>

              <CalendarRange size={23} />

            </div>


            <div className="monthly-grid">

              {[
                "Engineering",
                "Traction Distribution",
                "Signal & Telecom"
              ].map((department) => {

                const departmentBlocks =
                  mockBlocks.filter(
                    (block) =>
                      block.department ===
                      department
                  );

                return (

                  <div
                    className="monthly-department"
                    key={department}
                  >

                    <div className="monthly-department-header">

                      <strong>
                        {department}
                      </strong>

                      <span>
                        {departmentBlocks.length}
                        {" "}blocks
                      </span>

                    </div>


                    {departmentBlocks.map(
                      (block) => (

                        <div
                          className="monthly-block"
                          key={block.id}
                        >

                          <div>

                            <strong>
                              {block.blockId}
                            </strong>

                            <span>
                              {block.date}
                            </span>

                          </div>

                          <div>

                            <span>
                              {block.startTime}
                              {" - "}
                              {block.endTime}
                            </span>

                            <PriorityBadge
                              priority={
                                block.priority
                              }
                            />

                          </div>

                        </div>

                      )
                    )}

                  </div>

                );

              })}

            </div>

          </section>


          {/* TABLE */}

          <section className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  Monthly Schedule
                </h2>

                <p>
                  Detailed planned blocks
                </p>

              </div>

            </div>


            <div className="table-container">

              <table className="data-table">

                <thead>

                  <tr>
                    <th>Block ID</th>
                    <th>Date</th>
                    <th>Department</th>
                    <th>Section</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Priority</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  {mockBlocks.map(
                    (block) => (

                      <tr key={block.id}>

                        <td>
                          <strong>
                            {block.blockId}
                          </strong>
                        </td>

                        <td>
                          {block.date}
                        </td>

                        <td>
                          {block.department}
                        </td>

                        <td>
                          {block.section}
                        </td>

                        <td>
                          {block.startTime} -
                          {block.endTime}
                        </td>

                        <td>
                          {block.duration} min
                        </td>

                        <td>
                          <PriorityBadge
                            priority={
                              block.priority
                            }
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

          </section>

        </main>

      </div>

    </div>
  );
}

export default MonthlyPlan;