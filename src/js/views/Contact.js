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
    <>
      <h1>Archived Contacts</h1>

      <div className="jumbotron">
        <h1 className="display-4">
          <ul className="list-group ">
            {store.todoListItems.map((item, index) => (
              <li className="list-group-item rounded" key={index}>
                <span className="float-start items-style">{item}</span>
                <span className="float-end text-danger"
                      onClick={() => {actions.deleteTodoListItem(index);
                      }}>
                      {" "}
                      <h1 className="x" >X</h1>
                      {/* <FontAwesomeIcon icon={faXmarksLines}></FontAwesomeIcon> */}
                    </span>
              

                <hr className="my-4" />
              </li>
            ))}
          </ul>
        </h1>
      </div>
    </>
  );
};
