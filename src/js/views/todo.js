// import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";

import "../../styles/todo.css";

export const Todo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 className="Title text-center">Todo List</h1>

      <div className="conatiner-flex text-center ms-3">
        <div className="Task text-center ">
          <div className="row  justify-content-center">
            <div className="col-md-6 col-8">
              <form>
                <input
                  className="text-center form-control"
                  placeholder="No tasks, add a task!"
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
                  <h2>{store.todoListItems.length} item/s left...</h2>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <br/>
    <div><Link to="/home">
    <button className="btn btn-primary">Back home</button>
  </Link></div>
  <br/>
  </div>
  );
};

