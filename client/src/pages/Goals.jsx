import React, { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Goals() {
  const [goal, setGoal] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/users/profile");
      setGoal(res.data.goal);
    } catch (error) {
      console.error(error);
    }
  };

  const saveGoal = async () => {
    try {
      await API.put("/users/profile", {
        goal,
      });

      toast.success("Goal Updated Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update goal");
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
    maxWidth: "600px",
    borderRadius: "20px",
  }}
>
 
 <h2
  className="text-center fw-bold mb-4"
  style={{
    color: "#0d6efd",
    fontSize: "34px",
  }}
>
  🎯 Fitness Goals
</h2>
        <select
          className="form-select mt-3"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="">Select Goal</option>
          <option>Weight Loss</option>
          <option>Muscle Building</option>
          <option>Stay Fit</option>
          <option>Strength Training</option>
          <option>Improve Stamina</option>
        </select>

        <button
  className="btn btn-success w-100 rounded-pill fw-bold shadow"
>
  💾 Save Goal
</button>

       <div
  className="alert alert-primary mt-4 text-center shadow-sm"
  style={{
    borderRadius: "15px",
  }}
>
  <h5 className="mb-0">
    🎯 Current Goal: {goal}
  </h5>
</div>

      </div>
    </div>
  );
}

export default Goals;