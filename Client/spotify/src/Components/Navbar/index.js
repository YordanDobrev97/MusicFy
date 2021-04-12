import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "../Home/index";
import Login from "../Login/index";
import Player from "../Player/index";
import Navigation from "./Navigation";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <h1 class="navbar-brand text-white">MusicFy</h1>
      <ToggleButton />
      <Navigation />
    </nav>
  );
};

export default Navbar;
