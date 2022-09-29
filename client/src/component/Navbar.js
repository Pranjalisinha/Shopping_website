import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">E-Commerece</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to='/products'><a class="dropdown-item" href='#'>Product</a></Link>
                    <a class="dropdown-item" href="#">About</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">contact us!</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <div className="button">
   <a href="" className="btn btn-outline-dark">
            <li className="fa fa-sign-in ms-1"></li>Login</a>
             <a href="" className="btn btn-outline-dark ms-2">
            <li className="fa fa-user-plus ms-1"></li>Register</a>
            <a href="" className="btn btn-outline-dark ms-2">
            <li className="fa fa-shopping-cart ms-1"></li>Cart (0)</a>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;