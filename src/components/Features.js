import React from "react";

import "./Features.css";
// import Button from "./UI/Button";

const Features = () => {
  return (
    <div className="container border-bottom" id="features">
      <div id="scrollspyHeading2" className="row row-cols-1 row-cols-lg-3 text-center align-items-center pb-3">
        <div className="feature col pe-5 pt-2" id="feature1">
          <div className="pb-3 feature-icon d-inline-flex align-items-center justify-content-center mb-3">
            <i className="fa-solid fa-code fa-4x"></i>
          </div>
          <h3 className="fs-2 mb-4">Front End Developer</h3>
          <p className="text-muted mb-4">
            Crafting custom web applications with responsive design, SEO and
            good user web experiences.
          </p>
          <h4 className="feature-sub d-inline-flex align-items-center mb-4">
            Work with
          </h4>
          <p className="text-muted">
            HTML, CSS, Javascript, Typescript, Angular, Reactjs, JQuery, AJAX
            and API development.
          </p>
        </div>
        <div className="feature col mx-auto pt-2" id="feature2">
          <div className="pb-3 feature-icon d-inline-flex align-items-center justify-content-center mb-3">
            <i className="fa-solid fa-server fa-4x"></i>
          </div>
          <h3 className="fs-2 mb-4">Back End Developer</h3>
          <p className="text-muted mb-4">
            Crafting custom web applications with responsive design, SEO and
            good user web experiences.
          </p>
          <h4 className="feature-sub d-inline-flex align-items-center mb-4">
            Work with
          </h4>
          <p className="text-muted">
            NodeJs, Express, MongoDB, Firebase, Firestore and API development.
          </p>
        </div>
        <div className="feature col ps-5 pt-2" id="feature2">
          <div className="pb-3 feature-icon d-inline-flex align-items-center justify-content-center mb-3">
            <i className="fa-solid fa-server fa-4x"></i>
          </div>
          <h3 className="fs-2 mb-4">Back End Developer</h3>
          <p className="text-muted mb-4">
            Crafting custom web applications with responsive design, SEO and
            good user web experiences.
          </p>
          <h4 className="feature-sub d-inline-flex align-items-center mb-4">
            Work with
          </h4>
          <p className="text-muted">
            NodeJs, Express, MongoDB, Firebase, Firestore and API development.
          </p>
        </div>
      </div>
      {/* <div className="py-3 d-flex align-items-center justify-content-center">
          <Button className="btn btn-outline-secondary btn-lg">Learn more</Button>
        </div> */}
    </div>
  );
};

export default Features;
