import React from "react";
import '../stylesheets/Services.css';
import Imagen2 from '../images/imagen3_Chalten.jpg'

function Services () {
    return (
        <div id='contenedor4' className='cuarto_contenedor'>
        <div className='cuarto_contenedor_bis'>
          <div className='cuarto_contenedor_bloque_1'>
            <></>
          </div>
          <div className='cuarto_contenedor_bloque_2'>
            <img className='imagen_cuarto_contenedor' src={Imagen2} alt='Imagen background' />
          </div>
          <div className='cuarto_contenedor_bloque_3'>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Circuito 1: Villa La Angostura</strong> 
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                      Lo que hace que este lugar sea uno de los más hermosos de la Patagonia son sus lagos en tonos de azul y verde. Durante el verano se convierten en playas y reciben cientos de turistas...
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong>Circuito 2: Bariloche </strong>
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Una de las principales ciudades turísticas de Argentina, Bariloche ofrece un montón de actividades al aire libre, sea en el medio del bosque, en las orillas de los lagos o arriba de sus montañas...
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Circuito 3: Bolson </strong>
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Bajando un poco el mapa de la Patagonia argentina llegamos a El Bolsón, aun en la Provincia de Río Negro. Este es un pueblo encantador con casitas de madera y una plaza como su corazón.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Services;