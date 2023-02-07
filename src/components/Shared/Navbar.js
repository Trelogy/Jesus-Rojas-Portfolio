import React from "react";

import searchIcon from '../../assets/search.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand logojr">JR</a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Portafolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"><img src={searchIcon} alt="search icon" /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
