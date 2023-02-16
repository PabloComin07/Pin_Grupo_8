import './App.css';
import React from 'react';
import Imagen from './images/imagen1_Chalten.jpg'
import Logo from './images/logo.jpg'

function App() {
  return (
    <div className='App'>
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
          <button className='button_readme'>Read more</button>
        </div>
      </div>
      <div className='segundo_contenedor'>
        <h1 className='titulo_segundo_contenedor'>Por que conocer El Chalten?</h1>
        <ul className='lista_segundo_contenedor'>
          <li>Disfrutar de la naturaleza y el paisaje patagónico, con vistas impresionantes del cerro Fitz Roy, el cerro Torre, los glaciares y los lagos.</li>
          <li>Conocer la cultura y la historia de la zona, que fue habitada por pueblos originarios como los tehuelches y explorada por aventureros como Perito Moreno y Lionel Terray.</li>
          <li>Vivir una experiencia única y desafiante, superando las dificultades del clima, el terreno y la distancia.</li>
          <li>Sentir la satisfacción de llegar a lugares emblemáticos como la Laguna de los Tres o la Laguna Torre.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
