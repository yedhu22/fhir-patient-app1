import React, { useState } from "react";
import axios from "axios";

const PatientForm = ({ refreshPatients }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPatient = {
      resourceType: "Patient",
      name: [{ use: "official", family: lastName, given: [firstName] }]
    };
    await axios.post(`${process.env.REACT_APP_FHIR_BASE_URL}/Patient`, newPatient);
    setFirstName("");
    setLastName("");
    refreshPatients();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
