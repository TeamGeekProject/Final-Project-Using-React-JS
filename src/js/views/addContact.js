// import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";

import "../../styles/todo.css";

export const FormContact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 className="Title text-center">Create Contact</h1>

      {/* <div className="conatiner-flex text-center ms-3">
        <div className="Task text-center ">
          <div className="row  justify-content-center">
            <div className="col-md-6 col-8">
              <form>
                <input
                  className="text-center form-control"
                  placeholder="Type in the Name Here"
                  type="text"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      actions.addTodoListItem(e.target.value);
                    }
                  }}
                  //   value={input}
                ></input>
              </form>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-8">
              <ul className="list-group ">
                {store.todoListItems.map((item, index) => (
                  <li className="list-group-item rounded" key={index}>
                    <span className="float-start items-style">{item}</span>

                    <span
                      className="float-end text-danger"
                      onClick={() => {
                        actions.deleteTodoListItem(index);
                      }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </span>
                  </li>
                ))}

                <div className="itemFilter rounded">
                  <h2>{store.todoListItems.length} Contacts in your List</h2>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form class="row g-3 ">
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Full Name"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Email
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Email"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="some@address.com "
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Phone
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="(999) 999-9999"
              />
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign in
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
