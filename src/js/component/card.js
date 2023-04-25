import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { index, item, actions } = props;

  return (
    <div key={index} className="card">
      <div className="row justify-content-center">
        <div className="col-3 d-flex  justify-content-center ">
          <img
            src="https://avatars.githubusercontent.com/u/128603767?s=400&u=4889c435b45beda27f7e669e0864d152aa4f5965&v=4"
            className="  rounded-circle h-75 my-auto "
            alt="agenda picture"
          />
        </div>

        <div className="col-3 my-auto justify-content-start">
          <h5 className="card-title mb-3 d-flex justify-content-start">
            {item.full_name}
          </h5>
          <div className="row justify-content-start">
            <div className="col-8  justify-content-start">
              <div className="col  d-flex flex-row  justify-content-start">
                <i className="fa-solid fa-envelope mx-2"></i>
                <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
              </div>
            </div>
            <div className="col-8">
              <div className="col  d-flex flex-row justify-content-start">
                <i className="fa-solid fa-location-dot mx-2"></i>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item.address}
                </h6>
              </div>
            </div>
            <div className="col-8 float-left">
              <div className="col  d-flex flex-row  justify-content-start">
                <i className="fa-solid fa-phone mx-2"></i>
                <h6 className="card-subtitle mb-2 text-muted">{item.phone}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 my-auto  ">
          <Link to={"/edit/" + item.id + "/" + index}>
            <i className="fa fa-pencil fa-2x " aria-hidden="true"></i>
          </Link>
          <i
            className="fa-solid fa-trash text-danger fa-2x mx-4"
            onClick={() => actions.deleteContact(item.id, index)}
          ></i>
        </div>
      </div>
    </div>
  );
};
