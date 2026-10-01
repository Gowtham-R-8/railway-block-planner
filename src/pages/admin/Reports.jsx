import {
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
  Download,
  BrainCircuit,
  TrainFront,
  Wrench
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";

import { mockBlocks } from "../../data/mockBlocks";
import { mockMaintenance } from "../../data/mockMaintenance";

const departmentData = [
  {
    name: "Engineering",
    requests: 12,
    blocks: 9
  },
  {
    name: "TRD",
    requests: 8,
    blocks: 6
  },
  {
    name: "S&T",
    requests: 7,
    blocks: 5
  }
];

const monthlyData = [
  {
    month: "Apr",
    blocks: 18
  },
  {
    month: "May",
    blocks: 22
  },
  {
    month: "Jun",
    blocks: 25
  },
  {
    month: "Jul",
    blocks: 29
  },
  {
    month: "Aug",
    blocks: 32
  },
  {
    month: "Sep",
    blocks: 28
  }
];

function Reports() {
  const totalRequests =
    mockMaintenance.length;

  const completedRequests =
    mockMaintenance.filter(
      (item) => item.status === "Completed"
    ).length;

  const totalBlocks =
    mockBlocks.length;

  const totalBlockMinutes =
    mockBlocks.reduce(
      (sum, block) =>
        sum + Number(block.duration || 0),
      0
    );

  const completionRate =
    totalRequests === 0
      ? 0
      : Math.round(
          (completedRequests /
            totalRequests) *
            100
        );

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
                ANALYTICS & REPORTING
              </span>

              <h1>
                Planning Reports
              </h1>

              <p>
                Analyze maintenance performance,
                block utilization and planning efficiency.
              </p>

            </div>

            <button className="secondary-button">

              <Download size={18} />

              Export Report

            </button>

          </div>


          {/* KPI CARDS */}

          <div className="stats-grid">

            <div className="report-metric">

              <div className="report-metric-icon">
                <FileIcon />
              </div>

              <span>
                Maintenance Requests
              </span>

              <strong>
                {totalRequests}
              </strong>

              <small>
                Current planning cycle
              </small>

            </div>


            <div className="report-metric">

              <div className="report-metric-icon">
                <CheckCircle size={22} />
              </div>

              <span>
                Completion Rate
              </span>

              <strong>
                {completionRate}%
              </strong>

              <small>
                Request completion
              </small>

            </div>


            <div className="report-metric">

              <div className="report-metric-icon">
                <BarChart3 size={22} />
              </div>

              <span>
                Planned Blocks
              </span>

              <strong>
                {totalBlocks}
              </strong>

              <small>
                Scheduled maintenance
              </small>

            </div>


            <div className="report-metric">

              <div className="report-metric-icon">
                <Clock size={22} />
              </div>

              <span>
                Block Utilization
              </span>

              <strong>
                {Math.round(
                  totalBlockMinutes / 60
                )} hrs
              </strong>

              <small>
                Total planned time
              </small>

            </div>

          </div>


          {/* CHARTS */}

          <div className="chart-grid">

            <section className="dashboard-card">

              <div className="card-header">

                <div>

                  <h2>
                    Department Performance
                  </h2>

                  <p>
                    Requests vs planned blocks
                  </p>

                </div>

                <TrendingUp size={22} />

              </div>


              <div className="chart-container">

                <ResponsiveContainer
                  width="100%"
                  height={320}
                >

                  <BarChart
                    data={departmentData}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                    />

                    <XAxis
                      dataKey="name"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                      dataKey="requests"
                      name="Requests"
                    />

                    <Bar
                      dataKey="blocks"
                      name="Blocks"
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </section>


            <section className="dashboard-card">

              <div className="card-header">

                <div>

                  <h2>
                    Block Planning Trend
                  </h2>

                  <p>
                    Monthly scheduled blocks
                  </p>

                </div>

                <BarChart3 size={22} />

              </div>


              <div className="chart-container">

                <ResponsiveContainer
                  width="100%"
                  height={320}
                >

                  <BarChart
                    data={monthlyData}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                    />

                    <XAxis
                      dataKey="month"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                      dataKey="blocks"
                      name="Blocks"
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </section>

          </div>


          {/* PERFORMANCE SUMMARY */}

          <section className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  Operational Performance
                </h2>

                <p>
                  Key indicators for railway block planning
                </p>

              </div>

              <BrainCircuit size={23} />

            </div>


            <div className="performance-grid">

              <div className="performance-item">

                <TrainFront size={23} />

                <div>

                  <strong>
                    94%
                  </strong>

                  <span>
                    Asset Availability
                  </span>

                </div>

              </div>


              <div className="performance-item">

                <Clock size={23} />

                <div>

                  <strong>
                    87%
                  </strong>

                  <span>
                    Block Utilization
                  </span>

                </div>

              </div>


              <div className="performance-item">

                <Wrench size={23} />

                <div>

                  <strong>
                    91%
                  </strong>

                  <span>
                    Maintenance Efficiency
                  </span>

                </div>

              </div>


              <div className="performance-item">

                <BrainCircuit size={23} />

                <div>

                  <strong>
                    96%
                  </strong>

                  <span>
                    AI Planning Accuracy
                  </span>

                </div>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}


function FileIcon() {
  return (
    <BarChart3 size={22} />
  );
}

export default Reports;