import React from "react";
import { FormattedMessage } from "react-intl";

import "./Contact.css";

import AddMessage from "./AddMessage";

const Contact = (props) => {
  return (
    <div id="scrollspyHeading4" className="container px-5 py-5 text-center">
      <h2 className="display-5 fw-bold mb-3">
        <FormattedMessage id="contact.title" defaultMessage="Get in Touch" />
      </h2>
      <AddMessage />
    </div>
  );
};

export default Contact;
