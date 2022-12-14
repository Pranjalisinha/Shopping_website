import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar2 = () => {
  const Navigate = useNavigate();
      const state = useSelector((state) => state.handleCart)

      const logoutHandler = () =>{
        localStorage.setItem("authorization", "")
        Navigate("/signin");
    }
    return (
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Commercial Shopping</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='/products'>Product</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href='#'>Product</a>
                    <a class="dropdown-item" href="#">About</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">contact us!</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <div className="button1">
            <a href="" className="btn btn-outline-dark" onClick={()=>{logoutHandler()}}>
            <li className="fa fa-sign-out ms-1"></li>Log Out</a>
            <Link to='/addCart'><a href="" className="btn btn-outline-dark ms-2">
           <li className="fa fa-shopping-cart ms-1"></li>Cart ({state.length})</a></Link>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar2;