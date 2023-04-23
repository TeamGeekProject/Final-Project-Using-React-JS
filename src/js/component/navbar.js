import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link className="navbar-brand" to="/home">
        <i class="fa-solid fa-house"></i>🏠{" "}
        <span className="navbar-brand mb-0 h1">Home</span>
      </Link>
      <div className="ml-auto">
        <Link to="/add">
          <button className="btn btn-primary me-2">Add a Contact</button>
        </Link>
      </div>
    </nav>
  );
};
