import React from "react";
import "../Form.css";

function PatientVitals({
  pulseRate,
  bloodPressure,
  weight,
  temperature,
  respiratoryRate,
}) {
  return (
    <div>
      <h2>Patient Vitals</h2>
      <p>Pulse Rate: {pulseRate} bpm</p>
      <p>Blood Pressure: {bloodPressure} mmHg</p>
      <p>Weight: {weight} kg</p>
      <p>Temperature: {temperature} °C</p>
      <p>Respiratory Rate: {respiratoryRate} breaths/min</p>
    </div>
  );
}

export default PatientVitals;
