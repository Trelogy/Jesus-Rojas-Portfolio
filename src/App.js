import React, {Fragment} from "react";
import NavigationBar from "./components/Shared/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Shared/Footer";

function App() {
  
  return (
    <Fragment>
      <NavigationBar />
      <Header />
      <Features />
      <Portfolio />
      <div className="cover-container-white">
      <Contact />
      <Footer />
      </div> 
    </Fragment>
  );
}

export default App;
