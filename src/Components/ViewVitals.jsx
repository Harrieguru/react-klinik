import React from "react";

function ViewVitals({
  temperature,
  heartRate,
  bloodPressure,
  respiratoryRate,
}) {
  return (
    <div>
      <h2>View Vitals</h2>
      <p>Temperature: {temperature}</p>
      <p>Heart Rate: {heartRate}</p>
      <p>Blood Pressure: {bloodPressure}</p>
      <p>Respiratory Rate: {respiratoryRate}</p>
    </div>
  );
}

export default ViewVitals;
