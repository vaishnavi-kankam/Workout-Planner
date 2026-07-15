import React, { useState } from "react";

function Diet() {
  const [diet, setDiet] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
    snacks: "",
  });

  const handleChange = (e) => {
    setDiet({
      ...diet,
      [e.target.name]: e.target.value,
    });
  };

  const saveDiet = () => {
    alert("Diet Plan Saved Successfully!");
    console.log(diet);
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
    maxWidth: "900px",
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
  🥗 Diet Planner
</h2>
        <div className="mb-3">
          <label className="form-label">🥣 Breakfast</label>
          <input
            type="text"
            name="breakfast"
            className="form-control"
            value={diet.breakfast}
            onChange={handleChange}
            placeholder="Enter breakfast"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">🍛 Lunch</label>
          <input
            type="text"
            name="lunch"
            className="form-control"
            value={diet.lunch}
            onChange={handleChange}
            placeholder="Enter lunch"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">🥗 Dinner</label>
          <input
            type="text"
            name="dinner"
            className="form-control"
            value={diet.dinner}
            onChange={handleChange}
            placeholder="Enter dinner"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">🍌 Snacks</label>
          <input
            type="text"
            name="snacks"
            className="form-control"
            value={diet.snacks}
            onChange={handleChange}
            placeholder="Enter snacks"
          />
        </div>

        <button
          className="btn btn-success"
          onClick={saveDiet}
        >
          💾 Save Diet
        </button>

      </div>
    </div>
  );
}

export default Diet;