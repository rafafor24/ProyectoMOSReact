import React from "react";

export default ({ 
    prod,
    prodIndex,
    productividad,
    handleOptionChangeProd
    }) => (
  <div className="Productividad">
    <div className="radio">
      <h5>
        <input
          type="radio"
          value={prod.name}
          checked={prod.id === productividad}
          onChange={handleOptionChangeProd}
        />
        {prod.name}
      </h5>
    </div>
  </div>
);
