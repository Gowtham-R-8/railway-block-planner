function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  type = "default"
}) {
  return (
    <div className={`stat-card ${type}`}>

      <div className="stat-card-content">

        <div>
          <p className="stat-title">
            {title}
          </p>

          <h2 className="stat-value">
            {value}
          </h2>

          {subtitle && (
            <p className="stat-subtitle">
              {subtitle}
            </p>
          )}
        </div>

        {Icon && (
          <div className="stat-icon">
            <Icon size={25} />
          </div>
        )}

      </div>

    </div>
  );
}

export default StatCard;