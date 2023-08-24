import React, { useState } from "react";
import './botonpotafolio.css';
import Galeria from './Galeria';

const BotonPotafolio = ({ galeria }) => {
  const [botonPresionado, setBotonPresionado] = useState(null);

  const handleBotonClick = (boton) => {
    setBotonPresionado(boton);
  };

  return (
    <div className="contenedor">
      <div className="botones-container">
        <BotonConImagen
          onClick={() => handleBotonClick("boton1")}
          imagen={galeria.boton1Imagen}
          texto="Botón 1"
        />
        <BotonConImagen
          onClick={() => handleBotonClick("boton2")}
          imagen={galeria.boton2Imagen}
          texto="Botón 2"
        />
        <BotonConImagen
          onClick={() => handleBotonClick("boton3")}
          imagen={galeria.boton3Imagen}
          texto="Botón 3"
        />
      </div>
      
      <div className="cuadro">
        {botonPresionado && (
          <Galeria contenido={galeria[botonPresionado]} />
        )}
      </div>
    </div>
  );
};

// Componente de botón con imagen
const BotonConImagen = ({ onClick, imagen, texto }) => {
  return (
    <button className="round-button" onClick={onClick} style={{ backgroundImage: `url(${imagen})` }}>
      {texto}
    </button>
  );
};


export default BotonPotafolio;



