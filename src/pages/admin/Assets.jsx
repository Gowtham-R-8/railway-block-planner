import {
  Package,
  Search,
  CheckCircle,
  AlertTriangle,
  Wrench
} from "lucide-react";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";
import StatusBadge from "../../components/StatusBadge";

import { mockAssets } from "../../data/mockAssets";

function Assets() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filteredAssets =
    mockAssets.filter((asset) => {

      const matchesSearch =
        `${asset.assetId} ${asset.name} ${asset.section}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesType =
        type === "All" ||
        asset.type === type;

      return (
        matchesSearch &&
        matchesType
      );
    });


  const available = mockAssets.filter(
    (asset) =>
      asset.availability === "Available"
  ).length;

  const attention = mockAssets.filter(
    (asset) =>
      asset.condition === "Needs Attention"
  ).length;

  const maintenance = mockAssets.filter(
    (asset) =>
      asset.availability === "Under Maintenance"
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
                ASSET MANAGEMENT
              </span>

              <h1>
                Railway Assets
              </h1>

              <p>
                Monitor infrastructure availability
                and maintenance condition.
              </p>

            </div>

          </div>


          <div className="stats-grid">

            <div className="mini-stat-card">

              <div className="mini-stat-icon">
                <Package size={21} />
              </div>

              <div>
                <span>Total Assets</span>
                <strong>
                  {mockAssets.length}
                </strong>
              </div>

            </div>


            <div className="mini-stat-card">

              <div className="mini-stat-icon success">
                <CheckCircle size={21} />
              </div>

              <div>
                <span>Available</span>
                <strong>
                  {available}
                </strong>
              </div>

            </div>


            <div className="mini-stat-card">

              <div className="mini-stat-icon warning">
                <AlertTriangle size={21} />
              </div>

              <div>
                <span>Needs Attention</span>
                <strong>
                  {attention}
                </strong>
              </div>

            </div>


            <div className="mini-stat-card">

              <div className="mini-stat-icon danger">
                <Wrench size={21} />
              </div>

              <div>
                <span>Under Maintenance</span>
                <strong>
                  {maintenance}
                </strong>
              </div>

            </div>

          </div>


          <section className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  Asset Inventory
                </h2>

                <p>
                  Infrastructure used in block planning
                </p>

              </div>


              <div className="table-filters">

                <div className="search-box">

                  <Search size={18} />

                  <input
                    type="text"
                    placeholder="Search assets..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />

                </div>


                <select
                  className="filter-select"
                  value={type}
                  onChange={(e) =>
                    setType(e.target.value)
                  }
                >

                  <option value="All">
                    All Types
                  </option>

                  <option value="Track">
                    Track
                  </option>

                  <option value="OHE">
                    OHE
                  </option>

                  <option value="Signal">
                    Signal
                  </option>

                  <option value="Telecom">
                    Telecom
                  </option>

                </select>

              </div>

            </div>


            <div className="table-container">

              <table className="data-table">

                <thead>

                  <tr>
                    <th>Asset ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Department</th>
                    <th>Section</th>
                    <th>Condition</th>
                    <th>Availability</th>
                    <th>Next Maintenance</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredAssets.map(
                    (asset) => (

                      <tr key={asset.id}>

                        <td>
                          <strong>
                            {asset.assetId}
                          </strong>
                        </td>

                        <td>
                          {asset.name}
                        </td>

                        <td>
                          {asset.type}
                        </td>

                        <td>
                          {asset.department}
                        </td>

                        <td>
                          {asset.section}
                        </td>

                        <td>

                          <span
                            className={`condition condition-${asset.condition
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {asset.condition}
                          </span>

                        </td>

                        <td>
                          <StatusBadge
                            status={
                              asset.availability
                            }
                          />
                        </td>

                        <td>
                          {asset.nextMaintenance}
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

export default Assets;