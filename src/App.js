import './App.css';
import React from 'react';
import Nav from './componetes/barranav/Nav';
import Perfil from './componetes/perfil/Perfil';
import Social from './componetes/BotonRedesSociales/Boton-redes-sociales';
import Contenedor from './componetes/Contenedor/Contenedor';
import BotonP from './componetes/botonPorafolio/Boton-potafolio'
import Contenedor2 from './componetes/contenedor2/Contenedor-dos';
import Pie from './componetes/pie/Pie';
import Contactame from './componetes/contactame/Contactame';



function App() {
  
   
  return (
    <div className="App">
      <Nav />
      <Perfil/>
      <li className='listaRS'>
       <ul className='RS'><Social backgroundImage='facebook' des='facebook' />  </ul>   
       <ul className='RS'><Social backgroundImage='instagram' des='instagram' /> </ul>   
       <ul className='RS'><Social backgroundImage='github' des='github' /> </ul>   
       <ul className='RS'><Social backgroundImage='gorjeo' des='twiter' /> </ul>   
       <ul className='RS'><Social backgroundImage='whatsapp' des='whatsapp' /> </ul>   
       
       </li>
       <h1 id='about'>About</h1>
        <Contenedor 
          color='rgb(183, 104, 104)'
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='instagram'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />
        <h1 id='skills'>SKILLS</h1>
        <Contenedor 
          color='rgb(183, 104, 104)'
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='instagram'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />
        <h1 id='portfolio'>Portafolio</h1>
         <BotonP      
          galeria={{
          boton1: ["../imagenes/social-gorjeo","../imagenes/social-gorjeo","../imagenes/social-whatsapp","../imagenes/social-instagram"],
          boton2: ["../imagenes/social-facebook",,"../imagenes/social-whatsapp","../imagenes/social-instagram"],
          boton3: ["../imagenes/social-facebook","../imagenes/social-instagram"],
        }}
        ></BotonP>        
        <h1 id='experience'>Work Experience</h1>
        <Contenedor2
        fecha="2023-08-24" 
        nombre="Nombre Grande" 
        parrafo="Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemplode ejemploárrafo de ejemploárrafo de ejemplo.">
      
     </Contenedor2>
     <Contenedor2
        fecha="2023-08-24" 
        nombre="Nombre Grande" 
        parrafo="Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemplode ejemploárrafo de ejemploárrafo de ejemplo.">
      
     </Contenedor2>
     <Contenedor2
        fecha="2023-08-24" 
        nombre="Nombre Grande" 
        parrafo="Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemplode ejemploárrafo de ejemploárrafo de ejemplo.">
      
     </Contenedor2>

     <h1>Education</h1>

     <Contenedor2
        fecha="2023-08-24" 
        nombre="Nombre Grande" 
        parrafo="Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemplode ejemploárrafo de ejemploárrafo de ejemplo.">
      
     </Contenedor2>
     <Contenedor2
        fecha="2023-08-24" 
        nombre="Nombre Grande" 
        parrafo="Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemplode ejemploárrafo de ejemploárrafo de ejemplo.">
      
     </Contenedor2>
     <Contenedor2
        fecha="2023-08-24" 
        nombre="Nombre Grande" 
        parrafo="Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo Este es un párrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemploárrafo de ejemplode ejemploárrafo de ejemploárrafo de ejemplo.">
      
     </Contenedor2>
   
     <Contactame />
     <Pie />
    </div>
  );
}

export default App;
