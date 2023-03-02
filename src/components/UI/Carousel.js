import React from "react";

import { BackdropO } from "./Modal";
import "./Carousel.css";

const Carousel = (props) => {
  return (
    <BackdropO onHideMore={props.onHideC}>
      <div id="carouselExampleCaptions" className="carousel slide shadow">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            className="active"
            aria-current="true"
            data-bs-slide-to="0"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
             <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {props.onShowPics[0]}
          </div>
          <div className="carousel-item">
            {props.onShowPics[1]}
          </div>
          <div className="carousel-item">
            {props.onShowPics[2]}
          </div>
          <div className="carousel-item">
            {props.onShowPics[3]}
          </div>
          <div className="carousel-item">
            {props.onShowPics[4]}
          </div>
          <div className="carousel-item">
            {props.onShowPics[5]}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </BackdropO>
  );
};

export default Carousel;
