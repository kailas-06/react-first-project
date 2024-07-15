import React from "react";
import {NavLink} from 'react-router-dom'
// import '../common/Header'

 function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-navbar">
    <div className="container-fluid ps-5 pe-5">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <NavLink className="navbar-brand" to="/">React Navbar</NavLink>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sipcalculator">SipCalculator</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user/add">Add User</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default Navbar;
