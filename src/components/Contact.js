import React from "react";

import "./Contact.css";
import Button from "./UI/Button";

const Contact = () => {
  
  return (
    <div className="container px-5 py-5 text-center">
        <h2 id="scrollspyHeading4" className="display-5 fw-bold mb-4">Get in Touch</h2>
        <form className="needs-validation col-lg-5 mx-auto py-5">
          <div className="row g-3">
            
            <div className="col-sm-6 inputs">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required=""
              />
              <i className="fa-sharp fa-solid fa-circle-xmark"></i>
              <div className="invalid-feedback">Valid name is required.</div>
            </div>

            <div className="col-sm-6 inputs">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required=""
              />
              <i className="fa-sharp fa-solid fa-circle-xmark"></i>
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>

            <div className="col-12 inputs">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                required=""
              />
              <i className="fa-sharp fa-solid fa-circle-xmark"></i>
              <div className="invalid-feedback">Your subject is required.</div>
            </div>

            <div className="col-12 textareas">
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Message"
                required=""
              ></textarea>
              <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            </div>
            <div className="pt-3">
              <Button className="btn btn-primary btn-lg" type="submit">
                Send message
              </Button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default Contact;
