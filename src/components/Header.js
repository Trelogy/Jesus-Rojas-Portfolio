import React, { useState } from "react";

import MachineWritting from "./Animations/MachineWritting";
import "./Header.css";
import Button from "./UI/Button";

const Header = () => {

  return (
    <div id="scrollspyHeading1" className="text-center text-bg-primary position-relative z-2">
      <div className="cover-container px-5 py-5 header-mobile">
        <div className="box">
        <MachineWritting className="display-4 fw-bold" />
        </div>
        <div className="col-lg-6 mx-auto">
          <h4 className="pt-2 mb-4">
            Front End Developer / Back End Developer
          </h4>
          <p className="paragraph-light">
          Specialized in Back End development and web application programming M.E.A.N. stack and M.E.R.N stack. If you're a business
          seeking a web presence or are looking to hire, <br /><a href="" className="link-light">contact me</a>
          </p>
          <div className="d-grid py-3 gap-2 d-sm-flex justify-content-sm-center">
            <Button
              type="button"
              className="btn btn-outline-light btn-lg gap-3"
            >
              View portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
