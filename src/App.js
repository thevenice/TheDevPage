import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/landingPage/Index.js";
// import Navbar from "./components/layout/navbar/Index";
// import Footer from "./components/layout/footer/Index";

class App extends Component {
  render() {
    return (
      <div className="WrapperCSS">
        <div>{}</div>
        <LandingPage />
        <div>{}</div>
      </div>
    );
  }
}

export default App;
