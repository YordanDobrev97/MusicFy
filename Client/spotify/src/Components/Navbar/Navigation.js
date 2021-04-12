import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/" className="nav-item nav-link active text-white">
          Home <span class="sr-only">(current)</span>
        </Link>
        <Link to="/artists" className="nav-item nav-link text-white">
          Artists
        </Link>
        <Link to="/songs" className="nav-item nav-link text-white">
          Songs
        </Link>

        <Link to="/login" className="nav-item nav-link text-white">
          Login
        </Link>

        <Link to="/register" className="nav-item nav-link text-white">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
