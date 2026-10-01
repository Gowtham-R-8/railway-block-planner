import {
  CalendarDays,
  TrainFront,
  Search
} from "lucide-react";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import UserSidebar from "../../components/UserSidebar";

const timetableData = [
  {
    train: "12007",
    name: "Chennai Mysuru Shatabdi",
    type: "Express",
    from: "Chennai Central",
    to: "Arakkonam",
    departure: "06:00",
    arrival: "06:45",
    platform: "5"
  },
  {
    train: "12623",
    name: "Chennai Trivandrum Mail",
    type: "Express",
    from: "Chennai Central",
    to: "Arakkonam",
    departure: "07:15",
    arrival: "08:05",
    platform: "3"
  },
  {
    train: "16057",
    name: "Chennai Tirupati Express",
    type: "Express",
    from: "Chennai Central",
    to: "Arakkonam",
    departure: "09:30",
    arrival: "10:25",
    platform: "4"
  },
  {
    train: "12679",
    name: "Coimbatore Intercity",
    type: "Intercity",
    from: "Chennai Central",
    to: "Arakkonam",
    departure: "12:00",
    arrival: "12:50",
    platform: "6"
  },
  {
    train: "22637",
    name: "West Coast Express",
    type: "Express",
    from: "Chennai Central",
    to: "Arakkonam",
    departure: "15:20",
    arrival: "16:10",
    platform: "2"
  },
  {
    train: "12675",
    name: "Kovai Express",
    type: "Express",
    from: "Chennai Central",
    to: "Arakkonam",
    departure: "18:15",
    arrival: "19:05",
    platform: "5"
  }
];

function Timetable() {
  const [search, setSearch] = useState("");

  const filteredTrains =
    timetableData.filter((train) =>
      `${train.train} ${train.name} ${train.from} ${train.to}`
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
                OPERATIONS
              </span>

              <h1>
                Train Timetable
              </h1>

              <p>
                View train movements and operational
                timings for your section.
              </p>
            </div>

            <div className="header-date">
              <CalendarDays size={18} />
              07 September 2026
            </div>

          </div>


          <section className="dashboard-card">

            <div className="card-header">

              <div>
                <h2>
                  Today's Train Schedule
                </h2>

                <p>
                  Chennai Central → Arakkonam
                </p>
              </div>


              <div className="search-box">

                <Search size={18} />

                <input
                  type="text"
                  placeholder="Search train..."
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
                    <th>Train No.</th>
                    <th>Train Name</th>
                    <th>Type</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Platform</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredTrains.map((train) => (

                    <tr key={train.train}>

                      <td>
                        <strong>
                          {train.train}
                        </strong>
                      </td>

                      <td>
                        <div className="table-title">

                          <TrainFront size={17} />

                          {train.name}

                        </div>
                      </td>

                      <td>
                        <span className="type-pill">
                          {train.type}
                        </span>
                      </td>

                      <td>
                        {train.from}
                      </td>

                      <td>
                        {train.to}
                      </td>

                      <td>
                        <strong>
                          {train.departure}
                        </strong>
                      </td>

                      <td>
                        {train.arrival}
                      </td>

                      <td>
                        <span className="platform-badge">
                          {train.platform}
                        </span>
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

export default Timetable;