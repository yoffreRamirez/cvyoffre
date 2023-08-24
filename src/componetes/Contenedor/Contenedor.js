import React from 'react';
import './Contenedor.css';


const Contenedor = ({color,imagen, nombre, pais, cargo, empresa, testimonio }) => {

  return (
    <div className='contenedor-testimonio'  style={{ backgroundColor:color}}>
    <img 
      className='imagen-testimonio'
      src={require(`../imagenes/social-${imagen}.png`)}
      alt='Foto de Emma'/>
   
     <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>
        <strong>{nombre}</strong> en {pais}
      </p>
      <p className='cargo-testimonio'>
        {cargo} en <strong>{empresa}</strong>
      </p>
      <p className='texto-testimonio'>"{testimonio}"</p>
    </div>

    


  </div>
  );
}

export default Contenedor;