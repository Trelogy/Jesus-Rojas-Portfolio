import React from "react";
import { FormattedMessage } from "react-intl";

import MachineWritting from "./Animations/MachineWritting";
import Button from "./UI/Button";
import "./Header.css";

const Header = () => {
  return (
    <div
      id="scrollspyHeading1"
      className="text-center text-bg-primary position-relative z-2"
    >
      <div className="cover-container px-5 py-5 header-mobile">
        <div className="box">
          <MachineWritting className="display-4 fw-bold" />
        </div>
        <div className="col-lg-6 mx-auto">
          <h4 className="pt-2 mb-4">
            {/* Front End Developer / Back End Developer */}
            <FormattedMessage
              id="header.subTitle"
              defaultMessage="Front End Developer / Back End Developer"
            />
          </h4>
          <p className="paragraph-light" data-animation="to-left">
            <FormattedMessage
              id="header.paragraph"
              defaultMessage="Header Paragraph"
            />
            , <br />
            <a href="#scrollspyHeading4" className="link-light">
              <FormattedMessage id="header.link" defaultMessage="contact me" />
            </a>
          </p>
          <div className="d-grid py-3 gap-2 d-sm-flex justify-content-sm-center">
            <a href="#scrollspyHeading3">
              <Button
                type="button"
                className="btn btn-outline-light btn-lg gap-3"
              >
                <FormattedMessage
                  id="header.button"
                  defaultMessage="View portfolio"
                />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
