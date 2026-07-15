import React, { useEffect, useState } from "react";
import API from "../services/api";

function WorkoutHistory() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await API.get("/workouts");
      setWorkouts(res.data);
    } catch (error) {
      console.error(error);
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
          <h2
  className="text-center fw-bold mb-4"
  style={{
    color: "#0d6efd",
    fontSize: "34px",
  }}
>
  📅 Workout History
</h2>
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>Date</th>
            <th>Workout</th>
            <th>Duration</th>
            <th>Calories</th>
          </tr>
        </thead>

        <tbody>
          {workouts.map((workout) => (
            <tr key={workout._id}>
              <td>{new Date(workout.date).toLocaleDateString()}</td>
              <td>{workout.workoutType}</td>
              <td>{workout.duration} min</td>
              <td>{workout.caloriesBurned}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkoutHistory;