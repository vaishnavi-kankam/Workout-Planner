import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddWorkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    workoutType: "",
    category:"",
    duration: "",
    caloriesBurned: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      await API.post("/workouts", formData);
      toast.success("Workout Added Successfully");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add workout");
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
    maxWidth: "500px",
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
  🏋️ Add Workout
</h2>
      <form onSubmit={handleSubmit}>
        <input
  className="form-control shadow-sm"
          type="text"
          name="workoutType"
          placeholder="Workout Type"
          value={formData.workoutType}
          onChange={handleChange}
        />
        <br /><br />
      

      <select
  name="category"
  className="form-select shadow-sm"
  value={formData.category}
  onChange={handleChange}
  required
>
  <option value="">Select Exercise Category</option>
  <option value="Cardio">🏃 Cardio</option>
  <option value="Strength">💪 Strength</option>
  <option value="Yoga">🧘 Yoga</option>
  <option value="Running">🏃 Running</option>
  <option value="Cycling">🚴 Cycling</option>
  <option value="Walking">🚶 Walking</option>
  <option value="Swimming">🏊 Swimming</option>
  <option value="Stretching">🤸 Stretching</option>
</select>

<br /><br />



        <input
          className="form-control shadow-sm"
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={formData.duration}
          onChange={handleChange}
        />
        <br /><br />

        <input
          className="form-control shadow-sm"
          type="number"
          name="caloriesBurned"
          placeholder="CaloriesBurned"
          value={formData.caloriesBurned}
          onChange={handleChange}
        />
        <br /><br />

        <input
          className="form-control shadow-sm"
         type="date"
         name="date"
          value={formData.date}
          onChange={handleChange}
           />
          <br /><br />

        <button
  type="submit"
  className="btn btn-success w-100 py-2 fw-bold rounded-pill shadow"
>
  ➕ Add Workout
</button>

      </form>
    </div>
    </div>
   
  );
}

export default AddWorkout;