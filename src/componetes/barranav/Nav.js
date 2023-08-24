import React from 'react';
import { useEffect, useState } from 'react';
import './Nav.css'; // Importa el archivo CSS


  function Nav() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    return (
      <div className={`navbar ${isVisible ? 'visible' : ''}`}>
       
      <a href="#about">ABOUT</a>
      <a href="#skills">SKILLS</a>
      <a href="#portfolio">PORTFOLIO</a>
      <a href="#experience">EXPERIENCE</a>
      <a href="#contact">CONTACT</a>
   
      </div>
    );
  }
export default Nav;
