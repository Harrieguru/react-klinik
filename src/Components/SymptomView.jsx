import React from "react";

function SymptomView({ symptoms, vitalSigns }) {
  const assessCovidLikelihood = (vitalSigns, symptoms) => {
    if (symptoms.includes("Fever") && symptoms.includes("Cough")) {
      if (vitalSigns.temperature > 38 && vitalSigns.respiratoryRate > 20) {
        return "You may have COVID-19. Please consult a healthcare professional.";
      } else {
        return "Your symptoms may indicate a common cold or flu. Monitor your health and consult a doctor if symptoms worsen.";
      }
    } else {
      return "Your symptoms do not seem to indicate COVID-19. However, if you experience any new or worsening symptoms, consult a healthcare professional.";
    }
  };

  const covidAssessment = assessCovidLikelihood(vitalSigns, symptoms);

  return (
    <div>
      <h2>COVID-19 Symptom Assessment</h2>
      <p>{covidAssessment}</p>
      <h2>Selected Symptoms</h2>
      <ul>
        {symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
    </div>
  );
}

export default SymptomView;
