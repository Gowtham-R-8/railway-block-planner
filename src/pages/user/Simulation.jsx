import {
  Play,
  BrainCircuit,
  Clock,
  TrainFront,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import UserSidebar from "../../components/UserSidebar";

function Simulation() {
  const [duration, setDuration] =
    useState(60);

  const [startTime, setStartTime] =
    useState("22:00");

  const [running, setRunning] =
    useState(false);

  const [result, setResult] =
    useState(null);


  const runSimulation = () => {

    setRunning(true);
    setResult(null);

    setTimeout(() => {

      const affectedTrains =
        Math.max(
          1,
          Math.ceil(duration / 60)
        );

      const efficiency =
        Math.max(
          65,
          100 - duration * 0.25
        );

      setResult({
        affectedTrains,
        efficiency: Math.round(efficiency),
        conflicts: duration > 90 ? 2 : 0,
        recommendation:
          duration <= 60
            ? "Recommended"
            : "Requires Review"
      });

      setRunning(false);

    }, 1200);
  };


  return (
    <div className="app-layout">

      <UserSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">

          <div className="page-header">

            <div>

              <span className="page-eyebrow">
                SIMULATION
              </span>

              <h1>
                Block Simulation
              </h1>

              <p>
                Test a maintenance block before
                submitting it to the planner.
              </p>

            </div>

          </div>


          <div className="simulation-grid">

            {/* INPUT */}

            <section className="dashboard-card">

              <div className="card-header">

                <div>

                  <h2>
                    Simulation Parameters
                  </h2>

                  <p>
                    Configure the proposed block.
                  </p>

                </div>

                <BrainCircuit size={25} />

              </div>


              <div className="form-section">

                <div className="form-group">

                  <label>
                    Block Start Time
                  </label>

                  <div className="input-wrapper">

                    <Clock size={18} />

                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) =>
                        setStartTime(
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label>
                    Block Duration
                  </label>

                  <select
                    className="normal-select"
                    value={duration}
                    onChange={(e) =>
                      setDuration(
                        Number(e.target.value)
                      )
                    }
                  >

                    <option value="30">
                      30 minutes
                    </option>

                    <option value="60">
                      60 minutes
                    </option>

                    <option value="90">
                      90 minutes
                    </option>

                    <option value="120">
                      120 minutes
                    </option>

                    <option value="180">
                      180 minutes
                    </option>

                  </select>

                </div>


                <button
                  className="primary-button simulation-button"
                  onClick={runSimulation}
                  disabled={running}
                >

                  <Play size={18} />

                  {running
                    ? "Running Simulation..."
                    : "Run Simulation"}

                </button>

              </div>

            </section>


            {/* RESULT */}

            <section className="dashboard-card">

              <div className="card-header">

                <div>

                  <h2>
                    Simulation Result
                  </h2>

                  <p>
                    Operational impact analysis
                  </p>

                </div>

              </div>


              {!result && !running && (

                <div className="simulation-empty">

                  <BrainCircuit size={45} />

                  <h3>
                    No Simulation Run
                  </h3>

                  <p>
                    Configure your block parameters
                    and run the simulation.
                  </p>

                </div>

              )}


              {running && (

                <div className="simulation-empty">

                  <div className="loading-spinner"></div>

                  <h3>
                    Analyzing Block
                  </h3>

                  <p>
                    Evaluating timetable conflicts,
                    train impact and availability...
                  </p>

                </div>

              )}


              {result && (

                <div className="simulation-result">

                  <div className="result-status">

                    {result.conflicts === 0 ? (
                      <CheckCircle size={26} />
                    ) : (
                      <AlertTriangle size={26} />
                    )}

                    <div>

                      <strong>
                        {result.recommendation}
                      </strong>

                      <span>
                        Start time: {startTime}
                      </span>

                    </div>

                  </div>


                  <div className="result-metrics">

                    <div>

                      <TrainFront size={22} />

                      <strong>
                        {result.affectedTrains}
                      </strong>

                      <span>
                        Affected Trains
                      </span>

                    </div>


                    <div>

                      <Clock size={22} />

                      <strong>
                        {duration} min
                      </strong>

                      <span>
                        Block Duration
                      </span>

                    </div>


                    <div>

                      <CheckCircle size={22} />

                      <strong>
                        {result.efficiency}%
                      </strong>

                      <span>
                        Efficiency
                      </span>

                    </div>

                  </div>


                  <div className="simulation-message">

                    {result.conflicts === 0
                      ? "The proposed block has no major timetable conflicts and can be considered for planning."
                      : "The proposed block may affect train operations. Consider a shorter duration or another time window."}

                  </div>

                </div>

              )}

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Simulation;