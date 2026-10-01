import {
  Bell,
  CheckCircle,
  AlertTriangle,
  Info,
  Clock
} from "lucide-react";

import Navbar from "../../components/Navbar";
import UserSidebar from "../../components/UserSidebar";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Block Request Approved",
    message:
      "Your maintenance block BLK-2026-002 has been approved.",
    time: "10 minutes ago"
  },
  {
    id: 2,
    type: "warning",
    title: "Maintenance Reminder",
    message:
      "OHE-234 maintenance is scheduled for tomorrow.",
    time: "1 hour ago"
  },
  {
    id: 3,
    type: "info",
    title: "New Planning Cycle",
    message:
      "The September weekly block planning cycle is now open.",
    time: "3 hours ago"
  },
  {
    id: 4,
    type: "success",
    title: "Request Completed",
    message:
      "Maintenance request MR-1004 has been completed.",
    time: "Yesterday"
  }
];

function Notifications() {
  const getIcon = (type) => {

    if (type === "success") {
      return <CheckCircle size={21} />;
    }

    if (type === "warning") {
      return <AlertTriangle size={21} />;
    }

    return <Info size={21} />;
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
                ALERTS
              </span>

              <h1>
                Notifications
              </h1>

              <p>
                Important updates about your requests
                and block plans.
              </p>

            </div>

            <div className="notification-count">
              <Bell size={18} />
              {notifications.length} Notifications
            </div>

          </div>


          <section className="notifications-card">

            {notifications.map(
              (notification) => (

                <div
                  className={`notification-item notification-${notification.type}`}
                  key={notification.id}
                >

                  <div className="notification-icon">
                    {getIcon(notification.type)}
                  </div>


                  <div className="notification-content">

                    <h3>
                      {notification.title}
                    </h3>

                    <p>
                      {notification.message}
                    </p>

                    <span>
                      <Clock size={14} />
                      {notification.time}
                    </span>

                  </div>

                </div>

              )
            )}

          </section>

        </main>

      </div>

    </div>
  );
}

export default Notifications;