import React from "react";
import '../stylesheets/Navbar.css';

function Navbar () {
  return (
    <div>
      <ul>
        <li><a href='#contenedor1'>Home</a></li>
        <li><a href='#contenedor2'>About</a></li>
        <li><a href='#contenedor3'>Products</a></li>
        <li><a href='#contenedor4'>Services</a></li>
        <li><a href='#contenedor5'>Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;