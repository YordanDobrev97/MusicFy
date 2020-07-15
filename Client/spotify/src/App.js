import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header/Navigation';
import SideBarComponent from './Components/Header/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
      return (
        <div className="App">
            <Header />
            <SideBarComponent />
        </div>
      )
    }
}

export default App;
