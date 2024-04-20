import React, { useState } from "react";
import ViewVitals from "./ViewVitals";

function VitalForm() {
  const [temperature, setTemperature] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [respiratoryRate, setRespiratoryRate] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const handleGenerate = () => {
    console.log("Generate button clicked");
  };

  return (
    <div>
      <h2>Vital Sign Form</h2>
      {!formSubmitted && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="temperature">Body Temperature (°C):</label>
            <input
              type="text"
              id="temperature"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="heartRate">Heart Rate (bpm):</label>
            <input
              type="text"
              id="heartRate"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
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
      {formSubmitted && (
        <>
          <button type="button" onClick={handleGenerate}>
            Generate
          </button>
          <ViewVitals
            temperature={temperature}
            heartRate={heartRate}
            bloodPressure={bloodPressure}
            respiratoryRate={respiratoryRate}
          />
        </>
      )}
    </div>
  );
}

export default VitalForm;
