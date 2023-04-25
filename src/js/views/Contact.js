import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { faXmark } from "@fortawesome/react-fontawesome";
import "../../styles/todo.css";
// import { faXmarksLines } from "@fortawesome/free-solid-svg-icons";

import { Card } from "../component/card";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1 className="mb-3">Archived Contacts</h1>
      {store.contacts.map((item, index) => {
        return (
          // <div key={index} className="card">
          //   <div className="row">
          //     <div className="col-4 d-flex  justify-content-center ">
          //       <img
          //         src="https://avatars.githubusercontent.com/u/128603767?s=400&u=4889c435b45beda27f7e669e0864d152aa4f5965&v=4"
          //         className="  rounded-circle h-75 my-auto "
          //         alt="agenda picture"
          //       />
          //     </div>

          //     <div className="col-4 my-auto">
          //       <h5 className="card-title mb-3">{item.full_name}</h5>
          //       <div className="row ">
          //         <div className="col  d-flex flex-row justify-content-center">
          //           <i className="fa-solid fa-envelope mx-2"></i>
          //           <h6 className="card-subtitle mb-2 text-muted">
          //             {item.email}
          //           </h6>
          //         </div>
          //       </div>
          //       <div className="row ">
          //         <div className="col  d-flex flex-row justify-content-center">
          //           <i className="fa-solid fa-location-dot mx-2"></i>
          //           <h6 className="card-subtitle mb-2 text-muted">
          //             {item.address}
          //           </h6>
          //         </div>
          //       </div>
          //       <div className="row ">
          //         <div className="col  d-flex flex-row justify-content-center">
          //           <i className="fa-solid fa-phone mx-2"></i>
          //           <h6 className="card-subtitle mb-2 text-muted">
          //             {item.phone}
          //           </h6>
          //         </div>
          //       </div>
          //     </div>
          //     <div className="col-4 my-auto  ">
          //       <Link to={"/edit/" + item.id + "/" + index}>
          //         <i className="fa fa-pencil fa-2x " aria-hidden="true"></i>
          //       </Link>
          //       <i
          //         className="fa-solid fa-trash text-danger fa-2x mx-4"
          //         onClick={() => actions.deleteContact(item.id, index)}
          //       ></i>
          //     </div>
          //   </div>
          // </div>
          <Card key={index} index={index} item={item} actions={actions} />
        );
      })}
    </div>
  );
};
