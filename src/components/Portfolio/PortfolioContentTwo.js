import React from "react";

import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./PortfolioContentOne.css";

const PortfolioContentTwo = (props) => {
  const webTwo = {
    id: "m2",
    name: "Spark",
    description:
      "Spark was a web page built with Angular and Firebase, as a back-end, its primary goal is to use the GPT-3 built by OpenAI API to generate work ideas.",
    link: "https://shikhman.org/Shikhman",
  };

  return (
    <Modal onHideMore={props.onHideMore}>
      <div className="position-static d-block py-1 px-3" id="modalSheet">
        <div className="modal-header mb-4">
          <h2 className="modal-title fs-2">{webTwo.name}</h2>
          <button
            type="button"
            className="btn-close"
            onClick={props.onHideMore}
          ></button>
        </div>
        <div className="modal-body mb-4">
          <p>{webTwo.description}</p>
        </div>
        <div className="modal-footer flex-nowrap justify-content-center border-top pt-3">
          <a href={webTwo.link} target="_blank" rel="noreferrer">
            <Button type="button" className="btn btn-lg btn-primary px-4 me-3">
              Preview
            </Button>
          </a>
          <Button
            type="button"
            className="btn btn-lg btn-outline-primary px-4"
            onClick={props.onHideMore}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioContentTwo;
