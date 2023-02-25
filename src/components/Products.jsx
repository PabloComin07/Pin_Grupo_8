import React from "react";
import '../stylesheets/Products.css';
import Imagen from '../images/imagen1_Chalten.jpg';
import Imagen2 from '../images/imagen3_Chalten.jpg';
import Imagen4 from '../images/imagen5_Chalten.jpg';

function Products () {
  return (
		<div id='contenedor3' className='tercer_contenedor'>
        <div className='tercer_contenedor_bis'>
          <div className='tercer_contenedor_bloque_1'>
          </div>
          <div className='tercer_contenedor_bloque_2'>
          </div>
        </div>
        <div className='tercer_contenedor_bloque_3'>
          <img className='imagen_tercer_contenedor' src={Imagen4} alt='Imagen background'/> 
          <div className='sub_tercer_contenedor_bloque_3'>
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Imagen} class="d-block w-100" alt="Montaña" />
                </div>
                <div class="carousel-item">
                  <img src={Imagen} class="d-block w-100" alt="Montaña" />
                </div>
                <div class="carousel-item">
                  <img src={Imagen2} class="d-block w-100" alt="Montaña" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div> 
      </div>
  );
}

export default Products;