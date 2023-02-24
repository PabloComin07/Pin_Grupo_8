import './App.css';
import React from 'react';
import { IoArrowUpSharp } from "react-icons/io5";
import Imagen from './images/imagen1_Chalten.jpg'
import Imagen1 from './images/imagen2_Chalten.jpg'
import Imagen2 from './images/imagen3_Chalten.jpg'
import Imagen3 from './images/imagen4_Chalten.jpg'
import Imagen4 from './images/imagen5_Chalten.jpg'
import Imagen5 from './images/imagen6_Chalten.jpg'
import Logo from './images/logo.jpg'

function App() {
  return (
    <div className='App'>
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
          <p className='parrafo2'>Capital nacional del trekking</p>
          <p className='parrafo3'>"Donde un viaje de mil millas comienza con un primer paso"</p>
          <button className='button_readme'>Readme more</button>
        </div>
      </div>
      <div id='contenedor2' className='segundo_contenedor'>
        <h1 className='titulo_segundo_contenedor'>Por que conocer El Chalten?</h1>
        <ul className='lista_segundo_contenedor'>
          <li>Disfrutar de la naturaleza y el paisaje patagónico, con vistas impresionantes del cerro Fitz Roy, el cerro Torre, los glaciares y los lagos.</li>
          <li>Conocer la cultura y la historia de la zona, que fue habitada por pueblos originarios como los tehuelches y explorada por aventureros como Perito Moreno y Lionel Terray.</li>
          <li>Vivir una experiencia única y desafiante, superando las dificultades del clima, el terreno y la distancia.</li>
          <li>Sentir la satisfacción de llegar a lugares emblemáticos como la Laguna de los Tres o la Laguna Torre.</li>
        </ul>
      </div>
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
                    Accordion Item #1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='contenedor5' className='quinto_contenedor'>
        <div className='quinto_contenedor_bis'>
          <div className='tercer_contenedor_bloque_1'>
          </div>
          <div className='tercer_contenedor_bloque_2'>
          </div>
          <div className='quinto_contenedor_bloque_3'>
            <img className='imagen_quinto_contenedor' src={Imagen5} alt='Imagen background'/>
          </div>
          <div className='quinto_contenedor_bloque_4'>
            <form class="form-floating">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Nombre" />
                <label for="floatingInput">Nombre</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input type="tel" class="form-control" id="floatingInput" placeholder="Telefono" />
                <label for="floatingInput">Telefono</label>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" maxlength='200'>Mensaje</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
          <div className='footer'>
            <footer>
              <p>Copyright &copy; 2023. All rights reserved</p>
              <a href='#contenedor1'>
                <img className='logo_footer' src={Logo} alt='Imagen logo'/>
              </a>
            </footer>
          </div>
        </div>
      </div>
      <a classname='buttom_home_tag' href='#contenedor1'>
        <button className='button_home'><IoArrowUpSharp/></button>
      </a>
    </div>
  );
}

export default App;
