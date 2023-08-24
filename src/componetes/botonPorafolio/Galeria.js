import React from "react";
import './botonpotafolio.css';
// Componente de la galería
const Galeria = ({ contenido }) => {
    return (
      <div className="galeria">
        {contenido.map((imagen, index) => (
          <img src={imagen} alt={`foto ${index}`} key={index} />
        ))}
      </div>
    );
  };
  export default Galeria;