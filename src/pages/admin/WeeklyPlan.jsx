import React, { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  TrainFront,
  Wrench,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";
import PriorityBadge from "../../components/PriorityBadge";
import StatusBadge from "../../components/StatusBadge";

import { mockBlocks } from "../../data/mockBlocks";

function WeeklyPlan() {
  const [weekOffset, setWeekOffset] = useState(0);

  const getMonday = (offset = 0) => {
    const date = new Date();
    const day = date.getDay();

    const diff = day === 0 ? -6 : 1 - day;

    date.setDate(date.getDate() + diff + offset * 7);

    return date;
  };

  const weekStart = getMonday(weekOffset);

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(weekStart);

      date.setDate(weekStart.getDate() + index);

      return date;
    });
  }, [weekOffset]);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });
  };

  const getDateKey = (date) => {
    return date.toISOString().split("T")[0];
  };

  const getBlocksForDay = (date) => {
    const key = getDateKey(date);

    return mockBlocks.filter((block) => {
      if (!block.date) return false;

      return block.date === key;
    });
  };

  const displayBlocks = (date) => {
    const actualBlocks = getBlocksForDay(date);

    /*
      If mock data does not contain dates matching the
      current week, distribute blocks for demonstration.
    */
    if (actualBlocks.length > 0) {
      return actualBlocks;
    }

    const dayIndex = date.getDay() === 0 ? 6 : date.getDay() - 1;

    if (mockBlocks[dayIndex]) {
      return [mockBlocks[dayIndex]];
    }

    return [];
  };

  const totalBlocks = mockBlocks.length;

  const totalDuration = mockBlocks.reduce(
    (total, block) =>
      total + Number(block.duration || 0),
    0
  );

  const approvedBlocks = mockBlocks.filter(
    (block) =>
      block.status === "Approved" ||
      block.status === "AI Scheduled"
  ).length;

  return (
    <div className="app-layout">

      <AdminSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">

          {/* HEADER */}
          <div className="page-header">

            <div>

              <div className="page-eyebrow">
                WEEKLY OPERATIONS
              </div>

              <h1>Weekly Block Plan</h1>

              <p>
                View and manage the planned maintenance blocks
                across the railway network.
              </p>

            </div>

          </div>


          {/* STATISTICS */}
          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Planned Blocks
                </div>

                <div className="stat-value">
                  {totalBlocks}
                </div>

                <div className="stat-subtitle">
                  This planning cycle
                </div>

              </div>

              <div className="stat-icon">
                <CalendarDays size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Approved Blocks
                </div>

                <div className="stat-value">
                  {approvedBlocks}
                </div>

                <div className="stat-subtitle">
                  Ready for execution
                </div>

              </div>

              <div className="stat-icon success">
                <TrainFront size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Block Duration
                </div>

                <div className="stat-value">
                  {totalDuration}
                </div>

                <div className="stat-subtitle">
                  Total minutes
                </div>

              </div>

              <div className="stat-icon warning">
                <Clock3 size={21} />
              </div>

            </div>


            <div className="stat-card">

              <div className="stat-card-content">

                <div className="stat-title">
                  Departments
                </div>

                <div className="stat-value">
                  {
                    new Set(
                      mockBlocks.map(
                        (block) => block.department
                      )
                    ).size
                  }
                </div>

                <div className="stat-subtitle">
                  Participating departments
                </div>

              </div>

              <div className="stat-icon info">
                <Wrench size={21} />
              </div>

            </div>

          </div>


          {/* CALENDAR CARD */}
          <div className="dashboard-card">

            {/* Calendar Toolbar */}
            <div className="calendar-toolbar">

              <div className="calendar-nav">

                <button
                  onClick={() =>
                    setWeekOffset(
                      (current) => current - 1
                    )
                  }
                  title="Previous week"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={() => setWeekOffset(0)}
                  title="Current week"
                >
                  Today
                </button>

                <button
                  onClick={() =>
                    setWeekOffset(
                      (current) => current + 1
                    )
                  }
                  title="Next week"
                >
                  <ChevronRight size={16} />
                </button>

              </div>


              <div className="calendar-title">

                {formatDate(weekDays[0])}

                {" — "}

                {formatDate(weekDays[6])}

              </div>

            </div>


            {/* Weekly Calendar */}
            <div className="weekly-calendar">

              {weekDays.map((date) => {

                const blocks = displayBlocks(date);

                const dayName = date.toLocaleDateString(
                  "en-IN",
                  {
                    weekday: "short",
                  }
                );

                return (

                  <div
                    className="day-column"
                    key={getDateKey(date)}
                  >

                    <div className="day-header">

                      <strong>
                        {dayName}
                      </strong>

                      <span>
                        {formatDate(date)}
                      </span>

                    </div>


                    <div className="day-content">

                      {blocks.length === 0 ? (

                        <div className="no-block">
                          No planned block
                        </div>

                      ) : (

                        blocks.map((block) => (

                          <div
                            className="calendar-block"
                            key={block.id}
                          >

                            <strong>
                              {block.id}
                            </strong>

                            <span>
                              {block.section}
                            </span>

                            <span>
                              {block.startTime ||
                                block.time ||
                                "Scheduled"}
                            </span>

                            <span>
                              {block.duration || 0} min
                            </span>

                            <div
                              style={{
                                marginTop: "7px",
                              }}
                            >
                              <PriorityBadge
                                priority={block.priority}
                              />
                            </div>

                          </div>

                        ))

                      )}

                    </div>

                  </div>

                );
              })}

            </div>

          </div>


          {/* DETAILED SCHEDULE */}
          <div className="dashboard-card">

            <div className="card-header">

              <div>

                <h2>
                  Weekly Schedule Details
                </h2>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#64748b",
                    fontSize: "11px",
                  }}
                >
                  Detailed view of scheduled maintenance blocks.
                </p>

              </div>

            </div>


            <div className="table-container">

              <table className="data-table">

                <thead>

                  <tr>
                    <th>Block ID</th>
                    <th>Section</th>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Priority</th>
                    <th>Status</th>
                  </tr>

                </thead>


                <tbody>

                  {mockBlocks.map((block) => (

                    <tr key={block.id}>

                      <td>
                        <strong>
                          {block.id}
                        </strong>
                      </td>

                      <td>
                        {block.section}
                      </td>

                      <td>
                        {block.department}
                      </td>

                      <td>
                        {block.date}
                      </td>

                      <td>
                        {block.startTime ||
                          block.time ||
                          "-"}
                      </td>

                      <td>
                        {block.duration || "-"} min
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

                  ))}

                </tbody>

              </table>

            </div>

          </div>


          {/* PLANNING INFORMATION */}
          <div className="dashboard-card">

            <div className="card-header">

              <h2>
                Planning Information
              </h2>

            </div>


            <div className="planner-principles">

              <div>
                <strong>Priority Based</strong>

                <br />

                Critical maintenance is given
                higher scheduling priority.
              </div>


              <div>
                <strong>Train Aware</strong>

                <br />

                Planned blocks should avoid
                important train movements.
              </div>


              <div>
                <strong>Department Coordination</strong>

                <br />

                Multiple departments can coordinate
                maintenance activities.
              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default WeeklyPlan;