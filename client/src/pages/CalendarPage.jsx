import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

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
  📅 Workout Calendar
</h2>
        <div
  className="d-flex justify-content-center mb-4"
  style={{
    background: "#f8f9fa",
    borderRadius: "20px",
    padding: "20px",
  }}
>
  <Calendar
    onChange={setDate}
    value={date}
  />
</div>

        <div
  className="alert alert-primary text-center shadow-sm"
  style={{
    borderRadius: "15px",
  }}
>
  <h5>
    📅 Selected Date
  </h5>

  <h4 className="fw-bold">
    {date.toDateString()}
  </h4>
</div>

      </div>
    </div>
  );
}

export default CalendarPage;