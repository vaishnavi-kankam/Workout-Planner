import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import ProgressChart from "../components/ProgressChart";


function Dashboard() {
  const [workouts, setWorkouts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
   
  useEffect(() => {
    fetchWorkouts();
  }, []);

  //Fetch Workouts
  const fetchWorkouts = async () => {
    try {
      const res = await API.get("/workouts");
      setWorkouts(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load workouts");
    }
  };

 const deleteWorkout = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this workout?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/workouts/${id}`);

    alert("Workout Deleted Successfully");

    fetchWorkouts();
  } catch (error) {
    console.error(error);
    alert("Failed to delete workout");
  }
};
 const filteredWorkouts = workouts.filter((workout) => {
  const matchesSearch = workout.workoutType
    .toLowerCase()
    .includes(search.toLowerCase());
   
    const matchesCategory =
  category === "" || workout.category === category;

  const workoutDate = workout.date.split("T")[0];

  const matchesDate =
    !selectedDate || workoutDate === selectedDate;

  return matchesSearch && matchesDate&&matchesCategory;
});


   const totalCalories = workouts.reduce(
  (sum, workout) => sum + Number(workout.caloriesBurned),
  0
);

const totalDuration = workouts.reduce(
  (sum, workout) => sum + Number(workout.duration),
  0
);

  return (
    <>
    <div
  className="text-center mb-4 p-4 rounded shadow"
  style={{
    background: "linear-gradient(90deg,#0d6efd,#20c997)",
    color: "white",
  }}
>
  <h1 className="fw-bold">👋 Welcome to FitLife</h1>

 <h2> <p className="mb-0">
    Track your fitness journey and achieve your goals.
  </p></h2>
</div>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

<div
  className="container-fluid p-4"
  style={{
    background: "#f5f7fb",
    minHeight: "100vh",
  }}
>
          <h1 className="text-success fw-bold text-center mb-4">
            🏋️ Workout Planner Dashboard</h1>

    
     <div className="mb-4">
  <input
    type="text"
    className="form-control shadow"
    placeholder="🔍 Search Workout..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>
     
<div className="mb-4">
  <label className="form-label fw-bold">
    🏷 Filter by Category
  </label>

  <select
    className="form-select"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="">All Categories</option>
    <option value="Cardio">🏃 Cardio</option>
    <option value="Strength">💪 Strength</option>
    <option value="Yoga">🧘 Yoga</option>
    <option value="Running">🏃 Running</option>
    <option value="Cycling">🚴 Cycling</option>
    <option value="Walking">🚶 Walking</option>
    <option value="Swimming">🏊 Swimming</option>
    <option value="Stretching">🤸 Stretching</option>
  </select>
</div>



      <div className="mb-4">
  <label className="form-label fw-bold text-dark">
    📅 Filter by Date
    </label>

      <input
        type="date"
        className="form-control"
         value={selectedDate}
         onChange={(e) =>
           setSelectedDate(e.target.value)}
         />
        </div>

      {/* Dashboard Cards */}
     
     <div className="row
     justify-content-center">

  <DashboardCard
    title="Workouts"
    value={filteredWorkouts.length}
    icon="🏋️"
    color="linear-gradient(45deg,#0d6efd,#4dabf7)"
  />

  <DashboardCard
    title="Calories"
    value={totalCalories}
    icon="🔥"
    color="linear-gradient(45deg,#ff6b6b,#ff922b)"
  />

  <DashboardCard
    title="Duration"
    value={`${totalDuration} min`}
    icon="⏱"
    color="linear-gradient(45deg,#20c997,#38d9a9)"
  />

  <DashboardCard
    title="BMI"
    value="22.4"
    icon="⚖️"
    color="linear-gradient(45deg,#845ef7,#9775fa)"
  />

    </div>

          
          {/* Add Workout Button */}
          <div className="my-4">
            <button
              className="btn btn-success
              btn-lg shadow"
              onClick={() => navigate("/add-workout")}
                  >
              ➕ Add Workout
            </button>
          </div>

          <h3 className="text-primary fw-bold text-center mt-5 mb-4">
            My Workouts
            </h3>

          {filteredWorkouts.length === 0 ? (
            <p className="text-center fw-bold">No workouts found.</p>
          ) : (
            
            filteredWorkouts.map((workout) => (

              <div
                key={workout._id}
                className="card shadow mb-3"
              >
                <div className="card-body">

           
           <div className="d-flex justify-content-between align-items-center">
  <h4 className="fw-bold text-primary">
    🏋️ {workout.workoutType}
  </h4>

  <span
  className={`badge fs-6 ${
    workout.category === "Cardio"
      ? "bg-danger"
      : workout.category === "Strength"
      ? "bg-primary"
      : workout.category === "Yoga"
      ? "bg-success"
      : workout.category === "Running"
      ? "bg-warning text-dark"
      : workout.category === "Cycling"
      ? "bg-info text-dark"
      : workout.category === "Walking"
      ? "bg-secondary"
      : workout.category === "Swimming"
      ? "bg-primary"
      : "bg-dark"
  }`}
>
  {workout.category}
</span>

</div>

<p>
  <strong>Category:</strong> {workout.category}
</p>

                  <p>
                    <strong>Duration:</strong> {workout.duration} mins
                  </p>

                  <p>
                    <strong>Calories Burned:</strong>{" "}
                    {workout.caloriesBurned}
                  </p>

                 <p>
                 <strong>Date:</strong> {new Date(workout.date).toLocaleDateString()}
                 </p>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() =>
                      navigate(`/edit-workout/${workout._id}`)
                    }
                  >
                    ✏️ Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      deleteWorkout(workout._id)}
                  >
                    🗑 Delete
                  </button>

                </div>
              </div>
            ))
          )}

          <ProgressChart workouts={workouts} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;