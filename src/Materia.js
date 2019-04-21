import React from "react";

export default ({ materia, selected, handleOptionChange }) => (
  <div>
    <div className="radio">
      <h5>
        <input
          type="radio"
          value={materia.nombre}
          checked={selected === materia.id}
          onChange={handleOptionChange}
        />
        {materia.nombre+(materia.id!==0?" ("+materia.creditos+" Creditos)":"")}
      </h5>
    </div>
  </div>
);
