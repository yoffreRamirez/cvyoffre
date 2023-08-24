import React from 'react';
import './contenedor.css';


const Contenedor = ({ fecha, nombre, parrafo }) => {
  return (
    <div className='contenedor-principal'>
      <div className='titulo'>
        <div className='fecha'>{fecha}</div>
        <div className='nombre'>{nombre}</div>
      </div>
      <div className='parrafo'>{parrafo}</div>
    </div>
  );
}

export default Contenedor;