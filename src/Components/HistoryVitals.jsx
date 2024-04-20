// HistoryVitals.jsx
import React from "react";

function HistoryVitals() {
  // Sample history data
  const historyData = [
    {
      pulseRate: 70,
      bloodPressure: "120/80",
      weight: 65,
      temperature: 36.5,
      respiratoryRate: 16,
    },
    {
      pulseRate: 72,
      bloodPressure: "122/78",
      weight: 64,
      temperature: 36.6,
      respiratoryRate: 17,
    },
    {
      pulseRate: 68,
      bloodPressure: "118/76",
      weight: 66,
      temperature: 36.4,
      respiratoryRate: 15,
    },
  ];

  return (
    <div>
      <h2>Vitals History</h2>
      {historyData.map((data, index) => (
        <div key={index}>
          <h3>Entry {index + 1}</h3>
          <p>Pulse Rate: {data.pulseRate}</p>
          <p>Blood Pressure: {data.bloodPressure}</p>
          <p>Weight: {data.weight}</p>
          <p>Temperature: {data.temperature}</p>
          <p>Respiratory Rate: {data.respiratoryRate}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default HistoryVitals;
