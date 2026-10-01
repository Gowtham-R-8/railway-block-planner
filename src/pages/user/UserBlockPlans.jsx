import {
  Route,
  Search,
  CalendarDays
} from "lucide-react";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import UserSidebar from "../../components/UserSidebar";
import StatusBadge from "../../components/StatusBadge";
import PriorityBadge from "../../components/PriorityBadge";

import { mockBlocks } from "../../data/mockBlocks";
import { getCurrentUser } from "../../services/authService";

function UserBlockPlans() {
  const user = getCurrentUser();

  const [search, setSearch] = useState("");

  const departmentBlocks =
    mockBlocks.filter(
      (block) =>
        block.department === user?.department
    );

  const filteredBlocks =
    departmentBlocks.filter((block) =>
      `${block.blockId} ${block.section} ${block.asset}`
        .toLowerCase()
        .includes(search.toLowerCase())
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
                BLOCK PLANNING
              </span>

              <h1>
                My Block Plans
              </h1>

              <p>
                View maintenance blocks generated
                for your department.
              </p>

            </div>

            <div className="header-date">
              <CalendarDays size={18} />
              Current Planning Cycle
            </div>

          </div>


          <section className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  Scheduled Blocks
                </h2>

                <p>
                  Department:{" "}
                  {user?.department}
                </p>

              </div>


              <div className="search-box">

                <Search size={18} />

                <input
                  type="text"
                  placeholder="Search blocks..."
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
                    <th>Block ID</th>
                    <th>Section</th>
                    <th>Asset</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Priority</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredBlocks.map(
                    (block) => (

                      <tr key={block.id}>

                        <td>
                          <div className="table-title">
                            <Route size={17} />
                            <strong>
                              {block.blockId}
                            </strong>
                          </div>
                        </td>

                        <td>
                          {block.section}
                        </td>

                        <td>
                          {block.asset}
                        </td>

                        <td>
                          {block.date}
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
                            priority={block.priority}
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

export default UserBlockPlans;