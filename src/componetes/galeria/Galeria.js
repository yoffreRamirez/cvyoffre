import React from 'react';
import './galeria.css';

const Galeria = ({ imagenes }) => {
  return (
    <div className="galeria">
      {imagenes.map((imagen, index) => (
        <div className="cuadro" key={index}>
          <img src={imagen} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Galeria;