import React, { useState } from "react";

import MachineWritting from "./Animations/MachineWritting";
import "./Header.css";
import Button from "./UI/Button";
import Cover from "./UI/Cover";

const Header = () => {

  return (
    <div className="text-center text-bg-primary">
      <Cover className="px-5 py-5 header-mobile">
        <div className="box">
        <MachineWritting className="display-5 fw-bold" />
        </div>
        <div className="col-lg-6 mx-auto">
          <p className="lead pt-2 mb-4">
            Front End Developer / Back End Developer
          </p>
          <p className="paragraph-light">
            Specializing in custom theme development. If you're a business
            seeking a web presence or are looking to hire, <a href="" className="link-light">contact me</a>
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
      </Cover>
    </div>
  );
};

export default Header;
