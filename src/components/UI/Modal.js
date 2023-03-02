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

const Overlay = (props) => {
  return (
    <div className={`${classes.modal2} ${props.className}`}>
      {props.children}
    </div>
  );
};

const portalElementB = document.getElementById("backdrop");
const portalElementM = document.getElementById("modal");
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
        portalElementM
      )}
    </Fragment>
  );
};

const BackdropO = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideMore={props.onHideMore} />,
        portalElementB
      )}
       {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElementO
      )}
    </Fragment>
  );
};

export {Modal, BackdropO};
