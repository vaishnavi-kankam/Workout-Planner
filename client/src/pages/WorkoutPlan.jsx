import React from "react";

function WorkoutPlan() {
  const weeklyPlan = [
    { day: "Monday", workout: "💪 Strength Training" },
    { day: "Tuesday", workout: "🏃 Cardio" },
    { day: "Wednesday", workout: "🧘 Yoga" },
    { day: "Thursday", workout: "🚴 Cycling" },
    { day: "Friday", workout: "🏋️ Full Body Workout" },
    { day: "Saturday", workout: "🏊 Swimming" },
    { day: "Sunday", workout: "😌 Rest & Stretching" },
  ];

  return (
    <div
      className="container py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#e0f7fa,#e3f2fd)",
      }}
    >
      <div
        className="card shadow-lg border-0 p-4 mx-auto"
        style={{
          maxWidth: "900px",
          borderRadius: "20px",
        }}
      >
        <h2 className="text-center text-primary fw-bold mb-4">
          📅 Weekly Workout Schedule
        </h2>

        {weeklyPlan.map((plan, index) => (
          <div
            key={index}
            className="card mb-3 shadow-sm"
            style={{
              borderLeft: "6px solid #0d6efd",
              borderRadius: "12px",
            }}
          >
            <div className="card-body d-flex justify-content-between">
              <h5>{plan.day}</h5>
              <span className="fw-bold text-success">
                {plan.workout}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPlan;