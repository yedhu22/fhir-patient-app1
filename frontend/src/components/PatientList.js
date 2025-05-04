import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientList = ({ refreshFlag }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const res = await axios.get(`${process.env.REACT_APP_FHIR_BASE_URL}/Patient?_count=10`);
      const entries = res.data.entry || [];
      setPatients(entries.map(e => ({ id: e.resource.id, name: e.resource.name[0]?.given[0] + " " + e.resource.name[0]?.family })));
    };
    fetchPatients();
  }, [refreshFlag]);

  const deletePatient = async (id) => {
    await axios.delete(`${process.env.REACT_APP_FHIR_BASE_URL}/Patient/${id}`);
    window.location.reload();
  };

  return (
    <ul>
      {patients.map(p => (
        <li key={p.id}>
          {p.name}
          <button onClick={() => deletePatient(p.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PatientList;
