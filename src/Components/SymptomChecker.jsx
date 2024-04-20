import React, { useState } from "react";
import SymptomView from "./SymptomView";

import "../Form.css";

function SymptomChecker({
  pulseRate,
  bloodPressure,
  weight,
  temperature,
  respiratoryRate,
}) {
  const [symptoms, setSymptoms] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSymptoms((prev) => [...prev, value]);
    } else {
      setSymptoms((prev) => prev.filter((symptom) => symptom !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Symptom Checker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            value="Fever"
            onChange={handleCheckboxChange}
          />
          Fever
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Cough"
            onChange={handleCheckboxChange}
          />
          Cough
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <SymptomView
          symptoms={symptoms}
          vitalSigns={{
            pulseRate,
            bloodPressure,
            weight,
            temperature,
            respiratoryRate,
          }}
        />
      )}
    </div>
  );
}

export default SymptomChecker;
