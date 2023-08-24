import React from 'react';
import './perfil.css';
import foto from '../imagenes/foto.png';

function BackgroundComponent() {
  return (
    <div className="background">
      <div className="content">
        
        <div className="image-wrapper">
          <img
            src={foto}
            alt="Imagen redondeada"
            className="rounded-image"
          />
          <h2 className='nom'>Ramirez Amado <br></br>Yoffre Roel</h2>
          
        </div>
        
        <button className='boton'>Contactame</button>
        <button className='boton'>Descaraga CV</button>
      </div>
    </div>
  );
}

export default BackgroundComponent;
