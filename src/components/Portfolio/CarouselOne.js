import React, { Fragment, useState } from "react";

import Carousel from "../UI/Carousel";

import "./Portfolio.css";
import shikhmanImage from "../../assets/Shikhman.PNG";
import imgWorks from "../../assets/Works.PNG";
import imgEditWork from "../../assets/EditWork.PNG";
import imgCollections from "../../assets/Collections.PNG";
import imgEditCollection from "../../assets/EditCollection.PNG";
import imgEditCollectionFolder from "../../assets/EditFolder.PNG";
import imgSocialLibrary from "../../assets/SocialLibrary.PNG";

const CarouselOne = (props) => {
  const carouselOnePic = [
    <img
      className="carousel-pics d-block w-100"
      src={imgWorks}
      alt="works gallery"
    />,
    <img
      className="carousel-pics d-block w-100"
      src={imgEditWork}
      alt="edit work"
    />,
    <img
      className="carousel-pics d-block w-100"
      src={imgCollections}
      alt="collections gallery"
    />,
    <img
      className="carousel-pics d-block w-100"
      src={imgEditCollection}
      alt="edit collection"
    />,
    <img
      className="carousel-pics d-block w-100"
      src={imgEditCollectionFolder}
      alt="edit collection Folder"
    />,
    <img
      className="carousel-pics d-block w-100"
      src={imgSocialLibrary}
      alt="social library"
    />,
  ];

  const [carouselOne, setCarouselOne] = useState(false);

  const carouselOneHandler = () => {
    setCarouselOne(true);
  };

  const hideCarouselOneHandler = () => {
    setCarouselOne(false);
  };

  return (
    <Fragment>
      {carouselOne && (
        <Carousel
          onShowPics={carouselOnePic}
          onHideC={hideCarouselOneHandler}
        />
      )}
      <button className="btn carousel-button" onClick={carouselOneHandler}>
        <img
          src={shikhmanImage}
          className="d-block mx-lg-auto img-fluid shadow"
          alt="Shikhman website"
          width="700"
          height="500"
        />
      </button>
    </Fragment>
  );
};

export default CarouselOne;
