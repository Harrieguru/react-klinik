import React, { useState } from "react";
import PatientVitals from "./PatientVitals";
import HistoryVitals from "./HistoryVitals";
import SymptomChecker from "./SymptomChecker";
import "../Form.css";

function DailyInfoForm() {
  const [pulseRate, setPulseRate] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [weight, setWeight] = useState("");
  const [temperature, setTemperature] = useState("");
  const [respiratoryRate, setRespiratoryRate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showSymptomChecker, setShowSymptomChecker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      pulseRate,
      bloodPressure,
      weight,
      temperature,
      respiratoryRate,
    });
    setSubmitted(true);
  };

  const handleCheckHistory = () => {
    setShowHistory(true);
  };

  const handleChecklistCovid = () => {
    setShowSymptomChecker(true);
  };

  return (
    <div>
      <h2>Daily Information Form</h2>
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pulseRate">Pulse Rate (bpm):</label>
            <input
              type="text"
              id="pulseRate"
              value={pulseRate}
              onChange={(e) => setPulseRate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="bloodPressure">Blood Pressure (mmHg):</label>
            <input
              type="text"
              id="bloodPressure"
              value={bloodPressure}
              onChange={(e) => setBloodPressure(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="temperature">Temperature (°C):</label>
            <input
              type="text"
              id="temperature"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="respiratoryRate">
              Respiratory Rate (breaths/min):
            </label>
            <input
              type="text"
              id="respiratoryRate"
              value={respiratoryRate}
              onChange={(e) => setRespiratoryRate(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {submitted && (
        <PatientVitals
          pulseRate={pulseRate}
          bloodPressure={bloodPressure}
          weight={weight}
          temperature={temperature}
          respiratoryRate={respiratoryRate}
        />
      )}
      <button type="button" onClick={handleCheckHistory}>
        {showHistory ? "Hide History" : "Check History"}
      </button>
      <button type="button" onClick={handleChecklistCovid}>
        {showSymptomChecker ? "Hide Checklist Covid" : "Checklist Covid"}
      </button>
      {showHistory && <HistoryVitals />}
      {showSymptomChecker && (
        <SymptomChecker
          pulseRate={pulseRate}
          bloodPressure={bloodPressure}
          weight={weight}
          temperature={temperature}
          respiratoryRate={respiratoryRate}
        />
      )}
    </div>
  );
}

export default DailyInfoForm;
