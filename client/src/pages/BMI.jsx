import React, { useEffect, useState } from "react";
import API from "../services/api";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/users/profile");
      setHeight(res.data.height);
      setWeight(res.data.weight);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please update your profile first.");
      return;
    }

    const h = height / 100;
    const result = (weight / (h * h)).toFixed(2);
    setBMI(result);
  };

  const getStatus = () => {
    if (!bmi) return "";

    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";

    return "Obese";
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
  ⚖️ BMI Calculator
</h2>
        <hr />

        <h5>Height : {height} cm</h5>

        <h5>Weight : {weight} kg</h5>

        <button
          className="btn btn-success mt-3"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>

        {bmi && (
          <>
            <h3 className="mt-4">
              BMI : {bmi}
            </h3>

            <h4>{getStatus()}</h4>
          </>
        )}

      </div>
    </div>
  );
}

export default BMI;