import {
  Settings as SettingsIcon,
  Bell,
  ShieldCheck,
  BrainCircuit,
  Database,
  Save,
  SlidersHorizontal
} from "lucide-react";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";

function Settings() {
  const [settings, setSettings] =
    useState({
      autoPlanning: true,
      notifications: true,
      conflictDetection: true,
      aiPriority: true,
      trainImpact: true,
      assetAvailability: true,
      maintenanceWindow: 120,
      maxBlockDuration: 180
    });

  const [saved, setSaved] =
    useState(false);


  const updateSetting = (
    name,
    value
  ) => {

    setSettings((previous) => ({
      ...previous,
      [name]: value
    }));

    setSaved(false);
  };


  const handleSave = () => {

    localStorage.setItem(
      "railway_planner_settings",
      JSON.stringify(settings)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };


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
                SYSTEM CONFIGURATION
              </span>

              <h1>
                Settings
              </h1>

              <p>
                Configure block planning,
                notifications and AI optimization.
              </p>

            </div>


            <button
              className="primary-button"
              onClick={handleSave}
            >

              <Save size={18} />

              Save Settings

            </button>

          </div>


          {saved && (

            <div className="success-alert">

              <strong>
                Settings saved successfully.
              </strong>

              <p>
                Your railway planning configuration
                has been updated.
              </p>

            </div>

          )}


          {/* PLANNING SETTINGS */}

          <section className="settings-card">

            <div className="settings-header">

              <div className="settings-icon">
                <SlidersHorizontal size={23} />
              </div>

              <div>

                <h2>
                  Block Planning
                </h2>

                <p>
                  Configure automatic planning behaviour.
                </p>

              </div>

            </div>


            <div className="settings-list">

              <SettingToggle
                title="Automatic Block Planning"
                description="Allow the system to generate optimized block plans automatically."
                checked={settings.autoPlanning}
                onChange={(value) =>
                  updateSetting(
                    "autoPlanning",
                    value
                  )
                }
              />


              <SettingToggle
                title="Conflict Detection"
                description="Check planned blocks against train movement schedules."
                checked={settings.conflictDetection}
                onChange={(value) =>
                  updateSetting(
                    "conflictDetection",
                    value
                  )
                }
              />


              <SettingToggle
                title="Train Impact Analysis"
                description="Consider train movement impact during block optimization."
                checked={settings.trainImpact}
                onChange={(value) =>
                  updateSetting(
                    "trainImpact",
                    value
                  )
                }
              />


              <SettingToggle
                title="Asset Availability Optimization"
                description="Use asset condition and availability during planning."
                checked={settings.assetAvailability}
                onChange={(value) =>
                  updateSetting(
                    "assetAvailability",
                    value
                  )
                }
              />

            </div>

          </section>


          {/* AI SETTINGS */}

          <section className="settings-card">

            <div className="settings-header">

              <div className="settings-icon">
                <BrainCircuit size={23} />
              </div>

              <div>

                <h2>
                  AI Optimization
                </h2>

                <p>
                  Configure intelligent planning parameters.
                </p>

              </div>

            </div>


            <div className="settings-list">

              <SettingToggle
                title="AI Priority Scoring"
                description="Automatically calculate maintenance priority scores."
                checked={settings.aiPriority}
                onChange={(value) =>
                  updateSetting(
                    "aiPriority",
                    value
                  )
                }
              />

            </div>


            <div className="form-grid settings-form">

              <div className="form-group">

                <label>
                  Default Maintenance Window
                </label>

                <select
                  className="normal-select"
                  value={
                    settings.maintenanceWindow
                  }
                  onChange={(e) =>
                    updateSetting(
                      "maintenanceWindow",
                      Number(e.target.value)
                    )
                  }
                >

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


              <div className="form-group">

                <label>
                  Maximum Block Duration
                </label>

                <select
                  className="normal-select"
                  value={
                    settings.maxBlockDuration
                  }
                  onChange={(e) =>
                    updateSetting(
                      "maxBlockDuration",
                      Number(e.target.value)
                    )
                  }
                >

                  <option value="120">
                    120 minutes
                  </option>

                  <option value="180">
                    180 minutes
                  </option>

                  <option value="240">
                    240 minutes
                  </option>

                  <option value="300">
                    300 minutes
                  </option>

                </select>

              </div>

            </div>

          </section>


          {/* NOTIFICATIONS */}

          <section className="settings-card">

            <div className="settings-header">

              <div className="settings-icon">
                <Bell size={23} />
              </div>

              <div>

                <h2>
                  Notifications
                </h2>

                <p>
                  Configure system notifications.
                </p>

              </div>

            </div>


            <div className="settings-list">

              <SettingToggle
                title="System Notifications"
                description="Receive notifications about planning and maintenance changes."
                checked={settings.notifications}
                onChange={(value) =>
                  updateSetting(
                    "notifications",
                    value
                  )
                }
              />

            </div>

          </section>


          {/* SECURITY */}

          <section className="settings-card">

            <div className="settings-header">

              <div className="settings-icon">
                <ShieldCheck size={23} />
              </div>

              <div>

                <h2>
                  Security
                </h2>

                <p>
                  Railway control system security configuration.
                </p>

              </div>

            </div>


            <div className="security-grid">

              <div className="security-item">

                <ShieldCheck size={21} />

                <div>

                  <strong>
                    Role-Based Access
                  </strong>

                  <span>
                    Enabled
                  </span>

                </div>

              </div>


              <div className="security-item">

                <Database size={21} />

                <div>

                  <strong>
                    Data Protection
                  </strong>

                  <span>
                    Enabled
                  </span>

                </div>

              </div>


              <div className="security-item">

                <SettingsIcon size={21} />

                <div>

                  <strong>
                    System Status
                  </strong>

                  <span>
                    Operational
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


function SettingToggle({
  title,
  description,
  checked,
  onChange
}) {
  return (
    <div className="setting-row">

      <div>

        <strong>
          {title}
        </strong>

        <span>
          {description}
        </span>

      </div>


      <button
        type="button"
        className={`toggle ${
          checked ? "active" : ""
        }`}
        onClick={() =>
          onChange(!checked)
        }
        aria-label={title}
      >

        <span></span>

      </button>

    </div>
  );
}

export default Settings;