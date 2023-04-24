import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { faXmark } from "@fortawesome/react-fontawesome";
import "../../styles/todo.css";
// import { faXmarksLines } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1>Archived Contacts</h1>
      {store.contacts.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="card-body">
              <h5 className="card-title">{item.full_name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
              <p className="card-text">{item.address}</p>
              <p className="card-text">{item.phone}</p>
              <Link to={"/edit/" + item.id}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => actions.deleteContact(item.id, index)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
