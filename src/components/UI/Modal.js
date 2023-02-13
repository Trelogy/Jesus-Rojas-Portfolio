import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideMore} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={`${classes.modal1} ${props.className}`}>
      {props.children}
    </div>
  );
};

const portalElementB = document.getElementById("backdrop");
const portalElementO = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideMore={props.onHideMore} />,
        portalElementB
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElementO
      )}
    </Fragment>
  );
};

export default Modal;
