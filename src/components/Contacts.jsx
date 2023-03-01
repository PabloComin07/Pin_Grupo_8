import React from "react";
import '../stylesheets/Contact.css';
import Imagen5 from '../images/imagen6_Chalten.jpg'
import Logo from '../images/logo.jpg'

function Contact () {

  return (
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
    );
}

export default Contact;