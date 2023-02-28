import React from "react";
import { FormattedMessage } from "react-intl";
import { webOne } from "./PortfolioContentOne";
import { webTwo } from "./PortfolioContentTwo";
import Button from "../UI/Button";

import "./Portfolio.css";
import shikhmanImage from "../../assets/Shikhman.PNG";
import sparkImage from "../../assets/Spark.PNG";

const Portfolio = (props) => {
  return (
    <div id="scrollspyHeading3" className="container col-xl-10 px-4 py-5 text-center border-bottom">
      <h2  className="display-5 fw-bold mb-5">
        <FormattedMessage id="portfolio.title" defaultMessage="My Work" />
      </h2>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-12 col-lg-6">
          <img
            src={shikhmanImage}
            className="d-block mx-lg-auto img-fluid shadow"
            alt="Shikhman website"
            width="700"
            height="500"
          />
        </div>
        <div className="col-lg-6">
          <h3 className="fs-1 fw-bold mb-4">{webOne.name}</h3>
          <p className="lead">
            <FormattedMessage
              id="portfolio.pargraph1"
              defaultMessage="Shikhman is a web page built with the M.E.A.N stack with the purpose
            that the user can create, edit and save collections of photos or
            videos in a personalized way, showing them on their own profile."
            />
          </p>
          <div className="py-3 mx-auto">
            <a href="" target="_blank" rel="noreferrer">
              <Button type="button" className="btn btn-primary btn-lg me-3">
                <FormattedMessage
                  id="portfolio.btnPreview"
                  defaultMessage="Preview"
                />
              </Button>
            </a>
            <Button
              type="button"
              onClick={props.onShowModal}
              className="btn btn-outline-secondary btn-lg px-4"
            >
              <FormattedMessage
                id="portfolio.btnSeeMore"
                defaultMessage="See more"
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mb-3 me-auto">
        <div className="order-box col-lg-6">
          <h3 className="fs-1 fw-bold mb-4">{webTwo.name}</h3>
          <p className="lead">
            <FormattedMessage
              id="portfolio.pargraph2"
              defaultMessage="Spark was a web page built with Angular and Firebase, as a back-end,
            its primary goal is to use the GPT-3 built by OpenAI API to generate
            work ideas."
            />
          </p>
          <div className="py-3 mx-auto">
          <a href={webTwo.link} target="_blank" rel="noreferrer">
            <Button type="button" className="btn btn-primary btn-lg px-4 me-3">
              <FormattedMessage
                id="portfolio.btnPreview"
                defaultMessage="Preview"
              />
            </Button></a>
            <Button
              type="button"
              onClick={props.onShowMore}
              className="btn btn-outline-secondary btn-lg px-4"
            >
              <FormattedMessage
                id="portfolio.btnSeeMore"
                defaultMessage="See more"
              />
            </Button>
          </div>
        </div>
        <div className="order-img col-10 col-sm-12 col-lg-6">
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
