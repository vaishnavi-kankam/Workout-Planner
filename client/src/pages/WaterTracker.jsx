import React, { useState } from "react";

function WaterTracker() {
  const [glasses, setGlasses] = useState(0);

  const addWater = () => {
    if (glasses < 8) {
      setGlasses(glasses + 1);
    }
  };

  const removeWater = () => {
    if (glasses > 0) {
      setGlasses(glasses - 1);
    }
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
  💧 Water Tracker
</h2>
        <h4 className="mt-4">
          {glasses} / 8 Glasses
        </h4>

        <div className="progress mt-3" style={{ height: "30px" }}>
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: `${(glasses / 8) * 100}%` }}
          >
            {Math.round((glasses / 8) * 100)}%
          </div>
        </div>

        <div className="mt-4">
          <button
            className="btn btn-success me-3"
            onClick={addWater}
          >
            ➕ Add Glass
          </button>

          <button
            className="btn btn-danger"
            onClick={removeWater}
          >
            ➖ Remove Glass
          </button>
        </div>

      </div>
    </div>
  );
}

export default WaterTracker;