import React from "react";

function ExerciseDetails() {
  const exercises = [
    {
      name: "🏃 Running",
      muscles: "Legs, Core",
      duration: "30 Minutes",
      calories: "300-400 kcal",
      steps: "Run at a comfortable pace and maintain good posture.",
    },
    {
      name: "💪 Push-ups",
      muscles: "Chest, Shoulders, Triceps",
      duration: "15 Minutes",
      calories: "100-150 kcal",
      steps: "Keep your body straight and lower until your chest is near the floor.",
    },
    {
      name: "🧘 Yoga",
      muscles: "Full Body",
      duration: "45 Minutes",
      calories: "180-250 kcal",
      steps: "Perform poses slowly while focusing on breathing.",
    },
    {
      name: "🚴 Cycling",
      muscles: "Legs",
      duration: "40 Minutes",
      calories: "350-500 kcal",
      steps: "Maintain a steady speed and adjust resistance as needed.",
    },
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
  className={`card shadow-lg p-4 ${
    darkMode ? "bg-secondary text-light" : "bg-white"
  }`}
>        <h2 className="text-center text-primary fw-bold mb-4">
          📖 Exercise Details
        </h2>

        {exercises.map((exercise, index) => (
          <div
            key={index}
            className="card mb-3 shadow-sm"
            style={{
              borderLeft: "6px solid #0d6efd",
              borderRadius: "15px",
            }}
          >
            <div className="card-body">
              <h4>{exercise.name}</h4>

              <p><strong>💪 Muscles Worked:</strong> {exercise.muscles}</p>

              <p><strong>⏱ Duration:</strong> {exercise.duration}</p>

              <p><strong>🔥 Calories Burned:</strong> {exercise.calories}</p>

              <p><strong>📋 How to Perform:</strong> {exercise.steps}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseDetails;