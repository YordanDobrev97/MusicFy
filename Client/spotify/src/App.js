import React from "react";
import "./App.css";
import Header from './Header/Navigation';
import SideBar from './Header/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header />
        <SideBar />
    </div>
  );
}

export default App;
