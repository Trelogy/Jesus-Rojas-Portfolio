import React from "react";
import Selection from "../UI/Selection";

import "./Footer.css";

const Footer = () => {
  let copy = new Date().getFullYear();

  return (
    <div className="container pt-5">
      <footer className="mt-auto d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <p className="col-md-4 mb-0 text-muted">&copy; {copy} Jesus Rojas</p>

        <ul className="nav col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto">
          <li className="nav-item">
            <a href="https://discord.com/channels/@me/264645666326839296" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted footer-link">
              <i className="fa-brands fa-discord"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted footer-link">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/Trelogy" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted footer-link">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>

        <div className="nav col-md-4 justify-content-end">
          <div className="custom-select d-flex align-items-center nav-item pe-0 footer-link">
            <i className="globe-icon fa-solid fa-globe"></i>
            <Selection className="colores" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
