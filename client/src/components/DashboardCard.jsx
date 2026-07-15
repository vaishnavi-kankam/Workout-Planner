import React from "react";

function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="col-md-3 mb-3">
      <div
      className="card shadow-lg border-0 mb-4"
        style={{
          background: color,
          borderRadius: "18px",
        }}
      >
        <div className="card-body text-white">

          <h1>{icon}</h1>

          <h5>{title}</h5>

          <h2>{value}</h2>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard;