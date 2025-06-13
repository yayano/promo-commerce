import React, { useState, useEffect } from "react";

// Import JSON data
import wilayas from "../../public/dzWilaya/Wilaya_Of_Algeria.json";
import wilayasCommunes from "../../public/dzWilaya/Commune_Of_Algeria.json";

const AddressSelector = ({ onSelect }) => {
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [selectedCommune, setSelectedCommune] = useState("");
  const [communes, setCommunes] = useState([]);

  // Handle Wilaya selection
  const handleWilayaChange = (event) => {
    const wilayaCode = event.target.value;

    setSelectedWilaya(wilayaCode);
    // Find the corresponding communes
    const wilayaData = wilayasCommunes.find((w) => w.wilaya_id === wilayaCode);
    const Comunes = wilayasCommunes.filter(
      (c) => c.wilaya_id === wilayaData.wilaya_id
    );
    setCommunes(wilayaData ? Comunes : []);
    //pass data to the parent
  };
  const handleCommuneChange = (event) => {
    const communeName = event.target.value;
    setSelectedCommune(communeName);
    onSelect({ wilaya: selectedWilaya, commune: communeName });
  };
  return (
    <div>
      {/* Wilaya Dropdown */}
      <label>Wilaya:</label>
      <select onChange={handleWilayaChange} value={selectedWilaya}>
        <option value="">Select Wilaya</option>
        {wilayas.map((wilaya) => (
          <option key={wilaya.id} value={wilaya.code}>
            {wilaya.name}
          </option>
        ))}
      </select>

      {/* Commune Dropdown (Disabled if no Wilaya selected) */}
      <label>Commune:</label>
      <select
        onChange={handleCommuneChange}
        value={selectedCommune}
        disabled={!selectedWilaya}
      >
        <option value="">Select Commune</option>
        {communes.map((commune, index) => (
          <option key={index} value={commune.name}>
            {commune.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddressSelector;
