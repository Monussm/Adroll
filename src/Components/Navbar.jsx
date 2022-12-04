import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>
{

return <>
<nav className="navbar navbar-expand-lg fixed-top bg-light">
  <div className="container-fluid mx-3 mt-auto">
  <NavLink to="/"><img className="Logo1" src="../Image/Logo.svg"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown ms-2">
          <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" >
            Why AdRoll?
          </NavLink>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Why AdRoll</a></li>
            <li><a className="dropdown-item" href="#">Manage Services</a></li>
            <li><a className="dropdown-item" href="#">Case Studies</a></li>
          </ul>
        </li>
        <li className="nav-item ms-2">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marketing Platform
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Plantform overview</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </li>
        <li className="nav-item dropdown ms-2">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          For Ecommerce
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item ms-2">
          <a className="nav-link">Pricing</a>
        </li>
        <li className="nav-item dropdown ms-2">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rescources
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <NavLink className="Log-in me-3" to="login">Log in</NavLink>
        <button className="Get-started" type="submit">Get Started</button>
    </div>
  </div>
</nav>
</>

}
export default Navbar;