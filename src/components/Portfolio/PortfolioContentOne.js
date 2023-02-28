import React from "react";
import { FormattedMessage } from "react-intl";

import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./PortfolioContentModal.css";
import mongo from "../../assets/mongo-logo.svg";
import express from "../../assets/express-logo.svg";
import angular from "../../assets/angular-logo.svg";
import nodejs from "../../assets/nodejs-logo.svg";

const webOne = {
  id: Math.random().toString(),
  name: "Shikhman",
};

const PortfolioContentOne = (props) => {
  return (
    <Modal onHideModal={props.onHideModal}>
      <div className="position-static d-block py-1 px-3" id="modalSheet">
        <div className="modal-header mb-4">
          <h2 className="modal-title mx-auto fs-2">{webOne.name}</h2>
          <button
            type="button"
            className="btn-close"
            onClick={props.onHideModal}
          ></button>
        </div>
        <div className="modal-body mb-4 text-center align-items-center">
          <p className="mb-4">
            <FormattedMessage
              id="portfolioModal1.paragraph1"
              defaultMessage="This Website is built with the M.E.A.N stack referring to:"
            />
          </p>
          <div className="row row-cols-4 pb-0 mb-3 text-center align-items-start  border-bottom">
            <div className="mean-stack col pe-1 pt-2">
              <div className="pb-3 d-inline-flex align-items-center justify-content-center">
                <img className="logos-stack" alt="mongo logo" src={mongo} />
              </div>
              <h3 className="fs-5 text-secondary">Mongo DB</h3>
              <p className="text-muted">
                <FormattedMessage
                  id="portfolioModal1.featurep1"
                  defaultMessage="as NoSQL database"
                />
              </p>
            </div>
            <div className="mean-stack col mx-auto pt-2">
              <div className="pb-3 d-inline-flex align-items-center justify-content-center">
                <img className="logos-stack" alt="express logo" src={express} />
              </div>
              <h3 className="fs-5 text-secondary">Express</h3>
              <p className="text-muted">
                <FormattedMessage
                  id="portfolioModal1.featurep2"
                  defaultMessage="the back-end framework"
                />
              </p>
            </div>
            <div className="mean-stack col mx-auto pt-2">
              <div className="pb-3 d-inline-flex align-items-center justify-content-center">
                <img className="logos-stack" alt="angular logo" src={angular} />
              </div>
              <h3 className="fs-5 text-secondary">Angular</h3>
              <p className="text-muted">
                <FormattedMessage
                  id="portfolioModal1.featurep3"
                  defaultMessage="the front-end framework"
                />
              </p>
            </div>
            <div className="mean-stack col ps-1 pt-2">
              <div className="pb-3 d-inline-flex align-items-center justify-content-center">
                <img className="logos-stack" alt="mongo logo" src={nodejs} />
              </div>
              <h3 className="fs-5 text-secondary">NodeJs</h3>
              <p className="text-muted">
                <FormattedMessage
                  id="portfolioModal1.featurep3"
                  defaultMessage="the JavaScript execution environment in the back-end"
                />
              </p>
            </div>
          </div>
          <p>
            <FormattedMessage
              id="portfolioModal1.pargraph2"
              defaultMessage="This page contains highly personalized content where the user can
            edit, create or delete collections, works, profile, links to social
            networks, banners, avatars, images and videos. It also contains an
            admin system, user roles and ban, where depending on the role you
            have, you will have full access or not to all the pages of this
            website."
            />
          </p>
        </div>
        <div className="modal-footer flex-nowrap justify-content-center border-top pt-3">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
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
            onClick={props.onHideModal}
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

export { PortfolioContentOne, webOne };
