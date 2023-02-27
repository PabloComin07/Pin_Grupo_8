import React from 'react';
import '../stylesheets/Navbar.css'
import Imagen3 from '../images/imagen4_Chalten.jpg'
import Logo from '../images/logo.jpg'

function Navbar () {
  return (
		<div id='contenedor1' className='primer_contenedor'>
        <img className='imagen_contenedor_principal' src={Imagen3} alt='Imagen background'/>
        <img className='logo_contenedor_principal' src={Logo} alt='Imagen logo'/>
        <ul>
          <li><a href='#contenedor1'>Home</a></li>
          <li><a href='#contenedor2'>About</a></li>
          <li><a href='#contenedor3'>Products</a></li>
          <li><a href='#contenedor4'>Services</a></li>
          <li><a href='#contenedor5'>Contact</a></li>
        </ul>
        <div className='texto_primer_contenedor'>
          <p className='parrafo1'>PATAGONIA</p>
          <p className='parrafo2'>"Donde un viaje de mil millas comienza con un primer paso"</p>
          <button className='button_readme'>Readme more</button>
        </div>
      </div>
	);
}

export default Navbar;
