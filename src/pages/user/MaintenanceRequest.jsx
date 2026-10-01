import {
  Send,
  Wrench,
  CalendarDays,
  Clock,
  MapPin,
  FileText
} from "lucide-react";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import UserSidebar from "../../components/UserSidebar";

import { getCurrentUser } from "../../services/authService";

function MaintenanceRequest() {
  const user = getCurrentUser();

  const [form, setForm] = useState({
    asset: "",
    section: "",
    requestedDate: "",
    startTime: "",
    endTime: "",
    priority: "Medium",
    description: ""
  });

  const [success, setSuccess] = useState(false);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);

      setForm({
        asset: "",
        section: "",
        requestedDate: "",
        startTime: "",
        endTime: "",
        priority: "Medium",
        description: ""
      });
    }, 3000);
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
                MAINTENANCE
              </span>

              <h1>
                Maintenance Request
              </h1>

              <p>
                Submit a request for railway asset
                maintenance or inspection.
              </p>

            </div>

          </div>


          {success && (
            <div className="success-alert">

              <div>
                <strong>
                  Request Submitted Successfully
                </strong>

                <p>
                  Your maintenance request has been
                  forwarded to the block planning system.
                </p>
              </div>

            </div>
          )}


          <section className="form-card">

            <div className="form-card-header">

              <div className="form-card-icon">
                <Wrench size={24} />
              </div>

              <div>
                <h2>
                  New Maintenance Request
                </h2>

                <p>
                  Provide the details required for
                  maintenance block planning.
                </p>
              </div>

            </div>


            <form onSubmit={handleSubmit}>

              <div className="form-section">

                <h3>
                  Asset Information
                </h3>


                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Asset
                    </label>

                    <div className="input-wrapper">

                      <Wrench size={18} />

                      <select
                        name="asset"
                        value={form.asset}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select asset
                        </option>

                        <option value="TRK-001">
                          TRK-001 - Main Line Track
                        </option>

                        <option value="TRK-078">
                          TRK-078 - Loop Line Track
                        </option>

                        <option value="OHE-234">
                          OHE-234 - OHE Mast
                        </option>

                        <option value="SIG-045">
                          SIG-045 - Automatic Signal
                        </option>

                        <option value="TEL-121">
                          TEL-121 - Telecom Unit
                        </option>

                      </select>

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      Section
                    </label>

                    <div className="input-wrapper">

                      <MapPin size={18} />

                      <select
                        name="section"
                        value={form.section}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select section
                        </option>

                        <option value="Chennai - Arakkonam">
                          Chennai - Arakkonam
                        </option>

                        <option value="Chennai Central">
                          Chennai Central
                        </option>

                        <option value="Arakkonam">
                          Arakkonam
                        </option>

                        <option value="Katpadi">
                          Katpadi
                        </option>

                      </select>

                    </div>

                  </div>

                </div>

              </div>


              <div className="form-section">

                <h3>
                  Block Requirement
                </h3>


                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Requested Date
                    </label>

                    <div className="input-wrapper">

                      <CalendarDays size={18} />

                      <input
                        type="date"
                        name="requestedDate"
                        value={form.requestedDate}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      Priority
                    </label>

                    <select
                      className="normal-select"
                      name="priority"
                      value={form.priority}
                      onChange={handleChange}
                    >

                      <option value="Low">
                        Low
                      </option>

                      <option value="Medium">
                        Medium
                      </option>

                      <option value="High">
                        High
                      </option>

                      <option value="Critical">
                        Critical
                      </option>

                    </select>

                  </div>


                  <div className="form-group">

                    <label>
                      Start Time
                    </label>

                    <div className="input-wrapper">

                      <Clock size={18} />

                      <input
                        type="time"
                        name="startTime"
                        value={form.startTime}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      End Time
                    </label>

                    <div className="input-wrapper">

                      <Clock size={18} />

                      <input
                        type="time"
                        name="endTime"
                        value={form.endTime}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                </div>

              </div>


              <div className="form-section">

                <h3>
                  Maintenance Description
                </h3>


                <div className="form-group">

                  <label>
                    Description
                  </label>

                  <div className="textarea-wrapper">

                    <FileText size={18} />

                    <textarea
                      name="description"
                      placeholder="Describe the maintenance work required..."
                      value={form.description}
                      onChange={handleChange}
                      rows="5"
                      required
                    />

                  </div>

                </div>

              </div>


              <div className="request-summary">

                <div>
                  <strong>
                    Department
                  </strong>

                  <span>
                    {user?.department || "Not available"}
                  </span>
                </div>

                <div>
                  <strong>
                    Requester
                  </strong>

                  <span>
                    {user?.name || "Not available"}
                  </span>
                </div>

              </div>


              <div className="form-actions">

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    window.history.back()
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  <Send size={18} />
                  Submit Request
                </button>

              </div>

            </form>

          </section>

        </main>

      </div>

    </div>
  );
}

export default MaintenanceRequest;