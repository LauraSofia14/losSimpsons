import React from 'react';
import '../components/fondo.css';
import fondo from '../../src/assets/Los-Simpson.png';


const Imagen =() =>{
    return(
        <div>
            <img src={fondo} alt="Imagen de fondo" className="imagen-background" /> 
        </div>
    )
}
export default Imagen;