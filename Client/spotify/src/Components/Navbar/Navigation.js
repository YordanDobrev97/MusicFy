import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const uid = localStorage.getItem("uid");

const Navigation = (props) => {
  const isLogged = uid || props.loggedUser;

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

        {isLogged ? (
          <React.Fragment>
            <Link to="/profile" className="nav-item nav-link text-white">
              Profile
            </Link>
            <Link to="/logout" className="nav-item nav-link text-white">
              Logout
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/login" className="nav-item nav-link text-white">
              Login
            </Link>

            <Link to="/register" className="nav-item nav-link text-white">
              Register
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Navigation;
