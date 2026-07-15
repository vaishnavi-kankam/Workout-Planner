import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditWorkout() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    workoutType: "",
    duration: "",
    caloriesBurned: "",
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
      await API.put(`/workouts/${id}`, formData);
      toast.success("Workout Updated Successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>

      <h1 className="text-dark fw-bold">Edit Workout</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="workoutType"
          placeholder="Workout Type"
          value={formData.workoutType}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="caloriesBurned"
          placeholder="Calories Burned"
          value={formData.caloriesBurned}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Update Workout</button>
      </form>
    </div>
  );
}

export default EditWorkout;