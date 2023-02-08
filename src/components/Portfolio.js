import React from "react";

import "./Portfolio.css";
import placeholder from '../assets/mailchimp-Hv9CS6KZayQ-unsplash.jpg';
import Button from "./UI/Button";

const Portfolio = () => {
  return (
    <div className="container col-xl-10 px-4 py-5 text-center">
      <h2 className="display-5 fw-bold mb-5">
          My Work
      </h2>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={placeholder}
            className="d-block mx-lg-auto img-fluid"
            alt="Shikhman website"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h3 className="fs-1 fw-bold mb-4">
            Shikhman
          </h3>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="py-3 mx-auto">
            <Button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              Primary
            </Button>
            <Button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Default
            </Button>
          </div>
        </div>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 me-auto">
        <div className="col-lg-6">
          <h3 className="fs-1 fw-bold mb-4">
            Spark
          </h3>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="py-3 mx-auto">
            <Button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              Primary
            </Button>
            <Button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Default
            </Button>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={placeholder}
            className="d-block mx-lg-auto img-fluid"
            alt="Shikhman website"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
