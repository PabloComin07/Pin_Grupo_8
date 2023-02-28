import React from 'react';

import '../stylesheets/Home.css'
import Imagen3 from '../images/imagen4_Chalten.jpg'
import Logo from '../images/logo.jpg'
import Navbar from './Navbar';

function Home () {
  return (
		<div id='contenedor1' className='primer_contenedor'>
        <img className='imagen_contenedor_principal' src={Imagen3} alt='Imagen background'/>
        <img className='logo_contenedor_principal' src={Logo} alt='Imagen logo'/>
        <Navbar />
        <div className='texto_primer_contenedor'>
          <p className='parrafo1'>PATAGONIA</p>
          <p className='parrafo2'>"Donde un viaje de mil millas comienza con un primer paso"</p>
          <button className='button_readme'>Readme more</button>
        </div>
      </div>
	);
}

export default Home;
