import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ProgressChart({ workouts }) {
  const data = {
    labels: workouts.map((w) => w.workoutType),
    datasets: [
      {
        label: "Calories Burned",
        data: workouts.map((w) => w.caloriesBurned),
        backgroundColor: "#0d6efd",
      },
    ],
  };

  return (
    <div className="card shadow mt-4 p-3">
      <h4>📈 Workout Progress</h4>
      <Bar data={data} />
    </div>
  );
}

export default ProgressChart;