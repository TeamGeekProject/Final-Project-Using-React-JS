// import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";

import "../../styles/todo.css";

export const EditContact = () => {
  const { contactID, index } = useParams();
  const { store, actions } = useContext(Context);
  const [sent, setSent] = useState(false); // this is the state that will be used to show the success message
  const [input, setInput] = useState({
    full_name: "",
    email: "",
    address: "",
    phone: "",
  });

  return (
    <div className="container">
      <h1 className="Title text-center">Edit Contact</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="row g-3 ">
            <div className="col-12">
              <label className="form-label">Full Name</label>
              <input
                onChange={(e) =>
                  setInput({ ...input, full_name: e.target.value })
                }
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Full Name"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input
                type="text"
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                className="form-control"
                id="inputAddress"
                placeholder="Email"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                onChange={(e) =>
                  setInput({ ...input, address: e.target.value })
                }
                className="form-control"
                id="inputAddress"
                placeholder="some@address.com "
              />
            </div>
            <div className="col-12">
              <label className="form-label">Phone</label>
              <input
                type="text"
                onChange={(e) => setInput({ ...input, phone: e.target.value })}
                className="form-control"
                id="inputAddress"
                placeholder="(999) 999-9999"
              />
            </div>

            {sent &&
              (store.formMessageSuccess != "" ? (
                <div className="alert alert-success" role="alert">
                  {store.formMessageSuccess}
                </div>
              ) : null)}
            {sent &&
              (store.formMessageError != "" ? (
                <div className="alert alert-danger" role="alert">
                  {store.formMessageError}
                </div>
              ) : null)}

            <div className="col-12">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  actions.updateContact(input, contactID, index);
                  setSent(true);
                }}
                className="btn btn-primary"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>

      <br />
      <div>
        <Link to="/home">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
      <br />
    </div>
  );
};
