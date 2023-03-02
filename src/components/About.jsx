import React from "react";
import '../stylesheets/About.css';


function About () {

  return (
    <div id='contenedor2' className='segundo_contenedor'>
        <h1 className='titulo_segundo_contenedor'>¿Por que conocer la Patagonia?</h1>
        <ul className='lista_segundo_contenedor'>
          <li>Disfrutar de la naturaleza y el paisaje patagónico, con vistas impresionantes del cerro Fitz Roy.</li>
          <li>Las montañas de la Cordillera de los Andes crean paisajes de película, siendo hogar de glaciares que bajan hasta los valles creando lagos cristalinos rodeados por bosques.</li>
          <li>Vivir una experiencia única y desafiante, superando las dificultades del clima, el terreno y la distancia.</li>
          <li>Conocer el Parque Nacional Los Arrayanes, donde se puede conocer el más grande bosque de arrayan del mundo.</li>
        </ul>
    </div>
  );
}

export default About;