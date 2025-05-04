import React, { useState } from "react";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
  const [refresh, setRefresh] = useState(false);
  const toggleRefresh = () => setRefresh(!refresh);

  return (
    <div className="App">
      <h1>FHIR Patient Registry</h1>
      <PatientForm refreshPatients={toggleRefresh} />
      <PatientList refreshFlag={refresh} />
    </div>
  );
}

export default App;
