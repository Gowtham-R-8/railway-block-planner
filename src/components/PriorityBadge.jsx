function PriorityBadge({ priority }) {
  const normalizedPriority = priority
    ?.toLowerCase();

  return (
    <span
      className={`priority-badge priority-${normalizedPriority}`}
    >
      {priority}
    </span>
  );
}

export default PriorityBadge;