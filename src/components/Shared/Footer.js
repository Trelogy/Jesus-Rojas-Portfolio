import React from "react";

import "./Footer.css";

const Footer = () => {
  let copy = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">&copy; {copy} Company, Inc</p>

        <ul className="nav col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted footer-link">
              <i className="fa-brands fa-discord"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted footer-link">
            <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted footer-link">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>

        <div className="nav col-md-4 justify-content-end">
        
          <div className="nav-item lng">
            <a href="#" className="nav-link px-2 text-muted footer-link">
            <i className="globe-icon fa-solid fa-globe"></i>
              English
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
