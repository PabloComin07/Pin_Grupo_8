import React from "react";
import Logo from '../images/logo.jpg'


function Menu () {
  return (
    <div className="menu">
			<nav class="navbar navbar-expand-lg bg-body-tertiary">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
      			<img src={Logo} alt="Logo" width="60" height="60" class="d-inline-block align-text-top" />
      		</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="navbar-brand" href="#contenedor1">Home</a>
							</li>
							<li class="nav-item">
								<a class="navbar-brand" href="#contenedor2">About</a>
							</li>
							<li class="nav-item">
								<a class="navbar-brand" href="#contenedor3">Products</a>
							</li>
							<li class="nav-item">
								<a class="navbar-brand" href="#contenedor4">Services</a>
							</li>
							<li class="nav-item">
								<a class="navbar-brand" href="#contenedor5">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
  );
}

export default Menu;