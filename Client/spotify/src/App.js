import React, { Component, useState, useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/index";
import Home from "./Components/Home/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login";
import Player from "./Components/Player/index";
import SongContext from "./SongContext";

const App = () => {
  const [song, setSong] = useState("");

  return (
    <div className="App">
      <SongContext.Provider value={setSong}>
        <Navbar />
        <Player link={song} />
        <Switch>
          <Route exact path="/" component={Home} linkSong={setSong} />
          <Route path="/login" component={Login} />
        </Switch>
      </SongContext.Provider>
    </div>
  );
};

export default App;
