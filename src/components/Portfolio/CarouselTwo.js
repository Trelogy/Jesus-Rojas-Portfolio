import React, { Fragment, useState } from "react";

import Carousel from "../UI/Carousel";

import "./Portfolio.css";
import sparkImage from "../../assets/Spark.PNG";
import imgLogin from "../../assets/Login.png";
import imgCategories from "../../assets/Categories.png";
import imgCoins from "../../assets/Coins.png";
import imgAnswers from "../../assets/Answers.png";
import imgHistory from "../../assets/History.png";
import imgShare from "../../assets/Share.png";

const CarouselTwo = (props) => {
  const carouselTwoPic = [
    <img
      className="carousel-pics d-block w-100"
      src={imgLogin}
      alt="login with google page"
    />,
    <img
      className="carousel-pics d-block w-100"
      src={imgCategories}
      alt="categories page"
    />,
    <img
      className="carousel-pics d-block w-100"
      src={imgCoins}
      alt="coins page"
    />,
    <img
      className="carousel-pics d-block w-100"
      src={imgAnswers}
      alt="answers page"
    />,
    <img
      className="carousel-pics d-block w-100"
      src={imgHistory}
      alt="history of your answers"
    />,
    <img
      className="carousel-pics d-block w-100"
      src={imgShare}
      alt="share your answer"
    />,
  ];

  const [carouselTwo, setCarouselTwo] = useState(false);

  const carouselTwoHandler = () => {
    setCarouselTwo(true);
  };

  const hideCarouselTwoHandler = () => {
    setCarouselTwo(false);
  };

  return (
    <Fragment>
      {carouselTwo && (
        <Carousel
          onShowPics={carouselTwoPic}
          onHideC={hideCarouselTwoHandler}
        />
      )}
      <button className="btn carousel-button" onClick={carouselTwoHandler}>
        <img
          src={sparkImage}
          className="d-block mx-lg-auto img-fluid shadow"
          alt="Spark website"
          width="700"
          height="500"
        />
      </button>
    </Fragment>
  );
};

export default CarouselTwo;
