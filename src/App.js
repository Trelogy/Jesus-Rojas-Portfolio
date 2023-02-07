import React, {Fragment} from "react";
import NavigationBar from "./components/Shared/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Shared/Footer";


function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Header />
      <Features />
      <Portfolio />
      <About />
      <Footer />
    </Fragment>
  );
}

export default App;
