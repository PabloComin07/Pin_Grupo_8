import React from "react";
import '../stylesheets/About.css';


function About () {

  return (
    <div id='contenedor2' className='segundo_contenedor'>
        <h1 className='titulo_segundo_contenedor'>Por que conocer El Chalten?</h1>
        <ul className='lista_segundo_contenedor'>
          <li>Disfrutar de la naturaleza y el paisaje patagónico, con vistas impresionantes del cerro Fitz Roy, el cerro Torre, los glaciares y los lagos.</li>
          <li>Conocer la cultura y la historia de la zona, que fue habitada por pueblos originarios como los tehuelches y explorada por aventureros como Perito Moreno y Lionel Terray.</li>
          <li>Vivir una experiencia única y desafiante, superando las dificultades del clima, el terreno y la distancia.</li>
          <li>Sentir la satisfacción de llegar a lugares emblemáticos como la Laguna de los Tres o la Laguna Torre.</li>
        </ul>
    </div>
  );
}

export default About;