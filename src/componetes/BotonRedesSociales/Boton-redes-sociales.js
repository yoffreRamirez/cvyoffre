import React from 'react';
import './BotonRedesSociales.css';


const RoundImageButton = ({ backgroundImage, des }) => {

  return (
    <div className="contenedor">
          <img
            className="imagen-fondo"
            src={require(`../imagenes/social-${backgroundImage}.png`)}
            alt='social'
           
          />
           <div className="descripcion">
        <p>{des}</p>
      </div>
    </div>
  );
}

export default RoundImageButton;