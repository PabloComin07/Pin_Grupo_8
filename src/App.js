import './App.css';
import React from 'react';
//import Navbar from './components/Navbar'
import Imagen from './images/imagen1_Chalten.jpg'
//import Logo from './images/logo1.png'
import Logo from './images/logo.jpg'


function App() {
  return (
    <div className='primer_contenedor'>
      <img className='imagen_contenedor_principal' src={Imagen} alt='Imagen background'/>
      <img className='logo_contenedor_principal' src={Logo} alt='Imagen logo'/>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Products</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <div className='texto_primer_contenedor'>
        <p className='parrafo1'>"El Chalten"</p>
        <p className='parrafo2'>Capital nacional del trekking</p>
        <p className='parrafo3'>"Donde un viaje de mil millas comienza con un primer paso"</p>
      </div>
    </div>
  );
}

export default App;
