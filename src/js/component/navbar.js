import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link className="navbar-brand mx-3" to="/home">
        🏠 <span className="navbar-brand mb-0 h1 itemFilterHome ">Home</span>
      </Link>
      <div className="ml-auto">
        <Link to="/add">
          <button className="btn btn-primary mx-3 itemFilter">
            Add a Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};
