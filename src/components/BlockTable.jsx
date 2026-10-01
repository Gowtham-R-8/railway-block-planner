import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

function BlockTable({
  blocks = [],
  onView,
  onApprove,
  onReject
}) {
  return (
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
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {blocks.length === 0 ? (

            <tr>
              <td
                colSpan="9"
                className="empty-table"
              >
                No block requests found.
              </td>
            </tr>

          ) : (

            blocks.map((block) => (

              <tr key={block.id}>

                <td>
                  <strong>
                    {block.blockId}
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
                  {block.startTime} - {block.endTime}
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

                <td>

                  <div className="table-actions">

                    {onView && (
                      <button
                        className="action-btn view"
                        onClick={() =>
                          onView(block)
                        }
                      >
                        View
                      </button>
                    )}

                    {onApprove &&
                      block.status === "Pending" && (
                        <button
                          className="action-btn approve"
                          onClick={() =>
                            onApprove(block)
                          }
                        >
                          Approve
                        </button>
                      )}

                    {onReject &&
                      block.status === "Pending" && (
                        <button
                          className="action-btn reject"
                          onClick={() =>
                            onReject(block)
                          }
                        >
                          Reject
                        </button>
                      )}

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default BlockTable;