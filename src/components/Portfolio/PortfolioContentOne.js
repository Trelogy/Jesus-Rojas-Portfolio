import React from "react";

import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./PortfolioContentOne.css";

const PortfolioContentOne = (props) => {
  const webOne = {
    id: "m1",
    name: "Shikhman",
    description:
      "Shikhman is a web page built with the M.E.A.N stack with the purpose that the user can create, edit and save collections of photos or videos in a personalized way, showing them on their own profile. It also has an admin system.",
    link: "https://shikhman.org/Shikhman",
  };

  return (
    <Modal onHideModal={props.onHideModal}>
      <div className="position-static d-block py-1 px-3" id="modalSheet">
        <div className="modal-header mb-4">
          <h2 className="modal-title fs-2">{webOne.name}</h2>
          <button
            type="button"
            className="btn-close"
            onClick={props.onHideModal}
          ></button>
        </div>
        <div className="modal-body mb-4">
          <p>{webOne.description}</p>
        </div>
        <div className="modal-footer flex-nowrap justify-content-center border-top pt-3">
          <a href={webOne.link} target="_blank" rel="noreferrer">
            <Button type="button" className="btn btn-lg btn-primary px-4 me-3">
              Preview
            </Button>
          </a>
          <Button
            type="button"
            className="btn btn-lg btn-outline-primary px-4"
            onClick={props.onHideModal}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioContentOne;
