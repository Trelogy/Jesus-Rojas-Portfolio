import React, { Fragment, useState } from "react";
import NavigationBar from "./components/Shared/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioContentOne from "./components/Portfolio/PortfolioContentOne";
import PortfolioContentTwo from "./components/Portfolio/PortfolioContentTwo";
import Contact from "./components/Contact";
import Footer from "./components/Shared/Footer";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showMoreHandler = () => {
    setShowMore(true);
  };

  const hideMoreHandler = () => {
    setShowMore(false);
  };

  const showModalOneHandler = () => {
    setShowModal(true);
  };

  const hideModalOneHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {showModal && <PortfolioContentOne onHideModal={hideModalOneHandler} />}
      {showMore && <PortfolioContentTwo onHideMore={hideMoreHandler} />}
      <NavigationBar />
      <Header />
      <Features />
      <Portfolio
        onShowModal={showModalOneHandler}
        onShowMore={showMoreHandler}
      />
      <div className="cover-container-white">
        <Contact />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
