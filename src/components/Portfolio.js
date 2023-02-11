import React from "react";

import Button from "./UI/Button";

import "./Portfolio.css";
import shikhmanImage from "../assets/Shikhman.PNG";
import sparkImage from "../assets/Spark.PNG";

const Portfolio = () => {
  return (
    <div className="container col-xl-10 px-4 py-5 text-center border-bottom">
      <h2 id="scrollspyHeading3" className="display-5 fw-bold mb-5">My Work</h2>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={shikhmanImage}
            className="d-block mx-lg-auto img-fluid shadow"
            alt="Shikhman website"
            width="700"
            height="500"
          />
        </div>
        <div className="col-lg-6">
          <h3 className="fs-1 fw-bold mb-4">Shikhman</h3>
          <p className="lead">
            Shikhman is a web page built with the M.E.A.N stack with the
            purpose that the user can create, edit and save collections of
            photos or videos in a personalized way, showing them on their own
            profile. It also has an admin system.
          </p>
          <div className="py-3 mx-auto">
            <Button type="button" className="btn btn-primary btn-lg me-3">
              Preview
            </Button>
            <Button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              See more
            </Button>
          </div>
        </div>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mb-3 me-auto">
        <div className="col-lg-6">
          <h3 className="fs-1 fw-bold mb-4">Spark</h3>
          <p className="lead">
            Spark was a web page built with Angular and Firebase, as a back-end, its
            primary goal is to use the GPT-3 built by OpenAI API to generate
            work ideas.
          </p>
          <div className="py-3 mx-auto">
            <Button type="button" className="btn btn-primary btn-lg px-4 me-3">
              Preview
            </Button>
            <Button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              See more
            </Button>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={sparkImage}
            className="d-block mx-lg-auto img-fluid shadow"
            alt="Spark website"
            width="700"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
