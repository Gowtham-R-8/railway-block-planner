import {
  Search,
  Package,
  CheckCircle,
  AlertTriangle,
  Wrench
} from "lucide-react";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import UserSidebar from "../../components/UserSidebar";
import StatusBadge from "../../components/StatusBadge";

import { mockAssets } from "../../data/mockAssets";

function AssetStatus() {
  const [search, setSearch] = useState("");

  const filteredAssets = mockAssets.filter(
    (asset) =>
      `${asset.assetId} ${asset.name} ${asset.type} ${asset.section}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

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

      <UserSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">

          <div className="page-header">

            <div>

              <span className="page-eyebrow">
                ASSETS
              </span>

              <h1>
                Asset Status
              </h1>

              <p>
                Monitor railway infrastructure assets
                and their maintenance condition.
              </p>

            </div>

          </div>


          {/* ASSET SUMMARY */}

          <div className="stats-grid">

            <div className="mini-stat-card">

              <div className="mini-stat-icon">
                <Package size={22} />
              </div>

              <div>
                <span>
                  Total Assets
                </span>

                <strong>
                  {mockAssets.length}
                </strong>
              </div>

            </div>


            <div className="mini-stat-card">

              <div className="mini-stat-icon success">
                <CheckCircle size={22} />
              </div>

              <div>
                <span>
                  Available
                </span>

                <strong>
                  {available}
                </strong>
              </div>

            </div>


            <div className="mini-stat-card">

              <div className="mini-stat-icon warning">
                <AlertTriangle size={22} />
              </div>

              <div>
                <span>
                  Needs Attention
                </span>

                <strong>
                  {attention}
                </strong>
              </div>

            </div>


            <div className="mini-stat-card">

              <div className="mini-stat-icon danger">
                <Wrench size={22} />
              </div>

              <div>
                <span>
                  Under Maintenance
                </span>

                <strong>
                  {maintenance}
                </strong>
              </div>

            </div>

          </div>


          {/* ASSET TABLE */}

          <section className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  Infrastructure Assets
                </h2>

                <p>
                  Current asset availability and condition
                </p>

              </div>


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

            </div>


            <div className="table-container">

              <table className="data-table">

                <thead>

                  <tr>
                    <th>Asset ID</th>
                    <th>Asset</th>
                    <th>Type</th>
                    <th>Department</th>
                    <th>Section</th>
                    <th>Condition</th>
                    <th>Availability</th>
                    <th>Next Maintenance</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredAssets.map((asset) => (

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

                  ))}

                </tbody>

              </table>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default AssetStatus;