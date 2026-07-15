import React, { useState } from "react";

function SleepTracker() {
  const [hours, setHours] = useState(8);

  const getQuality = () => {
    if (hours < 6) return "😴 Poor Sleep";
    if (hours < 8) return "🙂 Good Sleep";
    return "🌟 Excellent Sleep";
  };

  return (
    <div
  className="container py-5"
  style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e0f7fa, #e3f2fd)",
  }}
>


       <div
  className="card shadow-lg border-0 p-4 mx-auto"
  style={{
    maxWidth: "550px",
    borderRadius: "20px",
    background: "#ffffff",
  }}
>

  <h2
  className="text-center fw-bold mb-4"
  style={{
    color: "#0d6efd",
    fontSize: "34px",
  }}
>
  😴 Sleep Tracker
</h2>

        <div className="mt-4">
          <label className="form-label">
            Sleep Hours 
          </label>

          <input
            type="range"
            className="form-range"
            min="0"
            max="12"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />

          <h3>{hours} Hours</h3>

          <div
            className="progress"
            style={{ height: "25px" }}
          >
            <div
              className="progress-bar bg-success"
              style={{
                width: `${(hours / 12) * 100}%`,
              }}
            >
              {Math.round((hours / 12) * 100)}%
            </div>
          </div>

          <h4 className="mt-3">
            {getQuality()}
          </h4>

        </div>

      </div>
    </div>
  );
}

export default SleepTracker;