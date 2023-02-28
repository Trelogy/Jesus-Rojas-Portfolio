import React from "react";
import { FormattedMessage } from "react-intl";

import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./PortfolioContentModal.css";
import angular from "../../assets/angular-logo.svg";
import firebase from "../../assets/firebase-logo.svg";
import firestore from "../../assets/firestore-logo.svg";

const webTwo = {
  id: Math.random().toString(),
  name: "Spark",
  link: "https://sparkwebsite-67b8b.web.app/spark",
};

const PortfolioContentTwo = (props) => {
  return (
    <Modal onHideMore={props.onHideMore}>
      <div className="position-static d-block py-1 px-3" id="modalSheet">
        <div className="modal-header mb-4">
          <h2 className="modal-title mx-auto fs-2">{webTwo.name}</h2>
          <button
            type="button"
            className="btn-close"
            onClick={props.onHideMore}
          ></button>
        </div>
        <div className="modal-body mb-4 text-center align-items-center">
          <p className="mb-4">
            <FormattedMessage
              id="portfolioModal2.paragraph1"
              defaultMessage="This Website is built with:"
            />
          </p>
          <div className="row row-cols-3 pb-0 mb-3 text-center align-items-start border-bottom">
            <div className="mean-stack col pe-1 pt-0">
              <div className="pb-3 d-inline-flex align-items-center justify-content-center">
                <img className="logos-stack" alt="mongo logo" src={firestore} />
              </div>
              <h3 className="fs-5 text-secondary">Cloud Firestore</h3>
              <p className="text-muted">
                <FormattedMessage
                  id="portfolioModal1.featurep1"
                  defaultMessage="as NoSQL database"
                />
              </p>
            </div>
            <div className="mean-stack col mx-auto pt-0">
              <div className="pb-3 d-inline-flex align-items-start justify-content-center">
                <img
                  className="logos-stack1"
                  alt="express logo"
                  src={firebase}
                />
              </div>
              <h3 className="fs-5 text-secondary">Firebase</h3>
              <p className="text-muted">
                <FormattedMessage
                  id="portfolioModal2.featurep1"
                  defaultMessage="the platform for back-end development and user authentication"
                />
              </p>
            </div>
            <div className="mean-stack col ps-1 pt-2">
              <div className="pb-3 d-inline-flex align-items-center justify-content-center">
                <img className="logos-stack" alt="mongo logo" src={angular} />
              </div>
              <h3 className="fs-5 text-secondary">Angular</h3>
              <p className="text-muted">
                <FormattedMessage
                  id="portfolioModal1.featurep3"
                  defaultMessage="the front-end framework"
                />
              </p>
            </div>
          </div>
          <p>
            <FormattedMessage
              id="portfolioModal1.pargraph2"
              defaultMessage="This page was a project that could not be concluded even so its main idea was to generate ideas for work with the gpt3 implementation of openAI. It contains a user creation system, a feed where the recently generated ideas are shown, and a credit system with a pricing plan."
            />
          </p>
        </div>
        <div className="modal-footer flex-nowrap justify-content-center border-top pt-3">
          <a href={webTwo.link} target="_blank" rel="noreferrer">
            <Button type="button" className="btn btn-lg btn-primary px-4 me-3">
              <FormattedMessage
                id="portfolio.btnPreview"
                defaultMessage="Preview"
              />
            </Button>
          </a>
          <Button
            type="button"
            className="btn btn-lg btn-outline-primary px-4"
            onClick={props.onHideMore}
          >
            <FormattedMessage
              id="portfolioModal1.btnclose"
              defaultMessage=" Close"
            />
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export { PortfolioContentTwo, webTwo };
