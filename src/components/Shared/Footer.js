import React, {useContext} from "react";
import { langContext } from "../../context/langContext";

import es from "../../assets/flag-spain.svg";
import en from "../../assets/flag-usa.svg";
import "./Footer.css";

const Footer = () => {
  const language = useContext(langContext);

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
            <a href="https://www.linkedin.com/in/jesus-rojas-web-developer/" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted footer-link">
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
          <div className="nav-item pe-0"> 
            <button onClick={() => language.changeLanguage('es-ES')} className="btn cancel-border" type="button"><img className="flags" alt="Spain" src={es} /></button>
            <button onClick={() => language.changeLanguage('en-US')} className="btn cancel-border pe-0 border-start" type="button"><img className="flags" alt="Usa" src={en} /></button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
