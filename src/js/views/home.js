import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/todo.css";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron">
      {/* <h1 className="display-4">
        3rd PAGE ---- This will show the demo element: {store.demo[params.theid].title}
      </h1>

      <hr className="my-4" /> */}
      <h1>Team 4 Geeks</h1>
      <br />
      <div>
        <Link to="/contact">
          <span
            className="btn btn-primary btn-lg itemFilter"
            href="#"
            role="button"
          >
            View your Contacts
          </span>
        </Link>
      </div>
      <br />
      <div>
        <Link to="/add">
          <span
            className="btn btn-primary btn-lg itemFilter"
            href="#"
            role="button"
          >
            Add a contact
          </span>
        </Link>
      </div>
      <br />
      <div>
        <Link to="/who">
          <span
            className="btn btn-primary btn-lg itemFilter"
            href="#"
            role="button "
          >
            See who made this
          </span>
        </Link>
      </div>
    </div>
  );
};

Home.propTypes = {
  match: PropTypes.object,
};
