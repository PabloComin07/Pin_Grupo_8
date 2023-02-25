import React from "react";
import '../stylesheets/Button_Home.css';
import { IoArrowUpSharp } from "react-icons/io5";

function Button_Home () {
	return (
		<a classname='buttom_home_tag' href='#contenedor1'>
      <button className='button_home'><IoArrowUpSharp/></button>
    </a>
	);
}

export default Button_Home;