import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/index";
import Home from "./Components/Home/index";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
