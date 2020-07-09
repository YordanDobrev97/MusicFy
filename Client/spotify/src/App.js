import React from "react";
import "./App.css";
import Header from './Header/Navigation';
import SideBarComponent from './Header/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Header />
        <SideBarComponent />
    </div>
  );
}

export default App;
